import { Request, Response } from 'express';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department-service';

const departmentService = new DepartmentService();

export const createDepartment = async (req: Request, res: Response): Promise<void> => {
  const department: Department = req.body;
  const result = await departmentService.createDepartment(department);
  if (result === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating department' });
  }
};

export const getDepartmentById = async (req: Request, res: Response): Promise<void> => {
  const departmentId = req.params.id;
  const department = await departmentService.getDepartmentById(departmentId);
  if (department) {
    res.json(department);
  } else {
    res.status(404).json({ message: 'Department not found' });
  }
};

export const getAllDepartments = async (_req: Request, res: Response): Promise<void> => {
  const departments = await departmentService.getAllDepartments();
  if (departments) {
    res.json(departments);
  } else {
    res.status(404).json({ message: 'No departments found' });
  }
};

export const updateDepartment = async (req: Request, res: Response): Promise<void> => {
  const departmentId = req.params.id;
  const department: Partial<Department> = req.body;
  const updatedDepartment = await departmentService.updateDepartment(departmentId, department);
  if (updatedDepartment) {
    res.json(updatedDepartment);
  } else {
    res.status(400).json({ message: 'Error updating department' });
  }
};

export const deleteDepartment = async (req: Request, res: Response): Promise<void> => {
  const departmentId = req.params.id;
  const success = await departmentService.deleteDepartment(departmentId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting department' });
  }
};
