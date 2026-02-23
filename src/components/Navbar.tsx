'use client';

import { motion, AnimatePresence, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { Plus, X, ArrowRight, Instagram, Linkedin, Twitter, Globe, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import companyInfo from '@/data/companyInfo.json';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const { company } = companyInfo;

  const yProgress = useTransform(scrollY, [0, 100], [0, -10]);

  const smoothY = useSpring(yProgress, { stiffness: 100, damping: 30 });

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuLinks = [
    { name: 'HOME', href: '/' },
    { name: 'Our Products', href: '/products' },
    { name: 'Our Clients', href: '/clients' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      scaleY: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const staggerLinks: Variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const linkVariants: Variants = {
    closed: { y: 100, opacity: 0, rotateX: 30 },
    open: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        <motion.div
          style={{ y: smoothY }}
          className="container mx-auto max-w-[1920px] px-8  flex items-center justify-between"
        >
          {/* Left: Brand & Menu Toggle */}
          <div className="flex items-center gap-16 pointer-events-auto">
            <Link href="/" className="group flex items-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0" />
                <div className="relative flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo/ss-printers-logo.png"
                    alt="SS Printers Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 text-black/80 hover:text-black transition-all group"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Plus size={20} className="absolute group-hover:rotate-90 transition-all duration-500 text-black" />
              </div>
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase">MENU</span>
            </button>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-6 pointer-events-auto">
            <Link href="/contact" className="hidden md:block z-10">
              <button className="group relative text-[10px] font-bold tracking-[0.3em] uppercase text-white bg-black px-8 py-4 rounded-md border border-black hover:bg-transparent hover:text-black transition-all duration-500 overflow-hidden">
                {/* Initial Text */}
                <div className="relative z-10 flex items-center gap-3 transition-transform duration-500 group-hover:-translate-y-12">
                  START PROJECT <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover Text & Background */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-white text-black font-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 uppercase">
                  Let&apos;s talk
                </div>
              </button>
            </Link>
          </div>
        </motion.div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[200] bg-[var(--background)] origin-top flex flex-col pt-40 px-8 pb-12 overflow-hidden"
          >
            {/* Menu Header (Logo & Close) */}
            <div className="absolute top-10 left-8 right-8 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center overflow-hidden bg-black/5">
                  <Image
                    src="/logo/ss-printers-logo.png"
                    alt="SS Printers Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="text-xl font-playfair tracking-tight text-black/90">SS Printers.</span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 group hover:text-blue-600 transition-colors text-black"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                <span className="text-[10px] font-black tracking-[0.5em] uppercase">CLOSE</span>
              </button>
            </div>

            <div className="container mx-auto max-w-7xl h-full grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Navigation Links */}
              <motion.div
                variants={staggerLinks}
                className="flex flex-col justify-center space-y-2 lg:space-y-4"
              >
                {menuLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants} className="overflow-hidden">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-playfair text-[8vw] lg:text-[4.5rem] font-light leading-[0.9] tracking-tighter text-black/90 hover:italic transition-all duration-700 block hover:pl-10 hover:text-black"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Side Info & Socials */}
              <div className="flex flex-col justify-end space-y-16 pb-12 lg:pl-20 border-l border-black/5">
                <div className="space-y-8">
                  <span className="text-blue-600 text-[10px] font-mono tracking-[0.6em] uppercase">Inquiries</span>
                  <div className="space-y-4">
                    <Link href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-4 text-lg font-light text-gray-400 hover:text-black transition-colors group">
                      <Phone size={18} className="text-black/20 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                      <span className="text-gray-400 group-hover:text-black transition-colors">{company.phones[0]}</span>
                    </Link>
                    <Link href={`mailto:${company.email}`} className="flex items-center gap-4 text-lg font-light text-gray-400 hover:text-black transition-colors group">
                      <Mail size={18} className="text-black/20 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                      <span className="text-gray-400 group-hover:text-black transition-colors">{company.email}</span>
                    </Link>
                  </div>
                </div>

                <div className="space-y-8">
                  <span className="text-blue-600 text-[10px] font-mono tracking-[0.6em] uppercase">Social Media</span>
                  <div className="flex gap-10">
                    {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                      <Link key={i} href="#" className="text-gray-400 hover:text-black transition-all transform hover:-translate-y-1">
                        <Icon size={24} />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-10 border-t border-black/5 ">
                  <div className="flex items-baseline gap-4">
                    <Globe size={12} className="text-gray-400" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-black">Factory Active — 23.8° N / 90.4° E</span>
                  </div>
                  <span className="block text-[10px] font-mono tracking-[0.8em] text-gray-400 uppercase ml-7">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Background Blur Glaze */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_100%)] pointer-events-none -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
