import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[90px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Programs & Curriculums
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

const Courses = () => {
  const courses = [
    { title: "MBBS & MD", desc: "Secure direct quotas and placements in top medical institutions globally and domestically." },
    { title: "Engineering", desc: "Unlock elite tech, computer science, and engineering programs in premiere research universities." },
    { title: "Management", desc: "Pursue MBA, PGDM, and undergraduate management programs in highly ranked B-Schools." },
    { title: "Nursing & Health", desc: "Gain world-class healthcare, nursing, and clinical training qualifications." },
    { title: "Aviation", desc: "Navigate professional pilot licenses and aviation systems management certifications." },
    { title: "Legal Studies", desc: "Enroll in prestigious law schools offering global and corporate specializations." },
  ];

  return (
    <>
      <Helmet>
        <title>Top Courses & Admissions | Guidelinks International</title>
        <meta name="description" content="Explore study and admissions pathways for MBBS, Engineering, Management, Nursing, Aviation, and Law with Guidelinks." />
      </Helmet>
      
      <PageHero 
        title="Top Courses" 
        subtitle="Discover elite academic programs tailored precisely to your career aspirations." 
      />

      <section className="py-24 relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(49, 87, 56, 0.06)"
              }}
              className="glass-card hover-border-glow rounded-3xl p-8 transition-all duration-500 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-500/5 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500/10 group-hover:text-accent-gold transition-colors duration-300"
                >
                  <BookOpen className="w-6.5 h-6.5" />
                </motion.div>
                
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-brand-650 transition-colors duration-350 tracking-tight">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {course.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-100/50 flex justify-between items-center text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Program Seats</span>
                <span className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
