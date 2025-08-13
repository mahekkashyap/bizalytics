import { Router } from 'express';
import { createUserProfile, getUserProfile } from '../controllers/usersController.js';

const router = Router();

router.post('/create', createUserProfile);
router.get('/:userId', getUserProfile);

export default router;