import project from '../model/projectModel.js'

export const createProject = async(req,res)=>{
    const{name,description,} = req.body;
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
        createrId:user._Id
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

