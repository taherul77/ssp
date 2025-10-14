'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, LucideIcon } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';

const Footer: React.FC = () => {
  const { company } = companyInfo;

  const socialIcons: Record<string, LucideIcon> = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/logo/ss-printers-logo.png" 
                alt="SS Printers Logo" 
                width={160}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">{company.tagline}</p>
            <div className="flex space-x-4">
              {Object.entries(company.social).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 hover:scale-110 transition-all duration-300"
                    aria-label={platform}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 text-sm inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 text-sm inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 text-sm inline-block">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 text-sm inline-block">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 text-sm inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer inline-block">
                Paper Products
              </li>
              <li className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer inline-block">
                Packaging Materials
              </li>
              <li className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer inline-block">
                Labels & Stickers
              </li>
              <li className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300 cursor-pointer inline-block">
                Garment Accessories
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                <span>
                  {company.address.street}<br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>{company.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SS Printers. All rights reserved. | 
            <Link href="/privacy" className="hover:text-blue-400 transition-colors ml-2">
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





