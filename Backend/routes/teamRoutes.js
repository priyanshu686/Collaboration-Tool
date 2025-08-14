import express from 'express';
import { createTeam, getMyTeams, joinTeam } from '../controller/teamController.js';
import { isAuthenticated,authorizeRoles } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/',isAuthenticated,authorizeRoles('Admin','Project Manager'),createTeam);
router.get('/',isAuthenticated,getMyTeams)
router.post('/:id/join',isAuthenticated,joinTeam)

export default router;