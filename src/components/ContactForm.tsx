'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const inputStyle = "w-full px-6 py-5 bg-[#0b0f1a]/40 backdrop-blur-3xl rounded-2xl border border-white/5 focus:border-blue-500/30 outline-none font-mono text-sm tracking-widest text-white/80 placeholder:text-gray-800 transition-all";
  const labelStyle = "block text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase mb-4";

  return (
    <div className="bg-[#0b0f1a]/20 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/5 transition-all duration-700 hover:border-white/10">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={labelStyle}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="USER_NAME…"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className={labelStyle}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="CONTACT_IDENTIFIER…"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className={labelStyle}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyle}
                placeholder="PHONE_NODE…"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className={labelStyle}>
                Inquiry Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputStyle}
                placeholder="PROJECT_TYPE…"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className={labelStyle}>
              Detailed Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`${inputStyle} resize-none`}
              placeholder="TRANSMIT_DATA…"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-black py-6 rounded-2xl font-mono text-[10px] tracking-[0.8em] font-bold uppercase transition-all duration-700 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-4"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent group-hover:border-white group-hover:border-t-transparent" />
                <span>Synchronizing…</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Initialize Transmission</span>
              </>
            )}
          </motion.button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-10"
          >
            <div className="w-24 h-24 rounded-full border border-blue-500/20 flex items-center justify-center">
              <CheckCircle2 size={40} className="text-blue-500" />
            </div>
          </motion.div>
          <span className="block text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase mb-6">Success</span>
          <h3 className="font-playfair text-4xl italic text-white mb-6">
            Transmission Received.
          </h3>
          <p className="text-gray-500 font-light text-xl leading-relaxed max-w-sm mx-auto">
            Our strategic partners will process your dossier and respond within the next cycle.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
