import { supabase } from "../datasources/supabase-client";
import { Reimbursement } from "../models/reimbursement";

export class ReimbursementRepository {
  async createReimbursement(
    reimbursementRequest: Reimbursement
  ): Promise<number | null> {
    const { status, error } = await supabase
      .from("reimbursement_request")
      .insert(reimbursementRequest)
      .single();

    if (error) {
      console.error(
        "Error creating reimbursement request:",
        error.message || error
      );
      return null;
    }

    return status;
  }

  async getReimbursementById(requestId: number): Promise<Reimbursement | null> {
    const { data, error } = await supabase
      .from("reimbursement_request")
      .select("*")
      .eq("request_id", requestId)
      .single();

    if (error) {
      console.error(
        "Error fetching reimbursement request:",
        error.message || error
      );
      return null;
    }
    return data;
  }

  async getAllReimbursements(): Promise<Reimbursement[] | null> {
    const { data, error } = await supabase
      .from("reimbursement_request")
      .select("*");

    if (error) {
      console.error(
        "Error fetching all reimbursement requests:",
        error.message || error
      );
      return null;
    }
    return data;
  }

  async updateReimbursement(
    requestId: number,
    reimbursementRequest: Partial<Reimbursement>
  ): Promise<Reimbursement | null> {
    const { data, error } = await supabase
      .from("reimbursement_request")
      .update(reimbursementRequest)
      .eq("request_id", requestId)
      .single();

    if (error) {
      console.error(
        "Error updating reimbursement request:",
        error.message || error
      );
      return null;
    }
    return data;
  }

  async deleteReimbursement(requestId: number): Promise<boolean> {
    const { error } = await supabase
      .from("reimbursement_request")
      .delete()
      .eq("request_id", requestId);

    if (error) {
      console.error(
        "Error deleting reimbursement request:",
        error.message || error
      );
      return false;
    }
    return true;
  }
}
