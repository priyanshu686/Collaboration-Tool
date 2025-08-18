import express from "express";
import {createProject, listProjects, deleteProject} from "../controller/projectController.js";
import {isAuthenticated, authorizeRoles}  from "../middleware/authMiddleware.js";

const router= express.Router();

// router.post("/projects", isAuthenticated, authorizeRoles("project_manager"), createProject);
router.get("/projects/:teamId",isAuthenticated, listProjects);
router.delete("/projects/:projectId",isAuthenticated, authorizeRoles("project_manager"), deleteProject);

export default router;