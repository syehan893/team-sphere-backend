import { Employee } from './employee';

export class Reimbursement {
  request_id: number;
  employee_id: string;
  request_date: Date;
  expense_date: Date;
  expense_type: string;
  amount: number;
  currency: string;
  description?: string;
  receipt_file_path?: string;
  status: string;
  manager_id: string;
  manager_comment?: string;
  created_at: Date;
  updated_at: Date;
  employee?: Employee;

  constructor(
    request_id: number,
    employee_id: string,
    request_date: Date,
    expense_date: Date,
    expense_type: string,
    amount: number,
    status: string,
    manager_id: string,
    created_at: Date = new Date(),
    updated_at: Date = new Date(),
    currency: string = 'IDR',
    description?: string,
    receipt_file_path?: string,
    manager_comment?: string,
    employee?: Employee,
  ) {
    this.request_id = request_id;
    this.employee_id = employee_id;
    this.request_date = request_date;
    this.expense_date = expense_date;
    this.expense_type = expense_type;
    this.amount = amount;
    this.currency = currency;
    this.description = description;
    this.receipt_file_path = receipt_file_path;
    this.status = status;
    this.manager_id = manager_id;
    this.manager_comment = manager_comment;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.employee = employee;
  }
}
