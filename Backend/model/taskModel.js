// import mongoose from "mongoose";

// const taskSchema= new mongoose.Schema({
//     title: {type:String, required: true},
//     description: String,
//     status: {type: String, enum : ['To Do', 'In Progress', 'Completed'],default:'To Do'},
//     assignees: [{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
//     project: {type: mongoose.Schema.Types.ObjectId, ref:"Project", required: true}
// }, {timestamps: true});

// export default mongoose.model("Task", taskSchema);