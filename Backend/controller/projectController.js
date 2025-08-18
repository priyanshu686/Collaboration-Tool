import project from '../model/projectModel.js'

export const createProject = async(req,res)=>{
    const{name,description,team} = req.body;
    const user = req.user;
    if(!name || !description){
        return res.status(404).json({
            message:"Insuffcient data to  create Project"
        })
    }
   try{
     const newproject = await project.create({
        name,
        description,
        createrId:user._Id,
        team
    })
    await newproject.save();
    return res.status(200).json({
        message:"Project Created",
        Created_By: user.name
    })
    }
    catch(err){
        return res.status(401).json({
            message : "Internal Server Error",
            Error: err.message
        })
    }
  
}
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

