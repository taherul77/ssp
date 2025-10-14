'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

interface CtaButton {
  text: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  primaryCta, 
  secondaryCta,
  backgroundImage = '/hero-bg.jpg' 
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Modern Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-blue-800/85" />
      
      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-3xl blur-2xl transform rotate-45"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [45, 75, 45],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/25 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400/15 rounded-2xl blur-2xl transform -rotate-12"
        animate={{
          rotate: [-12, 12, -12],
          scale: [0.8, 1.1, 0.8],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl"
        animate={{
          scale: [0.9, 1.3, 0.9],
          x: [0, 20, 0],
          y: [0, -15, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-semibold mb-4 text-lg tracking-wide uppercase"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {primaryCta && (
              <Link href={primaryCta.href}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:from-blue-500 hover:to-blue-600 transition-all shadow-2xl shadow-blue-500/50"
                >
                  <span>{primaryCta.text}</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            )}
            
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/80 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:border-white hover:bg-white/10 transition-all"
                >
                  <Play size={20} fill="currentColor" />
                  <span>{secondaryCta.text}</span>
                </motion.button>
              </Link>
            )}
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;





