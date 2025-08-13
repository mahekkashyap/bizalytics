import { Router } from 'express';
import { createTransaction, getTransactionsForUser } from '../controllers/transactionsController.js';

const router = Router();

router.post('/create', createTransaction);
router.get('/:userId', getTransactionsForUser);

export default router;