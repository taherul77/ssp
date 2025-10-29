'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Users, TrendingUp, Shield, Phone, Mail, Factory, Building2 } from 'lucide-react';
import Image from 'next/image';
import companyInfo from '@/data/companyInfo.json';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { company, owner, vision, mission, values, milestones } = companyInfo;

  // Calculate years of experience dynamically based on company establishment year
  const foundedYear = parseInt(company.established);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - foundedYear;

  const iconMap = {
    'Quality Excellence': Award,
    'Innovation': TrendingUp,
    'Customer Focus': Users,
    'Sustainability': Shield,
    'Integrity': Target
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About {company.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {company.tagline}
            </p>
            <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-blue-100 font-semibold">
                Serving with Excellence Since {company.established}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Owner/Proprietor Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Proprietor
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Owner Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={owner.image}
                  alt={owner.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold">{yearsOfExperience}+</p>
                  <p className="text-sm text-blue-100">Years Experience</p>
                </div>
              </motion.div>
            </div>

            {/* Owner Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {owner.name}
                </h3>
                <p className="text-2xl text-blue-600 font-semibold mb-6">
                  {owner.title}
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <p className="text-gray-700 leading-relaxed italic text-lg">
                  &ldquo;{owner.message}&rdquo;
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {owner.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">{company.established}</p>
                  <p className="text-sm text-gray-600">Founded</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <p className="text-3xl font-bold text-blue-600">{yearsOfExperience}+</p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <Eye className="text-blue-600 mb-4" size={48} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {vision}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
            >
              <Target className="text-blue-600 mb-4" size={48} />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = iconMap[value.title as keyof typeof iconMap] || Award;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 20px -8px rgba(220, 38, 38, 0.1)"
                  }}
                  className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-blue-100 group"
                >
                  <div className="bg-gradient-to-br from-red-50 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300">
                    <Icon className="text-blue-600 group-hover:text-blue-700" size={44} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600">
              Key milestones in our growth and innovation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for all your printing, packaging, and garment accessories needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Office Address */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Building2 className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {company.office.street}<br />
                    {company.office.city}-{company.office.zip}<br />
                    {company.office.country}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Factory Address */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Factory className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Factory Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {company.factory.street}<br />
                    {company.factory.city}-{company.factory.zip}<br />
                    {company.factory.country}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Phone className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Numbers</h3>
                  <div className="space-y-2 text-gray-600">
                   
                    {company.phones.map((phone, idx) => (
                      <p key={idx}>Phone: {phone}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Mail className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                  <a 
                    href={`mailto:${company.email}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold break-all"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}





