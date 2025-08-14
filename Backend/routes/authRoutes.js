
import { Router } from "express";
import { register,login,logout } from "../controller/authController.js";
import passport from "../config/passport.js";
const router=Router();

router.post('/register',register);
router.post('/login',passport.authenticate("local"),login);
router.get('/logout',logout);

export default router;