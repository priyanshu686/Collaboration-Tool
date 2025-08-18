import Profile from '../model/userProfileModel.js';
import User from '../model/userModel.js';

export const createProfile=async(req,res)=>{
    try {
        const {bio, skills, socialLinks}=req.body;
        const existingProfile=await Profile.findOne({user: req.user._id});
        if(existingProfile){
            return res.status(400).json({message:"Profile already exists"})
        }
        const profile=await Profile.create({
            user:req.user._id,
            bio,
            skills,
            socialLinks
        })
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getMyProfile=async(req,res)=>{
    try {
        const profile=await Profile.findOne({user:req.user._id}).populate("user","name email role")
        if(!profile) return res.status(404).json({message:"Profile not found"});
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateProfile=async(req,res)=>{
    try {
        const profile=await Profile.findOneAndUpdate(
            {user: req.user._id},
            { $set: req.body},
            { new: true}
        )
        if(!profile) return res.status(404).json({message:"Profile not found"})
        res.status(201).json("Profile updated")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProfileByUserId = async(req,res)=>{
    try {
        const userId=req.params.id
        const profile=await Profile.findOne({user:userId}).populate("user","name email role");
        if(!profile) return res.status(404).json({message:"Profile not found"});
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
