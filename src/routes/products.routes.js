import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct
} from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/create', createProduct);
router.delete('/:id', deleteProduct);

export default router;