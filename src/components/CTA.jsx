import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main CTA Container Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[3.5rem] bg-brand-900 overflow-hidden px-8 py-16 md:py-24 text-center border border-white/5 shadow-2xl"
        >
          {/* Animated Background Mesh lights */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-gold/25 rounded-full blur-[100px]"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, -35, 0],
                y: [0, 30, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[90px]"
            />
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Floating visual badge */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-bold text-accent-gold uppercase tracking-wider shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions for 2026 Intake open</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3.5xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Start Your Educational <br />
              <span className="text-gradient-gold">Journey Today</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-brand-100 mb-12 max-w-xl font-medium leading-relaxed"
            >
              Schedule a private session with our senior counselor. Map your qualifications directly to elite local seats or top global universities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-brand-900 rounded-full font-bold shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:bg-brand-50 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer text-sm uppercase tracking-wider"
              >
                Book Free Consultation
                <ArrowRight className="w-4.5 h-4.5 text-accent-gold group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
