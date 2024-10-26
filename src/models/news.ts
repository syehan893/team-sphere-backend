export class News {
  news_id: number;
  title: string;
  content: string;
  author_id: string;
  publication_date: Date;
  category: string;
  importance: string;
  attachment_url?: string;
  is_published: boolean;
  created_at?: Date;
  updated_at?: Date;

  constructor(
    news_id: number,
    title: string,
    content: string,
    author_id: string,
    publication_date: Date,
    category: string,
    importance: string,
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    is_published: boolean = true,
    attachment_url?: string
  ) {
    this.news_id = news_id;
    this.title = title;
    this.content = content;
    this.author_id = author_id;
    this.publication_date = publication_date;
    this.category = category;
    this.importance = importance;
    this.attachment_url = attachment_url;
    this.is_published = is_published;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
