import { createSlice } from '@reduxjs/toolkit';
import { productosAdapter } from './productosAdapter';
import { fetchProductos } from './productosThunks';

export const productosSlice = createSlice({
  name: 'productos',
  initialState: productosAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(fetchProductos.fulfilled, (state, action) =>
      productosAdapter.setAll(state, action.payload)
    );
  },
});
