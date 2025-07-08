import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-medium tracking-wider mb-4">
              chiaroscuro
            </h3>
            <p className="text-charcoal-400 mb-6 max-w-md leading-relaxed">
              Where Renaissance artistry meets modern streetwear. Sustainable fashion 
              for creatives, aesthetes, and conscious consumers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li><a href="#" className="hover:text-white transition-colors">Man</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Woman</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-charcoal-500 mb-4 md:mb-0">
            © 2024 Chiaroscuro District. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-charcoal-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;