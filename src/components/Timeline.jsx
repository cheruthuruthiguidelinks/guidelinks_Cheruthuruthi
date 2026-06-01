import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { UserPlus, Search, FileText, CheckCircle, Plane } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-5.5 h-5.5 text-white" />,
    title: 'Initial Consultation',
    description: 'Meet our senior counselors to align on your academic profile, goals, and funding.'
  },
  {
    icon: <Search className="w-5.5 h-5.5 text-white" />,
    title: 'University Selection',
    description: 'Shortlist premium domestic and international colleges matching your eligibility.'
  },
  {
    icon: <FileText className="w-5.5 h-5.5 text-white" />,
    title: 'Application Process',
    description: 'Prepare documentation, edit personal statements, and submit applications cleanly.'
  },
  {
    icon: <CheckCircle className="w-5.5 h-5.5 text-white" />,
    title: 'Visa & Finance',
    description: 'Obtain assistance with visa filing, interviews, education loans, and scholarship options.'
  },
  {
    icon: <Plane className="w-5.5 h-5.5 text-white" />,
    title: 'Pre-Departure',
    description: 'A pre-flight briefing covering culture integration, lodging, and airport pickup support.'
  }
];

const Timeline = () => {
  const containerRef = useRef(null);

  // Track scroll progress of the section to draw the connector line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(
    useTransform(scrollYProgress, [0.15, 0.75], [0, 1]),
    { stiffness: 60, damping: 20 }
  );

  return (
    <section id="process" ref={containerRef} className="py-28 bg-white relative overflow-hidden">
      
      {/* Decorative Blur elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-100/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-3"
          >
            Admissions Pipeline
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3.5xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Your Journey <span className="text-gradient">With Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            A highly structured, transparent, and proven 5-step process designed to turn complex visa guidelines and academic scores into successful enrollment letters.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-20">
          
          {/* ───── DESKTOP HORIZONTAL CONNECT LINE ───── */}
          <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-1 z-0 px-8">
            <div className="w-full h-full bg-sky-50 rounded-full relative">
              {/* Dynamic scroll-revealed line */}
              <motion.div 
                style={{ scaleX: pathLength }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-300 origin-left rounded-full"
              />
            </div>
          </div>

          {/* ───── MOBILE VERTICAL CONNECT LINE ───── */}
          <div className="lg:hidden absolute left-[30px] top-8 bottom-8 w-1 bg-sky-50 rounded-full z-0">
            <motion.div
              style={{ scaleY: pathLength }}
              className="w-full h-full bg-gradient-to-b from-brand-600 via-brand-400 to-brand-300 origin-top rounded-full"
            />
          </div>

          {/* Steps List */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group relative gap-6 lg:gap-0"
                >
                  
                  {/* Step bubble */}
                  <div className="shrink-0 lg:mb-8 relative z-10">
                    {/* Ring aura */}
                    <div className="absolute -inset-1 bg-brand-400/10 rounded-full blur-[4px] group-hover:bg-brand-500/15 transition-all duration-300" />
                    
                    {/* Circle Node */}
                    <div className="w-[60px] h-[60px] rounded-full bg-white border-[3px] border-brand-50 shadow-md flex items-center justify-center relative group-hover:scale-108 transition-transform duration-350">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-500 to-brand-700 group-hover:from-brand-400 group-hover:to-brand-600 flex items-center justify-center shadow-inner transition-all duration-350">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text Contents */}
                  <div className="flex-1 lg:px-4">
                    {/* Number Badge */}
                    <span className="text-[11px] font-extrabold font-mono text-brand-500 tracking-widest block lg:mb-2 uppercase">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-brand-650 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
