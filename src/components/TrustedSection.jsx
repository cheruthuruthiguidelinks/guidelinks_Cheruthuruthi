import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TrustedSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const text = "Trusted since 2019, secured the future of 10,000+ students through professional consultancy.";
  const words = text.split(" ");

  const isHighlightWord = (word) => {
    const clean = word.toLowerCase().replace(/[^a-z0-9+]/g, '');
    return ['10000+', 'students', 'professional', 'consultancy'].includes(clean);
  };

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-[#0c1a2e]">

      {/* Background glow and grids container (safely clips overflow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle blue glow nodes */}
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-sky-500/8 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/4 right-10 w-[380px] h-[380px] bg-blue-400/6 rounded-full blur-[100px]" />
        {/* Very subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="sticky top-0 h-screen w-full flex items-center px-6 md:px-24 overflow-hidden z-10">
        <div className="max-w-5xl text-left">
          {/* Section subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-sky-400 font-bold mb-6 block"
          >
            Our Track Record
          </motion.p>

          <p className="flex flex-wrap items-center justify-start gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-6">
            {words.map((word, i) => {
              const start = (i / words.length) * 0.75;
              const end = ((i + 1) / words.length) * 0.75;
              const highlighted = isHighlightWord(word);
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlighted={highlighted}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Scroll progress hint */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center flex-col gap-3 pointer-events-none">
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-px bg-sky-400/25" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-sky-300/60 font-semibold font-mono">
              Scroll to Read
            </span>
            <div className="w-8 h-px bg-sky-400/25" />
          </motion.div>

          <div className="w-full max-w-xs h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-gradient-to-r from-sky-500 to-blue-400 origin-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range, isHighlighted }) => {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const color = useTransform(
    progress,
    range,
    ['#1e3a5f', isHighlighted ? '#38bdf8' : '#ffffff']
  );
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
