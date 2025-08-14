const mongoose = require('mongoose');
require('dotenv').config();
const dbconnect = async()=>{
    await mongoose.connect(process.env.Mongo_URL).then(()=>{
        console.log("Database Connected");
        
    }).catch((err)=>{
        console.log("Error: "+err.message);
        
    })
}

module.exports = dbconnect;