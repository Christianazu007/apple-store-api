export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y password son obligatorios' });
    }

    // Por ahora usuario hardcodeado, JWT lo agregamos en la próxima clase
    if (email !== 'admin@apple.com' || password !== 'admin123') {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Login exitoso', token: 'pendiente-jwt' });

  } catch (error) {
    res.status(500).json({ error: 'Error en el login' });
  }
};