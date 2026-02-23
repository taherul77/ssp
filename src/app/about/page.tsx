'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield, Phone, Mail, Factory, Building2, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import companyInfo from '@/data/companyInfo.json';

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

export default function About() {
   const { company, owner, vision, mission, values, milestones } = companyInfo;

   const currentYear = new Date().getFullYear();
   const yearsOfExperience = currentYear - parseInt(company.established);

   const iconMap = {
      'Quality Excellence': Award,
      'Innovation': TrendingUp,
      'Customer Focus': Users,
      'Sustainability': Shield,
      'Integrity': Target
   };

   return (
      <main className="bg-[#030712] text-white selection:bg-white/10 selection:text-white overflow-hidden">
         {/* Premium Hero Section */}
         <section className="relative pt-60 pb-40 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-8 relative z-10">
               <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  className="flex flex-col gap-12"
               >
                  <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">
                     <div className="w-12 h-[1px] bg-blue-500/30" />
                     <span>Our Story</span>
                  </div>

                  <h1 className="font-playfair text-[7vw] md:text-[6vw] lg:text-[8rem] font-light leading-[0.9] tracking-tighter text-white max-w-5xl">
                     About <br />
                     <span className="italic text-gray-800 font-light block ml-[10%]">{company.name}</span>
                  </h1>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end pt-10">
                     <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide max-w-xl">
                        {company.tagline}
                     </p>
                     <div className="flex items-center gap-10 opacity-30">
                        <div className="space-y-2">
                           <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest text-right">Established</span>
                           <span className="block text-2xl font-playfair italic text-white text-right">{company.established}</span>
                        </div>
                        <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                           <Globe size={24} className="text-blue-500" />
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Background Blur Glaze */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-[40%] h-[40%] bg-blue-600/5 blur-[120px] -z-10" />
         </section>

         {/* Leadership Section - Orfeo Style */}
         <section className="py-40 relative border-t border-white/5">
            <div className="container mx-auto max-w-7xl px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                  <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     variants={revealVariants}
                     className="space-y-12"
                  >
                     <div className="space-y-8">
                        <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase">Leadership</span>
                        <h2 className="font-playfair text-6xl md:text-7xl font-light tracking-tight leading-none text-white/90">
                           Meet our <br /><span className="italic text-gray-800 font-light">Proprietor.</span>
                        </h2>
                     </div>

                     <div className="space-y-8 max-w-xl">
                        <div className="pt-8 border-t border-white/5 space-y-6">
                           <h3 className="text-3xl font-medium tracking-tight text-white">{owner.name}</h3>
                           <span className="block text-blue-500/60 font-mono text-xs tracking-widest uppercase">{owner.title}</span>
                        </div>

                        <p className="text-gray-500 text-xl font-light leading-relaxed italic">
                           &ldquo;{owner.message}&rdquo;
                        </p>

                        <p className="text-gray-500 font-light text-lg leading-relaxed pt-4">
                           {owner.bio}
                        </p>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: true }}
                     className="relative aspect-[4/5] bg-[#0b0f1a] rounded-[4rem] border border-white/5 overflow-hidden group shadow-2xl"
                  >
                     <Image
                        src={owner.image}
                        alt={owner.name}
                        fill
                        className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-2000"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />

                     {/* Years Experience Seal */}
                     <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600 rounded-full flex flex-col items-center justify-center p-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                        <span className="text-5xl font-bold tracking-tighter text-white">{yearsOfExperience}+</span>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-white/60">Years of Focus</span>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Vision & Mission - Horizontal Grid */}
         <section className="py-40 bg-[#030712] relative">
            <div className="container mx-auto max-w-7xl px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true }}
                     className="bg-[#0b0f1a]/30 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/5 group hover:border-white/10 transition-all duration-700"
                  >
                     <Eye className="text-blue-500/40 group-hover:text-blue-500 mb-10 transition-colors" size={40} />
                     <span className="block text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">Strategic Direction</span>
                     <h2 className="font-playfair text-5xl font-light mb-8 italic text-white/90">Vision</h2>
                     <p className="text-gray-500 text-xl font-light leading-relaxed">{vision}</p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="bg-[#0b0f1a]/30 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/5 group hover:border-white/10 transition-all duration-700"
                  >
                     <Target className="text-blue-500/40 group-hover:text-blue-500 mb-10 transition-colors" size={40} />
                     <span className="block text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">Core Implementation</span>
                     <h2 className="font-playfair text-5xl font-light mb-8 italic text-white/90">Mission</h2>
                     <p className="text-gray-500 text-xl font-light leading-relaxed">{mission}</p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Core Values Section */}
         <section className="py-60 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-8">
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  className="mb-32 text-center"
               >
                  <span className="text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">Ethos</span>
                  <h2 className="font-playfair text-7xl font-light mt-8 text-white/90">Our Core <span className="italic text-gray-800">Values.</span></h2>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {values.map((v, i) => {
                     const Icon = iconMap[v.title as keyof typeof iconMap] || Award;
                     return (
                        <motion.div
                           key={v.title}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ delay: i * 0.1, duration: 1 }}
                           viewport={{ once: true }}
                           className="bg-[#0b0f1a]/20 backdrop-blur-2xl p-12 rounded-[3.5rem] border border-white/5 group hover:border-white/10 transition-all duration-700"
                        >
                           <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors duration-700">
                              <Icon className="text-blue-500 group-hover:text-white transition-colors" size={28} />
                           </div>
                           <h3 className="text-2xl font-medium mb-6 tracking-tight text-white/90">{v.title}</h3>
                           <p className="text-gray-500 font-light leading-relaxed">{v.description}</p>
                        </motion.div>
                     );
                  })}
               </div>
            </div>

            {/* Massive Decorative Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-playfair italic text-white/[0.02] -z-10 select-none">
               Integrity
            </div>
         </section>

         {/* Journey / Milestones */}
         <section className="py-40 bg-[#030712] border-t border-white/5">
            <div className="container mx-auto max-w-7xl px-8">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                  <div className="lg:col-span-4 sticky top-40 h-fit">
                     <div className="space-y-10">
                        <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase">Traversing Time</span>
                        <h2 className="font-playfair text-6xl font-light text-white leading-[0.9]">
                           A Legacy <br /> in the <span className="italic text-gray-800">Making.</span>
                        </h2>
                        <p className="text-gray-500 font-light text-lg max-w-sm">
                           Tracking the evolution of industrial excellence and technological adaptation.
                        </p>
                     </div>
                  </div>

                  <div className="lg:col-span-8 space-y-32">
                     {milestones.map((m) => (
                        <motion.div
                           key={m.year}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.2 }}
                           viewport={{ once: true }}
                           className="group relative pl-24 border-l border-white/5 pb-10"
                        >
                           <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border border-blue-500 bg-[#030712] z-10 group-hover:scale-150 transition-transform duration-500" />
                           <div className="space-y-6">
                              <span className="text-blue-500 font-mono text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                                 {m.year}
                              </span>
                              <h3 className="text-3xl font-medium tracking-tight text-white/90">{m.title}</h3>
                              <p className="text-gray-500 font-light text-xl leading-relaxed max-w-2xl">
                                 {m.description}
                              </p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Modern Contact HUD */}
         <section className="py-60 relative overflow-hidden bg-[#030712]">
            <div className="container mx-auto max-w-7xl px-8">
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32"
               >
                  <div>
                     <span className="text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">Coordinates</span>
                     <h2 className="font-playfair text-7xl font-light text-white mt-8 italic">Global Reach.</h2>
                  </div>
                  <div className="flex items-end">
                     <p className="text-gray-500 font-light text-xl leading-relaxed max-w-md">
                        Based in the industrial heart of Dhaka, we bridge local expertise with international standards.
                     </p>
                  </div>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                     { icon: Building2, label: "HQ / Office", content: [`${company.office.street}`, `${company.office.city}-${company.office.zip}`, `${company.office.country}`] },
                     { icon: Factory, label: "Industrial Facility", content: [`${company.factory.street}`, `${company.factory.city}-${company.factory.zip}`, `${company.factory.country}`] },
                     { icon: Phone, label: "Direct Comms", content: company.phones },
                     { icon: Mail, label: "Digital Inquiry", content: [company.email], isEmail: true }
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#0b0f1a]/40 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/5 group hover:border-white/10 transition-all duration-700"
                     >
                        <div className="flex flex-col h-full justify-between gap-12">
                           <div className="flex justify-between items-start">
                              <item.icon className="text-blue-500/40 group-hover:text-blue-500 transition-colors" size={32} />
                              <span className="text-gray-800 text-[10px] font-mono tracking-widest uppercase">SSP_NODE_0{i + 1}</span>
                           </div>
                           <div className="space-y-6">
                              <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase">{item.label}</span>
                              <div className="space-y-2">
                                 {item.content.map((line, idx) => (
                                    item.isEmail ? (
                                       <a key={idx} href={`mailto:${line}`} className="block text-2xl font-light text-white/90 hover:text-blue-500 transition-colors truncate">
                                          {line}
                                       </a>
                                    ) : (
                                       <p key={idx} className="text-2xl font-light text-white/90">{line}</p>
                                    )
                                 ))}
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Final CTA */}
         <section className="py-80 flex flex-col items-center justify-center text-center relative">
            <motion.h2
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="font-playfair text-[10vw] font-light tracking-tighter leading-none mb-24 text-white/90"
            >
               Forge the <span className="italic text-gray-800">Future.</span>
            </motion.h2>
            <Link href="/contact">
               <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-20 py-8 rounded-full border border-white/10 text-xl font-light tracking-[0.4em] uppercase transition-all duration-700"
               >
                  Connect Now <ArrowRight size={20} className="inline ml-4" />
               </motion.button>
            </Link>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
         </section>
      </main>
   );
}
