import {Router} from "express";
const router=Router();
import { isAuthenticated,authorizeRoles } from '../middleware/authMiddleware.js';
import {createProject} from "../controller/projectController.js"

router.post('/create',isAuthenticated,createProject);

export default router;