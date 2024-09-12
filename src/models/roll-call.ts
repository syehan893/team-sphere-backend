export class EmployeeRollCall {
    roll_call_id: number;
    employee_id: string;
    date: Date;
    time_in?: Date;
    status: string;
    notes?: string;
    created_at: Date;
    updated_at: Date;
  
    constructor(
      roll_call_id: number,
      employee_id: string,
      date: Date,
      status: string,
      created_at: Date = new Date(),
      updated_at: Date = new Date(),
      time_in?: Date,
      notes?: string
    ) {
      this.roll_call_id = roll_call_id;
      this.employee_id = employee_id;
      this.date = date;
      this.time_in = time_in;
      this.status = status;
      this.notes = notes;
      this.created_at = created_at;
      this.updated_at = updated_at;
    }
  }