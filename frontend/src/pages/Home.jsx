import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

function Home({ addToCart, cart, updateQuantity, removeFromCart }) {
  const [filters, setFilters] = useState({
    category: '',
    sort: '',
    search: ''
  });

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters)
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading products. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 text-white rounded-xl shadow-xl p-8 md:p-12 mb-8 overflow-hidden border border-orange-800/30">
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Premium Shopping Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
            Welcome to CartBee
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6 max-w-2xl mx-auto leading-relaxed">
            India's most trusted online marketplace for authentic products
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              Free Delivery
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              Cash on Delivery
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              Easy Returns
            </span>
          </div>
        </div>
      </div>
      
      <Filters filters={filters} setFilters={setFilters} />
      
      {products?.length === 0 ? (
        <p className="text-center text-gray-600 py-8">No products found. Try different filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
