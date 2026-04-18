import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
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
  );
};

export default Layout;
