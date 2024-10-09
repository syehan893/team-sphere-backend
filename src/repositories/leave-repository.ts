import { supabase } from '../datasources/supabase-client';
import { Leave } from '../models/leave';

export class LeaveRepository {
  async getLeavesByEmployeeId(employeeId: string): Promise<Leave[] | null> {
    const { data, error } = await supabase
      .from('leave_request')
      .select('*')
      .eq('employee_id', employeeId);

    if (error) {
      console.error(
        'Error fetching leaves by employee ID:',
        error.message || error,
      );
      return null;
    }

    return data;
  }

  async getLeavesByManagerId(managerId: string): Promise<Leave[] | null> {
    const { data, error } = await supabase
      .from('leave_request')
      .select('*')
      .eq('manager_id', managerId);

    if (error) {
      console.error(
        'Error fetching leaves by manager ID:',
        error.message || error,
      );
      return null;
    }

    return data;
  }
  async createLeave(leaveRequest: Leave): Promise<number | null> {
    const { status, error } = await supabase
      .from('leave_request')
      .insert(leaveRequest)
      .single();

    if (error) {
      console.error('Error creating leave request:', error.message || error);
      return null;
    }

    return status;
  }

  async getLeaveById(requestId: number): Promise<Leave | null> {
    const { data, error } = await supabase
      .from('leave_request')
      .select('*')
      .eq('request_id', requestId)
      .single();

    if (error) {
      console.error('Error fetching leave request:', error.message || error);
      return null;
    }
    return data;
  }

  async getAllLeaves(): Promise<Leave[] | null> {
    const { data, error } = await supabase.from('leave_request').select('*');

    if (error) {
      console.error(
        'Error fetching all leave requests:',
        error.message || error,
      );
      return null;
    }
    return data;
  }

  async updateLeave(
    requestId: number,
    leaveRequest: Partial<Leave>,
  ): Promise<number | null> {
    const { status, error } = await supabase
      .from('leave_request')
      .update(leaveRequest)
      .eq('request_id', requestId)
      .single();

    if (error) {
      console.error('Error creating leave request:', error.message || error);
      return null;
    }

    return status;
  }

  async deleteLeave(requestId: number): Promise<boolean> {
    const { error } = await supabase
      .from('leave_request')
      .delete()
      .eq('request_id', requestId);

    if (error) {
      console.error('Error deleting leave request:', error.message || error);
      return false;
    }
    return true;
  }
}
