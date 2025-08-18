import task from'../model/taskModel.js';
import project from '../model/projectModel.js'
import team from '../model/teamModel.js'

export const createTask = async(req,res)=>{
    const {TaskName,TaskDescription,techRequired} = req.body
    const {projectId,TeamId,AssignedId} = req.params
    const id = req.user._id;
    if(!TaskName||!TaskDescription||!techRequired){
        return res.status(404).json({
            message:"Please Provide all data"
        })
    }
    try{
        const checkproject = await project.findOne({_id:projectId});
        if(!checkproject){
            return res.status(404).json({
                message:"Project not found in your Database"
            })
        }  
        console.log(checkproject);
        if(checkproject.team != TeamId){
            return res.status(404).json({
                message:"This team is not Assigned to this project"
            })
        }
        const getteam = await team.findById(TeamId)
        let checkmember = "" ;
        for(let i=0;i<getteam.members.length;i++){
            if(getteam.members[i] == AssignedId){
                checkmember = getteam.members[i];
            }
        }
        if(checkmember.length == 0){
            return res.status(404).json({
                message:"You are not a Team Member"
            })
        }
        const newTask = await new task({
            TaskName,
            TaskDescription,
            createdId:id,
            AssignedId:checkmember,
            projectId:projectId,
            techRequired
        })
        await newTask.save();
        await project.findByIdAndUpdate(
            projectId,
            {$push: { tasks: newTask._id}}
        )
        return res.status(200).json({
            message:"Task Assigned"
        })
    }catch(err){
        return res.status(401).json({
            message:"Internal Server error",
            Error:err.message
        })
    }
}

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