import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  cartCount: number;
  favoritesCount: number;
  onNavigate?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  onOpenCart, 
  onOpenFavorites, 
  cartCount, 
  favoritesCount,
  onNavigate 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();
  };

  return (
    <nav className="border-b border-charcoal-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-12 flex-1">
            <a 
              href="#" 
              onClick={handleNavClick}
              className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
            >
              Man
            </a>
            <a 
              href="#" 
              onClick={handleNavClick}
              className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
            >
              Woman
            </a>
            <a 
              href="#" 
              onClick={handleNavClick}
              className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
            >
              Collections
            </a>
            <a 
              href="#" 
              onClick={handleNavClick}
              className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
            >
              Journal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal-700 hover:text-black transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center Logo - Positioned more to the left */}
          <div className="flex-1 flex justify-center md:justify-start md:ml-32">
            <h1 className="text-3xl font-medium tracking-wider text-black" style={{ fontFamily: 'AppleMyungjo, serif' }}>
              chiaroscuro
            </h1>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6 flex-1 justify-end">
            <button className="text-charcoal-700 hover:text-black transition-colors">
              <Search size={22} />
            </button>
            <button 
              onClick={onOpenFavorites}
              className="text-charcoal-700 hover:text-black transition-colors relative"
            >
              <Heart size={22} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenCart}
              className="text-charcoal-700 hover:text-black transition-colors relative"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-charcoal-200 py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                onClick={handleNavClick}
                className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Man
              </a>
              <a 
                href="#" 
                onClick={handleNavClick}
                className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Woman
              </a>
              <a 
                href="#" 
                onClick={handleNavClick}
                className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Collections
              </a>
              <a 
                href="#" 
                onClick={handleNavClick}
                className="text-charcoal-700 hover:text-black transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Journal
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;