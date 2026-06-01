import React from 'react';
import { motion } from 'framer-motion';
import { Plane, GraduationCap, BookOpen, Gift } from 'lucide-react';

const services = [
  {
    icon: <Plane className="w-7 h-7 text-brand-500 group-hover:text-accent-gold transition-colors duration-300" />,
    title: 'Visa Assistance',
    description: 'Hassle-free visa application process with our certified counselors and exceptionally high approval rates.'
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-brand-500 group-hover:text-accent-gold transition-colors duration-300" />,
    title: 'Admission Guidance',
    description: 'Personalized profiling, portfolio mapping, and application support for top-tier global institutions.'
  },
  {
    icon: <BookOpen className="w-7 h-7 text-brand-500 group-hover:text-accent-gold transition-colors duration-300" />,
    title: 'IELTS Coaching',
    description: 'Custom-tailored, interactive preparation programs designed to secure your desired band scores.'
  },
  {
    icon: <Gift className="w-7 h-7 text-brand-500 group-hover:text-accent-gold transition-colors duration-300" />,
    title: 'Scholarship Support',
    description: 'Find, match, and compile robust applications for financial grants and institutional aid.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Services = () => {
  return (
    <section id="services" className="py-28 bg-brand-50 relative overflow-hidden">
      
      {/* Decorative Premium Mesh blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent-light/10 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-3"
          >
            End-To-End Support
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3.5xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Meticulously planned services to make your global or domestic educational transition secure, transparent, and successful.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(49, 87, 56, 0.08)"
              }}
              className="glass-card hover-border-glow rounded-3xl p-8 transition-all duration-500 relative group flex flex-col justify-between"
            >
              <div>
                {/* Visual top border indicator */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-400 to-accent-gold rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Dynamic Icon container */}
                <motion.div 
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-brand-500/5 flex items-center justify-center mb-8 group-hover:bg-brand-50 transition-all duration-350"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-extrabold text-gray-900 mb-4 group-hover:text-brand-650 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Sub-card details */}
              <div className="mt-8 pt-4 border-t border-brand-100/50 flex justify-between items-center text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn Details</span>
                <span className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
