import express from 'express';

const router = express.Router();
let cart = [];

// Get cart
router.get('/', (req, res) => {
  res.json(cart);
});

// Add to cart
router.post('/add', (req, res) => {
  const { id, title, price, image, quantity = 1 } = req.body;
  
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, title, price, image, quantity });
  }
  
  res.json({ message: 'Item added to cart', cart });
});

// Update cart item
router.put('/update', (req, res) => {
  const { id, quantity } = req.body;
  
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity = quantity;
    res.json({ message: 'Cart updated', cart });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Remove from cart
router.delete('/remove/:id', (req, res) => {
  cart = cart.filter(item => item.id !== parseInt(req.params.id));
  res.json({ message: 'Item removed', cart });
});

// Clear cart
router.delete('/clear', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared', cart });
});

export default router;
