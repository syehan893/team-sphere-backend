import { Request, Response } from 'express';
import { News } from '../models/news';
import { NewsService } from '../services/news-service';

const companyNewsService = new NewsService();

export const createNews = async (req: Request, res: Response): Promise<void> => {
  const companyNews: News = req.body;
  const result = await companyNewsService.createNews(companyNews);
  if (result === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating company news' });
  }
};

export const getNewsById = async (req: Request, res: Response): Promise<void> => {
  const newsId = parseInt(req.params.id);
  const companyNews = await companyNewsService.getNewsById(newsId);
  if (companyNews) {
    res.json(companyNews);
  } else {
    res.status(404).json({ message: 'Company news not found' });
  }
};

export const getAllNews = async (_req: Request, res: Response): Promise<void> => {
  const companyNews = await companyNewsService.getAllNews();
  if (companyNews) {
    res.json(companyNews);
  } else {
    res.status(404).json({ message: 'No company news found' });
  }
};

export const updateNews = async (req: Request, res: Response): Promise<void> => {
  const newsId = parseInt(req.params.id);
  const companyNews: Partial<News> = req.body;
  const updatedNews = await companyNewsService.updateNews(newsId, companyNews);
  if (updatedNews) {
    res.json(updatedNews);
  } else {
    res.status(400).json({ message: 'Error updating company news' });
  }
};

export const deleteNews = async (req: Request, res: Response): Promise<void> => {
  const newsId = parseInt(req.params.id);
  const success = await companyNewsService.deleteNews(newsId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting company news' });
  }
};
