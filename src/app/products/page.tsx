'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';
import productsData from '@/data/products.json';

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
    <main className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of industrial brush solutions designed for excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3.5 rounded-xl font-bold uppercase text-sm tracking-wider transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_8px_25px_rgba(59,130,246,0.35)] border-2 border-blue-600'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-[0_4px_14px_rgba(0,0,0,0.08)] border-2 border-gray-200 hover:border-blue-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center text-gray-600">
            Showing <span className="font-semibold text-blue-600">{filteredProducts.length}</span> products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  featured={product.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600 mb-4">No products found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team specializes in creating custom brush solutions tailored to your specific requirements.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white text-blue-600 px-12 py-4.5 rounded-xl font-bold uppercase text-sm tracking-wider hover:bg-gray-50 transition-all shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] border-2 border-white/20"
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}





