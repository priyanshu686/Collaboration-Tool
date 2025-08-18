import Project from "../model/projectModel.js";
import Task from "../model/taskModel.js";

//Create a Project
// export const createProject= async (req,res)=>{
//     try{
//         const {name, description, team }=req.body;
//         const project= new Project({
//             name,
//             description,
//             team
//         });
//         await project.save();
//         res.status(201).json(project);
//     }catch (err){
//         res.status(400).json({error: err.message});
//     }
// };

//List all projects for a team
export const listProjects= async (req,res)=>{
    try{
        const{teamId}=req.params;
        const projects= await Project.find({ team:teamId}).populate('tasks');
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

//Delete a project by ID (also delete related tasks)
export const deleteProject= async (req,res)=>{
    try{
        const {projectId}= req.params;
        await Task.deleteMany ({ project:projectId});
        await Project.findByIdAndDelete(projectId);
        res.json({message: "Project and its tasks deleted."});
    }catch(err){
        res.status(500).json({error:err.message});
    }
};