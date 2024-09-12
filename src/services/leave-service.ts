import { Leave } from "../models/leave";
import { LeaveRepository } from "../repositories/leave-repository";

const leaveRequestRepository = new LeaveRepository();

export class LeaveService {
  async createLeave(leaveRequest: Leave): Promise<number | null> {
    return await leaveRequestRepository.createLeave(leaveRequest);
  }

  async getLeaveById(requestId: number): Promise<Leave | null> {
    return await leaveRequestRepository.getLeaveById(requestId);
  }

  async getAllLeaves(): Promise<Leave[] | null> {
    return await leaveRequestRepository.getAllLeaves();
  }

  async updateLeave(requestId: number, leaveRequest: Partial<Leave>): Promise<Leave | null> {
    return await leaveRequestRepository.updateLeave(requestId, leaveRequest);
  }

  async deleteLeave(requestId: number): Promise<boolean> {
    return await leaveRequestRepository.deleteLeave(requestId);
  }
}
