const express = require("express");
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();
require("./conn/connection");
const cors = require("cors");
const UserAPI = require("./routes/User");
const TaskAPI = require("./routes/Task");
// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use(express.json())


app.use("/api/v1",UserAPI);
app.use("/api/v2",TaskAPI);



app.use("/",(req,res)=>{
    res.send("Hello World");
});

const PORT = 1000;
app.listen(PORT,()=>{
console.log("Server started");
})