import { Request, Response } from 'express';
import { Task } from '../models/task';
import { TaskService } from '../services/task-service';

const employeeTaskService = new TaskService();

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const employeeTask: Task = req.body;
  const result = await employeeTaskService.createTask(employeeTask);
  if (result === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating employee task' });
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id);
  const employeeTask = await employeeTaskService.getTaskById(taskId);
  if (employeeTask) {
    res.json(employeeTask);
  } else {
    res.status(404).json({ message: 'Employee task not found' });
  }
};

export const getAllTasks = async (_req: Request, res: Response): Promise<void> => {
  const employeeTasks = await employeeTaskService.getAllTasks();
  if (employeeTasks) {
    res.json(employeeTasks);
  } else {
    res.status(404).json({ message: 'No employee tasks found' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id);
  const employeeTask: Partial<Task> = req.body;
  const updatedTask = await employeeTaskService.updateTask(taskId, employeeTask);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(400).json({ message: 'Error updating employee task' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id);
  const success = await employeeTaskService.deleteTask(taskId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting employee task' });
  }
};
