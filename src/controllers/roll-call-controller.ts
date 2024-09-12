import { Request, Response } from 'express';
import { EmployeeRollCall } from '../models/roll-call';
import { EmployeeRollCallService } from '../services/roll-call-service';

const employeeRollCallService = new EmployeeRollCallService();

export const createEmployeeRollCall = async (req: Request, res: Response): Promise<void> => {
  const employeeRollCall: EmployeeRollCall = req.body;
  const result = await employeeRollCallService.createEmployeeRollCall(employeeRollCall);
  if (result === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating employee roll call' });
  }
};

export const getEmployeeRollCallById = async (req: Request, res: Response): Promise<void> => {
  const rollCallId = parseInt(req.params.id);
  const employeeRollCall = await employeeRollCallService.getEmployeeRollCallById(rollCallId);
  if (employeeRollCall) {
    res.json(employeeRollCall);
  } else {
    res.status(404).json({ message: 'Employee roll call not found' });
  }
};

export const getAllEmployeeRollCalls = async (_req: Request, res: Response): Promise<void> => {
  const employeeRollCalls = await employeeRollCallService.getAllEmployeeRollCalls();
  if (employeeRollCalls) {
    res.json(employeeRollCalls);
  } else {
    res.status(404).json({ message: 'No employee roll calls found' });
  }
};

export const updateEmployeeRollCall = async (req: Request, res: Response): Promise<void> => {
  const rollCallId = parseInt(req.params.id);
  const employeeRollCall: Partial<EmployeeRollCall> = req.body;
  const updatedEmployeeRollCall = await employeeRollCallService.updateEmployeeRollCall(rollCallId, employeeRollCall);
  if (updatedEmployeeRollCall) {
    res.json(updatedEmployeeRollCall);
  } else {
    res.status(400).json({ message: 'Error updating employee roll call' });
  }
};

export const deleteEmployeeRollCall = async (req: Request, res: Response): Promise<void> => {
  const rollCallId = parseInt(req.params.id);
  const success = await employeeRollCallService.deleteEmployeeRollCall(rollCallId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting employee roll call' });
  }
};
