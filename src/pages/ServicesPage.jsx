import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10" />
    <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Guidelinks</title>
        <meta name="description" content="Explore the comprehensive range of educational consultancy services offered by Guidelinks." />
      </Helmet>
      
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end guidance for your academic and professional success." 
      />

      <div className="pb-20">
         <Services />
      </div>
    </>
  );
};

export default ServicesPage;
