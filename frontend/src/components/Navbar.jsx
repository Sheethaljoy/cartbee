import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-4">
            <span>Free Delivery on orders above ₹499</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">COD Available</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-100">Track Order</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-100">Help</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition flex items-center gap-2 flex-shrink-0">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="font-extrabold tracking-tight">CartBee</span>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex gap-6 items-center">
            {/* Mobile search */}
            <button className="md:hidden text-gray-700 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            {/* Account */}
            <Link to="#" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-orange-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span className="font-medium">Account</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center gap-2 text-gray-700 hover:text-orange-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span className="hidden md:inline font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Categories bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-6 overflow-x-auto text-sm">
            <Link to="/" className="text-gray-700 hover:text-orange-600 whitespace-nowrap font-medium">All Products</Link>
            <a href="#" className="text-gray-700 hover:text-orange-600 whitespace-nowrap">Electronics</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 whitespace-nowrap">Fashion</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 whitespace-nowrap">Jewelry</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 whitespace-nowrap">Men's Clothing</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 whitespace-nowrap">Women's Clothing</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 whitespace-nowrap">Offers</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
