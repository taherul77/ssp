'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const ProductCard = ({ product, index, featured = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <motion.div
        whileHover={{ 
          y: -12, 
          boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(220, 38, 38, 0.3)" 
        }}
        className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-2xl transition-all duration-500 h-full flex flex-col group border border-gray-100/50 hover:border-blue-100"
      >
        {/* Product Image */}
        <div className="relative h-72 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 overflow-hidden">
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Placeholder for product image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-100 to-blue-200 flex items-center justify-center group-hover:brightness-110 transition-all duration-300">
              <span className="text-7xl transform group-hover:scale-110 transition-transform">🧹</span>
            </div>
          </motion.div>
        </div>

        {/* Product Content */}
        <div className="p-8 flex-grow flex flex-col space-y-4">
          {/* Category Badge */}
          <span className="inline-block bg-gradient-to-r from-red-100 to-red-50 text-blue-700 text-xs font-bold px-4 py-2 rounded-full w-fit shadow-sm">
            {product.category}
          </span>

          {/* Product Name */}
          <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed flex-grow">
            {product.description}
          </p>

          {/* Features List */}
          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Key Features:
              </h4>
              <ul className="space-y-3">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle size={18} className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Button */}
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 12px 35px rgba(220, 38, 38, 0.35)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 text-white py-4.5 rounded-xl font-bold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-[0_8px_25px_rgba(59,130,246,0.3)] mt-auto group uppercase text-sm tracking-wider relative overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;





