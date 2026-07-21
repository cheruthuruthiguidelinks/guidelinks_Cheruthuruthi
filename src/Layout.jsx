import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallbackModal from './components/CallbackModal';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { lenisRef } from './utils/lenis';
import { PhoneCall } from 'lucide-react';

const Layout = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const { pathname } = useLocation();
  const rafRef = useRef(null);

  // ── Lenis smooth scroll — created once, never recreated ──
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // ── Scroll-to-top on route change via Lenis (no window.scrollTo conflict) ──
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }
  }, [pathname]);

  return (
    <HelmetProvider>
      <div className="bg-white min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 relative">
        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-600 via-brand-400 to-brand-300 origin-left z-[100]"
          style={{ scaleX }}
        />

        <Navbar onOpenCallback={() => setIsCallbackOpen(true)} />

        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
          >
            <Outlet context={{ onOpenCallback: () => setIsCallbackOpen(true) }} />
          </motion.main>
        </AnimatePresence>

        {/* Persistent Floating "Book Callback" Widget */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCallbackOpen(true)}
          className="fixed bottom-6 right-6 z-[150] flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-brand-900 via-brand-800 to-sky-900 text-white rounded-full shadow-2xl border border-white/20 hover:shadow-brand-500/20 cursor-pointer group backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center animate-pulse shrink-0">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-xs uppercase tracking-wider hidden sm:inline-block">
            Book a Callback
          </span>
        </motion.button>

        <CallbackModal
          isOpen={isCallbackOpen}
          onClose={() => setIsCallbackOpen(false)}
        />

        <Footer onOpenCallback={() => setIsCallbackOpen(true)} />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
