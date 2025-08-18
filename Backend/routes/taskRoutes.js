import express from "express";
import {assignTask, listTasksManager, listTasksMember, deleteTask} from "../controller/taskController.js";

import {isAuthenticated, authorizeRoles} from "../middleware/authMiddleware.js";

const router= express.Router();

// router.post("/tasks",isAuthenticated, authorizeRoles("project_manager"), assignTask);
router.get("/tasks/manager/:projectId",isAuthenticated,authorizeRoles("project_manager"),listTasksManager);
router.get("/tasks/member/:projectId",isAuthenticated,listTasksMember);
router.delete("/tasks/:taskId",isAuthenticated,authorizeRoles("project_manager"), deleteTask);

export default router;