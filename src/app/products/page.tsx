'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search, Globe, ArrowRight } from 'lucide-react';
import productsData from '@/data/products.json';
import Link from 'next/link';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const { categories, products } = productsData;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-[#030712] text-white selection:bg-white/10 selection:text-white overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-60 pb-32">
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="flex flex-col gap-12"
          >
            <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">
              <div className="w-12 h-[1px] bg-blue-500/30" />
              <span>Archive</span>
            </div>

            <h1 className="font-playfair text-[8vw] lg:text-[7.5rem] font-light leading-[0.9] tracking-tighter text-white max-w-5xl">
              Our <br />
              <span className="italic text-white/20 font-light block ml-[10%]">Specimens.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end pt-10">
              <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide max-w-xl">
                Discover our comprehensive range of high-fidelity printing and industrial packaging solutions.
              </p>
              <div className="flex items-center gap-10 opacity-30">
                <div className="space-y-2">
                  <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest text-right">Total Count</span>
                  <span className="block text-2xl font-playfair italic text-white text-right">{products.length} Items</span>
                </div>
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                  <Globe size={24} className="text-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] -z-10" />
      </section>

      {/* Advanced Filter HUD */}
      <section className="py-20 border-y border-white/5 bg-[#030712] relative z-20">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            {/* Search HUD */}
            <div className="w-full lg:w-[450px]">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-500/40 group-focus-within:text-blue-500 group-hover:text-blue-500/70 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="SEARCH_CATALOGUE…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 bg-[#0b0f1a]/40 backdrop-blur-3xl rounded-full border border-white/5 focus:border-blue-500/30 outline-none font-mono text-sm tracking-widest text-white/80 placeholder:text-gray-800 transition-all"
                />
              </div>
            </div>

            {/* Category Matrix */}
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-10 py-5 rounded-full font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-700 border ${selectedCategory === category
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-gray-400 border-white/5 hover:border-white hover:text-white'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Grid */}
      <section className="py-40 bg-[#030712] relative min-h-[60vh]">
        <div className="container mx-auto max-w-7xl px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % 3) * 0.1, duration: 1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    product={product}
                    index={index}
                    featured={product.featured}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-40 border border-dashed border-white/5 rounded-[4rem]">
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] mb-10 block">0_RESULTS_FOUND</span>
              <p className="font-playfair text-4xl italic text-white/20">No specimens match your inquiry.</p>
            </div>
          )}
        </div>

        {/* Absolute Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-playfair italic text-white/[0.01] -z-10 select-none">
          Works
        </div>
      </section>

      {/* Premium Footer CTA */}
      <section className="py-80 flex flex-col items-center justify-center text-center relative border-t border-white/5">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-playfair text-[10vw] font-light tracking-tighter leading-none mb-24 text-white/90"
        >
          Custom <span className="italic text-gray-800">Identity.</span>
        </motion.h2>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.98 }}
            className="px-20 py-8 rounded-full border border-white/10 text-xl font-light tracking-[0.4em] uppercase transition-all duration-700"
          >
            Request Bespoke <ArrowRight size={20} className="inline ml-4" />
          </motion.button>
        </Link>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      </section>
    </main>
  );
}
