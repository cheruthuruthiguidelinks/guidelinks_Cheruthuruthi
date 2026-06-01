import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Globe, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const containerRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track active stage based on scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.3) {
        setActiveStage(0);
      } else if (latest >= 0.3 && latest < 0.65) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    });
  }, [scrollYProgress]);

  // ---------- Scroll-linked text animations (LEFT SIDE) ----------
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.24, 0.32], [0, 1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0, 0.05, 0.24, 0.32], [24, 0, 0, -24]);

  const op2 = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.66], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.66], [24, 0, 0, -24]);

  const op3 = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [0, 1, 1, 1]);
  const y3  = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [24, 0, 0, 0]);

  const scrollIndicatorOp = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div id="home" ref={containerRef} className="relative h-[400vh] w-full bg-white">

      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

        {/* Clean background — soft blue tint only */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/60 to-blue-50/40 pointer-events-none" />

        {/* Very subtle decorative blob — pure CSS, no animation for performance */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-sky-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-blue-50/60 rounded-full blur-[90px] pointer-events-none" />

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

          {/* ══ LEFT: SCROLL-LINKED TEXT STAGES ══ */}
          <div className="lg:col-span-6 relative h-[420px] flex flex-col justify-center">

            {/* Static label */}
            <div className="absolute top-0 left-0 pointer-events-none">
              <div className="w-10 h-0.5 bg-brand-400 mb-3" />
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-600 font-bold opacity-80">
                Educational Consultancy
              </p>
            </div>

            {/* STAGE 1 */}
            <motion.div
              style={{ opacity: op1, y: y1, pointerEvents: activeStage === 0 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 font-bold mb-4">
                Since 2019
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
                Global Gateways.<br />
                Local Roots.<br />
                <span className="text-gradient">Unlimited Potential.</span>
              </h1>
              <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-md font-medium">
                Premium counseling tailored to connect your ambition with elite universities worldwide and premium medical/engineering colleges domestically.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(14,165,233,0.30)] hover:bg-brand-700 hover:shadow-[0_6px_20px_rgba(14,165,233,0.40)] transition-all duration-300"
                >
                  Explore Programs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700 border border-brand-100 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-brand-50 hover:border-brand-200 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 text-brand-500" />
                  Book a Free Call
                </a>
              </div>
            </motion.div>

            {/* STAGE 2 */}
            <motion.div
              style={{ opacity: op2, y: y2, pointerEvents: activeStage === 1 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 font-bold mb-4">
                Domestic Admissions
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
                South India's<br />
                Top Colleges<br />
                <span className="text-gradient">At Your Reach.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-md font-medium">
                Get direct representation, counseling, and NRI seats in top Engineering, Medical, and B-Schools across Karnataka, Tamil Nadu, and Kerala.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/admission-south-india"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(14,165,233,0.30)] hover:bg-brand-700 transition-all duration-300"
                >
                  View Colleges
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>

            {/* STAGE 3 */}
            <motion.div
              style={{ opacity: op3, y: y3, pointerEvents: activeStage === 2 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 font-bold mb-4">
                Guidelinks International
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
                The cap fits<br />those who<br />
                <span className="text-gradient">dare to dream.</span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-md font-medium">
                Our expert mentors turn complex, overwhelming visa filings and entrance scores into structured, seamless success paths.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(14,165,233,0.30)] hover:bg-brand-700 hover:shadow-[0_6px_20px_rgba(14,165,233,0.40)] transition-all duration-300"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ══ RIGHT: SMOOTH IMAGE/CARD TRANSITIONS ══ */}
          <div className="lg:col-span-6 flex justify-center items-center h-[420px] relative">
            <AnimatePresence mode="wait">

              {/* STAGE 0: Global reach card */}
              {activeStage === 0 && (
                <motion.div
                  key="stage-0"
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(14,165,233,0.10)] border border-brand-100/70">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-brand-500" />
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 font-bold text-[10px] tracking-wider uppercase">
                        Global Hub
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-800 leading-tight mb-2">
                      Destination <span className="text-gradient">Matchmaker</span>
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mb-6">
                      Algorithmic matching across Canada, UK, Germany, and Australia.
                    </p>

                    <div className="grid grid-cols-3 gap-4 border-t border-brand-50 pt-5">
                      <div>
                        <p className="text-lg font-extrabold text-brand-600">100%</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Adherence</p>
                      </div>
                      <div>
                        <p className="text-lg font-extrabold text-brand-600">200+</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Universities</p>
                      </div>
                      <div>
                        <p className="text-lg font-extrabold text-brand-500">4.9★</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-3 ml-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-brand-100 shadow-sm text-xs font-semibold text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                    Global Admissions Active
                  </motion.div>
                </motion.div>
              )}

              {/* STAGE 1: South India college card */}
              {activeStage === 1 && (
                <motion.div
                  key="stage-1"
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(14,165,233,0.10)] border border-brand-100/70">
                    <div className="flex justify-between items-center border-b border-brand-50 pb-4 mb-5">
                      <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Domestic Quota</span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                        <Award className="w-3 h-3" /> Direct Seats
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 leading-tight mb-1">
                      Bangalore & Coimbatore
                    </h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-6">
                      Medical, Engineering, MBA Specializations
                    </p>

                    <div className="flex justify-between items-center text-xs border-t border-brand-50 pt-4">
                      <span className="text-slate-500 font-semibold">120+ Partner Institutions</span>
                      <span className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs">✓</span>
                    </div>
                  </div>

                  {/* Stacked card effect */}
                  <div className="relative mt-3 mx-4">
                    <div className="absolute inset-0 bg-brand-100/50 rounded-2xl translate-y-2 scale-95" />
                    <div className="relative bg-white/70 rounded-2xl px-5 py-3 border border-brand-100/60 text-xs text-slate-500 font-medium backdrop-blur-sm">
                      Tamil Nadu · Karnataka · Kerala
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 2: Image card */}
              {activeStage === 2 && (
                <motion.div
                  key="stage-2"
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(14,165,233,0.12)] border border-brand-100/70">
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                      <img
                        src={heroImg}
                        alt="Student Success"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600';
                        }}
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                        <div>
                          <h4 className="text-white font-extrabold text-base">Admissions Secured</h4>
                          <p className="text-white/75 text-xs">Join our global network of elite students</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0">
                          <CheckCircle className="w-5 h-5 text-brand-500" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">100% Secure</p>
                          <p className="text-[9px] text-slate-400">Documentation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">99.2%</p>
                          <p className="text-[9px] text-slate-400">Visa Success</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-3 ml-4 inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl border border-brand-100 shadow-sm"
                  >
                    <span className="text-lg">🎓</span>
                    <div>
                      <p className="text-[9px] text-slate-400">Total Placement</p>
                      <p className="text-xs font-extrabold text-brand-700">10,000+ Students</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOp }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-slate-400 font-bold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-brand-400 rounded-full"
          />
          <div className="w-px h-5 bg-gradient-to-b from-brand-300 to-transparent" />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
