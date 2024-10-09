import express from 'express';
import {
  createReimbursement,
  getReimbursementById,
  getAllReimbursements,
  updateReimbursement,
  deleteReimbursement,
  getReimbursementsByEmployeeId,
  getReimbursementsByManagerId
} from '../controllers/reimbursement-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createReimbursement);
router.get('/:id', authenticate, getReimbursementById);
router.get('/', authenticate, getAllReimbursements);
router.put('/:id', authenticate, updateReimbursement);
router.delete('/:id', authenticate, deleteReimbursement);
router.get('/employee/:employeeId', authenticate, getReimbursementsByEmployeeId);
router.get('/manager/:managerId', authenticate, getReimbursementsByManagerId);

export default router;
