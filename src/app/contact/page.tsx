'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Building2, Factory } from 'lucide-react';
import companyInfo from '@/data/companyInfo.json';

export default function Contact() {
  const { company } = companyInfo;

  const contactInfo = [
    {
      icon: Building2,
      title: 'Office Address',
      content: `${company.office.street}, ${company.office.city}-${company.office.zip}`,
      subcontent: company.office.country,
      link: null,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Factory,
      title: 'Factory Address',
      content: `${company.factory.street}, ${company.factory.city}-${company.factory.zip}`,
      subcontent: company.factory.country,
      link: null,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Contact Numbers',
      content: company.phones[0],
      subcontent: company.phones.length > 1 ? `Also: ${company.phones.slice(1).join(', ')}` : '',
      link: `tel:${company.phones[0]}`,
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: company.email,
      subcontent: 'info@ssprinters.com',
      link: `mailto:${company.email}`,
      gradient: 'from-red-500 to-red-600'
    }
  ];



  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <p className="text-blue-100 font-semibold">Let&apos;s Work Together</p>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to help with all your printing, packaging, and garment accessory needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
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
              Contact Information
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Reach Out To Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Multiple ways to connect with our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-br ${info.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-700 hover:text-blue-600 transition-colors font-medium block mb-2"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium mb-2">{info.content}</p>
                      )}
                      {info.subcontent && (
                        <p className="text-gray-500 text-sm">{info.subcontent}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full inline-block mb-6">
                Send Message
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Let&apos;s Discuss Your Requirements
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 rounded-3xl h-80 flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                <div className="text-center relative z-10">
                  <MapPin size={64} className="text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold text-xl">Visit Our Location</p>
                  <p className="text-gray-600 text-sm mt-2">{company.office.city}, {company.office.country}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday - Thursday</span>
                    <span className="text-blue-600 font-semibold">24 Hours Open</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Friday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Common questions about our products and services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'What types of printing services do you offer?',
                answer: 'We offer a comprehensive range of printing services including paper products, brochures, catalogs, visiting cards, hangtags, labels, and custom printing solutions for businesses of all sizes.'
              },
              {
                question: 'Do you provide custom packaging solutions?',
                answer: 'Yes! We specialize in custom packaging including corrugated boxes, cardboard boxes, shopping bags (paper and non-woven), and branded packaging materials tailored to your specific requirements.'
              },
              {
                question: 'What garment accessories do you supply?',
                answer: 'We supply a complete range of garment accessories including woven labels, sew-on labels, hangtags, tag pins, collar inserts, cable ties, and various other textile accessories for the garment industry.'
              },
              {
                question: 'What is the minimum order quantity?',
                answer: 'Minimum order quantities vary by product type. For most items, we offer flexible MOQs to accommodate both small businesses and large-scale orders. Contact us for specific product requirements.'
              },
              {
                question: 'How long does it take to complete an order?',
                answer: 'Standard orders typically take 5-10 business days depending on the product and quantity. Custom orders may require 2-3 weeks. We also offer rush services for urgent requirements.'
              },
              {
                question: 'Do you offer delivery services?',
                answer: 'Yes, we provide delivery services across Dhaka and other major cities in Bangladesh. For locations outside our standard delivery area, we work with reliable courier services to ensure timely delivery.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-10">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
            <a href={`mailto:${company.email}`}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us Directly
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}





