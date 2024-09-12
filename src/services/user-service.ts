import { User } from '../models/user';
import { UserRepository } from '../repositories/user-repository';

const userRepository = new UserRepository();

export class UserService {
  async createUser(user: User): Promise<number | null> {
    return await userRepository.createUser(user);
  }

  async getUserById(userId: string): Promise<User | null> {
    return await userRepository.getUserById(userId);
  }

  async updateUser(userId: string, user: Partial<User>): Promise<User | null> {
    return await userRepository.updateUser(userId, user);
  }

  async deleteUser(userId: string): Promise<boolean> {
    return await userRepository.deleteUser(userId);
  }
}
