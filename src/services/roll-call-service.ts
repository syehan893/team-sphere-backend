import { EmployeeRollCall } from "../models/roll-call";
import { EmployeeRollCallRepository } from "../repositories/roll-call-repository";

const employeeRollCallRepository = new EmployeeRollCallRepository();

export class EmployeeRollCallService {
  async createEmployeeRollCall(employeeRollCall: EmployeeRollCall): Promise<number | null> {
    return await employeeRollCallRepository.createEmployeeRollCall(employeeRollCall);
  }

  async getEmployeeRollCallById(rollCallId: number): Promise<EmployeeRollCall | null> {
    return await employeeRollCallRepository.getEmployeeRollCallById(rollCallId);
  }

  async getAllEmployeeRollCalls(): Promise<EmployeeRollCall[] | null> {
    return await employeeRollCallRepository.getAllEmployeeRollCalls();
  }

  async updateEmployeeRollCall(rollCallId: number, employeeRollCall: Partial<EmployeeRollCall>): Promise<EmployeeRollCall | null> {
    return await employeeRollCallRepository.updateEmployeeRollCall(rollCallId, employeeRollCall);
  }

  async deleteEmployeeRollCall(rollCallId: number): Promise<boolean> {
    return await employeeRollCallRepository.deleteEmployeeRollCall(rollCallId);
  }
}
