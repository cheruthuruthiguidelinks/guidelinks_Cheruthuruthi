import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroImg from "../../assets/hero.png";
import {
    southIndiaColleges,
    destinations,
} from "./constant";

const StageCards = ({ activeStage }) => {
    return (
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
    );
};

export default StageCards;