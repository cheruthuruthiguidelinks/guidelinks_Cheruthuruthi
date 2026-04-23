import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustedSection = () => {
  const containerRef = useRef(null);
  
  // High scroll height to allow for thorough reading
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const text = "Trusted since 2019, secured the future of 10,000+ students through professional consultancy.";
  
  const words = text.split(" ");

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-slate-950">
      <div className="sticky top-0 h-screen w-full flex items-center px-8 md:px-24 overflow-hidden">
        
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[60px] -ml-40 opacity-40" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 max-w-4xl text-left">
          <p className="flex flex-wrap items-center justify-start gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-6">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              
              return (
                <Word 
                  key={i} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Scroll Progress Subtitle */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center flex-col gap-4 pointer-events-none">
           <motion.div 
             style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
             className="flex items-center gap-6"
           >
             <div className="w-12 h-px bg-brand-500/50" />
             <span className="text-[10px] uppercase tracking-[0.6em] text-brand-400 font-mono font-bold">
               Reading Mode Active
             </span>
             <div className="w-12 h-px bg-brand-500/50" />
           </motion.div>
           
           {/* Visual bar below reading mode */}
           <div className="w-full max-w-xs h-0.5 bg-slate-900 rounded-full overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-brand-500 origin-left"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  // Map scroll progress to opacity
  // Each word illuminates as you scroll past it
  const opacity = useTransform(progress, range, [0.1, 1]);
  
  return (
    <motion.span 
      style={{ opacity }}
      className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
    >
      {children}
    </motion.span>
  );
};

export default TrustedSection;
