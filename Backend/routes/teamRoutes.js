import express from 'express';
import { createTeam, getMyTeams, addMember } from '../controller/teamController.js';
import { isAuthenticated,authorizeRoles } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/',isAuthenticated,authorizeRoles('Admin','Project Manager'),createTeam);
router.get('/',isAuthenticated,getMyTeams)
router.post('/:id/add-member',isAuthenticated,authorizeRoles('Admin','Project Manager'), addMember);



export default router;