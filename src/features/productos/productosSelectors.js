import { productosAdapter } from './productosAdapter';

export const productosSelectors = productosAdapter.getSelectors(
  (state) => state.productos
);
