import { Request, Response, NextFunction } from 'express';
import { supabase } from '../datasources/supabase-client';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader?.replace('Bearer ', '');

  if (!accessToken) {
    return res.status(401).json({ message: 'Access token is required' });
  }

  try {
    const { data: user, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
