import { Request, Response } from 'express';
import { Leave } from '../models/leave';
import { LeaveService } from '../services/leave-service';

const leaveRequestService = new LeaveService();

export const createLeave = async (req: Request, res: Response): Promise<void> => {
  const leaveRequest: Leave = req.body;
  const result = await leaveRequestService.createLeave(leaveRequest);
  if (result === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating leave request' });
  }
};

export const getLeaveById = async (req: Request, res: Response): Promise<void> => {
  const requestId = parseInt(req.params.id);
  const leaveRequest = await leaveRequestService.getLeaveById(requestId);
  if (leaveRequest) {
    res.json(leaveRequest);
  } else {
    res.status(404).json({ message: 'Leave request not found' });
  }
};

export const getAllLeaves = async (_req: Request, res: Response): Promise<void> => {
  const leaveRequests = await leaveRequestService.getAllLeaves();
  if (leaveRequests) {
    res.json(leaveRequests);
  } else {
    res.status(404).json({ message: 'No leave requests found' });
  }
};

export const updateLeave = async (req: Request, res: Response): Promise<void> => {
  const requestId = parseInt(req.params.id);
  const leaveRequest: Partial<Leave> = req.body;
  const updatedLeave = await leaveRequestService.updateLeave(requestId, leaveRequest);
  if (updatedLeave) {
    res.json(updatedLeave);
  } else {
    res.status(400).json({ message: 'Error updating leave request' });
  }
};

export const deleteLeave = async (req: Request, res: Response): Promise<void> => {
  const requestId = parseInt(req.params.id);
  const success = await leaveRequestService.deleteLeave(requestId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting leave request' });
  }
};
