import { createEntityAdapter } from '@reduxjs/toolkit';

export const productosAdapter = createEntityAdapter({
  selectId: (producto) => producto._id,
});
