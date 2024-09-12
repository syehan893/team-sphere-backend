import express from 'express';
import {
  createEmployeeRollCall,
  getEmployeeRollCallById,
  getAllEmployeeRollCalls,
  updateEmployeeRollCall,
  deleteEmployeeRollCall
} from '../controllers/roll-call-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createEmployeeRollCall);
router.get('/:id', authenticate, getEmployeeRollCallById);
router.get('/', authenticate, getAllEmployeeRollCalls); 
router.put('/:id', authenticate, updateEmployeeRollCall);
router.delete('/:id', authenticate, deleteEmployeeRollCall);

export default router;
