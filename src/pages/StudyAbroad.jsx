import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Countries from '../components/Countries'; 

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[110px] -z-10" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-light/10 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Global Pathways
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

const StudyAbroad = () => {
  return (
    <>
      <Helmet>
        <title>Study Abroad | International Admissions | Guidelinks</title>
        <meta name="description" content="Explore study abroad opportunities in top global universities. We offer end-to-end processing for your international education." />
      </Helmet>
      
      <PageHero 
        title="Study Abroad" 
        subtitle="Take your education global. We simplify the journey to international degrees with expert counseling and visa filing." 
      />

      <div className="pb-20">
         <Countries />
      </div>
    </>
  );
};

export default StudyAbroad;
