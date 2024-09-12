import { News } from "../models/news";
import { NewsRepository } from "../repositories/news-repository";

const companyNewsRepository = new NewsRepository();

export class NewsService {
  async createNews(companyNews: News): Promise<number | null> {
    return await companyNewsRepository.createNews(companyNews);
  }

  async getNewsById(newsId: number): Promise<News | null> {
    return await companyNewsRepository.getNewsById(newsId);
  }

  async getAllNews(): Promise<News[] | null> {
    return await companyNewsRepository.getAllNews();
  }

  async updateNews(newsId: number, companyNews: Partial<News>): Promise<News | null> {
    return await companyNewsRepository.updateNews(newsId, companyNews);
  }

  async deleteNews(newsId: number): Promise<boolean> {
    return await companyNewsRepository.deleteNews(newsId);
  }
}
