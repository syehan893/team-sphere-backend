export class Task {
  task_id: number;
  title: string;
  description?: string;
  assigned_by: string;
  assigned_to: string;
  due_date?: Date;
  priority: string;
  status: string;
  completion_date?: Date;
  comments?: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    task_id: number,
    title: string,
    assigned_by: string,
    assigned_to: string,
    priority: string,
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    status: string = "Not Started",
    description?: string,
    due_date?: Date,
    completion_date?: Date,
    comments?: string
  ) {
    this.task_id = task_id;
    this.title = title;
    this.description = description;
    this.assigned_by = assigned_by;
    this.assigned_to = assigned_to;
    this.due_date = due_date;
    this.priority = priority;
    this.status = status;
    this.completion_date = completion_date;
    this.comments = comments;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
