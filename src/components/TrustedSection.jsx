import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustedSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const trustItems = [
    {
      title: "Trusted Since 2019",
      description: "A legacy of excellence in educational consultancy.",
      stat: "5+ Years"
    },
    {
      title: "5000+ Success Stories",
      description: "Helping students find their dream universities globally.",
      stat: "5K+ Students"
    },
    {
      title: "South Indian Specialization",
      description: "Direct admissions and counseling for top colleges in Kerala, Karnataka, and Tamil Nadu.",
      stat: "100+ Partners"
    },
    {
      title: "Global Reach",
      description: "From local campuses to international horizons.",
      stat: "20+ Countries"
    }
  ];

  // Opacity and Y animations for each item
  const itemOpacities = trustItems.map((_, i) => {
    const start = i / trustItems.length;
    const end = (i + 1) / trustItems.length;
    return useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  });

  const itemScales = trustItems.map((_, i) => {
    const start = i / trustItems.length;
    const end = (i + 1) / trustItems.length;
    return useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1, 1, 0.8]);
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#020617]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background futuristic elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_70%)]" />
          <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        {/* Animated Background Rings */}
        <motion.div 
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
          className="absolute w-[600px] h-[600px] border border-brand-500/20 rounded-full"
        />
        <motion.div 
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
          className="absolute w-[400px] h-[400px] border border-brand-400/10 rounded-full"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              style={{
                opacity: itemOpacities[index],
                scale: itemScales[index],
                display: useTransform(scrollYProgress, (pos) => {
                   const start = index / trustItems.length;
                   const end = (index + 1) / trustItems.length;
                   return pos >= start && pos <= end ? "block" : "none";
                })
              }}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
            >
              <motion.span 
                className="inline-block text-brand-400 font-mono text-sm tracking-[0.5em] uppercase mb-6"
                initial={{ letterSpacing: "1em", opacity: 0 }}
                whileInView={{ letterSpacing: "0.5em", opacity: 1 }}
              >
                {item.stat}
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                {item.title.split(' ').map((word, i) => (
                  <span key={i} className={i === item.title.split(' ').length - 1 ? "text-brand-500" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Indicator for this section */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <div className="w-px h-12 bg-slate-800 relative overflow-hidden">
             <motion.div 
               style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
               className="absolute top-0 left-0 w-full bg-brand-500"
             />
           </div>
           <span className="text-[10px] text-slate-500 tracking-widest uppercase">Verified Excellence</span>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
