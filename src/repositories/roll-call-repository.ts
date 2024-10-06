import { supabase } from "../datasources/supabase-client";
import { EmployeeRollCall } from "../models/roll-call";

export class EmployeeRollCallRepository {
  async createEmployeeRollCall(
    employeeRollCall: EmployeeRollCall
  ): Promise<number | null> {
    const { status, error } = await supabase
      .from("employee_roll_call")
      .insert(employeeRollCall)
      .single();

    if (error) {
      console.error(
        "Error creating employee roll call:",
        error.message || error
      );
      return null;
    }

    return status;
  }

  async getEmployeeRollCallByEid(
    employeeId: String
  ): Promise<EmployeeRollCall | null> {
    const { data, error } = await supabase
      .from("employee_roll_call")
      .select("*")
      .eq("employee_id", employeeId)
      .single();

    if (error) {
      console.error(
        "Error fetching employee roll call:",
        error.message || error
      );
      return null;
    }
    return data;
  }

  async getAllEmployeeRollCalls(day?: string): Promise<any[] | null> {
    const query = supabase
      .from("employee_roll_call")
      .select(`
        roll_call_id,
        employee_id,
        date,
        time_in,
        status,
        notes,
        created_at,
        updated_at,
        employee:employee_id (
          employee_id,
          first_name,
          last_name,
          email,
          phone_number,
          hire_date,
          job_title,
          department_id,
          manager_id,
          created_at,
          updated_at
        )
      `);
  
    if (day) {
      query.eq("date", day);
    }
  
    const { data, error } = await query;
  
    if (error) {
      console.error("Error fetching employee roll calls:", error.message || error);
      return null;
    }
  
    return data;
  }  

  async updateEmployeeRollCall(
    rollCallId: number,
    employeeRollCall: Partial<EmployeeRollCall>
  ): Promise<EmployeeRollCall | null> {
    const { data, error } = await supabase
      .from("employee_roll_call")
      .update(employeeRollCall)
      .eq("roll_call_id", rollCallId)
      .single();

    if (error) {
      console.error(
        "Error updating employee roll call:",
        error.message || error
      );
      return null;
    }
    return data as EmployeeRollCall;
  }

  async deleteEmployeeRollCall(rollCallId: number): Promise<boolean> {
    const { error } = await supabase
      .from("employee_roll_call")
      .delete()
      .eq("roll_call_id", rollCallId);

    if (error) {
      console.error(
        "Error deleting employee roll call:",
        error.message || error
      );
      return false;
    }
    return true;
  }
}
