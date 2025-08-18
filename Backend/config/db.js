import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 
const dbconnect = async()=>{
    await mongoose.connect(process.env.Mongo_URL).then(()=>{
        console.log("Database Connected");
        
    }).catch((err)=>{
        console.log("Error: "+err.message);
        
    })
}

export default dbconnect;
