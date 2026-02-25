'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { X, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  src?: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const defaultImages: GalleryImage[] = [
    { id: 1, title: 'Precision Folding', category: 'Packaging', src: '' },
    { id: 2, title: 'Color Calibration', category: 'Printing', src: '' },
    { id: 3, title: 'Fulfillment Center', category: 'Logistics', src: '' },
    { id: 4, title: 'Material Archive', category: 'Sourcing', src: '' },
    { id: 5, title: 'Die-Cut Processing', category: 'Mechanical', src: '' },
    { id: 6, title: 'Prototype Unit', category: 'Design', src: '' },
    { id: 7, title: 'Scale Production', category: 'Industrial', src: '' },
    { id: 8, title: 'Quality Scanning', category: 'Inspection', src: '' },
    { id: 9, title: 'Custom Finishing', category: 'Craft', src: '' },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  return (
    <section ref={ref} className="py-60 bg-[var(--background)] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase mb-12">
            <div className="w-12 h-[1px] bg-blue-600/30" />
            <span>Process Archive</span>
          </div>

          <h2 className="font-playfair text-6xl md:text-[8rem] font-light leading-[0.85] tracking-tighter text-black mb-16">
            Visual <br />
            <span className="italic text-black/60 font-light block ml-[10%]">Verification.</span>
          </h2>

          <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide max-w-2xl ml-[10%] border-l border-black/5 pl-12">
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
              className="relative group cursor-pointer aspect-[4/5]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-full w-full bg-black/[0.02] rounded-[3rem] border border-black/5 overflow-hidden group-hover:border-black/10 transition-all duration-1000">
                {image.src && (
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                )}

                {/* Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  {!image.src && <Globe size={120} className="text-blue-600" />}
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <div className="space-y-4">
                    <span className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      {image.category}
                    </span>
                    <h3 className="text-3xl font-playfair italic text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                      {image.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-white/10 group-hover:w-full transition-all duration-1000 delay-150" />
                    <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-white/40 group-hover:text-blue-400 transition-colors duration-700 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 ">
                      <span>VERIFY_DATA</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>

                {/* Industrial Grid Lines */}
                <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/[0.05]" />
                <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-white/[0.05]" />
                <div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-white/[0.05]" />
                <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-white/[0.05]" />
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
              className="fixed inset-0 z-[500] bg-[var(--background)]/98 backdrop-blur-xl flex items-center justify-center p-8 "
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-12 right-12 text-black/20 hover:text-black transition-colors group"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl w-full border border-black/5 rounded-[3rem] bg-black/[0.02] aspect-video flex flex-col justify-center items-center relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage.src && (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain p-8"
                  />
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/90 to-transparent pt-20 pb-8 px-12 text-center z-10">
                  <span className="text-blue-600 font-mono text-[8px] tracking-[0.4em] uppercase mb-3 block">
                    Secured Specimen Archive
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl font-light text-black mb-3 tracking-tight">
                    {selectedImage.title}
                  </h3>
                  <div className="flex items-center justify-center gap-4 text-black/30 font-mono text-[8px] tracking-widest uppercase">
                    <span className="w-8 h-[1px] bg-black/5" />
                    <span>{selectedImage.category} {'//'} NODE_{selectedImage.id}</span>
                    <span className="w-8 h-[1px] bg-black/5" />
                  </div>
                </div>

                {/* Decorative HUD Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-black" />
                <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-black" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-black" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-black" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-playfair italic text-white/[0.02] -z-10 select-none pointer-events-none">
        Process
      </div>
    </section>
  );
};

export default GallerySection;
