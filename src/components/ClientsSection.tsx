'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  'AmanGroup.jpg', 'AmanPackaging.jpg', 'AmanTex.jpg', 'AmanhFashion.jpg', 'ASSTDev.jpg',
  'AuraBistro.jpg', 'Bauroveritus.jpg', 'BFC.jpg', 'Cocacola.jpg', 'DewhristShanta.jpg',
  'DirdGroup.jpg', 'Esquare.jpg', 'HyunApparels.jpg', 'IslamBrother(AmanGroup).jpg',
  'KearyIntSchool.jpg', 'MidlanBank.jpg', 'MMDC.jpg', 'PalmalGroup.jpg', 'PoplarLogo.jpg',
  'REDChicken.jpg', 'RoyalDenim.jpg', 'Rustic.jpg', 'SeithShippingLinesltd.jpg',
  'SheratonRestaurant.jpg', 'SKTraders.jpg', 'SpeedBuilders.jpg', 'SQGroup.jpg',
  'StalloChicken.jpg', 'TechIT.jpg', 'TorrFashion.jpg', 'TorrGroup.jpg', 'Tradewind.jpg',
  'TradewingShipping.jpg', 'TransformEducation.jpg', 'TridentShippingLines.jpg',
  'WeddingDream.jpg', 'WilvertTowerCraneLgo.jpg', 'ZoomlionHeaveDutyIndustry.jpg',
];

const ClientsSection = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-60 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-40"
        >
          <span className="text-blue-600 font-bold tracking-[0.6em] uppercase text-[10px] mb-8 inline-block">
            Strategic Partners
          </span>
          <h2 className="text-6xl md:text-8xl font-playfair font-normal text-black mb-4 tracking-tighter leading-none">
            Scale through <br />
            <span className="italic text-gray-400 font-light pl-10">Precision.</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative group mt-20">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-60 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-60 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-10 py-10"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 w-48 h-16 relative grayscale  hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out cursor-default transform hover:scale-110"
                >
                  <Image
                    src={`/Client/${logo}`}
                    alt={logo.replace('.jpg', '')}
                    fill
                    className="object-contain"
                    sizes="192px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
