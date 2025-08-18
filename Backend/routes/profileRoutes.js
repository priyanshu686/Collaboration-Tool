import express from 'express';
import { createProfile, getMyProfile, updateProfile, getProfileByUserId } from '../controller/profileController.js';

import { isAuthenticated } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/', isAuthenticated, createProfile);
router.get('/me',isAuthenticated,getMyProfile);
router.put('/',isAuthenticated,updateProfile);
router.get('/:id',getProfileByUserId);

export default router;