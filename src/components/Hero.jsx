import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import heroImg from '../assets/hero.png';

// Top colleges our students attend
const southIndiaColleges = [
  { name: 'RV College of Engineering', city: 'Bangalore', stream: 'Engineering' },
  { name: 'KMC Manipal', city: 'Karnataka', stream: 'MBBS' },
  { name: 'SDM College', city: 'Coimbatore', stream: 'Dental' },
  { name: 'Amrita Institute', city: 'Coimbatore', stream: 'Engineering · Medical' },
  { name: 'PES University', city: 'Bangalore', stream: 'Engineering' },
];

// Countries with simple flag + label
const destinations = [
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇺🇸', name: 'USA' },
];

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
  const op1 = useTransform(scrollYProgress, [0, 0.06, 0.24, 0.32], [0, 1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0, 0.06, 0.24, 0.32], [20, 0, 0, -20]);

  const op2 = useTransform(scrollYProgress, [0.33, 0.41, 0.58, 0.66], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.33, 0.41, 0.58, 0.66], [20, 0, 0, -20]);

  const op3 = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [0, 1, 1, 1]);
  const y3  = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [20, 0, 0, 0]);

  const scrollIndicatorOp = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div id="home" ref={containerRef} className="relative h-[400vh] w-full bg-white">

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

        {/* Clean editorial background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-sky-50/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-blue-50/50 to-transparent" />
        </div>

        {/* Main layout */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10 pt-16 lg:pt-0">

          {/* ═══ LEFT: SCROLL TEXT STAGES ═══ */}
          <div className="lg:col-span-6 relative h-[420px] flex flex-col justify-center">

            {/* STAGE 1 — Global Gateways */}
            <motion.div
              style={{ opacity: op1, y: y1, pointerEvents: activeStage === 0 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-px bg-brand-400" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-brand-600 font-bold">
                  Est. 2019 · Cheruthiruthi, Kerala
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.08] text-slate-900 tracking-tight">
                Global<br />
                Gateways.<br />
                <span className="text-gradient">Unlimited<br />Potential.</span>
              </h1>

              <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-md font-medium">
                Premium counseling for international universities and top-tier domestic colleges — handled end to end by people who genuinely care.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-sm shadow-[0_4px_20px_rgba(14,165,233,0.28)] hover:bg-brand-700 hover:shadow-[0_8px_28px_rgba(14,165,233,0.38)] transition-all duration-300"
                >
                  Book Free Counseling
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/destinations"
                  className="flex items-center gap-2 px-7 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-sm hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 text-brand-500" />
                  Explore Destinations
                </a>
              </div>

              {/* Live trust pill */}
              <div className="mt-8 flex items-center gap-2.5">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Currently helping <strong className="text-brand-600">200+ students</strong> for 2026 intake
                </span>
              </div>
            </motion.div>

            {/* STAGE 2 — South India Colleges */}
            <motion.div
              style={{ opacity: op2, y: y2, pointerEvents: activeStage === 1 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-px bg-brand-400" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-brand-600 font-bold">
                  Direct Seats · Management Quota
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold leading-[1.08] text-slate-900 tracking-tight">
                South India's<br />
                Top Colleges<br />
                <span className="text-gradient">At Your Reach.</span>
              </h2>

              <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-md font-medium">
                Direct representation and NRI seats in premier Engineering, Medical, and B-Schools across Karnataka, Tamil Nadu, and Kerala.
              </p>

              <a
                href="/admission-south-india"
                className="mt-8 group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-sm w-fit shadow-[0_4px_20px_rgba(14,165,233,0.28)] hover:bg-brand-700 transition-all duration-300"
              >
                View Our College Network
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>

            {/* STAGE 3 — Dream */}
            <motion.div
              style={{ opacity: op3, y: y3, pointerEvents: activeStage === 2 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-px bg-brand-400" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-brand-600 font-bold">
                  Guidelinks International
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-extrabold leading-[1.08] text-slate-900 tracking-tight">
                The cap fits<br />
                those who<br />
                <span className="text-gradient">dare to dream.</span>
              </h2>

              <p className="mt-6 text-base text-slate-500 leading-relaxed max-w-md font-medium">
                From entrance scores to visa approvals — our senior counselors turn overwhelming paperwork into a clear, confident path forward.
              </p>

              {/* Inline stats — editorial style */}
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-extrabold text-slate-900 leading-none">10K+</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Students Placed</p>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div>
                  <p className="text-3xl font-extrabold text-slate-900 leading-none">99.2%</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Visa Success Rate</p>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div>
                  <p className="text-3xl font-extrabold text-slate-900 leading-none">200+</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Partner Colleges</p>
                </div>
              </div>

              <a
                href="/contact"
                className="mt-8 group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-sm w-fit shadow-[0_4px_20px_rgba(14,165,233,0.28)] hover:bg-brand-700 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* ═══ RIGHT: EDITORIAL VISUALS ═══ */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center h-[500px] relative">
            <AnimatePresence mode="wait">

              {/* STAGE 0: World destinations — editorial photo card */}
              {activeStage === 0 && (
                <motion.div
                  key="stage-0"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm"
                >
                  {/* Main image card */}
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_60px_rgba(14,165,233,0.14)] border border-white">
                    <img
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=700"
                      alt="International university campus"
                      className="w-full h-56 object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
                        Study Destinations
                      </p>
                      <h3 className="text-white font-extrabold text-xl leading-tight mb-4">
                        200+ Universities Across 4 Continents
                      </h3>
                      {/* Flag strip */}
                      <div className="flex gap-3 flex-wrap">
                        {destinations.map((d) => (
                          <div key={d.name} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/15">
                            <span className="text-sm">{d.flag}</span>
                            <span className="text-white/90 text-[10px] font-semibold">{d.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating pill badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-3 ml-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm text-xs font-semibold text-slate-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    Intakes open for 2026
                  </motion.div>
                </motion.div>
              )}

              {/* STAGE 1: South India Colleges — real names list */}
              {activeStage === 1 && (
                <motion.div
                  key="stage-1"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm"
                >
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_40px_rgba(14,165,233,0.10)] overflow-hidden">
                    {/* Header */}
                    <div className="px-7 pt-7 pb-4 border-b border-slate-50">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-600 mb-1">
                        Our Students Study At
                      </p>
                      <p className="text-slate-400 text-xs font-medium">120+ partner institutions across South India</p>
                    </div>

                    {/* College list */}
                    <div className="px-7 py-5 space-y-4">
                      {southIndiaColleges.map((college, i) => (
                        <motion.div
                          key={college.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-center gap-3.5"
                        >
                          <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-800 leading-tight truncate">{college.name}</p>
                            <p className="text-[10px] text-slate-400 font-medium mt-0.5">{college.city} · {college.stream}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-7 py-4 bg-brand-50/50 border-t border-brand-50">
                      <p className="text-xs text-brand-600 font-semibold">+ 115 more institutions in our network</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STAGE 2: Student success image — editorial */}
              {activeStage === 2 && (
                <motion.div
                  key="stage-2"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm"
                >
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_40px_rgba(14,165,233,0.12)] overflow-hidden">
                    {/* Photo */}
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 to-transparent z-10" />
                      <img
                        src={heroImg}
                        alt="Student Success at Guidelinks"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600';
                        }}
                      />
                      <div className="absolute bottom-4 left-5 z-20">
                        <p className="text-white font-extrabold text-lg leading-tight">Admissions Secured</p>
                        <p className="text-white/70 text-xs mt-0.5">10,000+ success stories from Kerala</p>
                      </div>
                    </div>

                    {/* Mini testimonial */}
                    <div className="px-7 py-5 border-b border-slate-50">
                      <p className="text-slate-600 text-sm italic leading-relaxed">
                        "Got into PES University Bangalore. 100% transparent — no hidden fees, no surprises."
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                          <span className="text-xs font-extrabold text-amber-500">VP</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Vishnu Prasad</p>
                          <p className="text-[10px] text-slate-400">B.Tech · Thrissur, Kerala</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 divide-x divide-slate-100 px-2 py-4">
                      <div className="text-center py-1">
                        <p className="text-lg font-extrabold text-brand-600">10K+</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Placed</p>
                      </div>
                      <div className="text-center py-1">
                        <p className="text-lg font-extrabold text-brand-600">99.2%</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Visa Rate</p>
                      </div>
                      <div className="text-center py-1">
                        <p className="text-lg font-extrabold text-brand-600">Since '19</p>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Est.</p>
                      </div>
                    </div>
                  </div>
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
          <span className="text-[9px] tracking-[0.3em] uppercase text-slate-400 font-bold">Scroll</span>
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
