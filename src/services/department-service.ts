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
    const departments = await departmentRepository.getAllDepartments();
    if (!departments || departments.length === 0) return null;

    const buildHierarchy = (departments: Department[]): Department[] => {
        const departmentMap = new Map<string, Department & { children: Department[] }>(
            departments.map(dept => [dept.department_id, { ...dept, children: [] }])
        );

        departments.forEach(dept => {
            if (dept.parent_department_id && departmentMap.has(dept.parent_department_id)) {
                const parent = departmentMap.get(dept.parent_department_id);
                if (parent) {
                    const childDept = departmentMap.get(dept.department_id);
                    if (childDept) {
                        parent.children.push(childDept);
                    }
                }
            }
        });

        return Array.from(departmentMap.values()).filter(dept => dept.level === 1);
    };

    const hierarchicalDepartments = buildHierarchy(departments);

    return hierarchicalDepartments;
}

  async updateDepartment(departmentId: string, department: Partial<Department>): Promise<Department | null> {
    return await departmentRepository.updateDepartment(departmentId, department);
  }

  async deleteDepartment(departmentId: string): Promise<boolean> {
    return await departmentRepository.deleteDepartment(departmentId);
  }
}
