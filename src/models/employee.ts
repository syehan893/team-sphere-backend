export class Employee {
  employee_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  hire_date: Date;
  job_title: string;
  department_id?: string;
  manager_id: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(
    employee_id: string,
    first_name: string,
    last_name: string,
    email: string,
    hire_date: Date,
    job_title: string,
    manager_id: string,
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    phone_number?: string,
    department_id?: string,
  ) {
    this.employee_id = employee_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.hire_date = hire_date;
    this.job_title = job_title;
    this.department_id = department_id;
    this.manager_id = manager_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
