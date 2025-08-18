// import mongoose from 'mongoose';
import { Schema , model } from 'mongoose';
import user from '../model/userModel.js';
// import Project from '../model/projectModel.js'

const TaskSchema = Schema({
    TaskName:{
        type:String,
        required:true
    },
    TaskDescription:{
        type:String,
        required:true
    },
    createdId:{
        type:Schema.Types.ObjectId,
        ref:user,
        required:true
    },
    AssignedId:{
        type:[
            {
                type:Schema.Types.ObjectId,
                ref:user,
            }
        ],
        required:true
    },
    projectId:{
        type:Schema.Types.ObjectId,
        ref:"Project" ,
        required:true
    },
    currentStatus:{
        type:String,
        enum:["Pending","Complete","Rejected"],
        default:"Pending"
    },
    techRequired:{
        type:[String],
        required:true
    },

},{
    timestamps:true
})

export default model('Task',TaskSchema);
