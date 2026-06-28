// Datos de ejemplo - Apple Store
let products = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 999,
    category: 'smartphone',
    description: '6.1 pulgadas, chip A17 Pro, titanio',
    stock: 50
  },
  {
    id: '2',
    name: 'MacBook Pro 14',
    price: 1999,
    category: 'laptop',
    description: 'Chip M3 Pro, 18GB RAM, 512GB SSD',
    stock: 30
  },
  {
    id: '3',
    name: 'iPad Pro 12.9',
    price: 1099,
    category: 'tablet',
    description: 'Chip M2, pantalla Liquid Retina XDR',
    stock: 40
  }
];

export const getAll = async () => {
  return products;
};

export const getById = async (id) => {
  const product = products.find(p => p.id === id);
  return product || null;
};

export const create = async (data) => {
  const newProduct = {
    id: String(products.length + 1),
    ...data
  };
  products.push(newProduct);
  return newProduct;
};

export const remove = async (id) => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  const deleted = products.splice(index, 1);
  return deleted[0];
};