// src/data/offersProducts.js
import { menProducts } from './menProducts';
import { womenProducts } from './womenProducts';

// Productos mixtos en oferta (hombres y mujeres con descuento)
export const offersProducts = [
  // Productos de hombres con descuento
  ...menProducts.filter(p => p.originalPrice !== null),
  // Productos de mujeres con descuento
  ...womenProducts.filter(p => p.originalPrice !== null),
].map(product => ({
  ...product,
  discount: product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0
}));