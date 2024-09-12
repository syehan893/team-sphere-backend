import express from 'express';
import {
  createDepartment,
  getDepartmentById,
  getAllDepartments,
  updateDepartment,
  deleteDepartment
} from '../controllers/department-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createDepartment);
router.get('/:id', authenticate, getDepartmentById);
router.get('/', authenticate, getAllDepartments);
router.put('/:id', authenticate, updateDepartment);
router.delete('/:id', authenticate, deleteDepartment);

export default router;
