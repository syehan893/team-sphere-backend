import { Employee } from './employee';

export class Leave {
  request_id: number;
  employee_id: string;
  leave_type: string;
  start_date: Date;
  end_date: Date;
  total_days: number;
  reason?: string;
  status: string;
  manager_id: string;
  manager_comment: string;
  created_at: Date;
  updated_at: Date;
  employee?: Employee;
  constructor(
    request_id: number,
    employee_id: string,
    leave_type: string,
    start_date: Date,
    end_date: Date,
    total_days: number,
    status: string,
    manager_id: string,
    manager_comment: string,
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    reason?: string,
    employee?: Employee,
  ) {
    this.request_id = request_id;
    this.employee_id = employee_id;
    this.leave_type = leave_type;
    this.start_date = start_date;
    this.end_date = end_date;
    this.total_days = total_days;
    this.reason = reason;
    this.status = status;
    this.manager_id = manager_id;
    this.manager_comment = manager_comment;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.employee = employee;
  }
}
