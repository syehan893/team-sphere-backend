import express from 'express';
import {
  createLeave,
  getLeaveById,
  getAllLeaves,
  updateLeave,
  deleteLeave
} from '../controllers/leave-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createLeave);
router.get('/:id', authenticate, getLeaveById);
router.get('/', authenticate, getAllLeaves);
router.put('/:id', authenticate, updateLeave);
router.delete('/:id', authenticate, deleteLeave);

export default router;
