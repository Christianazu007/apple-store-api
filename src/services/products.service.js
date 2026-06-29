import {
  getAll,
  getById,
  create,
  remove
} from '../models/product.model.js';

export const getAllProducts = async () => {
  return await getAll();
};

export const getProductByIdService = async (id) => {
  return await getById(id);
};

export const createProductService = async (data) => {
  return await create(data);
};

export const deleteProductService = async (id) => {
  return await remove(id);
};