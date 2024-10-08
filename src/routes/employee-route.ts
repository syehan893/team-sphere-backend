import express from 'express';
import {
  createEmployee,
  getEmployeeById,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployeeByEmail
} from '../controllers/employee-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.get('/by-email/:email', authenticate, getEmployeeByEmail);
router.post('/', authenticate, createEmployee);
router.get('/:id', authenticate, getEmployeeById);
router.get('/', authenticate, getAllEmployees); 
router.put('/:id', authenticate, updateEmployee);
router.delete('/:id', authenticate, deleteEmployee);

export default router;
