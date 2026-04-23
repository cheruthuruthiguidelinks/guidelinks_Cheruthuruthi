import React from 'react';
import { motion } from 'framer-motion';
import { Plane, GraduationCap, BookOpen, Gift } from 'lucide-react';

const services = [
  {
    icon: <Plane className="w-8 h-8 text-brand-500" />,
    title: 'Visa Assistance',
    description: 'Hassle-free visa application process with our expert guidance and high success rates.'
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-brand-500" />,
    title: 'Admission Guidance',
    description: 'Personalized shortlisting and application support for top-tier universities.'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-brand-500" />,
    title: 'IELTS Coaching',
    description: 'Comprehensive training programs to help you achieve your desired band score.'
  },
  {
    icon: <Gift className="w-8 h-8 text-brand-500" />,
    title: 'Scholarship Support',
    description: 'Find and apply for financial aid and scholarships to fund your education.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-[80px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            End-to-end support to make your study abroad journey smooth and successful.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-300 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-300 to-brand-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-50 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
