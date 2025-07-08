import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface FavoritesProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onRemoveFavorite: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ 
  isOpen, 
  onClose, 
  favorites, 
  onRemoveFavorite, 
  onAddToCart 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium">Favorites</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {favorites.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">No favorites yet</p>
            ) : (
              <div className="space-y-4">
                {favorites.map((product) => (
                  <div key={product.id} className="flex space-x-4 border-b pb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover bg-gray-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">${product.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button 
                          onClick={() => onAddToCart(product)}
                          className="flex items-center space-x-1 text-xs bg-black text-white px-2 py-1 hover:bg-gray-800 transition-colors"
                        >
                          <ShoppingBag size={12} />
                          <span>ADD TO CART</span>
                        </button>
                        <button 
                          onClick={() => onRemoveFavorite(product.id)}
                          className="text-xs text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;