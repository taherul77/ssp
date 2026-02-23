'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
    const sections = [
        {
            icon: Eye,
            title: "Data Collection",
            content: "We collect information necessary to provide our industrial printing services. This includes business contact details, technical specifications for projects, and logistical information required for fulfillment."
        },
        {
            icon: Lock,
            title: "Information Security",
            content: "Institutional-grade encryption and structural security protocols are applied to all sensitive data. We maintain strict internal access controls to ensure your project details remain confidential."
        },
        {
            icon: Shield,
            title: "Third-Party Disclosure",
            content: "SS Printers does not sell or trade your personal or business information. Data is only shared with verified logistical partners essential for the completion of your contract."
        },
        {
            icon: FileText,
            title: "Data Retention",
            content: "Project archives and associated data are retained for historical reference and recurring industrial requirements unless a formal request for structural deletion is received."
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
                            <span>Protocol</span>
                        </div>
                        <h1 className="font-playfair text-[8vw] lg:text-[6rem] font-light leading-[0.9] tracking-tighter text-black">
                            Privacy <br />
                            <span className="italic text-black/60">Architecture.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-40">
                <div className="container mx-auto max-w-4xl px-8">
                    <div className="grid grid-cols-1 gap-24">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
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
                                        <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                                            <Icon size={20} />
                                        </div>
                                    </div>
                                    <div className="md:col-span-11 space-y-6">
                                        <h3 className="text-2xl font-medium tracking-tight text-black">{section.title}</h3>
                                        <p className="text-gray-500 font-light text-xl leading-relaxed">
                                            {section.content}
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
                        <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">Last Revision — February 2026</p>
                        <p className="text-gray-400 font-light text-sm italic">
                            SS Printers reserves the right to update this protocol to reflect changes in industrial standards or regulatory requirements.
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
