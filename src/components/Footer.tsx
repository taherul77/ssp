'use client';

import { ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import companyInfo from '@/data/companyInfo.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { company } = companyInfo;

  const footerLinks = [
    { name: 'HOME', href: '/' },
    { name: 'OUR PRODUCTS', href: '/products' },
    { name: 'OUR CLIENTS', href: '/clients' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'GALLERY', href: '/gallery' },
  ];

  return (
    <footer className="bg-[var(--deep-navy)] pt-40 pb-20 border-t border-black/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          {/* Brand & Mission */}
          <div className="space-y-12">
            <Link href="/" className="inline-block group">
              <div className="relative flex items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center overflow-hidden ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src="/logo/ss-printers-logo.png"
                    alt="SS Printers Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="text-2xl font-playfair tracking-tight text-black/90">SS Printers.</span>
              </div>
            </Link>
            <h2 className="text-4xl md:text-5xl font-playfair italic font-light text-gray-400 leading-tight max-w-md">
              Engineering the visual architecture of <span className="text-black not-italic font-normal">global standards.</span>
            </h2>
            <div className="flex gap-8">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-500">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <span className="block text-[10px] font-bold tracking-[0.5em] text-gray-800 uppercase">Navigation</span>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg font-light text-gray-600 hover:text-black transition-colors duration-500 flex items-center gap-2 group">
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <span className="block text-[10px] font-bold tracking-[0.5em] text-gray-800 uppercase">Contact</span>
              <div className="space-y-6">
                <div className="flex flex-col gap-1 group cursor-pointer">
                  <span className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Office</span>
                  <p className="text-gray-600 font-light leading-relaxed group-hover:text-black transition-colors">
                    {company.office.street}<br />{company.office.city}, {company.office.country}
                  </p>
                </div>
                <div className="flex flex-col gap-1 group cursor-pointer">
                  <span className="text-[10px] text-gray-400 tracking-widest uppercase mb-1">Inquiries</span>
                  <Link href={`mailto:${company.email}`} className="text-gray-600 font-light hover:text-blue-600 transition-colors">{company.email}</Link>
                  <Link href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="text-gray-600 font-light hover:text-blue-600 transition-colors">{company.phones[0]}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
            &copy; {currentYear} SS Printers Archive — All Rights Reserved.
          </div>
          <div className="flex gap-12 text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              System Active
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute -bottom-20 left-0 w-full select-none pointer-events-none opacity-[0.03]">
        <h2 className="text-[25vw] font-playfair font-black text-black leading-none tracking-tighter text-center">
          PRINTERS
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
