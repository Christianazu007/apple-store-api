import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import productsRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productsRouter);
app.use('/auth', authRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Apple Store API funcionando! 🍎' });
});

// Middleware 404 - rutas no definidas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});