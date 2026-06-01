import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/25 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[90px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Reach Out
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Guidelinks International</title>
        <meta name="description" content="Get in touch with Guidelinks for expert admission counseling, domestic allocations, and study abroad visa processing." />
      </Helmet>
      
      <PageHero 
        title="Contact Us" 
        subtitle="Our senior education counselors are standing by to map your university goals." 
      />

      <section className="py-24 relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
             className="lg:col-span-5 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Get In Touch</h2>
              <p className="text-gray-500 font-medium">Reach out directly or drop us a query to lock in a consultation appointment.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0 border border-brand-500/5 shadow-sm">
                  <MapPin className="w-5.5 h-5.5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">Head Office</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold leading-relaxed">
                    Cheruthiruthi, Thrissur,<br />
                    Kerala, 679531, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0 border border-brand-500/5 shadow-sm">
                  <Phone className="w-5.5 h-5.5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">Phone Support</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold hover:text-brand-500 cursor-pointer transition-colors">+91 85900 90969</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0 border border-brand-500/5 shadow-sm">
                  <Mail className="w-5.5 h-5.5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">General Inquiry</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold hover:text-brand-500 cursor-pointer transition-colors">info@guidelinks.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="lg:col-span-7 glass-card rounded-[2.5rem] p-8 md:p-12 border border-brand-500/5 shadow-2xl relative"
          >
             {/* Sparkle decorative node */}
             <div className="absolute top-6 right-6 text-brand-500/10"><Sparkles className="w-10 h-10" /></div>

             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Academic Program Interest</label>
                  <select 
                    className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-700"
                  >
                    <option>Select Option</option>
                    <option>MBBS & Medical Admissions</option>
                    <option>Engineering (B-Tech/M-Tech)</option>
                    <option>Management Quota (MBA/BBA)</option>
                    <option>Study Abroad (Canada/UK/Europe)</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800" 
                    placeholder="How can our counselors help you?" 
                    required
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full py-4 bg-brand-900 hover:bg-brand-650 text-white rounded-2xl font-bold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </motion.button>
             </form>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
