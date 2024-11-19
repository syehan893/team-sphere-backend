import { supabase } from '../datasources/supabase-client';
import { Employee } from '../models/employee';

export class EmployeeRepository {
  async getEmployeeByEmail(email: string): Promise<Employee | null> {
    const { data, error } = await supabase
      .from('employee')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      console.error(
        'Error fetching employee by email:',
        error.message || error,
      );
      return null;
    }
    return data;
  }

  async createEmployee(employee: Employee): Promise<number | null> {
    const { status, error } = await supabase
      .from('employee')
      .insert(employee)
      .single();

    if (error) {
      console.error('Error creating employee:', error.message || error);
      return null;
    }

    return status;
  }

  async getEmployeeById(employeeId: string): Promise<Employee | null> {
    const { data, error } = await supabase
      .from('employee')
      .select('*')
      .eq('employee_id', employeeId)
      .single();

    if (error) {
      console.error('Error fetching employee:', error.message || error);
      return null;
    }
    return data;
  }

  async getAllEmployees(): Promise<Employee[] | null> {
    const { data, error } = await supabase.from('employee').select('*');

    if (error) {
      console.error('Error fetching all employees:', error.message || error);
      return null;
    }
    return data;
  }

  async updateEmployee(
    employeeId: string,
    employee: Partial<Employee>,
  ): Promise<number | null> {
    const { status, error } = await supabase
      .from('employee')
      .update(employee)
      .eq('employee_id', employeeId)
      .single();

    if (error) {
      console.error('Error creating employee request:', error.message || error);
      return null;
    }

    return status;
  }

  async deleteEmployee(employeeId: string): Promise<boolean> {
    const { error } = await supabase
      .from('employee')
      .delete()
      .eq('employee_id', employeeId);

    if (error) {
      console.error('Error deleting employee:', error.message || error);
      return false;
    }
    return true;
  }
}
