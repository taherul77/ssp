'use client';

import GallerySection from '@/components/GallerySection';
import { motion } from 'framer-motion';

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
    <main className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
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
      </section>

      {/* Gallery Section */}
      <GallerySection images={galleryImages} />

      {/* Stats Section */}
      <section className="py-24 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Square Meters</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Production</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Countries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Want to See More?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a facility tour or request a product demonstration
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4.5 rounded-xl font-bold uppercase text-sm tracking-wider hover:from-blue-700 hover:to-blue-800 transition-all shadow-[0_8px_25px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_35px_rgba(220,38,38,0.45)] relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}





