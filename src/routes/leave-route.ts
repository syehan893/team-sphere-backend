import express from 'express';
import {
  createLeave,
  getLeaveById,
  getAllLeaves,
  updateLeave,
  deleteLeave,
  getLeavesByEmployeeId,
  getLeavesByManagerId
} from '../controllers/leave-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createLeave);
router.get('/:id', authenticate, getLeaveById);
router.get('/', authenticate, getAllLeaves);
router.put('/:id', authenticate, updateLeave);
router.delete('/:id', authenticate, deleteLeave);
router.get('/employee/:employeeId', authenticate, getLeavesByEmployeeId);
router.get('/manager/:managerId', authenticate, getLeavesByManagerId);

export default router;
