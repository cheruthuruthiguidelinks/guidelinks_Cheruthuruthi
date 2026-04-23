import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-300/20 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

const CollegePredictor = () => {
  return (
    <>
      <Helmet>
        <title>College Predictor | Guidelinks</title>
        <meta name="description" content="Predict your chances of admission into top tier institutions with our advanced college predictor tool." />
      </Helmet>
      
      <PageHero 
        title="College Predictor" 
        subtitle="Discover the best colleges suited for your academic profile." 
      />

      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
             <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Our AI-powered college predictor is currently under development. Check back soon for accurate predictions based on global admission trends.
             </p>
             <button className="px-8 py-3 bg-brand-600 text-white rounded-full font-semibold hover:bg-brand-700 transition">
                Get Notified
             </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CollegePredictor;
