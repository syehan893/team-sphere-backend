import { EmployeeRollCall } from "../models/roll-call";
import { EmployeeRollCallRepository } from "../repositories/roll-call-repository";

const employeeRollCallRepository = new EmployeeRollCallRepository();

export class EmployeeRollCallService {
  async createEmployeeRollCall(employeeRollCall: EmployeeRollCall): Promise<number | null> {
    return await employeeRollCallRepository.createEmployeeRollCall(employeeRollCall);
  }

  async getEmployeeRollCallByEid(employeeId: String): Promise<EmployeeRollCall | null> {
    return await employeeRollCallRepository.getEmployeeRollCallByEid(employeeId);
  }

  async getAllEmployeeRollCalls(day?: string): Promise<any[] | null> {
    return await employeeRollCallRepository.getAllEmployeeRollCalls(day);
  }

  async updateEmployeeRollCall(rollCallId: number, employeeRollCall: Partial<EmployeeRollCall>): Promise<EmployeeRollCall | null> {
    return await employeeRollCallRepository.updateEmployeeRollCall(rollCallId, employeeRollCall);
  }

  async deleteEmployeeRollCall(rollCallId: number): Promise<boolean> {
    return await employeeRollCallRepository.deleteEmployeeRollCall(rollCallId);
  }
}
