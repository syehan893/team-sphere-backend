import { Task } from "../models/task";
import { TaskRepository } from "../repositories/task-repository";

const employeeTaskRepository = new TaskRepository();

export class TaskService {
  async createTask(employeeTask: Task): Promise<number | null> {
    return await employeeTaskRepository.createTask(employeeTask);
  }

  async getTaskById(taskId: number): Promise<Task | null> {
    return await employeeTaskRepository.getTaskById(taskId);
  }

  async getAllTasks(): Promise<Task[] | null> {
    return await employeeTaskRepository.getAllTasks();
  }

  async updateTask(taskId: number, employeeTask: Partial<Task>): Promise<Task | null> {
    return await employeeTaskRepository.updateTask(taskId, employeeTask);
  }

  async deleteTask(taskId: number): Promise<boolean> {
    return await employeeTaskRepository.deleteTask(taskId);
  }
}
