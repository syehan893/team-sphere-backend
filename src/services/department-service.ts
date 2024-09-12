import { Department } from '../models/department';
import { DepartmentRepository } from '../repositories/department-repository';

const departmentRepository = new DepartmentRepository();

export class DepartmentService {
  async createDepartment(department: Department): Promise<number | null> {
    return await departmentRepository.createDepartment(department);
  }

  async getDepartmentById(departmentId: string): Promise<Department | null> {
    return await departmentRepository.getDepartmentById(departmentId);
  }

  async getAllDepartments(): Promise<Department[] | null> {
    return await departmentRepository.getAllDepartments();
  }

  async updateDepartment(departmentId: string, department: Partial<Department>): Promise<Department | null> {
    return await departmentRepository.updateDepartment(departmentId, department);
  }

  async deleteDepartment(departmentId: string): Promise<boolean> {
    return await departmentRepository.deleteDepartment(departmentId);
  }
}
