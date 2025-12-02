import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart, cart, updateQuantity, removeFromCart }) {
  const cartItem = cart.find(item => item.id === product.id);
  const discount = Math.floor(Math.random() * 30) + 10;
  const originalPrice = Math.floor((product.price * 83) * (1 + discount / 100));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all border border-gray-200 group relative">
      {/* Discount badge */}
      <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
        {discount}% OFF
      </div>

      {/* Wishlist button */}
      <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>

      <Link to={`/product/${product.id}`}>
        <div className="bg-white p-4 relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-orange-600 transition">
            {product.title}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
            <span>{product.rating?.rate}</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <span className="text-xs text-gray-500">({product.rating?.count})</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{(product.price * 83).toFixed(0)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{originalPrice}
            </span>
          </div>
          <p className="text-xs text-green-600 font-medium">Save ₹{(originalPrice - (product.price * 83)).toFixed(0)}</p>
        </div>

        {/* Delivery info */}
        <p className="text-xs text-gray-600 mb-3">Free delivery</p>
        
        {/* Add to cart */}
        {!cartItem ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-md"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between bg-orange-50 rounded-lg p-2">
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
              className="bg-white border border-orange-300 text-orange-700 w-8 h-8 rounded hover:bg-orange-100 font-bold"
            >
              -
            </button>
            <span className="font-semibold text-orange-700">{cartItem.quantity} in cart</span>
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
              className="bg-white border border-orange-300 text-orange-700 w-8 h-8 rounded hover:bg-orange-100 font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
