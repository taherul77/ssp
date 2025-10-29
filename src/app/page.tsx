"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCard from "@/components/ProductCard";
import ClientsSection from "@/components/ClientsSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  Package,
  Palette,
  Tag,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import productsData from "@/data/products.json";
import companyInfo from "@/data/companyInfo.json";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const featuredProducts = productsData.products
    .filter((p) => p.featured)
    .slice(0, 6);
  const currentYear = new Date().getFullYear();
  const yearsOfExperience =
    currentYear - parseInt(companyInfo.company.established);

  const stats = [
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: `${yearsOfExperience}+`, label: "Years Experience", icon: Award },
    { number: "30+", label: "Product Range", icon: Package },
    { number: "100%", label: "Quality Assured", icon: Shield },
  ];

  const services = [
    {
      icon: Package,
      title: "Packaging Solutions",
      description:
        "Custom corrugated boxes, shipping cartons, and industrial packaging materials.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "Printing Services",
      description:
        "High-quality commercial printing, colored paper, and custom printing materials.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Tag,
      title: "Garment Accessories",
      description:
        "Professional hang tags, garment labels, and woven clothing labels.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Sparkles,
      title: "Labels & Stickers",
      description:
        "Weather-resistant labels, custom stickers, and specialty label solutions.",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <HeroSection
        title={companyInfo.company.name}
        subtitle={`Serving with Excellence Since ${companyInfo.company.established}`}
        description={companyInfo.company.tagline}
        primaryCta={{ text: "Explore Products", href: "/products" }}
      />

      {/* Stats Section */}

      {/* Services Section */}
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
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive printing, packaging, and garment accessory solutions
              for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div
                    className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Featured Products Section */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-4 py-2 rounded-full inline-block mb-4">
              Featured Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Best Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our premium selection of printing, packaging, and garment
              accessories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                featured={true}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/products">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl mx-auto group"
              >
                <span>View All Products</span>
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-white px-4 py-2 rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {companyInfo.mission}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.values
              .slice(0, 6)
              .map(
                (
                  value: { title: string; description: string },
                  index: number
                ) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              )}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Certifications Section */}
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
              Certifications & Standards
            </h2>
            <p className="text-gray-600 text-lg">
              Certified excellence and trusted by industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyInfo.certifications.map((cert: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="text-white" size={40} />
                </div>
                <h3 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors">
                  {cert}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Partner with {companyInfo.company.name} for quality printing,
              packaging, and garment accessories solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold hover:bg-gray-50 transition-all text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] flex items-center gap-3 mx-auto"
                >
                  <span>Get Your Quote</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all text-lg backdrop-blur-sm"
                >
                  Explore Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
