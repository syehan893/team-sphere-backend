import { supabase } from '../datasources/supabase-client';
import { User } from '../models/user';

export class UserRepository {
  async createUser(user: User): Promise<number | null> {
    const { status, error } = await supabase.from('user').insert(user).single();

    if (error) {
      console.error('Error creating user:', error.message || error);
      return null;
    }

    return status;
  }

  async getUserById(userId: string): Promise<User | null> {
    const { data, error } = await supabase.from('user').select('*').eq('id', userId).single();

    if (error) {
      console.error('Error fetching user:', error.message || error);
      return null;
    }
    return data;
  }

  async updateUser(userId: string, user: Partial<User>): Promise<User | null> {
    const { data, error } = await supabase.from('user').update(user).eq('id', userId).single();

    if (error) {
      console.error('Error updating user:', error.message || error);
      return null;
    }
    return data;
  }

  async deleteUser(userId: string): Promise<boolean> {
    const { error } = await supabase.from('user').delete().eq('id', userId);

    if (error) {
      console.error('Error deleting user:', error.message || error);
      return false;
    }
    return true;
  }
}
