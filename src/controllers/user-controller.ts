import { Request, Response } from 'express';
import { User } from '../models/user';
import { UserService } from '../services/user-service';

const userService = new UserService();

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const user: User = req.body;
  const newUser = await userService.createUser(user);
  if (newUser === 201) {
    res.status(201).json('success');
  } else {
    res.status(400).json({ message: 'Error creating user' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  const user = await userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  const user: Partial<User> = req.body;
  const updatedUser = await userService.updateUser(userId, user);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(400).json({ message: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  const success = await userService.deleteUser(userId);
  if (success) {
    res.status(204).send();
  } else {
    res.status(400).json({ message: 'Error deleting user' });
  }
};
