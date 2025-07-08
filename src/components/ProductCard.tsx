import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite 
}) => {
  return (
    <div className="group relative">
      <div className="aspect-square bg-charcoal-50 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-white text-black px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-100 transition-colors flex items-center space-x-2"
            >
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </button>
            <button 
              onClick={() => onToggleFavorite(product.id)}
              className={`p-3 transition-colors ${
                isFavorite ? 'bg-black text-white' : 'bg-white text-black hover:bg-charcoal-100'
              }`}
            >
              <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        <h3 className="text-lg font-medium text-charcoal-900">{product.name}</h3>
        <p className="text-sm text-charcoal-600 font-light">{product.category}</p>
        <p className="text-lg font-medium text-charcoal-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;