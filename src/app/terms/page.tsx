'use client';

import { motion } from 'framer-motion';
import { Gavel, ClipboardCheck, Scale, AlertCircle } from 'lucide-react';

export default function TermsPage() {
    const terms = [
        {
            icon: ClipboardCheck,
            title: "Service Engagement",
            content: "All printing and industrial packaging service engagements are subject to technical feasibility review. Preliminary quotes are estimates and final pricing is determined upon structural specification completion."
        },
        {
            icon: Gavel,
            title: "Contractual Obligations",
            content: "Clients are responsible for ensuring all visual assets and trademarks provided for production are legally owned or licensed. SS Printers assumes no liability for copyright infringement in client-supplied artwork."
        },
        {
            icon: Scale,
            title: "Quality Standard",
            content: "We adhere strictly to industrial precision tolerances. Variations within standard mechanical margins (0.01mm - 0.5mm depending on substrate) are considered acceptable within global manufacturing compliance."
        },
        {
            icon: AlertCircle,
            title: "Delivery & Fulfillment",
            content: "Logistical timelines are projections based on current factory capacity. SS Printers is not liable for delays caused by global supply chain disruptions or force majeure events."
        }
    ];

    return (
        <main className="bg-[var(--background)] text-[var(--foreground)] selection:bg-black/5 selection:text-black overflow-hidden">
            {/* Header */}
            <section className="pt-60 pb-20 border-b border-black/5">
                <div className="container mx-auto max-w-7xl px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 text-blue-600 font-mono text-[10px] tracking-[0.8em] uppercase">
                            <div className="w-12 h-[1px] bg-blue-600/30" />
                            <span>Standard</span>
                        </div>
                        <h1 className="font-playfair text-[8vw] lg:text-[6rem] font-light leading-[0.9] tracking-tighter text-black">
                            Terms of <br />
                            <span className="italic text-black/60">Operation.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-40">
                <div className="container mx-auto max-w-4xl px-8">
                    <div className="grid grid-cols-1 gap-24">
                        {terms.map((term, index) => {
                            const Icon = term.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
                                >
                                    <div className="md:col-span-1">
                                        <div className="w-12 h-12 rounded-2xl bg-black border border-black/5 flex items-center justify-center text-white">
                                            <Icon size={20} />
                                        </div>
                                    </div>
                                    <div className="md:col-span-11 space-y-6">
                                        <h3 className="text-2xl font-medium tracking-tight text-black">{term.title}</h3>
                                        <p className="text-gray-500 font-light text-xl leading-relaxed">
                                            {term.content}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-40 pt-20 border-t border-black/5 space-y-4"
                    >
                        <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">Factory Protocol — Version 4.2</p>
                        <p className="text-gray-400 font-light text-sm italic">
                            Governed by the laws of the People&apos;s Republic of Bangladesh. All disputes are subject to arbitration in Dhaka.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
