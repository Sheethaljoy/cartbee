import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE
});

export const fetchProducts = async ({ category, sort, search }) => {
  const params = {};
  if (category) params.category = category;
  if (sort) params.sort = sort;
  if (search) params.search = search;
  
  const { data } = await api.get('/products', { params });
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const submitCheckout = async (orderData) => {
  const { data } = await api.post('/checkout', orderData);
  return data;
};

export default api;
