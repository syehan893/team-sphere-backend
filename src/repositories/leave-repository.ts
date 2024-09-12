import { supabase } from "../datasources/supabase-client";
import { Leave } from "../models/leave";

export class LeaveRepository {
  async createLeave(leaveRequest: Leave): Promise<number | null> {
    const { status, error } = await supabase
      .from("leave_requests")
      .insert(leaveRequest)
      .single();

    if (error) {
      console.error("Error creating leave request:", error.message || error);
      return null;
    }

    return status;
  }

  async getLeaveById(requestId: number): Promise<Leave | null> {
    const { data, error } = await supabase
      .from("leave_requests")
      .select("*")
      .eq("request_id", requestId)
      .single();

    if (error) {
      console.error("Error fetching leave request:", error.message || error);
      return null;
    }
    return data;
  }

  async getAllLeaves(): Promise<Leave[] | null> {
    const { data, error } = await supabase.from("leave_requests").select("*");

    if (error) {
      console.error(
        "Error fetching all leave requests:",
        error.message || error
      );
      return null;
    }
    return data;
  }

  async updateLeave(
    requestId: number,
    leaveRequest: Partial<Leave>
  ): Promise<Leave | null> {
    const { data, error } = await supabase
      .from("leave_requests")
      .update(leaveRequest)
      .eq("request_id", requestId)
      .single();

    if (error) {
      console.error("Error updating leave request:", error.message || error);
      return null;
    }
    return data;
  }

  async deleteLeave(requestId: number): Promise<boolean> {
    const { error } = await supabase
      .from("leave_requests")
      .delete()
      .eq("request_id", requestId);

    if (error) {
      console.error("Error deleting leave request:", error.message || error);
      return false;
    }
    return true;
  }
}
