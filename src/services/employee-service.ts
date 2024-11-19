import { Employee } from '../models/employee';
import { EmployeeRepository } from '../repositories/employee-repository';

const employeeRepository = new EmployeeRepository();

export class EmployeeService {
  async getEmployeeByEmail(email: string): Promise<Employee | null> {
    return await employeeRepository.getEmployeeByEmail(email);
  }
  async createEmployee(employee: Employee): Promise<number | null> {
    return await employeeRepository.createEmployee(employee);
  }

  async getEmployeeById(employeeId: string): Promise<Employee | null> {
    return await employeeRepository.getEmployeeById(employeeId);
  }

  async getAllEmployees(): Promise<Employee[] | null> {
    return await employeeRepository.getAllEmployees();
  }

  async updateEmployee(employeeId: string, employee: Partial<Employee>): Promise<number | null> {
    return await employeeRepository.updateEmployee(employeeId, employee);
  }

  async deleteEmployee(employeeId: string): Promise<boolean> {
    return await employeeRepository.deleteEmployee(employeeId);
  }
}
