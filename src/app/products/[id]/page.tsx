'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Package, Shield, Truck, Award } from 'lucide-react';
import productsData from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { Lens } from '@/components/ui/lens';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const product = (productsData.products as Product[]).find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="font-playfair text-6xl text-black">Product Not Found</h1>
          <Link href="/products">
            <button className="px-12 py-4 rounded-full border border-black/10 text-blue-600 font-mono text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all">
              Back to Archive
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const benefits = [
    { icon: Package, title: 'Precision Engineering', description: 'Micrometer accuracy in every structural element.' },
    { icon: Shield, title: 'Verified Standard', description: 'Compliance with global industrial protocols.' },
    { icon: Truck, title: 'Rapid Deployment', description: 'Institutional scale logistics and fulfillment.' },
    { icon: Award, title: 'Heritage Quality', description: 'Decades of mechanical mastery and trust.' },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-black/5 overflow-hidden">
      {/* Header Info */}
      <section className="pt-60 pb-20 relative">
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          <Link href="/products">
            <motion.button
              whileHover={{ x: -8 }}
              className="flex items-center gap-4 text-blue-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-20 group"
            >
              <ArrowLeft size={16} />
              <span>Back to Archive</span>
            </motion.button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Visual Specimen & Thumbnails */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="w-full relative rounded-[2rem] overflow-hidden bg-black/[0.02] border border-black/5 p-8">
                <div className="relative z-10">
                  <Lens hovering={isHovering} setHovering={setIsHovering} zoom={2} lensSize={250}>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 bg-white">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[activeImageIndex]}
                          alt={product.name}
                          fill
                          className={cn(
                            "object-cover transition-all duration-1000 grayscale",
                            isHovering ? "scale-105 opacity-50 grayscale-0" : "scale-100 opacity-100"
                          )}
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-10">
                          <Package size={80} className="text-blue-600" />
                        </div>
                      )}
                    </div>
                  </Lens>

                  <motion.div
                    animate={{
                      filter: isHovering ? "blur(2px)" : "blur(0px)",
                      opacity: isHovering ? 0.3 : 1
                    }}
                    className="mt-8 relative z-20 space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-blue-600/30" />
                      <span className="font-mono text-[8px] tracking-[0.4em] text-blue-600 uppercase">SPECIMEN_ID: ARC_0{product.id}</span>
                    </div>
                    <h2 className="text-black text-2xl font-medium tracking-tight uppercase">
                      {product.name}
                    </h2>
                  </motion.div>
                </div>
              </div>

              {/* Thumbnails Matrix */}
              {product.images && product.images.length > 1 && (
                <div className="flex flex-wrap gap-4 px-4 justify-center lg:justify-start">
                  {product.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-500 ${activeImageIndex === idx ? 'border-blue-600' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Specimen Data */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-7 space-y-16"
            >
              <div className="space-y-10">
                <div className="flex items-center gap-4 text-blue-600 font-mono text-[10px] tracking-[0.6em] uppercase">
                  <div className="w-10 h-[1px] bg-blue-600/30" />
                  <span>{product.category}</span>
                </div>

                <h1 className="font-playfair text-4xl md:text-6xl font-light text-black leading-[0.9] tracking-tighter uppercase">
                  {product.name}
                </h1>

                <p className="text-gray-500 font-light text-lg leading-relaxed tracking-wide border-l border-black/5 pl-8">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-black/[0.02] backdrop-blur-3xl rounded-[2rem] p-8 border border-black/5 space-y-8">
                <div className="flex items-center justify-between border-b border-black/5 pb-6">
                  <h3 className="font-mono text-[8px] tracking-[0.4em] text-blue-600 uppercase">Core_Features</h3>
                  <span className="text-[10px] font-mono text-black/20">SPEC_v1.0</span>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 font-light group">
                      <div className="w-1 h-1 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interaction Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/contact" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 rounded-full border border-black/10 text-[10px] font-mono tracking-[0.4em] uppercase transition-all duration-700 bg-black text-white"
                  >
                    Inquiry
                  </motion.button>
                </Link>
                <Link href="/contact" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 rounded-full bg-blue-600/5 border border-blue-600/20 text-blue-600 text-[10px] font-mono tracking-[0.4em] uppercase transition-all duration-700"
                  >
                    Consultation
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Advantage */}
      <section className="py-40 bg-[var(--background)] border-t border-black/5">
        <div className="container mx-auto max-w-7xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase">Value Engineering</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-black mt-6">The <span className="italic text-black/60">Advantage.</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-black/[0.01] border border-black/5 rounded-[1.5rem] hover:bg-black/[0.03] transition-all duration-700 group hover:border-black/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-black border border-black/5 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-700">
                    <Icon className="text-gray-400 group-hover:text-white transition-colors duration-700" size={20} />
                  </div>
                  <h3 className="text-lg font-normal tracking-tight text-black/90 mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-xs">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Archive */}
      <section className="py-40 bg-[var(--background)] border-t border-black/5">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase">Related Entities</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-black">Similar <br /><span className="italic text-black/60">Specimens.</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(productsData.products as unknown as Product[])
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    product={relatedProduct}
                    index={index}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
