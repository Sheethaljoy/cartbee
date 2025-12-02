import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { submitCheckout } from '../services/api';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [orderConfirmation, setOrderConfirmation] = useState(null);

  const mutation = useMutation({
    mutationFn: submitCheckout,
    onSuccess: (data) => {
      setOrderConfirmation(data);
      clearCart();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ ...formData, cart });
  };

  if (cart.length === 0 && !orderConfirmation) {
    navigate('/');
    return null;
  }

  if (orderConfirmation) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for shopping with CartBee. Your order ID is:
          </p>
          <div className="bg-orange-50 p-6 rounded-lg mb-8 border-2 border-orange-200">
            <p className="text-2xl font-mono font-bold text-orange-600">
              {orderConfirmation.orderId}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Expected delivery in 3-5 business days
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Delivery Address
              </label>
              <textarea
                required
                rows="3"
                placeholder="Enter your complete address with pincode"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition disabled:bg-gray-400"
            >
              {mutation.isPending ? 'Processing...' : 'Place Order'}
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              By placing order, you agree to CartBee's Terms & Conditions
            </p>

            {mutation.isError && (
              <p className="mt-4 text-red-600 text-center bg-red-50 p-3 rounded-md">
                Error placing order. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm border-b pb-2">
                  <span className="text-gray-600">{item.title.substring(0, 30)}... x{item.quantity}</span>
                  <span className="font-semibold">₹{((item.price * 83) * item.quantity).toFixed(0)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{(total * 83).toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GST (18%)</span>
                <span>₹{(total * 83 * 0.18).toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 border-t">
                <span>Total</span>
                <span className="text-orange-600">₹{(total * 83 * 1.18).toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
