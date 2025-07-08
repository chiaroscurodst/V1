import React from 'react';
import { Palette, Leaf, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            The Art of Fashion
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Chiaroscuro District draws inspiration from the Renaissance art technique, 
            blending the interplay of light and shadow with modern street culture.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-200 transition-colors">
              <Palette className="text-charcoal-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Artistic Heritage</h3>
            <p className="text-charcoal-600 leading-relaxed">
              Every piece reflects the timeless technique of chiaroscuro, 
              creating depth through the masterful play of light and shadow.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-200 transition-colors">
              <Leaf className="text-charcoal-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Sustainable Craft</h3>
            <p className="text-charcoal-600 leading-relaxed">
              Committed to eco-conscious production with ethically sourced materials 
              and transparent manufacturing processes.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-200 transition-colors">
              <Award className="text-charcoal-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Premium Quality</h3>
            <p className="text-charcoal-600 leading-relaxed">
              Meticulously crafted pieces that merge luxury with streetwear, 
              designed for the modern creative and conscious consumer.
            </p>
          </div>
        </div>

        {/* Visual Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
              Renaissance Meets Street
            </h3>
            <p className="text-charcoal-600 mb-6 leading-relaxed">
              Our collections are born from the intersection of classical artistry and contemporary urban culture. 
              Each garment tells a story of contrast, depth, and artistic expression.
            </p>
            <p className="text-charcoal-600 leading-relaxed">
              From The Florence Drop to our Canvas Series, every collection embodies our commitment 
              to creating fashion that transcends trends and speaks to the soul of creativity.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Renaissance Art Inspiration"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;