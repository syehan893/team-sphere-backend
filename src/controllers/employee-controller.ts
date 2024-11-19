import { Request, Response } from 'express';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee-service';

const employeeService = new EmployeeService();

export const getEmployeeByEmail = async (req: Request, res: Response): Promise<void> => {
  const email = req.params.email as string;
  const employee = await employeeService.getEmployeeByEmail(email);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};


export const createEmployee = async (req: Request, res: Response): Promise<void> => {
  const employee: Employee = req.body;
  const result = await employeeService.createEmployee(employee);
  if (result === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating employee' });
  }
};

export const getEmployeeById = async (req: Request, res: Response): Promise<void> => {
  const employeeId = req.params.id;
  const employee = await employeeService.getEmployeeById(employeeId);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};

export const getAllEmployees = async (_req: Request, res: Response): Promise<void> => {
  const employees = await employeeService.getAllEmployees();
  if (employees) {
    res.json(employees);
  } else {
    res.status(404).json({ message: 'No employees found' });
  }
};

export const updateEmployee = async (req: Request, res: Response): Promise<void> => {
  const employeeId = req.params.id as string;
  const employee: Partial<Employee> = req.body;
  const result = await employeeService.updateEmployee(employeeId, employee);
  if (result === 204) {
    res.status(200).json('success');
  } else {
    res.status(400).json({ message: 'Error creating employee request' });
  }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<void> => {
  const employeeId = req.params.id;
  const success = await employeeService.deleteEmployee(employeeId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting employee' });
  }
};
