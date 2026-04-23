import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Countries from '../components/Countries'; 

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10" />
    <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] bg-purple-300/20 rounded-full blur-[120px] -z-10" />
    
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

const StudyAbroad = () => {
  return (
    <>
      <Helmet>
        <title>Study Abroad | International Admissions | Guidelinks</title>
        <meta name="description" content="Explore study abroad opportunities in top global universities. We offer end-to-end processing for your international education." />
      </Helmet>
      
      <PageHero 
        title="Study Abroad" 
        subtitle="Take your education global. We simplify the journey to international degrees." 
      />

      <div className="pb-20">
         <Countries />
      </div>
    </>
  );
};

export default StudyAbroad;
