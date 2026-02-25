'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  features: string[];
  price?: string;
  images: string[];
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
        <div className="relative h-full flex flex-col bg-black/10 backdrop-blur-md rounded-[1.5rem] border border-black/5 overflow-hidden group-hover:border-black/10 transition-all duration-700">

          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[1rem]">
            {product.images && product.images.length > 0 ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-black/50 flex items-center justify-center">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-1000 grayscale group-hover:grayscale-0">📦</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

            {/* Top Right Icon */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-2 flex-grow flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-blue-600 truncate max-w-[150px]">_ARC_0{product.id}</span>
              <div className="h-[1px] flex-grow bg-blue-600/10" />
            </div>

            <h3 className="text-xl font-medium text-black mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 transition-all duration-700 line-clamp-1 uppercase">
              {product.name}
            </h3>

            <p className="text-gray-500 font-light text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-700 flex-grow line-clamp-2">
              {product.description}
            </p>

            <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] text-blue-600 font-mono italic uppercase">{product.category}</span>
              {product.price && <span className="text-sm font-medium text-black">{product.price}</span>}
            </div>
          </div>

          {/* Background shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
