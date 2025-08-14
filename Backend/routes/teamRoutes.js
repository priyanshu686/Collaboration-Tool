import express from 'express';
import { createTeam, getMyTeams } from '../controller/teamController.js';
import { isAuthenticated,authorizeRoles } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/',isAuthenticated,authorizeRoles('Admin','Project Manager'),createTeam);
router.get('/',isAuthenticated,getMyTeams)
export default router;