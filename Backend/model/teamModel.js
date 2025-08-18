import mongoose from "mongoose";
import User from "../model/userModel.js"
import Project from "../model/projectModel.js"


const teamSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        }
    ],
    projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Project
    }
  ]
},{timestamps:true})
export default mongoose.model('Team',teamSchema);
