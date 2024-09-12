import { supabase } from "../datasources/supabase-client";
import { Department } from "../models/department";

export class DepartmentRepository {
  async createDepartment(department: Department): Promise<number | null> {
    const { status, error } = await supabase
      .from("department")
      .insert(department)
      .single();

    if (error) {
      console.error("Error creating department:", error.message || error);
      return null;
    }

    return status;
  }

  async getDepartmentById(departmentId: string): Promise<Department | null> {
    const { data, error } = await supabase
      .from("department")
      .select("*")
      .eq("departement_id", departmentId)
      .single();

    if (error) {
      console.error("Error fetching department:", error.message || error);
      return null;
    }
    return data;
  }

  async getAllDepartments(): Promise<Department[] | null> {
    const { data, error } = await supabase.from("department").select("*");

    if (error) {
      console.error("Error fetching all departments:", error.message || error);
      return null;
    }
    return data;
  }

  async updateDepartment(
    departmentId: string,
    department: Partial<Department>
  ): Promise<Department | null> {
    const { data, error } = await supabase
      .from("department")
      .update(department)
      .eq("departement_id", departmentId)
      .single();

    if (error) {
      console.error("Error updating department:", error.message || error);
      return null;
    }
    return data;
  }

  async deleteDepartment(departmentId: string): Promise<boolean> {
    const { error } = await supabase
      .from("department")
      .delete()
      .eq("departement_id", departmentId);

    if (error) {
      console.error("Error deleting department:", error.message || error);
      return false;
    }
    return true;
  }
}
