import bcrypt from "bcryptjs";
import User from "../model/userModel.js";
import passport from "passport";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedpassword,
      role,
    });
    console.log("new user: ", newUser);
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "Error registering user",
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  console.log("The authenticated user is, ", req.user);
  res.status(200).json({
    message: "User logged in",
    name: req.user.name,
  });
};

export const logout = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
};
