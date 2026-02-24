'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
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
        <div className="mt-20 overflow-hidden">
          <Marquee
            speed={60}
            pauseOnHover={true}
            gradient={true}
            gradientColor="#FFFDF6"
            gradientWidth={100}
            className="py-10 overflow-hidden"
          >
            {clientLogos.map((logo, index) => (
              <div key={`${logo}-${index}`} className="flex-shrink-0 pr-20">
                <div className="w-48 h-16 relative grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out cursor-default transform hover:scale-110 mix-blend-multiply">
                  <Image
                    src={`/Client/${logo}`}
                    alt={logo.replace('.jpg', '')}
                    fill
                    className="object-contain"
                    sizes="192px"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
