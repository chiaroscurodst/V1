import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart, 
  onToggleFavorite,
  favorites 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'The Florence Drop', 'Light & Shadow', 'Canvas Series'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
          New Arrivals
        </h2>
        <p className="text-xl text-charcoal-600 mb-12 max-w-2xl mx-auto">
          Discover our latest pieces where Renaissance artistry meets contemporary streetwear
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.has(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;