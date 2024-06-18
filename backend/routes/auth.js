const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const Task = require('../models/task');

// Middleware to parse JSON request bodies
router.use(express.json());

// Sign-in
router.post("/sign-in", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (username.length < 3) {
      return res.status(400).json({ message: "Username must be at least 3 characters" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashpass = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashpass,
    });

    await newUser.save();
    return res.status(200).json({ message: "Sign-in Successful" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Log-in
router.post("/log-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({ message: "Username or Password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: existingUser._id, username: existingUser.username },
      "tcmTM",
      { expiresIn: "2d" }
    );

    return res.status(200).json({ id: existingUser._id, token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// Task creation
router.post("/create-task", async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;

    if (!title || !desc) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newTask = new Task({ title, desc });
    const savedTask = await newTask.save();
    const taskId = savedTask._id;

    await User.findByIdAndUpdate(id, { $push: { tasks: taskId } });
    res.status(200).json({ message: "Task Created" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
