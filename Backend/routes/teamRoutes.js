import express from 'express';
import { createTeam, getMyTeams, addMember, removeMember, updateTeam} from '../controller/teamController.js';
import { isAuthenticated,authorizeRoles } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/',isAuthenticated,authorizeRoles('Admin','Project Manager'),createTeam);
router.get('/',isAuthenticated,getMyTeams)

//need to test
router.post('/:id/add-member',isAuthenticated,authorizeRoles('Admin','Project Manager'), addMember);
router.delete('/:id/remove-member/:memberId', isAuthenticated, authorizeRoles('Admin', 'Project Manager'), removeMember);
router.put('/:id', isAuthenticated, authorizeRoles('Admin', 'Project Manager'), updateTeam);



export default router;