import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3rem] overflow-hidden px-8 py-16 md:py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #0369a1 0%, #0284c7 40%, #0ea5e9 80%, #38bdf8 100%)'
          }}
        >
          {/* Subtle radial overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/8 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-sky-300/15 rounded-full blur-[70px]" />
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }} />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 border border-white/20 mb-8 text-xs font-bold text-white uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-200 animate-pulse" />
              Admissions for 2026 Intake Open
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-tight"
            >
              Start Your Educational <br />
              <span className="text-gradient-gold">Journey Today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-base md:text-lg text-sky-100/90 mb-10 max-w-xl font-medium leading-relaxed"
            >
              Schedule a private session with our senior counselor. Map your qualifications directly to elite local seats or top global universities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-brand-700 rounded-full font-bold shadow-xl hover:shadow-[0_16px_40px_rgba(255,255,255,0.20)] hover:bg-sky-50 transition-all duration-300 text-sm uppercase tracking-wide group cursor-pointer"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
