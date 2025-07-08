import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Chiaroscuro Fashion"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
          Where Light
          <span className="block text-charcoal-300">Meets Shadow</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-charcoal-200 mb-8 font-light tracking-wide animate-slide-up">
          Where Art Becomes Streetwear
        </p>
        
        <p className="text-lg text-charcoal-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Discover our Renaissance-inspired collections that blend fine art with modern street culture. 
          Sustainable fashion for creatives, aesthetes, and conscious consumers.
        </p>

        <button className="group bg-white text-black px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-100 transition-all duration-300 animate-slide-up flex items-center mx-auto">
          Shop Now
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;