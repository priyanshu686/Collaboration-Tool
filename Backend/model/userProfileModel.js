import mongoose, { trusted } from "mongoose";

const profileSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    bio:{
        type:String,
        maxLength:200,
        default:""
    },
    skills:{
        type:[String]
    },
    socialLinks:{
        github:{type:String,default:""},
        linkedin:{type:String,default:""}
    }
},{timestamps:true})

export default mongoose.model('Profile',profileSchema);