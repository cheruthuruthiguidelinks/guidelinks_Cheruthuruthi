import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';

const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-[#fafcff] min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
        {/* Dynamic Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-500 origin-left z-[100]"
          style={{ scaleX }}
        />
        
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
