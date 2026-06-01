import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustedSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const text = "Trusted since 2019, secured the future of 10,000+ students through professional consultancy.";
  const words = text.split(" ");

  // Highlight index/content check
  const isGoldWord = (word) => {
    const clean = word.toLowerCase().replace(/[^a-z0-9+]/g, '');
    return ['10000+', 'students', 'professional', 'consultancy'].includes(clean);
  };

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-brand-900" style={{ position: 'relative' }}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Glow node top-left */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[90px] opacity-40" />
        {/* Glow node bottom-right */}
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[100px] opacity-35" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center px-6 md:px-24 overflow-hidden z-10">
        <div className="max-w-5xl text-left">
          {/* Section subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-accent-gold font-bold mb-6 block"
          >
            Our Track Record
          </motion.p>

          <p className="flex flex-wrap items-center justify-start gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-6">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              const isHighlighted = isGoldWord(word);
              
              return (
                <Word 
                  key={i} 
                  progress={scrollYProgress} 
                  range={[start, end]}
                  isHighlighted={isHighlighted}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Scroll Progress Subtitle */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center flex-col gap-3 pointer-events-none">
           <motion.div 
             style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
             className="flex items-center gap-4"
           >
             <div className="w-8 h-px bg-brand-400/30" />
             <span className="text-[9px] uppercase tracking-[0.4em] text-brand-300 font-semibold font-mono">
               Scroll to Read Context
             </span>
             <div className="w-8 h-px bg-brand-400/30" />
           </motion.div>
           
           {/* Visual progress bar */}
           <div className="w-full max-w-xs h-[3px] bg-brand-850 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-gradient-to-r from-brand-400 to-accent-gold origin-left"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range, isHighlighted }) => {
  // Fade opacity from very faint to fully solid
  const opacity = useTransform(progress, range, [0.08, 1]);
  // Transitions from mute greyish-green to white or luxury gold
  const color = useTransform(
    progress, 
    range, 
    ['#3a553f', isHighlighted ? '#D4AF37' : '#ffffff']
  );
  // Elegant scale up effect for the word
  const scale = useTransform(progress, range, [0.98, 1]);
  
  return (
    <motion.span 
      style={{ opacity, color, scale, willChange: 'opacity, color, scale' }}
      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
    >
      {children}
    </motion.span>
  );
};

export default TrustedSection;
