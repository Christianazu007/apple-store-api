import {
  getAllProducts,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.service.js';

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(id) && typeof id !== 'string') {
      return res.status(400).json({ error: 'ID inválido' });
    }
    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({ error: `Producto con id ${id} no encontrado` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, category, description, stock } = req.body;
    if (!name || !price || !category || !description || !stock) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      return res.status(400).json({ error: 'El precio debe ser un número válido mayor a 0' });
    }
    if (isNaN(parseInt(stock)) || parseInt(stock) < 0) {
      return res.status(400).json({ error: 'El stock debe ser un número válido' });
    }
    const newProduct = await createProductService({ 
      name, 
      price: parseFloat(price), 
      category: category.toLowerCase(),
      description,
      stock: parseInt(stock)
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'ID inválido' });
    }
    const deleted = await deleteProductService(id);
    if (!deleted) {
      return res.status(404).json({ error: `Producto con id ${id} no encontrado` });
    }
    res.status(200).json({ message: `Producto ${id} eliminado correctamente` });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};