import { productosAdapter } from './productosAdapter';

export const {selectAll,selectById,selectTotal} = productosAdapter.getSelectors(
  (state) => state.productos
);

export const hasError = (state) => {
  return state.productos.error;
}
