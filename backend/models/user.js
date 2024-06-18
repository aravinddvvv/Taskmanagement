const mongoose = require("mongoose");
const userScema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    tasks: [{
        type: mongoose.Types.ObjectId,
        ref: "Task",
    }],
});




module.exports = mongoose.model("user",userScema)