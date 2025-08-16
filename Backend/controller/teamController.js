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
        await team.save();
        res.status(201).json({ message: "Team created successfully", team });

    } catch (error) {
        res.status(500).json({ message: error.message });
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


export const addMember=async(req,res)=>{
    try {
        const {memberId}=req.body;
        const teamId=req.params.id;
        if (!memberId) {
            return res.status(400).json({ message: "Member ID is required" });
        }
        const team=await Team.findById(teamId);
        if(!team){
            return res.status(404).json({message:"Team not found"});
        }
        if(team.members.includes(memberId)){
            return res.status(400).json({message:"User is already a member of this team"})
        }
        team.members.push(memberId);
        await team.save();

        res.status(200).json({message:"Member added successfully",team});
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const removeMember=async(req,res)=>{
    try {
         const {id:teamId, memberId}=req.params;
    const team=await Team.findById(teamId);
    if(!team){
        return res.status(404).json({message:"Team not found"});
    }
    if(team.creator.toString() ==memberId){
        return res.status(404).json({message:"Cannot remove the team creator"})
    }
    if(!team.members.includes(memberId)){
        return res.status(404).json({message:"Member not found in the team"})
    }

    team.members=team.members.filter(id=> id.toString() !== memberId);
    await team.save();

    res.status(200).json({ message: "Member removed successfully", team });
    } catch (error) {
         res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const updateTeam=async(req,res)=>{
    try{
        const{id:teamId}=req.params;
        const{name,description}=req.body;

        const team=await findById(teamId);
        if(!team){
            return res.status(404).json({message:"Team not found"});
        }
        if(name) team.name=name;
        if(description) team.description=description;

        await team.save();

        res.status(200).json({message:"Team updated", team});
    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// export const joinTeam=async(req,res)=>{
//     try {
//         const teamId=req.params.id;
//         const userId=req.user._id;

//         const team=await Team.findById(teamId);
//         if(!team){
//             return res.status(404).json({message:"Team not found"});
//         }
//         if(team.members.includes(userId)){
//             return res.status(400).json({message:"You are already a member of this team"});
//         }

//         team.members.push(userId);
//         await team.save();
//         res.status(200).json({message:"Joined the team successfully",team});
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }