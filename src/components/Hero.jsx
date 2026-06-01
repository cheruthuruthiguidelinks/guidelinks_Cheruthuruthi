import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Globe, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track active stage based on scroll progress
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.3) {
        setActiveStage(0);
      } else if (latest >= 0.3 && latest < 0.65) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    });
  }, [scrollYProgress]);

  // ── Lightweight GPU-accelerated Particle System ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * -0.4 - 0.1; // Float upwards
        this.color = Math.random() > 0.5 ? 'rgba(212, 175, 55, 0.25)' : 'rgba(49, 87, 56, 0.2)';
      }
      update() {
        this.x += this.x > canvas.width ? -canvas.width : (this.x < 0 ? canvas.width : this.speedX);
        this.y += this.y < 0 ? canvas.height : this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor(window.innerWidth / 20));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      // Draw smooth connection lines
      ctx.strokeStyle = 'rgba(49, 87, 56, 0.03)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ---------- Scroll-linked text animations (LEFT SIDE) ----------
  // Stage 1 (0% - 30%)
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.24, 0.32], [0, 1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0, 0.05, 0.24, 0.32], [30, 0, 0, -30]);

  // Stage 2 (33% - 64%)
  const op2 = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.66], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.33, 0.40, 0.58, 0.66], [30, 0, 0, -30]);

  // Stage 3 (68% - 100%)
  const op3 = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [0, 1, 1, 1]);
  const y3  = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [30, 0, 0, 0]);

  return (
    <div id="home" ref={containerRef} className="relative h-[400vh] w-full bg-brand-50">
      
      {/* ── Sticky view viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Particle Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

        {/* Animated Mesh blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 0.9],
              x: [0, 50, -30],
              y: [0, -40, 30]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-200/30 rounded-full blur-[110px] animated-mesh"
          />
          <motion.div 
            animate={{ 
              scale: [1, 0.9, 1.1],
              x: [0, -60, 40],
              y: [0, 50, -40]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-accent-light/20 rounded-full blur-[120px] animated-mesh"
          />
        </div>

        {/* Brand visual layout grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          
          {/* ══════════════════════════════════════
              LEFT SIDE: SCROLL-LINKED TEXT STAGES
          ══════════════════════════════════════ */}
          <div className="lg:col-span-6 relative h-[450px] flex flex-col justify-center">
            
            {/* STATIC SUBHEADER */}
            <div className="absolute top-0 left-0 pointer-events-none">
              <div className="w-12 h-0.5 bg-accent-gold mb-3" />
              <p className="text-[10px] tracking-[0.35em] uppercase text-brand-600 font-bold opacity-80">
                Educational Consultancy
              </p>
            </div>

            {/* STAGE 1 TEXT */}
            <motion.div
              style={{ opacity: op1, y: y1, pointerEvents: activeStage === 0 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent-gold font-bold mb-4">
                Since 2019
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-gray-900 tracking-tight">
                Global Gateways.<br />
                Local Roots.<br />
                <span className="text-gradient">Unlimited Potential.</span>
              </h1>
              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md font-medium">
                Premium counseling tailored to connect your ambition with elite universities worldwide and premium medical/engineering colleges domestically.
              </p>
            </motion.div>

            {/* STAGE 2 TEXT */}
            <motion.div
              style={{ opacity: op2, y: y2, pointerEvents: activeStage === 1 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 font-bold mb-4">
                Domestic Admissions
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-gray-900 tracking-tight">
                South India's<br />
                Top Colleges<br />
                <span className="text-gradient">At Your Reach.</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md font-medium">
                Get direct representation, counseling, and NRI seats in top Engineering, Medical, and B-Schools across Karnataka, Tamil Nadu, and Kerala.
              </p>
            </motion.div>

            {/* STAGE 3 TEXT */}
            <motion.div
              style={{ opacity: op3, y: y3, pointerEvents: activeStage === 2 ? 'auto' : 'none' }}
              className="absolute left-0 right-0 flex flex-col justify-center"
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand-500 font-bold mb-4">
                Guidelinks International
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-gray-900 tracking-tight">
                The cap fits<br />those who<br />
                <span className="text-gradient">dare to dream.</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md font-medium">
                Our expert mentors turn complex, overwhelming visa filings and entrance scores into structured, seamless success paths.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="group relative flex items-center gap-2 px-6 py-3.5 bg-brand-500 text-white
                             rounded-full font-semibold text-xs tracking-wider uppercase
                             shadow-[0_4px_20px_rgba(49,87,56,0.25)]
                             hover:shadow-[0_8px_30px_rgba(49,87,56,0.4)]
                             hover:bg-brand-600 transition-all duration-300 w-fit cursor-pointer"
                >
                  Explore Programs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  className="flex items-center gap-2 px-6 py-3.5 bg-white text-brand-700
                             border border-brand-100 rounded-full font-semibold text-xs tracking-wider uppercase
                             hover:bg-brand-50 hover:shadow-[0_4px_15px_rgba(49,87,56,0.1)]
                             transition-all duration-300 w-fit cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-accent-gold" />
                  Book a Free Call
                </button>
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT SIDE: DYNAMIC FLOATING GRAPHICS
          ══════════════════════════════════════ */}
          <div className="lg:col-span-6 flex justify-center items-center h-[450px] relative">
            <AnimatePresence mode="wait">
              
              {/* STAGE 0 GRAPHIC: GLOBAL GEOMETRY NETWORK */}
              {activeStage === 0 && (
                <motion.div
                  key="stage-0-visual"
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm aspect-square flex justify-center items-center relative"
                >
                  {/* Floating glass panel background */}
                  <div className="absolute inset-0 glass-card rounded-[2.5rem] flex flex-col justify-between p-8 border border-white/60 shadow-2xl">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-600">
                        <Globe className="w-6 h-6" />
                      </div>
                      <span className="px-3.5 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold font-bold text-[10px] tracking-wider uppercase">
                        Global Hub
                      </span>
                    </div>

                    <div className="my-auto py-4">
                      <h3 className="text-2xl font-extrabold text-gray-800 leading-tight">
                        Destination <span className="text-gradient">Matchmaker</span>
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 font-medium">
                        Algorithmic matching across Canada, UK, Germany, and Australia.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-brand-100 pt-4">
                      <div>
                        <p className="text-lg font-extrabold text-brand-500">100%</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Adherence</p>
                      </div>
                      <div>
                        <p className="text-lg font-extrabold text-brand-500">200+</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Universities</p>
                      </div>
                      <div>
                        <p className="text-lg font-extrabold text-accent-gold">4.9★</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Orbiting visual rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] rounded-full border border-dashed border-brand-500/20 pointer-events-none"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-40px] rounded-full border border-dotted border-accent-gold/20 pointer-events-none"
                  />
                  
                  {/* Floating abstract badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 px-4 py-2.5 glass-card rounded-xl border border-white/80 shadow-lg flex items-center gap-2 text-xs font-bold text-gray-800"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
                    <span>Global Admissions Active</span>
                  </motion.div>
                </motion.div>
              )}

              {/* STAGE 1 GRAPHIC: DECK OF TOP SOUTH INDIAN COLLEGES */}
              {activeStage === 1 && (
                <motion.div
                  key="stage-1-visual"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm h-80 relative flex justify-center items-center"
                >
                  {/* Card 1 (Back) */}
                  <motion.div 
                    initial={{ rotate: -5, x: -15, y: 10 }}
                    animate={{ rotate: -8, x: -25, y: 15 }}
                    className="absolute w-64 h-48 bg-white/60 border border-white/40 shadow-md rounded-2xl p-6 pointer-events-none"
                  >
                    <div className="w-10 h-1.5 bg-gray-200 rounded-full mb-3" />
                    <div className="w-24 h-3 bg-gray-200 rounded-full mb-4" />
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-100 rounded-full" />
                      <div className="w-4/5 h-2 bg-gray-100 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Card 2 (Middle) */}
                  <motion.div 
                    initial={{ rotate: 5, x: 15, y: 5 }}
                    animate={{ rotate: 8, x: 25, y: 5 }}
                    className="absolute w-64 h-48 bg-white/85 border border-white/50 shadow-lg rounded-2xl p-6 pointer-events-none"
                  >
                    <div className="w-10 h-1.5 bg-brand-100 rounded-full mb-3" />
                    <div className="w-20 h-3 bg-brand-200 rounded-full mb-4" />
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-brand-50 rounded-full" />
                      <div className="w-3/4 h-2 bg-brand-50 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Card 3 (Front - Focus) */}
                  <motion.div 
                    whileHover={{ y: -8, rotate: 0 }}
                    className="absolute w-68 h-52 glass-card border border-white/60 shadow-2xl rounded-2xl p-6 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center border-b border-brand-100 pb-3">
                      <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Domestic Quota</span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded-full">
                        <Award className="w-3 h-3" /> Direct Seats
                      </span>
                    </div>

                    <div className="py-3">
                      <h4 className="text-lg font-bold text-gray-800 leading-tight">
                        Bangalore & Coimbatore
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-wider">
                        Medical, Engineering, MBA Specializations
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500 font-semibold">120+ Partner Institutions</span>
                      <span className="w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold">✓</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* STAGE 2 GRAPHIC: PREMIUM SUCCESS STORY & Trust Elements */}
              {activeStage === 2 && (
                <motion.div
                  key="stage-2-visual"
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-sm relative flex justify-center items-center"
                >
                  {/* Outer glow aura */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-300/20 to-accent-light/30 rounded-[3rem] blur-2xl opacity-70 pointer-events-none" />

                  {/* Main Glass Image Container */}
                  <div className="relative rounded-[2.5rem] overflow-hidden glass-card p-4 border border-white/60 shadow-2xl w-full">
                    <div className="relative h-64 rounded-3xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent z-10" />
                      <img 
                        src={heroImg} 
                        alt="Premium Student Success" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                        <div>
                          <h4 className="text-white font-extrabold text-lg">Admissions Secured</h4>
                          <p className="text-white/80 text-xs">Join our global network of elite students</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-6 h-6 text-brand-500" />
                        </div>
                      </div>
                    </div>

                    {/* Miniature stats underneath */}
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-800">100% Secure</p>
                          <p className="text-[9px] text-gray-400">Documentation</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-800">99.2%</p>
                          <p className="text-[9px] text-gray-400">Visa Success</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating floating mini-badge */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 px-4 py-2.5 glass-card rounded-xl border border-white/80 shadow-lg flex items-center gap-3 text-xs font-bold text-gray-800"
                  >
                    <span className="text-lg">🎓</span>
                    <div>
                      <p className="text-[10px] text-gray-400">Total Placement</p>
                      <p className="text-xs font-extrabold text-brand-600">10,000+ Students</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

        {/* Scroll indicator — fades out after first 8% */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-bold">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-accent-gold rounded-full" 
          />
          <div className="w-px h-6 bg-gradient-to-b from-brand-300 to-transparent" />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
