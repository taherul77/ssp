'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';

export default function Contact() {
  const { company } = companyInfo;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: `${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}`,
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      content: company.phone,
      link: `tel:${company.phone}`
    },
    {
      icon: Mail,
      title: 'Email',
      content: company.email,
      link: `mailto:${company.email}`
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: company.social.facebook, name: 'Facebook' },
    { icon: Twitter, url: company.social.twitter, name: 'Twitter' },
    { icon: Linkedin, url: company.social.linkedin, name: 'LinkedIn' },
    { icon: Instagram, url: company.social.instagram, name: 'Instagram' },
  ];

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or support. We&apos;re here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 20px -8px rgba(220, 38, 38, 0.1)" 
                  }}
                  className="bg-white p-10 md:p-12 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-blue-100 group"
                >
                  <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300">
                    <Icon className="text-blue-600 group-hover:text-blue-700" size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-blue-200 rounded-3xl h-96 flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden">
                <div className="text-center">
                  <MapPin size={64} className="text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Location: {company.address.city}</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                        aria-label={social.name}
                      >
                        <Icon className="text-blue-600" size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose SS Printers?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>Quick response time within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>Expert technical support and consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>Customized solutions for your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-300 mr-2">✓</span>
                    <span>Global shipping and support</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What is your typical lead time?',
                answer: 'Standard products typically ship within 5-7 business days. Custom orders may take 2-4 weeks depending on specifications.'
              },
              {
                question: 'Do you offer international shipping?',
                answer: 'Yes, we ship to over 50 countries worldwide with various shipping options available.'
              },
              {
                question: 'Can you create custom brush solutions?',
                answer: 'Absolutely! Our engineering team specializes in designing custom brushes tailored to your specific requirements.'
              },
              {
                question: 'What quality certifications do you have?',
                answer: 'We are ISO 9001:2015 certified and comply with all relevant industry safety and quality standards.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100/50 hover:border-blue-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}





