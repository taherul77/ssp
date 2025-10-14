'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { ZoomIn, X } from 'lucide-react';

const GallerySection = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Default gallery images if none provided
  const defaultImages = [
    { id: 1, title: 'Industrial Roller Brush', category: 'Manufacturing' },
    { id: 2, title: 'Quality Control', category: 'Quality' },
    { id: 3, title: 'Custom Solutions', category: 'Products' },
    { id: 4, title: 'Production Line', category: 'Manufacturing' },
    { id: 5, title: 'Strip Brushes', category: 'Products' },
    { id: 6, title: 'Team at Work', category: 'Team' },
    { id: 7, title: 'Warehouse', category: 'Facilities' },
    { id: 8, title: 'Testing Lab', category: 'Quality' },
    { id: 9, title: 'Product Range', category: 'Products' },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Explore Our Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our state-of-the-art facilities, products, and team in action.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => openLightbox(image)}
            >
              {/* Image Placeholder with Gradient */}
              <div className="relative h-80 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">📷</span>
                </div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                >
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-bold text-xl mb-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn size={20} className="mr-2" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-blue-500 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Image Placeholder */}
              <div className="relative bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-lg h-[600px] flex items-center justify-center">
                <span className="text-9xl">📷</span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-bold text-2xl">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;





