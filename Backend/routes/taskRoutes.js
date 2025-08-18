import {Router} from 'express'
const router=Router();
import { isAuthenticated , authorizeRoles} from '../middleware/authMiddleware.js'
import { createTask } from '../controller/taskController.js';

router.post('/create/:projectId/:TeamId/:AssignedId',isAuthenticated,authorizeRoles('Admin','Project Manager'),createTask)

export default router