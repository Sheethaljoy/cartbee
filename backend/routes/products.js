import express from 'express';
import axios from 'axios';

const router = express.Router();
const FAKESTORE_API = 'https://fakestoreapi.com';

// Get all products with optional filters
router.get('/', async (req, res) => {
  try {
    const { category, sort, search } = req.query;
    let url = category 
      ? `${FAKESTORE_API}/products/category/${category}`
      : `${FAKESTORE_API}/products`;
    
    const { data } = await axios.get(url);
    let products = data;

    // Search filter
    if (search) {
      products = products.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sort === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const { data } = await axios.get(`${FAKESTORE_API}/products/${req.params.id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

export default router;
