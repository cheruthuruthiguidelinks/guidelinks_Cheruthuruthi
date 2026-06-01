import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Target, Eye } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-light/10 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Who We Are
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

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Guidelinks International</title>
        <meta name="description" content="Learn more about Guidelinks, our mission, vision, and how we help students achieve their dreams of studying in top institutions." />
      </Helmet>
      
      <PageHero 
        title="About Guidelinks" 
        subtitle="Empowering your global and domestic educational journeys with expert advisory and unwavering support." 
      />

      <section className="py-24 relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Detailed Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-card rounded-[2rem] p-8 md:p-12 border border-brand-500/5 shadow-xl"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Story</h2>
            <div className="prose prose-lg text-gray-500 leading-relaxed font-medium space-y-4 text-sm sm:text-base">
              <p>
                At Guidelinks International, we believe that education is the single most powerful catalyst for personal growth, career success, and global progress. Founded in 2019, our mission is to eliminate the complexity and anxiety of the admissions pipeline, replacing it with clarity and confidence.
              </p>
              <p>
                We serve as a dual-bridge: helping ambitious candidates secure seats in elite international hubs like Canada, the UK, Germany, and Australia, while simultaneously providing direct counseling, merit scholarship mappings, and seat bookings in South India's finest professional engineering, medical, and management institutions.
              </p>
              <p>
                Driven by transparency and student success, our mentors provide continuous support—from initial profile evaluation and portfolio editing, through visa processing and scholarship matches, up to arrival orientation. With over 10,000 student careers successfully shaped, we remain committed to making premium education accessible to all.
              </p>
            </div>
          </motion.div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card hover-border-glow rounded-2xl p-6 border border-brand-500/5 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 mb-1">Our Mission</h4>
                <p className="text-xs text-gray-500 font-medium">To deliver transparent, expert counseling that links ambition to secure admission letters globally and domestically.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card hover-border-glow rounded-2xl p-6 border border-brand-500/5 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 mb-1">Our Vision</h4>
                <p className="text-xs text-gray-500 font-medium">To become South India's leading and most trusted consultancy, building global bridges for lifelong educational success.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card hover-border-glow rounded-2xl p-6 border border-brand-500/5 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-gray-900 mb-1">Our Guarantee</h4>
                <p className="text-xs text-gray-500 font-medium">Zero hidden fees, 100% legal documentation assistance, and adherence to top industry compliance standards.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
