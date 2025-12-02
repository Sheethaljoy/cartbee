import { Link } from 'react-router-dom';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link to="/" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition font-semibold">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
              <div className="flex gap-4">
                <div className="bg-gray-50 p-2 rounded-lg">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-orange-600 font-bold text-lg">₹{(item.price * 83).toFixed(0)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded hover:bg-orange-200"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded hover:bg-orange-200"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{(total * 83).toFixed(0)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Delivery Charges</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">GST (18%)</span>
                <span className="font-semibold">₹{(total * 83 * 0.18).toFixed(0)}</span>
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total Amount</span>
                  <span className="text-orange-600">₹{(total * 83 * 1.18).toFixed(0)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
