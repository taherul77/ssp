'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe, Users, ShieldCheck, Zap } from 'lucide-react';

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

export default function ClientsPage() {
    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/5 selection:text-black overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-60 pb-32">
                <div className="container mx-auto max-w-7xl px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-12"
                    >
                        <div className="flex items-center gap-4 text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase">
                            <div className="w-12 h-[1px] bg-blue-600/30" />
                            <span>Network</span>
                        </div>

                        <h1 className="font-playfair text-[8vw] lg:text-[7.5rem] font-light leading-[0.9] tracking-tighter text-black max-w-5xl">
                            Strategic <br />
                            <span className="italic text-black/60 font-light block ml-[10%]">Alliances.</span>
                        </h1>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end pt-10">
                            <p className="text-gray-500 font-light text-2xl leading-relaxed tracking-wide max-w-xl italic border-l border-black/5 pl-10">
                                Building the structural backbone for global industrial leaders, from artisanal boutiques to massive multinational conglomerates.
                            </p>
                            <div className="flex items-center gap-10 ">
                                <div className="space-y-2">
                                    <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest text-right">Active Partners</span>
                                    <span className="block text-2xl font-playfair italic text-black text-right">{clientLogos.length}+ Entities</span>
                                </div>
                                <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center">
                                    <Globe size={24} className="text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Features Section */}
            <section className="py-32 border-y border-black/5 bg-black/[0.01]">
                <div className="container mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600/5 border border-blue-600/20 flex items-center justify-center text-blue-600">
                                <Users size={20} />
                            </div>
                            <h3 className="text-xl font-medium text-black">Global Reach</h3>
                            <p className="text-gray-500 font-light">Serving clients across diverse industrial sectors and geographic borders.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600/5 border border-blue-600/20 flex items-center justify-center text-blue-600">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="text-xl font-medium text-black">Verified Quality</h3>
                            <p className="text-gray-500 font-light">Maintaining the highest standards for institutional-scale fulfillment.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600/5 border border-blue-600/20 flex items-center justify-center text-blue-600">
                                <Zap size={20} />
                            </div>
                            <h3 className="text-xl font-medium text-black">Rapid Response</h3>
                            <p className="text-gray-500 font-light">Agile production logic for fast-paced market requirements.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-40">
                <div className="container mx-auto max-w-7xl px-8">
                    <div className="flex flex-wrap justify-center border border-black/5 rounded-[3rem] overflow-hidden">
                        {clientLogos.map((logo, index) => (
                            <motion.div
                                key={logo}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: (index % 5) * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-[var(--background)] w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 aspect-video flex items-center justify-center p-8 group hover:z-10 relative overflow-hidden transition-all duration-700 border-[0.5px] border-black/5"
                            >
                                <div className="relative w-full h-full grayscale  group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
                                    <Image
                                        src={`/Client/${logo}`}
                                        alt={logo.replace('.jpg', '')}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Minimalist Hover Overlay */}
                                <div className="absolute inset-x-4 bottom-4 h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-60 bg-[var(--deep-navy)]">
                <div className="container mx-auto max-w-5xl px-8 text-center space-y-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-playfair text-4xl md:text-6xl font-light italic text-black/90 leading-tight"
                    >
                        &quot;Our reputation is built on the success of those we serve. We don&apos;t just print; we architect identities.&quot;
                    </motion.h2>
                    <div className="w-20 h-[1px] bg-black/10 mx-auto" />
                    <p className="text-gray-500 font-mono text-[10px] tracking-[0.5em] uppercase">SS Printers Mechanical Protocol — 2026</p>
                </div>
            </section>
        </main>
    );
}
