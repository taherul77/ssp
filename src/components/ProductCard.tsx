'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  features: string[];
  price?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: 'blur(15px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group cursor-pointer h-full"
    >
      <Link href={`/products/${product.id}`} className="block h-full">
        <div className="relative h-full flex flex-col bg-[#0b0f1a]/40 backdrop-blur-md rounded-[3rem] border border-gray-900/50 overflow-hidden group-hover:border-gray-700/80 transition-all duration-700">
          
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-[2rem]">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-[#111827] flex items-center justify-center">
                <span className="text-5xl opacity-40 group-hover:scale-125 transition-transform duration-1000 grayscale group-hover:grayscale-0">📦</span>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] to-transparent opacity-60" />
            
            {/* Top Right Icon */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
               <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Content */}
          <div className="p-10 pt-4 flex-grow flex flex-col">
             <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-500">_CATALOGUE {'//'} {product.category}</span>
                <div className="h-[1px] flex-grow bg-blue-500/10" />
             </div>
            
            <h3 className="text-3xl font-medium text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-700">
              {product.name}
            </h3>
            
            <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors duration-700 flex-grow">
              {product.description}
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-900/50 flex items-center justify-between">
               <span className="text-sm tracking-[0.1em] text-blue-500 font-mono">SPEC_0{product.id}</span>
               {product.price && <span className="text-lg font-medium text-white">{product.price}</span>}
            </div>
          </div>

          {/* Background shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
