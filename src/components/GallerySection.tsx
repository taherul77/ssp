'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { X, Globe, ArrowRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const defaultImages = [
    { id: 1, title: 'Precision Folding', category: 'Packaging' },
    { id: 2, title: 'Color Calibration', category: 'Printing' },
    { id: 3, title: 'Fulfillment Center', category: 'Logistics' },
    { id: 4, title: 'Material Archive', category: 'Sourcing' },
    { id: 5, title: 'Die-Cut Processing', category: 'Mechanical' },
    { id: 6, title: 'Prototype Unit', category: 'Design' },
    { id: 7, title: 'Scale Production', category: 'Industrial' },
    { id: 8, title: 'Quality Scanning', category: 'Inspection' },
    { id: 9, title: 'Custom Finishing', category: 'Craft' },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  return (
    <section ref={ref} className="py-60 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase mb-12">
            <div className="w-12 h-[1px] bg-blue-500/30" />
            <span>Process Archive</span>
          </div>

          <h2 className="font-playfair text-6xl md:text-[8rem] font-light leading-[0.85] tracking-tighter text-white mb-16">
            Visual <br />
            <span className="italic text-white/20 font-light block ml-[10%]">Verification.</span>
          </h2>

          <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide max-w-2xl ml-[10%] border-l border-white/5 pl-12">
            A curated documentation of our industrial methodologies and structural achievements.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="relative group cursor-none aspect-[4/5]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-full w-full bg-[#0b0f1a] rounded-[3rem] border border-white/5 overflow-hidden group-hover:border-white/10 transition-all duration-1000">
                {/* Image Placeholder with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.05] via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe size={120} className="text-blue-500" />
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <div className="space-y-4">
                    <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      {image.category}
                    </span>
                    <h3 className="text-3xl font-playfair italic text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                      {image.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-white/10 group-hover:w-full transition-all duration-1000 delay-150" />
                    <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-gray-700 group-hover:text-blue-500 transition-colors duration-700 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 ">
                      <span>VERIFY_DATA</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>

                {/* Industrial Grid Lines */}
                <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/[0.02]" />
                <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-white/[0.02]" />
                <div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-white/[0.02]" />
                <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-white/[0.02]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[500] bg-[#030712]/95 backdrop-blur-3xl flex items-center justify-center p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-12 right-12 text-white/20 hover:text-white transition-colors group"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-5xl w-full border border-white/5 rounded-[4rem] bg-[#0b0f1a] aspect-video flex flex-col p-20 justify-center items-center relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-20" />

                <span className="text-blue-500 font-mono text-xs tracking-[1em] uppercase mb-12">Viewing Specimen</span>
                <h3 className="font-playfair text-7xl font-light text-white mb-8 tracking-tighter">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
                  Category {'//'} {selectedImage.category} {'//'} Node_{selectedImage.id}
                </p>

                {/* Decorative HUD Elements */}
                <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-white/10" />
                <div className="absolute top-12 right-12 w-20 h-20 border-t border-r border-white/10" />
                <div className="absolute bottom-12 left-12 w-20 h-20 border-b border-l border-white/10" />
                <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-white/10" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-playfair italic text-white/[0.01] -z-10 select-none pointer-events-none">
        Process
      </div>
    </section>
  );
};

export default GallerySection;
