'use client';

import { motion, Variants } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock, Building2, Factory, ArrowUpRight } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';
import Link from 'next/link';

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

export default function Contact() {
   const { company } = companyInfo;

   return (
      <main className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/5 selection:text-black overflow-hidden">
         {/* Hero Section */}
         <section className="relative pt-60 pb-32">
            <div className="container mx-auto max-w-7xl px-8 relative z-10">
               <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  className="flex flex-col gap-12"
               >
                  <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase">
                     <div className="w-12 h-[1px] bg-blue-500/30" />
                     <span>Connect with us</span>
                  </div>

                  <h1 className="font-playfair text-[8vw] lg:text-[7rem] font-light leading-[0.9] tracking-tighter text-black max-w-5xl">
                     Start the <br />
                     <span className="italic text-black/60 font-light block ml-[10%]">Conversation.</span>
                  </h1>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end pt-10">
                     <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide max-w-xl">
                        {company.tagline}
                     </p>
                     <div className="flex items-center gap-8 ">
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center animate-bounce">
                           <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">Scroll to explore contact points</span>
                     </div>
                  </div>
               </motion.div>
            </div>
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] -z-10" />
         </section>

         {/* Modern Contact Form & Info Grid */}
         <section className="py-40 relative border-t border-black/5">
            <div className="container mx-auto max-w-7xl px-8">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                  {/* Left Column: Form Section */}
                  <div className="lg:col-span-7">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="space-y-16"
                     >
                        <div className="space-y-8">
                           <span className="text-blue-600 font-mono text-[10px] tracking-[0.6em] uppercase">Inquiry Portal</span>
                           <h2 className="font-playfair text-6xl font-light tracking-tight text-black/90 leading-none">
                              Tell us about <br /><span className="italic text-black/60 font-light">Your Project.</span>
                           </h2>
                        </div>

                        <div className="bg-black/[0.02] backdrop-blur-3xl p-10 md:p-16 rounded-[4rem] border border-black/5">
                           <ContactForm />
                        </div>
                     </motion.div>
                  </div>

                  {/* Right Column: Info Section */}
                  <div className="lg:col-span-5 space-y-12">
                     {[
                        { icon: Building2, label: "Main Office", content: [`${company.office.street}`, `${company.office.city}-${company.office.zip}`, `${company.office.country}`] },
                        { icon: Factory, label: "Industrial Facility", content: [`${company.factory.street}`, `${company.factory.city}-${company.factory.zip}`, `${company.factory.country}`] },
                        { icon: Phone, label: "Phone Lines", content: company.phones },
                        { icon: Mail, label: "Email Correspondence", content: [company.email], isEmail: true }
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1, duration: 1 }}
                           viewport={{ once: true }}
                           className="bg-black/[0.02] backdrop-blur-2xl p-12 rounded-[3rem] border border-black/5 group hover:border-black/10 transition-all duration-700"
                        >
                           <div className="flex justify-between items-start mb-10">
                              <item.icon className="text-blue-600 group-hover:scale-110 transition-transform duration-500" size={28} />
                              <span className="text-gray-400 text-[10px] font-mono tracking-widest uppercase">NODE_0{i + 1}</span>
                           </div>
                           <div className="space-y-4">
                              <span className="text-blue-600 font-mono text-[10px] tracking-[0.5em] uppercase">{item.label}</span>
                              <div className="space-y-1">
                                 {item.content.map((line, idx) => (
                                    item.isEmail ? (
                                       <a key={idx} href={`mailto:${line}`} className="block text-2xl font-light text-black/90 hover:text-blue-600 transition-colors">
                                          {line}
                                       </a>
                                    ) : (
                                       <p key={idx} className="text-2xl font-light text-black/90 truncate">{line}</p>
                                    )
                                 ))}
                              </div>
                           </div>
                        </motion.div>
                     ))}

                     {/* Hours Section */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="p-12 rounded-[3.5rem] bg-blue-600/5 border border-blue-600/10 space-y-8"
                     >
                        <div className="flex items-center gap-4 text-blue-600 font-mono text-[10px] tracking-[0.5em] uppercase">
                           <Clock size={16} />
                           <span>Operational Hours</span>
                        </div>
                        <div className="space-y-4">
                           <div className="flex justify-between items-end border-b border-black/5 pb-4">
                              <span className="text-gray-500 font-light">Sat — Thu</span>
                              <span className="text-xl font-mono text-black/80">24 HOURS</span>
                           </div>
                           <div className="flex justify-between items-end pb-4">
                              <span className="text-gray-500 font-light">Friday</span>
                              <span className="text-xl font-mono text-gray-700 italic">CLOSED</span>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>

         {/* FAQ Overlay Section */}
         <section className="py-40 bg-[var(--background)] border-t border-black/5 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-8">
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  className="mb-32 max-w-3xl"
               >
                  <span className="text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase">Information Center</span>
                  <h2 className="font-playfair text-7xl font-light text-black mt-10">Frequently <br /><span className="italic text-black/60">Asked.</span></h2>
               </motion.div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
                  {[
                     { q: 'What types of printing services do you offer?', a: 'We offer a comprehensive range of printing services including paper products, brochures, catalogs, hangtags, and custom solutions.' },
                     { q: 'Do you provide custom packaging?', a: 'Yes! We specialize in custom packaging including corrugated boxes, cardboard boxes, and branded materials.' },
                     { q: 'What garment accessories do you supply?', a: 'We supply woven labels, sew-on labels, hangtags, tag pins, and various other textile accessories.' },
                     { q: 'What is the minimum order quantity?', a: 'Minimum order quantities vary by product type. Contact us for specific product requirements.' },
                     { q: 'How long does an order take?', a: 'Standard orders typically take 5-10 business days. Custom orders may require 2-3 weeks.' },
                     { q: 'Do you offer delivery services?', a: 'Yes, we provide delivery services across Dhaka and major cities in Bangladesh.' }
                  ].map((faq, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                        viewport={{ once: true }}
                        className="group"
                     >
                        <div className="p-8 border-b border-black/5 group-hover:border-blue-600/30 transition-colors duration-700">
                           <h3 className="text-2xl font-light text-black/80 group-hover:text-black transition-colors flex items-center gap-6">
                              <span className="text-[10px] font-mono text-blue-600  group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                              {faq.q}
                           </h3>
                           <p className="mt-6 text-gray-500 font-light leading-relaxed pl-12 max-w-xl group-hover:text-gray-400">
                              {faq.a}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-playfair italic text-black/[0.01] -z-10 select-none">
               Questions
            </div>
         </section>

         {/* Final Call */}
         <section className="py-80 flex flex-col items-center justify-center text-center relative bg-[var(--background)] border-t border-black/5">
            <motion.h2
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="font-playfair text-[10vw] font-light tracking-tighter leading-none mb-24 text-black/90"
            >
               Lets build <span className="italic text-black/60">Together.</span>
            </motion.h2>
            <Link href="mailto:hello@ssprinters.com">
               <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-20 py-8 rounded-full border border-black/10 text-xl font-light tracking-[0.4em] uppercase transition-all duration-700 bg-black text-white"
               >
                  Direct Discovery <ArrowUpRight size={20} className="inline ml-4" />
               </motion.button>
            </Link>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
         </section>
      </main>
   );
}
