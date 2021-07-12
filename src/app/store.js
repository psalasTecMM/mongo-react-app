import { configureStore } from '@reduxjs/toolkit';
import { productosSlice } from '../features/productos/productosSlice';

export const store = configureStore({
  reducer: {
    productos: productosSlice.reducer,
  },
});
