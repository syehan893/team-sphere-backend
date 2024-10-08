import { Request, Response } from 'express';
import { Reimbursement } from '../models/reimbursement';
import { ReimbursementService } from '../services/reimbursement-service';

const reimbursementRequestService = new ReimbursementService();

export const getReimbursementsByEmployeeId = async (req: Request, res: Response): Promise<void> => {
  const employeeId = req.params.employeeId;
  const reimbursements = await reimbursementRequestService.getReimbursementsByEmployeeId(employeeId);
  if (reimbursements) {
    res.json(reimbursements);
  } else {
    res.status(404).json({ message: 'No reimbursements found for this employee' });
  }
};

export const getReimbursementsByManagerId = async (req: Request, res: Response): Promise<void> => {
  const managerId = req.params.managerId;
  const reimbursements = await reimbursementRequestService.getReimbursementsByManagerId(managerId);
  if (reimbursements) {
    res.json(reimbursements);
  } else {
    res.status(404).json({ message: 'No reimbursements found for this manager' });
  }
};

export const createReimbursement = async (req: Request, res: Response): Promise<void> => {
  const reimbursementRequest: Reimbursement = req.body;
  const result = await reimbursementRequestService.createReimbursement(reimbursementRequest);
  if (result === 201) {
    res.status(200).json('success');
  } else {
    res.status(400).json({ message: 'Error creating reimbursement request' });
  }
};

export const getReimbursementById = async (req: Request, res: Response): Promise<void> => {
  const requestId = parseInt(req.params.id);
  const reimbursementRequest = await reimbursementRequestService.getReimbursementById(requestId);
  if (reimbursementRequest) {
    res.json(reimbursementRequest);
  } else {
    res.status(404).json({ message: 'Reimbursement request not found' });
  }
};

export const getAllReimbursements = async (_req: Request, res: Response): Promise<void> => {
  const reimbursementRequests = await reimbursementRequestService.getAllReimbursements();
  if (reimbursementRequests) {
    res.json(reimbursementRequests);
  } else {
    res.status(404).json({ message: 'No reimbursement requests found' });
  }
};

export const updateReimbursement = async (req: Request, res: Response): Promise<void> => {
  const requestId = parseInt(req.params.id);
  const reimbursementRequest: Partial<Reimbursement> = req.body;
  const result = await reimbursementRequestService.updateReimbursement(requestId, reimbursementRequest);
  if (result === 204) {
    res.status(200).json('success');
  } else {
    res.status(400).json({ message:  'Error updating reimbursement request' });
  }
};

export const deleteReimbursement = async (req: Request, res: Response): Promise<void> => {
  const requestId = parseInt(req.params.id);
  const success = await reimbursementRequestService.deleteReimbursement(requestId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting reimbursement request' });
  }
};
