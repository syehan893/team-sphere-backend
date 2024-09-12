import { supabase } from "../datasources/supabase-client";
import { News } from "../models/news";

export class NewsRepository {
  async createNews(companyNews: News): Promise<number | null> {
    const { status, error } = await supabase
      .from("company_news")
      .insert(companyNews)
      .single();

    if (error) {
      console.error("Error creating company news:", error.message || error);
      return null;
    }

    return status;
  }

  async getNewsById(newsId: number): Promise<News | null> {
    const { data, error } = await supabase
      .from("company_news")
      .select("*")
      .eq("news_id", newsId)
      .single();

    if (error) {
      console.error("Error fetching company news:", error.message || error);
      return null;
    }
    return data;
  }

  async getAllNews(): Promise<News[] | null> {
    const { data, error } = await supabase.from("company_news").select("*");

    if (error) {
      console.error("Error fetching all company news:", error.message || error);
      return null;
    }
    return data;
  }

  async updateNews(
    newsId: number,
    companyNews: Partial<News>
  ): Promise<News | null> {
    const { data, error } = await supabase
      .from("company_news")
      .update(companyNews)
      .eq("news_id", newsId)
      .single();

    if (error) {
      console.error("Error updating company news:", error.message || error);
      return null;
    }
    return data as News;
  }

  async deleteNews(newsId: number): Promise<boolean> {
    const { error } = await supabase
      .from("company_news")
      .delete()
      .eq("news_id", newsId);

    if (error) {
      console.error("Error deleting company news:", error.message || error);
      return false;
    }
    return true;
  }
}
