'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Users, TrendingUp, Shield, Sparkles, Zap, LucideIcon } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface Stat {
  number: string;
  label: string;
}

const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculate years of experience dynamically based on company establishment year
  const foundedYear = parseInt(companyInfo.company.established);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - foundedYear;

  const features: Feature[] = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the global leader in providing innovative industrial brush solutions that enhance efficiency and productivity.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Manufacturing superior quality industrial brushes through continuous innovation and sustainable practices.',
      gradient: 'from-blue-600 to-blue-500'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Maintaining the highest standards in every product we deliver, ensuring durability and performance.',
      gradient: 'from-blue-700 to-blue-600'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term relationships through exceptional service and customized solutions.',
      gradient: 'from-blue-500 to-blue-500'
    }
  ];

  const stats: Stat[] = [
    { number: '500+', label: 'Products' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Countries' },
    { number: `${yearsOfExperience}+`, label: 'Years Experience' }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-200 rounded-full text-blue-600 font-semibold uppercase tracking-wider text-sm mb-6"
          >
            ✦ About SSP
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            Leading Industrial
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Your trusted partner in delivering high-quality industrial brushes and innovative cleaning solutions worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {features.map((feature: Feature, index: number) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.15)] transition-all duration-500 h-full border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-10 md:p-16 lg:p-20 overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.3)] mb-20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat: Stat, index: number) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-semibold text-base md:text-lg uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-4 group-hover:w-full group-hover:bg-white/50 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 p-10 md:p-14 lg:p-16 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <Sparkles className="mx-4 text-blue-500" size={24} />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-center">
              Since our establishment, <span className="font-bold text-blue-600">SSP</span> has been at the forefront of industrial brush manufacturing,
              combining traditional craftsmanship with cutting-edge technology to deliver products that exceed expectations.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
              Our commitment to innovation, quality, and customer satisfaction has made us a preferred partner 
              for businesses across various industries worldwide.
            </p>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Certified Quality</h4>
                  <p className="text-sm text-gray-600">ISO Standards</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Innovation</h4>
                  <p className="text-sm text-gray-600">R&D Focused</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Worldwide Service</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;




