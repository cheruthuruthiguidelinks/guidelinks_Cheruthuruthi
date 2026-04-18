import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, FileText, CheckCircle, PlaneTakeoff } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: 'Initial Consultation',
    description: 'Meet our counselors to discuss your goals and profile.'
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: 'University Selection',
    description: 'Shortlist universities based on your preferences and eligibility.'
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: 'Application Process',
    description: 'Prepare documents and submit applications smoothly.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    title: 'Visa & Finance',
    description: 'Get assistance with visa filing and education loans.'
  },
  {
    icon: <PlaneTakeoff className="w-6 h-6 text-white" />,
    title: 'Pre-Departure',
    description: 'Briefing and support for a seamless transition abroad.'
  }
];

const Timeline = () => {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Your Journey <span className="text-gradient">With Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A simple, transparent, and structured process to ensure your success.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-brand-100 transform -translate-y-1/2">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-brand-400 to-brand-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-[0_0_20px_rgba(14,165,233,0.2)] flex items-center justify-center mb-6 relative z-10 border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
