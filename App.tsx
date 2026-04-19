/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight, Menu, X, ArrowRight, Star, Globe, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const SHOES = [
  {
    id: 1,
    name: 'Running Shoes',
    category: 'Running',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd61f102?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-lightweight mesh for breathable performance and comfort on long runs.',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Casual Shoes',
    category: 'Casual',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless style meets modern comfort. Perfect for your daily urban adventures.',
    rating: 4.5
  },
  {
    id: 3,
    name: 'Sports Shoes',
    category: 'Sports',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80',
    description: 'Maximum stability and propulsion for high-intensity court sports and training.',
    rating: 4.9
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F9F9F7]/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="font-display text-2xl font-bold tracking-tighter">
              STRIDE<span className="text-brand-accent">&</span>STREET
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['Shop', 'Categories', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-brand-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={22} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key="cart-badge"
                    className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#F9F9F7]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 rounded">
                Spring Collection 2026
              </span>
              <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 italic">
                MOVE WITH <br />
                <span className="text-gray-400 font-light not-italic">INTENTION.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
                Experience the perfect blend of performance technology and urban aesthetics. 
                Designed for the restless souls who never stop moving.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-accent transition-all hover:translate-y-[-2px] group shadow-lg shadow-black/10">
                  Shop Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all">
                  View Lookbook
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="aspect-[4/5] bg-gray-200 rounded-[4rem] overflow-hidden relative rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80" 
                  alt="Hero Footwear"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-accent rounded-full flex items-center justify-center p-8 text-white -rotate-12 shadow-2xl">
                <p className="font-display font-bold text-lg leading-tight text-center">
                  CRAFTED FOR PEAK PERFORMANCE
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative background text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-0 opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap">
            <span className="font-display text-[20vw] font-black leading-none uppercase">
              STRIDE STREET PERFORMANCE
            </span>
          </div>
        </section>

        {/* Categories / Stats */}
        <section className="bg-brand-primary text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Star size={32} />, label: "Premium Materials", sub: "Global Standards" },
              { icon: <Globe size={32} />, label: "Worldwide Shipping", sub: "Fast Delivery" },
              { icon: <ShieldCheck size={32} />, label: "2 Year Warranty", sub: "Guaranteed Quality" },
              { icon: <ShoppingBag size={32} />, label: "Easy Returns", sub: "30-Day Window" },
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                key={i} 
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="text-brand-accent">{stat.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-lg">{stat.label}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section id="shop" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand-accent font-bold tracking-widest text-xs uppercase mb-3 block">Featured Collection</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter">OUR SIGNATURE SERIES</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Curated for performance and style. Each pair undergoes rigorous testing to ensure it meets our exacting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SHOES.map((shoe, index) => (
              <motion.div
                key={shoe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square bg-[#F0F0EF] rounded-3xl overflow-hidden mb-6 group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={shoe.image} 
                    alt={shoe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star size={12} className="text-brand-accent fill-brand-accent" />
                    <span className="text-[10px] font-bold">{shoe.rating}</span>
                  </div>
                  <button 
                    onClick={addToCart}
                    className="absolute bottom-4 left-4 right-4 bg-brand-primary text-white py-3 rounded-xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-accent"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="space-y-1 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{shoe.category}</span>
                    <span className="text-sm font-bold font-display">Rs. {shoe.price.toLocaleString()}</span>
                  </div>
                  <h3 className="font-display font-medium text-xl group-hover:text-brand-accent transition-colors">{shoe.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-snug">{shoe.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="border-b-2 border-brand-primary font-bold text-sm tracking-widest uppercase py-2 hover:text-brand-accent hover:border-brand-accent transition-all">
              View All Products
            </button>
          </div>
        </section>

        {/* Modern About / Info Section */}
        <section className="bg-[#1A1A1A] text-white py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-800 rounded-3xl overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Craft" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-10 -right-10 bg-brand-accent p-12 rounded-full hidden lg:block animate-pulse opacity-20" />
            </div>
            
            <div className="space-y-8">
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter italic">
                CRAFTING THE <br />
                <span className="text-brand-accent not-italic">FUTURE OF FOOTWEAR.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded in 2024, Stride & Street was born from a simple observation: shoes should be as dynamic as the people who wear them. We combine artisanal craftsmanship with frontier technology to create footwear that doesn't just look good—it performs.
              </p>
              <ul className="space-y-4">
                {[
                  "Sustainable leather sourcing from local tanneries",
                  "Patented Aero-Shock™ cushioning technology",
                  "3D-mapped footbeds for anatomic precision"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-3 text-brand-accent font-bold border-b border-brand-accent pb-2 group">
                Learn about our process <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto bg-brand-accent rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-accent/20">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">JOIN THE MOVEMENT.</h2>
              <p className="text-brand-primary/80 font-medium mb-10 max-w-md mx-auto">
                Subscribe to receive early access to new drops, exclusive member events, and limited edition collaborations.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-4 placeholder:text-white/60 focus:outline-none focus:ring-2 ring-white/50"
                  required
                />
                <button className="bg-brand-primary text-white rounded-full px-10 py-4 font-bold hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </form>
            </div>
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <a href="#" className="font-display text-2xl font-bold tracking-tighter">
              STRIDE<span className="text-brand-accent">&</span>STREET
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Redefining urban movement through innovative design and uncompromising quality. Built for those who lead the way.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-brand-accent">Information</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['About Us', 'Sustainability', 'Carriers', 'Terms of Service', 'Privacy Policy'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-brand-accent">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Contact Support', 'Shipping Info', 'Returns & Exchanges', 'Size Guide', 'FAQ'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-brand-accent">Social</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Instagram', 'Twitter', 'TikTok', 'LinkedIn', 'YouTube'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2026 STRIDE & STREET FOOTWEAR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Security</a>
            <a href="#">Cookies</a>
            <a href="#">Status</a>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-primary text-white pt-32 px-6 flex flex-col gap-8 md:hidden"
          >
            {['Shop', 'Categories', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="font-display text-5xl font-bold tracking-tighter"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
