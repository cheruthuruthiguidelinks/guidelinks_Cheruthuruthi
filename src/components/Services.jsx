import React from 'react';
import { motion } from 'framer-motion';
import { Plane, GraduationCap, BookOpen, Gift } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Visa Assistance',
    description: 'Hassle-free visa application process with our certified counselors and exceptionally high approval rates.'
  },
  {
    icon: GraduationCap,
    title: 'Admission Guidance',
    description: 'Personalized profiling, portfolio mapping, and application support for top-tier global institutions.'
  },
  {
    icon: BookOpen,
    title: 'IELTS Coaching',
    description: 'Custom-tailored, interactive preparation programs designed to secure your desired band scores.'
  },
  {
    icon: Gift,
    title: 'Scholarship Support',
    description: 'Find, match, and compile robust applications for financial grants and institutional aid.'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-28 bg-brand-50 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50/80 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
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
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Meticulously planned services to make your global or domestic educational transition secure, transparent, and successful.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(14, 165, 233, 0.10)' }}
                className="bg-white rounded-3xl p-8 border border-brand-100/80 shadow-sm transition-all duration-400 relative group flex flex-col hover-border-glow"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-400 to-brand-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-brand-100 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-500" />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-medium flex-1">
                  {service.description}
                </p>

                <div className="mt-7 pt-4 border-t border-brand-50 flex justify-between items-center text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
