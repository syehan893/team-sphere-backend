import { Employee } from "../models/employee";
import { Leave } from "../models/leave";
import { LeaveRepository } from "../repositories/leave-repository";

const leaveRequestRepository = new LeaveRepository();

export class LeaveService {
  
  async getLeavesByEmployeeId(employeeId: string): Promise<Leave[] | null> {
    return await leaveRequestRepository.getLeavesByEmployeeId(employeeId);
  }

  async getLeavesByManagerId(managerId: string): Promise<(Leave & { employee: Employee })[] | null> {
    return await leaveRequestRepository.getLeavesByManagerId(managerId);
  }
  async createLeave(leaveRequest: Leave): Promise<number | null> {
    return await leaveRequestRepository.createLeave(leaveRequest);
  }

  async getLeaveById(requestId: number): Promise<Leave | null> {
    return await leaveRequestRepository.getLeaveById(requestId);
  }

  async getAllLeaves(): Promise<Leave[] | null> {
    return await leaveRequestRepository.getAllLeaves();
  }

  async updateLeave(requestId: number, leaveRequest: Partial<Leave>): Promise<number | null> {
    return await leaveRequestRepository.updateLeave(requestId, leaveRequest);
  }

  async deleteLeave(requestId: number): Promise<boolean> {
    return await leaveRequestRepository.deleteLeave(requestId);
  }
}
