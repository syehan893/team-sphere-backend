import express from 'express';
import {
  createNews,
  getNewsById,
  getAllNews,
  updateNews,
  deleteNews
} from '../controllers/news-controller';
import { authenticate } from '../middleware/auth-middleware';

const router = express.Router();

router.post('/', authenticate, createNews);
router.get('/:id', authenticate, getNewsById);
router.get('/', authenticate, getAllNews);
router.put('/:id', authenticate, updateNews);
router.delete('/:id', authenticate, deleteNews);

export default router;
