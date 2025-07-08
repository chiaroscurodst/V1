import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-charcoal-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail className="w-12 h-12 text-charcoal-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Be the First to Know
          </h2>
          <p className="text-xl text-charcoal-300 mb-2">
            When Art Meets Fashion
          </p>
          <p className="text-charcoal-400 max-w-2xl mx-auto">
            Get early access to new collections, exclusive collaborations, and behind-the-scenes content 
            from the intersection of Renaissance art and modern streetwear.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-charcoal-600 rounded-none text-white placeholder-charcoal-400 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-100 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-charcoal-500 mt-4">
            Exclusive access • No spam • Unsubscribe anytime
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;