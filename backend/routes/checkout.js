import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, address, cart } = req.body;
  
  if (!name || !email || !address || !cart || cart.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  res.json({
    success: true,
    orderId,
    message: 'Order placed successfully',
    orderDetails: {
      orderId,
      customer: { name, email, address },
      items: cart,
      total: total.toFixed(2),
      date: new Date().toISOString()
    }
  });
});

export default router;
