const BASE_URL = 'http://localhost:3000';

export const getProductos = async () => {
  const response = await fetch(`${BASE_URL}/productos`);
  return await response.json();
};
