import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MobileHero = () => {
    return (
        <>
            <div className="block lg:hidden w-full bg-white pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Editorial background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[80%] h-[400px] bg-gradient-to-bl from-sky-50/70 via-blue-50/30 to-transparent" />
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-sky-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="w-5 h-px bg-brand-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-600 font-bold">
              Est. 2019 · Cheruthiruthi, Kerala
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold leading-[1.12] text-slate-900 tracking-tight"
          >
            Global Gateways.<br />
            Unlimited Potential.<br />
            <span className="text-gradient">Your Dream College, Secured.</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-slate-500 font-medium leading-relaxed"
          >
            Premium counseling for international universities and top-tier domestic colleges — handled end to end by experts who genuinely care about your future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 text-white rounded-full font-semibold text-sm shadow-md hover:bg-brand-700 transition-all"
            >
              Book Free Counseling
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/destinations"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-semibold text-sm hover:bg-slate-100 transition-all"
            >
              Explore Destinations
            </a>
          </motion.div>

          {/* Visual Card (Compact, beautiful image + stats overlay) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-[0_12px_30px_rgba(14,165,233,0.08)] mt-4"
          >
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=700"
              alt="International Campus"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
              <span className="text-[9px] uppercase tracking-widest text-sky-400 font-bold">Featured Pathways</span>
              <h3 className="text-white text-base font-extrabold leading-tight">Study in USA, UK, Canada & India</h3>
            </div>
          </motion.div>

          {/* Dynamic Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 bg-white rounded-2xl p-4 shadow-sm"
          >
            <div className="text-center">
              <p className="text-2xl font-extrabold text-brand-600">10K+</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Placed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-brand-600">99.2%</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Visa Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-brand-600">200+</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Partners</p>
            </div>
          </motion.div>
        </div>
      </div>
        </>
    );
};

export default MobileHero;