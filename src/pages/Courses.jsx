import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white -z-10" />
    <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[100px] -z-10" />
    
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

const Courses = () => {
  const courses = [
    { title: "MBBS", desc: "Pursue your medical dreams globally." },
    { title: "Engineering", desc: "Top tier tech and engineering institutions." },
    { title: "Management", desc: "MBA and BBA from premier B-Schools." },
    { title: "Nursing", desc: "World-class healthcare education programs." },
    { title: "Aviation", desc: "Pilot training and aviation management." },
    { title: "Law", desc: "Prestigious law universities and colleges." },
  ];

  return (
    <>
      <Helmet>
        <title>Courses & Programs | Guidelinks</title>
        <meta name="description" content="Explore an extensive list of courses from top universities worldwide including MBBS, Engineering, Management, and more." />
      </Helmet>
      
      <PageHero 
        title="Top Courses" 
        subtitle="Discover academic programs tailored to your ambitions." 
      />

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600">
                  {course.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
