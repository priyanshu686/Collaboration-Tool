import {Router} from 'express'
const router=Router();
import { isAuthenticated , authorizeRoles} from '../middleware/authMiddleware.js'
import { createTask } from '../controller/taskController.js';

router.post('/create/:projectId/:TeamId/:AssignedId',isAuthenticated,authorizeRoles('Admin','Project Manager'),createTask)
router.get("/tasks/manager/:projectId",isAuthenticated,authorizeRoles("project_manager"),listTasksManager);
router.get("/tasks/member/:projectId",isAuthenticated,listTasksMember);
router.delete("/tasks/:taskId",isAuthenticated,authorizeRoles("project_manager"), deleteTask);

export default router