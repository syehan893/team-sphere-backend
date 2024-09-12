export class Department {
    d_id: number;
    department_id: string;
    department_name: string;
    department_code: string;
    level: number;
    parent_department_id?: string;
    manager_id?: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      d_id: number,
      department_id: string,
      department_name: string,
      department_code: string,
      level: number,
      created_at: Date = new Date(),
      updated_at: Date = new Date(),
      parent_department_id?: string,
      manager_id?: string,
      description?: string
    ) {
      this.d_id = d_id;
      this.department_id = department_id;
      this.department_name = department_name;
      this.department_code = department_code;
      this.level = level;
      this.parent_department_id = parent_department_id;
      this.manager_id = manager_id;
      this.description = description;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }
  
  