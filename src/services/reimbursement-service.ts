import { Employee } from "../models/employee";
import { Reimbursement } from "../models/reimbursement";
import { ReimbursementRepository } from "../repositories/reimbursement-repository";

const reimbursementRequestRepository = new ReimbursementRepository();

export class ReimbursementService {

  async getReimbursementsByEmployeeId(employeeId: string): Promise<Reimbursement[] | null> {
    return await reimbursementRequestRepository.getReimbursementsByEmployeeId(employeeId);
  }

  async getReimbursementsByManagerId(managerId: string): Promise<(Reimbursement & { employee: Employee })[] | null> {
    return await reimbursementRequestRepository.getReimbursementsByManagerId(managerId);
  }
  
  async createReimbursement(reimbursementRequest: Reimbursement): Promise<number | null> {
    return await reimbursementRequestRepository.createReimbursement(reimbursementRequest);
  }

  async getReimbursementById(requestId: number): Promise<Reimbursement | null> {
    return await reimbursementRequestRepository.getReimbursementById(requestId);
  }

  async getAllReimbursements(): Promise<Reimbursement[] | null> {
    return await reimbursementRequestRepository.getAllReimbursements();
  }

  async updateReimbursement(requestId: number, reimbursementRequest: Partial<Reimbursement>): Promise<number | null> {
    return await reimbursementRequestRepository.updateReimbursement(requestId, reimbursementRequest);
  }

  async deleteReimbursement(requestId: number): Promise<boolean> {
    return await reimbursementRequestRepository.deleteReimbursement(requestId);
  }
}
