import { generateToken } from '../services/auth.service.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y password son obligatorios' });
    }

    // Usuario hardcodeado (en un proyecto real vendría de la base de datos)
    if (email !== 'admin@apple.com' || password !== 'admin123') {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = generateToken({ email });
    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ error: 'Error en el login' });
  }
};