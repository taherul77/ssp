'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  'AmanGroup.jpg',
  'AmanPackaging.jpg',
  'AmanTex.jpg',
  'AmanhFashion.jpg',
  'ASSTDev.jpg',
  'AuraBistro.jpg',
  'Bauroveritus.jpg',
  'BFC.jpg',
  'Cocacola.jpg',
  'DewhristShanta.jpg',
  'DirdGroup.jpg',
  'Esquare.jpg',
  'HyunApparels.jpg',
  'IslamBrother(AmanGroup).jpg',
  'KearyIntSchool.jpg',
  'MidlanBank.jpg',
  'MMDC.jpg',
  'PalmalGroup.jpg',
  'PoplarLogo.jpg',
  'REDChicken.jpg',
  'RoyalDenim.jpg',
  'Rustic.jpg',
  'SeithShippingLinesltd.jpg',
  'SheratonRestaurant.jpg',
  'SKTraders.jpg',
  'SpeedBuilders.jpg',
  'SQGroup.jpg',
  'StalloChicken.jpg',
  'TechIT.jpg',
  'TorrFashion.jpg',
  'TorrGroup.jpg',
  'Tradewind.jpg',
  'TradewingShipping.jpg',
  'TransformEducation.jpg',
  'TridentShippingLines.jpg',
  'WeddingDream.jpg',
  'WilvertTowerCraneLgo.jpg',
  'ZoomlionHeaveDutyIndustry.jpg',
];

const ClientsSection = () => {
  // Duplicate the logos array for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            Our Valued Clients
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Proudly serving industry leaders and businesses across various sectors worldwide
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Marquee Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 py-8"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 w-40 h-24 relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex items-center justify-center group"
                >
                  <Image
                    src={`/Client/${logo}`}
                    alt={logo.replace('.jpg', '')}
                    fill
                    className="object-contain p-3 transition-all duration-300"
                    sizes="160px"
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
