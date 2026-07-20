import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import MobileHero from "./hero/mobileHero";


import DesktopHero from './hero/desktopHero';

// Top colleges our students attend


// Countries with simple flag + label


const Hero = () => {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.3) setActiveStage(0);
      else if (latest >= 0.3 && latest < 0.65) setActiveStage(1);
      else setActiveStage(2);
    });
  }, [scrollYProgress]);

  // Left text stage animations
  const op1 = useTransform(scrollYProgress, [0, 0.06, 0.24, 0.32], [1, 1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0, 0.06, 0.24, 0.32], [20, 0, 0, -20]);

  const op2 = useTransform(scrollYProgress, [0.33, 0.41, 0.58, 0.66], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.33, 0.41, 0.58, 0.66], [20, 0, 0, -20]);

  const op3 = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [0, 1, 1, 1]);
  const y3  = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [20, 0, 0, 0]);

  const scrollIndicatorOp = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <>
      {/* Mobile Hero (Single stage, no scroll pinning, height auto) */}
      
    <MobileHero />
      {/* Desktop Hero (Interactive Scroll-pinned 3-Stage Telling) */}
      <DesktopHero
        containerRef={containerRef}
        activeStage={activeStage}
        op1={op1}
        op2={op2}
        op3={op3}
        y1={y1}
        y2={y2}
        y3={y3}
        scrollIndicatorOp={scrollIndicatorOp}
      />

    </>
  );
};

export default Hero;
