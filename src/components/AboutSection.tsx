'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Sparkles, Zap, TrendingUp } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const features = [
    { icon: Sparkles, title: 'Precision Logic', description: 'Engineered structural integrity with micrometer accuracy in every fold and cut.' },
    { icon: Zap, title: 'Rapid Output', description: 'Mass-scale industrial fulfillment without compromising artistic fidelity.' },
    { icon: Shield, title: 'Global Trust', description: 'Serving as the strategic mechanical partner for the world’s elite brands.' },
    { icon: TrendingUp, title: 'Scale Focus', description: 'Architecture designed for growth, from prototype to global distribution.' }
  ];

  return (
    <section ref={ref} className="py-60 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Left Column: Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="lg:col-span-12 mb-32"
          >
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-3 px-4 py-2 border border-white/5 rounded-full text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-12 bg-white/5">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                Our Philosophy
              </span>
              <h2 className="text-6xl md:text-[8rem] font-playfair font-normal text-white mb-16 tracking-tighter leading-[0.85]">
                Defining the <br />
                <span className="italic text-white/20 font-light pl-[10%]">Next Standard.</span>
              </h2>
              <p className="text-gray-500 text-2xl font-light leading-relaxed max-w-2xl tracking-wide ml-[10%] border-l border-white/5 pl-12 italic">
                Since {companyInfo.company.established}, we have navigated the intersection of mechanical mastery and visual communication.
                SS Printers provides the structural spine for global industrial identity.
              </p>
            </div>
          </motion.div>

          {/* Grid: Capability Cards */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                  viewport={{ once: true }}
                  className="p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-white/[0.04] transition-all duration-700 group hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-700 shadow-2xl">
                    <Icon className="text-gray-600 group-hover:text-white transition-colors duration-700" size={24} />
                  </div>
                  <h3 className="text-2xl font-normal tracking-tight text-white/90 mb-5">{feature.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-lg">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Floating Stat Indicator */}
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-wrap gap-20">
          {[
            { label: 'Founded', val: companyInfo.company.established },
            { label: 'Precision', val: '0.01mm' },
            { label: 'Capacity', val: 'Industrial+' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <span className="block text-[10px] text-blue-500 font-mono tracking-[0.5em] uppercase">{stat.label}</span>
              <span className="block text-3xl font-playfair italic text-white/90">{stat.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Layer */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/[0.03] to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutSection;
