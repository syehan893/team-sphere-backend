import { supabase } from "../datasources/supabase-client";
import { Task } from "../models/task";

export class TaskRepository {
  async createTask(employeeTask: Task): Promise<number | null> {
    const { status, error } = await supabase
      .from("employee_task")
      .insert(employeeTask)
      .single();

    if (error) {
      console.error("Error creating employee task:", error.message || error);
      return null;
    }

    return status;
  }

  async getTaskById(taskId: number): Promise<Task | null> {
    const { data, error } = await supabase
      .from("employee_task")
      .select("*")
      .eq("task_id", taskId)
      .single();

    if (error) {
      console.error("Error fetching employee task:", error.message || error);
      return null;
    }
    return data;
  }

  async getAllTasks(): Promise<Task[] | null> {
    const { data, error } = await supabase.from("employee_task").select("*");

    if (error) {
      console.error(
        "Error fetching all employee tasks:",
        error.message || error
      );
      return null;
    }
    return data;
  }

  async updateTask(
    taskId: number,
    employeeTask: Partial<Task>
  ): Promise<Task | null> {
    const { data, error } = await supabase
      .from("employee_task")
      .update(employeeTask)
      .eq("task_id", taskId)
      .single();

    if (error) {
      console.error("Error updating employee task:", error.message || error);
      return null;
    }
    return data;
  }

  async deleteTask(taskId: number): Promise<boolean> {
    const { error } = await supabase
      .from("employee_task")
      .delete()
      .eq("task_id", taskId);

    if (error) {
      console.error("Error deleting employee task:", error.message || error);
      return false;
    }
    return true;
  }
}
