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

  async getEmployeeRollCallById(
    rollCallId: number
  ): Promise<EmployeeRollCall | null> {
    const { data, error } = await supabase
      .from("employee_roll_call")
      .select("*")
      .eq("roll_call_id", rollCallId)
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

  async getAllEmployeeRollCalls(): Promise<EmployeeRollCall[] | null> {
    const { data, error } = await supabase
      .from("employee_roll_call")
      .select("*");

    if (error) {
      console.error(
        "Error fetching all employee roll calls:",
        error.message || error
      );
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
    return data;
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
