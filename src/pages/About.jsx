import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10" />
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-brand-300/20 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto"
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
        <title>About Us | Guidelinks Top Careers International</title>
        <meta name="description" content="Learn more about Guidelinks, our mission, vision, and how we help students achieve their dreams of studying in top institutions." />
      </Helmet>
      
      <PageHero 
        title="About Guidelinks" 
        subtitle="Empowering your educational journey with expert guidance and unwavering support." 
      />

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Guidelinks Top Careers International has been a beacon of hope and guidance for absolute clarity in educational pursuits. 
                Started with a vision to streamline the complex admission process, we have helped thousands.
              </p>
              <p>
                *Replace this section with the exact text from guidelinks.in*
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
