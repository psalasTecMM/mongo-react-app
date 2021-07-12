import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductos } from './productosAPI';

export const fetchProductos = createAsyncThunk(
  'productos/getProductos',getProductos
);
