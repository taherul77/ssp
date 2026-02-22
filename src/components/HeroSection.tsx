'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ThreeBackground from './ThreeBackground';

interface CtaButton {
  text: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: CtaButton;
}

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.35;
    const y = (e.clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({
  primaryCta
}) => {
  const { scrollY } = useScroll();
  const scrollSpring = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const textY = useTransform(scrollSpring, [0, 800], [0, 200]);
  const textScale = useTransform(scrollSpring, [0, 800], [1, 0.85]);
  const textOpacity = useTransform(scrollSpring, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#030712] overflow-hidden">
      {/* 3D Scene - Constant depth */}
      <div className="absolute inset-0">
        <ThreeBackground />
      </div>

      {/* Background vignette glaze */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.7)_100%)] z-10 pointer-events-none" />

      {/* Main Content - Asymmetric Agency Layout */}
      <div className="relative z-30 container mx-auto max-w-7xl px-8 h-full flex flex-col justify-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
          className="space-y-12"
        >
          {/* Primary Hook */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase"
            >
              <span>Industrial Precision</span>
              <div className="w-12 h-[1px] bg-blue-500/30" />
            </motion.div>

            <h1 className="font-playfair text-[9vw] md:text-[8vw] lg:text-[9rem] font-light leading-[0.9] tracking-tighter text-white flex flex-col">
              <motion.span
                initial={{ y: 100, opacity: 0, rotateX: 30 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Visualizing
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0, rotateX: 30 }}
                animate={{ y: 0, opacity: 0.9, rotateX: 0 }}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="pl-[10%]"
              >
                the <span className="italic text-gray-800">Future.</span>
              </motion.span>
            </h1>
          </div>

          {/* Call to Action - Shifted to the right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="flex flex-col md:flex-row items-start md:items-end gap-12 md:pl-[12%]"
          >
            <div className="space-y-6 max-w-md">
              <p className="text-gray-500 font-light text-xl tracking-wide leading-relaxed">
                Merging artisanal precision with high-capacity logic to redefine the tactile identity of global brands.
              </p>

              <MagneticButton className="inline-block">
                <Link href={primaryCta?.href || "/products"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-10 bg-white text-black px-12 py-5 rounded-full transition-all duration-700 hover:bg-transparent hover:text-white border border-white"
                  >
                    <span className="text-[11px] font-bold tracking-[0.5em] uppercase">
                      Explore
                    </span>
                    <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </motion.button>
                </Link>
              </MagneticButton>
            </div>

            {/* Detail Stat - Very Agency like */}
            <div className="hidden md:block pb-5 border-l border-white/5 pl-10 space-y-2 opacity-40">
              <span className="block text-[10px] font-mono text-gray-400">EST. 1998</span>
              <span className="block text-[10px] font-mono text-gray-400">DHAKA_HQ_01</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Orfeo Side Info Card - Minimalist Approach */}
      <div className="absolute bottom-16 left-16 z-40 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="space-y-6"
        >
          <div className="w-12 h-[1px] bg-blue-500 mb-8" />

          <div className="flex flex-col gap-2">
            <span className="text-gray-700 text-[10px] font-bold tracking-[0.4em] uppercase">Service Focus</span>
            <span className="text-gray-500 text-[11px] font-light tracking-[0.1em]">Identity / Packaging / Logistics</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Meta-Data (Right) */}
      <div className="absolute bottom-20 right-12 z-40 hidden lg:block text-right">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <span className="block text-gray-700 text-[10px] font-bold tracking-[0.5em] uppercase">Status</span>
            <span className="block text-white text-[12px] font-mono tracking-widest uppercase">Factory Active</span>
          </div>
          <div className="space-y-2">
            <span className="block text-gray-700 text-[10px] font-bold tracking-[0.5em] uppercase">Coordinates</span>
            <span className="block text-white text-[12px] font-mono tracking-widest">23.8° N / 90.4° E</span>
          </div>
        </motion.div>
      </div>

      {/* Center Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40">
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_20px_white]" />
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
