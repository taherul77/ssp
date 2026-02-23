'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Package, Shield, Truck, Award } from 'lucide-react';
import productsData from '@/data/products.json';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);

  const product = productsData.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="font-playfair text-6xl text-white">Product Not Found</h1>
          <Link href="/products">
            <button className="px-12 py-4 rounded-full border border-white/10 text-blue-500 font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all">
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
    <main className="min-h-screen bg-[#030712] text-white selection:bg-white/10 overflow-hidden">
      {/* Header Info */}
      <section className="pt-60 pb-20 relative">
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          <Link href="/products">
            <motion.button
              whileHover={{ x: -8 }}
              className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-20 group"
            >
              <ArrowLeft size={16} />
              <span>Back to Archive</span>
            </motion.button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Visual Specimen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative group"
            >
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 bg-[#0b0f1a]">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-10">
                    <Package size={120} className="text-blue-500" />
                  </div>
                )}

                {/* HUD Overlays */}
                <div className="absolute top-12 left-12 w-12 h-12 border-t border-l border-white/20" />
                <div className="absolute bottom-12 right-12 w-12 h-12 border-b border-r border-white/20" />
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 blur-[80px] -z-10" />
            </motion.div>

            {/* Specimen Data */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-5 space-y-16"
            >
              <div className="space-y-10">
                <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase">
                  <div className="w-10 h-[1px] bg-blue-500/30" />
                  <span>{product.category}</span>
                </div>

                <h1 className="font-playfair text-6xl md:text-8xl font-light text-white leading-[0.9] tracking-tighter">
                  {product.name}
                </h1>

                <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide border-l border-white/5 pl-12">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] p-12 border border-white/5 space-y-10">
                <div className="flex items-center justify-between border-b border-white/5 pb-8">
                  <h3 className="font-mono text-[10px] tracking-[0.5em] text-blue-500 uppercase">Core_Features</h3>
                  <span className="text-[10px] font-mono text-white/20">SPEC_v1.0</span>
                </div>
                <ul className="grid grid-cols-1 gap-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-400 font-light group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 group-hover:scale-150 transition-transform" />
                      <span className="text-xl">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interaction Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link href="/contact" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-8 rounded-full border border-white/10 text-xs font-mono tracking-[0.4em] uppercase transition-all duration-700"
                  >
                    Inquiry
                  </motion.button>
                </Link>
                <Link href="/contact" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-8 rounded-full bg-blue-600/5 border border-blue-500/20 text-blue-500 text-xs font-mono tracking-[0.4em] uppercase transition-all duration-700"
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
      <section className="py-40 bg-[#030712] border-t border-white/5">
        <div className="container mx-auto max-w-7xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">Value Engineering</span>
            <h2 className="font-playfair text-6xl md:text-7xl font-light text-white mt-8">The <span className="italic text-white/10">Advantage.</span></h2>
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
                  className="p-12 bg-white/[0.01] border border-white/5 rounded-[3rem] hover:bg-white/[0.03] transition-all duration-700 group hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-700">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-700" size={24} />
                  </div>
                  <h3 className="text-xl font-normal tracking-tight text-white/90 mb-5">{benefit.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Archive */}
      <section className="py-40 bg-[#030712] border-t border-white/5">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="flex justify-between items-end mb-24">
            <div className="space-y-4">
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">Related Entities</span>
              <h2 className="font-playfair text-6xl font-light text-white">Similar <br /><span className="italic text-white/10">Specimens.</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {productsData.products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-[#0b0f1a] mb-10">
                      {relatedProduct.image ? (
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-5">
                          <Package size={60} className="text-blue-500" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-4 px-6 text-center">
                      <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">ARC_{relatedProduct.id}</span>
                      <h3 className="text-3xl font-playfair font-normal text-white/90 group-hover:text-white transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
