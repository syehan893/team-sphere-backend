import { Reimbursement } from "../models/reimbursement";
import { ReimbursementRepository } from "../repositories/reimbursement-repository";

const reimbursementRequestRepository = new ReimbursementRepository();

export class ReimbursementService {
  async createReimbursement(reimbursementRequest: Reimbursement): Promise<number | null> {
    return await reimbursementRequestRepository.createReimbursement(reimbursementRequest);
  }

  async getReimbursementById(requestId: number): Promise<Reimbursement | null> {
    return await reimbursementRequestRepository.getReimbursementById(requestId);
  }

  async getAllReimbursements(): Promise<Reimbursement[] | null> {
    return await reimbursementRequestRepository.getAllReimbursements();
  }

  async updateReimbursement(requestId: number, reimbursementRequest: Partial<Reimbursement>): Promise<Reimbursement | null> {
    return await reimbursementRequestRepository.updateReimbursement(requestId, reimbursementRequest);
  }

  async deleteReimbursement(requestId: number): Promise<boolean> {
    return await reimbursementRequestRepository.deleteReimbursement(requestId);
  }
}
