import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionsPreview: React.FC = () => {
  const collections = [
    {
      name: 'The Florence Drop',
      description: 'Renaissance-inspired pieces with modern silhouettes',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: '12 pieces'
    },
    {
      name: 'Light & Shadow',
      description: 'Monochromatic essentials playing with contrast',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: '8 pieces'
    },
    {
      name: 'Canvas Series',
      description: 'Artistic prints on premium streetwear',
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: '15 pieces'
    }
  ];

  return (
    <section className="py-24 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Explore our curated capsule collections where art history meets contemporary fashion
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{collection.items}</p>
                </div>
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2 group-hover:text-black transition-colors">
                {collection.name}
              </h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                {collection.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group bg-black text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-all duration-300 flex items-center mx-auto">
            View All Collections
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;