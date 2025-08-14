import Team from "../model/teamModel.js";
import Project from "../model/projectModel.js";

export const createTeam=async(req,res)=>{
    try {
        const {name}=req.body;
        if(!name) return res.status(400).json({
            message:"Team name is required"
        })

        const team=await Team.create({
            name,
            creator:req.user._id,
            members:[req.user._id],
            projects:[]
        });

        res.status(201).json({ message: "Team created successfully", team });

    } catch (error) {
        es.status(500).json({ message: error.message });
    }
}

export const getMyTeams=async(req,res)=>{
    try{
        const teams=await Team.find({members: req.user._id})
        .populate("creator","name email role")
        .populate("projects")

        res.status(200).json({teams});
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}