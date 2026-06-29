import { verifyToken } from '../services/auth.service.js';

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = decoded;
    next();

  } catch (error) {
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};