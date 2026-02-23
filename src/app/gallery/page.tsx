'use client';

import GallerySection from '@/components/GallerySection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Gallery() {
  // Extended gallery images
  const galleryImages = [
    { id: 1, title: 'Industrial Roller Brushes', category: 'Products' },
    { id: 2, title: 'Manufacturing Facility', category: 'Manufacturing' },
    { id: 3, title: 'Quality Control Lab', category: 'Quality' },
    { id: 4, title: 'Custom Brush Solutions', category: 'Custom' },
    { id: 5, title: 'Strip Brushes Production', category: 'Manufacturing' },
    { id: 6, title: 'Team Collaboration', category: 'Team' },
    { id: 7, title: 'Warehouse & Storage', category: 'Facilities' },
    { id: 8, title: 'Testing & Inspection', category: 'Quality' },
    { id: 9, title: 'Product Showcase', category: 'Products' },
    { id: 10, title: 'Rotary Brushes', category: 'Products' },
    { id: 11, title: 'Assembly Line', category: 'Manufacturing' },
    { id: 12, title: 'R&D Department', category: 'Innovation' },
    { id: 13, title: 'Conveyor Cleaning Systems', category: 'Products' },
    { id: 14, title: 'Client Consultation', category: 'Team' },
    { id: 15, title: 'Packaging Area', category: 'Facilities' },
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our facilities, products, and team in action
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <GallerySection images={galleryImages} />

      {/* Stats Section */}
      <section className="py-40 bg-[var(--background)] border-t border-black/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '5000+', label: 'Square Meters' },
              { val: '100+', label: 'Team Members' },
              { val: '24/7', label: 'Production' },
              { val: '50+', label: 'Countries Served' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-6xl font-playfair italic text-black/90">{stat.val}</div>
                <div className="text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 flex flex-col items-center justify-center text-center relative bg-[var(--background)] border-t border-black/5">
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase mb-12">Next Steps</span>
            <h2 className="font-playfair text-[8vw] font-light text-black mb-20 tracking-tighter leading-none">
              Want to See <br /><span className="italic text-black/60">More?</span>
            </h2>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                className="px-20 py-8 rounded-full border border-black/10 text-xl font-light tracking-[0.4em] uppercase transition-all duration-700 bg-black text-white"
              >
                Schedule Tour <ArrowUpRight size={20} className="inline ml-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      </section>
    </main>
  );
}





