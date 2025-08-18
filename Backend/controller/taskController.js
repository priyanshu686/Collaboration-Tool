import Task from "../model/taskModel.js";

//Assign (create) a task in a project
// export const assignTask= async (req,res)=>{
//     try{
//         const {title, description, assignees, project}=req.body;
//         const task= new Task ({title, description, assignees, project});
//         await task.save();
//         res.json(201).json(task);
//     }catch (err){
//         res.status(400).json({error:err.message});
//     }
// };

//List all tasks in this project (projectManager's POV)
export const listTasksManager= async(req,res)=>{
    try{
        const {projectId}= req.params;
        const tasks= await Task.find({project:projectId}).populate("assignees","name email");
        res.json(tasks);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//List only assigned tasks for logged-in team member
export const listTasksMember= async (req,res)=>{
    try{
        const {projectId}=req.params;
        const userId= req.user._id;
        const tasks= await Task.find({project: projectId, assignees: userId});
        res.json(tasks);
    }catch (err){
        res.status(400).json({error:err.message});
    }
};

//Delete a task
export const deleteTask= async (req,res)=>{
    try{
        const {taskId}=req.params;
        await Task.findByIdAndDelete(taskId);
        res.json({message:"Task deleted."});
    }catch(err){
        res.status(500).json({error:err.message});
    }
};