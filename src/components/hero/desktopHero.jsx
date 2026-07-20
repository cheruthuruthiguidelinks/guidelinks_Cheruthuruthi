import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import StageCards from "../hero/stageCard";

const DesktopHero = ({
  containerRef,
  activeStage,
  op1,
  op2,
  op3,
  y1,
  y2,
  y3,
  scrollIndicatorOp,
}) => {
  return (
    <div id="home" ref={containerRef} className="hidden lg:block relative h-[400vh] w-full bg-white">

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

        {/* Clean editorial background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-sky-50/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-blue-50/50 to-transparent" />
        </div>

        {/* Main layout */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10 pt-16 lg:pt-0">

          {/* ═══ LEFT: SCROLL TEXT STAGES ═══ */}
          <div className="lg:col-span-6 relative h-[480px] lg:h-[500px] flex flex-col justify-center">

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

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-slate-900 tracking-tight">
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

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-slate-900 tracking-tight">
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

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-slate-900 tracking-tight">
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
            <StageCards activeStage={activeStage} />
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

export default DesktopHero;