import mongoose from "mongoose";
import Team from "../model/teamModel.js"
// import Task from "../model/taskModel.js"
import user from "../model/userModel.js"


const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type:String
  },
  createrId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:user
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Team
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task"
    }
  ]
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);