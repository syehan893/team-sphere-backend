import { Request, Response } from 'express';
import { AuthService } from '../services/auth-service';

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const data = await authService.login(email, password);
    res.json({
      accessToken: data?.session?.access_token,
      user: data?.user,
    });
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(401).json({ message: 'Invalid email or password' });
  }
};
