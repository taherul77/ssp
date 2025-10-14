'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Users, Award, Zap } from 'lucide-react';
import Link from 'next/link';
import productsData from '@/data/products.json';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const featuredProducts = productsData.products.filter(p => p.featured).slice(0, 3);

  const certifications = [
    { name: 'ISO 9001:2015', icon: Shield },
    { name: '1000+ Clients', icon: Users },
    { name: 'Award Winning', icon: Award },
    { name: 'Fast Delivery', icon: Zap },
  ];

  return (
    <main className="overflow-x-hidden">
      <HeroSection
        title="Excellence in Industrial Brush Solutions"
        subtitle="Welcome to SS Printers "
        description="Leading manufacturer of high-quality industrial brushes and cleaning solutions. Trusted by businesses worldwide for superior performance and reliability."
        primaryCta={{ text: "Explore Products", href: "/products" }}
        secondaryCta={{ text: "Watch Video", href: "#about" }}
      />

      <AboutSection />

      {/* Featured Products Section */}
      <section ref={ref} className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
              Featured Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our premium selection of industrial brushes designed for excellence and built to last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                featured={true}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-lg font-bold text-lg flex items-center space-x-3 hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl mx-auto group"
              >
                <span>View All Products</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Credentials
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Certified excellence and trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -12, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 20px -8px rgba(220, 38, 38, 0.15)"
                  }}
                  className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] text-center border border-gray-100/50 group hover:border-blue-100 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300">
                    <Icon className="text-blue-600 group-hover:text-blue-700" size={44} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{cert.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let us discuss how our industrial brush solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-600 px-12 py-4.5 rounded-xl font-bold hover:bg-gray-50 transition-all uppercase text-sm tracking-wider shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] relative overflow-hidden group"
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white text-white px-12 py-4.5 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all uppercase text-sm tracking-wider shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)] backdrop-blur-sm"
                >
                  Browse Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}





