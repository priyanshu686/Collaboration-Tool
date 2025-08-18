import {Router} from "express";
const router=Router();
import { isAuthenticated,authorizeRoles } from '../middleware/authMiddleware.js';
import {createProject} from "../controller/projectController.js"

router.post('/create',isAuthenticated,createProject);
router.get("/projects/:teamId",isAuthenticated, listProjects);
router.delete("/projects/:projectId",isAuthenticated, authorizeRoles("Admin"), deleteProject);

export default router;