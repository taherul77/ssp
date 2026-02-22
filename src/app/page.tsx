'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue, Variants } from 'framer-motion';
import { ArrowRight, Layers, Command, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductCard from '@/components/ProductCard';
import ClientsSection from '@/components/ClientsSection';
import companyInfo from '@/data/companyInfo.json';
import productsData from '@/data/products.json';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Sub-components to fix Hook violations (useTransform inside callbacks)

const BackgroundIndex = ({ 
  index, 
  total, 
  progress 
}: { 
  index: number; 
  total: number; 
  progress: MotionValue<number> 
}) => {
  const opacity = useTransform(
    progress, 
    [index / total, (index + 0.3) / total, (index + 0.7) / total, (index + 1) / total], 
    [0, 0.05, 0.05, 0]
  );
  const scale = useTransform(
    progress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [1.1, 1, 0.9]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <span className="text-[50vw] font-bold text-white leading-none select-none">
        0{index + 1}
      </span>
    </motion.div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  features: string[];
  price?: string;
  image?: string;
}

const GalleryItem = ({ 
  product, 
  index, 
  total, 
  progress 
}: { 
  product: Product; 
  index: number; 
  total: number; 
  progress: MotionValue<number> 
}) => {
  const scale = useTransform(
    progress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0.95, 1, 0.95]
  );

  return (
    <motion.div 
      style={{ scale }}
      className="flex-shrink-0 w-[70vw] md:w-[45vw] lg:w-[35vw]"
    >
      <ProductCard product={product} index={index} />
    </motion.div>
  );
};

const ProgressBar = ({ 
  progress 
}: { 
  progress: MotionValue<number> 
}) => {
  return (
    <div className="h-1 w-full bg-white/5 overflow-hidden rounded-full font-sans">
      <motion.div 
        style={{ scaleX: progress }}
        className="h-full bg-blue-500 origin-left"
      />
    </div>
  );
};

export default function Home() {
  const horizontalRootRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRootRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(horizontalProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const featuredProducts = productsData.products
    .filter((p) => p.featured)
    .slice(0, 6);
    
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - parseInt(companyInfo.company.established);

  return (
        <main className="bg-[#030712] text-white selection:bg-white/10 selection:text-white">
      <HeroSection
        title={companyInfo.company.name}
        description={companyInfo.company.tagline}
        primaryCta={{ text: "Discover our work", href: "/products" }}
      />

      {/* Modern Intro Section - High impact Serif */}
      <section className="py-60 relative">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="mb-40 max-w-4xl"
          >
            <h2 className="font-playfair text-6xl md:text-[9rem] font-normal tracking-tight leading-[0.9] text-white/90">
              Defining the <br />
              <span className="italic text-white/20 font-light px-2">Next Standard.</span>
            </h2>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: "Structural Logic", desc: "Engineered corrugated structures." },
              { icon: Command, title: "Chroma Precision", desc: "High-fidelity color reproduction." },
              { icon: Zap, title: "Rapid Output", desc: "Industrial capacity fulfillment." },
              { icon: Target, title: "Bespoke Identity", desc: "Tailored labeling systems." }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 1 }}
                viewport={{ once: true }}
                className="bg-[#0b0f1a]/30 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/5 group hover:border-white/10 transition-all duration-700"
              >
                <s.icon className="text-blue-500/60 group-hover:text-blue-500 mb-10 transition-colors" size={32} />
                <h3 className="text-2xl font-medium mb-4 tracking-tight">{s.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* SPLIT-SCREEN HORIZONTAL GALLERY */}
      <section ref={horizontalRootRef} className="relative h-[1200vh] bg-[#030712] z-30">
        <div className="sticky top-0 h-screen flex overflow-hidden">
          
           {/* Left Side: Fixed Information Pane - Locked and Clipless */}
          <div className="w-[40%] h-full flex flex-col justify-center p-16 lg:p-32 border-r border-white/5 relative z-50 bg-[#030712]">
             <div className="space-y-12 max-w-sm">
                <div className="space-y-8">
                   <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">
                      <div className="w-8 h-[1px] bg-current" />
                      <span>Archive</span>
                   </div>
                   <h2 className="font-playfair text-6xl lg:text-[5.5vw] font-normal text-white leading-[0.8] tracking-tighter">
                     Featured <br />
                     <span className="italic text-white/20 font-light block ml-[10%]">Specimens.</span>
                   </h2>
                </div>

                <div className="space-y-10">
                   <p className="text-gray-500 font-light text-lg leading-relaxed tracking-wide">
                      A curated selection of industrial high-fidelity reproduction and structural engineering projects.
                   </p>
                   <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">
                      <span>Scroll to traverse</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
                         <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      </div>
                   </div>
                   
                   <div className="w-full pt-10">
                      <ProgressBar progress={smoothProgress} />
                   </div>
                </div>

                {/* Fixed Metadata HUD */}
                <div className="pt-12 flex justify-between items-end border-t border-white/5">
                   <div className="space-y-2">
                      <span className="block text-[10px] font-mono text-white/10 uppercase tracking-widest">Selection ID</span>
                      <span className="block text-[14px] font-mono text-gray-400">SSP_ARC_2026</span>
                   </div>
                   <div className="text-[5rem] font-playfair italic text-white/5 leading-none select-none">
                      {featuredProducts.length}
                   </div>
                </div>
             </div>
          </div>

           {/* Right Side: Horizontal Scroll Track - Strictly 60% */}
          <div className="w-[60%] h-full relative overflow-hidden bg-[#030712]/50 z-10">
             {/* Massive Background Index Numbers - Specific for the right pane */}
             {featuredProducts.map((_, i) => (
               <BackgroundIndex 
                 key={i} 
                 index={i} 
                 total={featuredProducts.length} 
                 progress={smoothProgress} 
               />
             ))}

              <motion.div 
                style={{ x: useTransform(smoothProgress, [0, 1], ["0vw", "-380vw"]) }}
                className="h-full flex items-center gap-[15vw] pl-[10vw] pr-[80vw]"
              >
                {featuredProducts.map((product, index) => (
                  <GalleryItem 
                    key={product.id} 
                    product={product} 
                    index={index} 
                    total={featuredProducts.length} 
                    progress={smoothProgress} 
                  />
                ))}
                
                {/* Final CTA in the track */}
                <div className="flex-shrink-0 w-[40vw] flex flex-col items-center justify-center gap-12 text-center h-full">
                   <h3 className="font-playfair text-6xl font-normal tracking-tight text-white/20 italic">
                      Discovery.
                   </h3>
                   <Link href="/products" className="group flex flex-col items-center gap-6">
                      <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-700">
                        <ArrowRight size={32} className="text-white group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-30 group-hover:opacity-100 transition-opacity">Explore All</span>
                   </Link>
                </div>
             </motion.div>
             
             {/* Glass Overlay for depth */}
             <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Final Call to Legacy */}
      <section className="py-60 bg-[#030712] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="space-y-20"
              >
                 <h2 className="font-playfair text-7xl md:text-[9rem] font-normal tracking-tighter leading-[0.85] text-white">
                   Precision <br /><span className="italic text-white/20 font-light">Craft.</span>
                 </h2>
                 <div className="space-y-12">
                   {companyInfo.values.slice(0, 2).map((value: any, index: number) => (
                     <div key={index} className="space-y-4">
                       <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em]">VALUE-0{index+1}</span>
                       <h3 className="text-3xl font-medium tracking-tight text-white/90">{value.title}</h3>
                       <p className="text-gray-500 text-xl font-light leading-relaxed max-w-md">{value.description}</p>
                     </div>
                   ))}
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="relative aspect-square bg-[#0b0f1a] rounded-[5rem] border border-white/5 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(3,7,18,1)] overflow-hidden group"
              >
                 <div className="text-[25rem] font-bold text-white/5 select-none leading-none group-hover:scale-110 transition-transform duration-2000">
                    {yearsOfExperience}
                 </div>
                 <div className="absolute inset-0 bg-blue-600/5 blur-[120px] pointer-events-none" />
                 <div className="absolute bottom-24 text-[11px] tracking-[0.8em] text-white/20 uppercase font-black">Years Established</div>
              </motion.div>
           </div>
        </div>
      </section>

      <ClientsSection />

      {/* CTA Final Statement */}
      <section className="py-80 flex flex-col items-center justify-center text-center relative">
         <motion.h2 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="font-playfair text-[12vw] font-normal tracking-tighter leading-none mb-24 text-white/90"
         >
           Lets build.
         </motion.h2>
         <Link href="/contact">
           <motion.button
             whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
             whileTap={{ scale: 0.98 }}
             className="px-20 py-8 rounded-full border border-white/10 text-xl font-light tracking-[0.4em] uppercase transition-all duration-700"
           >
             Start Discovery
           </motion.button>
         </Link>
         
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      </section>
    </main>
  );
}
