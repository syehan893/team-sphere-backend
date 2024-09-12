import express from 'express';
import {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask
} from '../controllers/task-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createTask);
router.get('/:id', authenticate, getTaskById);
router.get('/', authenticate, getAllTasks);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);

export default router;
