import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CollectionsPreview from './components/CollectionsPreview';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import LoadingScreen from './components/LoadingScreen';
import { usePageLoading } from './hooks/usePageLoading';
import { products } from './data/products';
import { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  
  const { isLoading, startLoading } = usePageLoading();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const removeFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.delete(productId);
      return newFavorites;
    });
  };

  const favoriteProducts = products.filter(product => favorites.has(product.id));
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <div className={`min-h-screen bg-white transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Navigation 
          onOpenCart={() => setIsCartOpen(true)}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onNavigate={startLoading}
          cartCount={cartCount}
          favoritesCount={favorites.size}
        />
        
        <main>
          <HeroSection />
          <AboutSection />
          <CollectionsPreview />
          <ProductGrid 
            products={products}
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
          <Newsletter />
        </main>

        <Footer />

        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />

        <Favorites 
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          favorites={favoriteProducts}
          onRemoveFavorite={removeFavorite}
          onAddToCart={addToCart}
        />
      </div>
    </>
  );
}

export default App;