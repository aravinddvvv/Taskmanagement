const mongoose = require("mongoose");
const conn = async ()=>{
    try{
        const response = await mongoose.connect
        (`${process.env.MONGODB_URI}`);
           
        if(response)
            {
                console.log("connected to db");
            }
           
    }catch (error){
        console.log("error in db connection");
    }
};
conn();