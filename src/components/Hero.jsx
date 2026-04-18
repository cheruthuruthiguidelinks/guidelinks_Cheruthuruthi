import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const frameCount = 240;

const currentFrame = (index) =>
  new URL(
    `../assets/imagesHero/ezgif-frame-${String(index).padStart(3, '0')}.png`,
    import.meta.url
  ).href;

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const images = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loaded++;
        setImagesLoaded(loaded);
      };
      images.current.push(img);
    }
  }, []);

  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = images.current[frameIndex];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    
    // Zoom in by 15% to crop out VEO watermarks near the edges of the original images
    const zoomFactor = 1.15;
    const sWidth = img.naturalWidth / zoomFactor;
    const sHeight = img.naturalHeight / zoomFactor;
    // Center the crop on the original image
    const sx = (img.naturalWidth - sWidth) / 2;
    const sy = (img.naturalHeight - sHeight) / 2;

    const imgRatio = sWidth / sHeight;
    const canvasRatio = W / H;

    let dw, dh, dx, dy;
    
    // Clear canvas
    ctx.clearRect(0, 0, W, H);

    if (canvasRatio > imgRatio) {
      // Desktop / Wide Screen: Use 'Cover' logic so it fills the screen completely.
      dw = W;
      dh = W / imgRatio;
      dx = 0;
      dy = (H - dh) / 2;

      ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dw, dh);
    } else {
      // Mobile / Narrow Screen: Normal full-size image (Cover)
      dh = H;
      dw = H * imgRatio;
      dx = (W - dw) / 2;
      dy = 0;

      ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dw, dh);
    }
  };

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      drawFrame(Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount)));
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ---------- Scroll-linked text animations (LEFT SIDE) ----------

  // Block 1 — 0% → 30%
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.30], [0, 1, 1, 0]);
  const x1  = useTransform(scrollYProgress, [0, 0.05, 0.22, 0.30], [-40, 0, 0, -40]);

  // Block 2 — 33% → 60%
  const op2 = useTransform(scrollYProgress, [0.33, 0.40, 0.55, 0.63], [0, 1, 1, 0]);
  const x2  = useTransform(scrollYProgress, [0.33, 0.40, 0.55, 0.63], [-40, 0, 0, -40]);

  // Block 3 — 68% → 100%
  const op3 = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [0, 1, 1, 0]);
  const x3  = useTransform(scrollYProgress, [0.68, 0.76, 0.95, 1.0], [-40, 0, 0, -40]);

  // Loading bar width
  const loadPercent = Math.round((imagesLoaded / frameCount) * 100);

  return (
    <div id="home" ref={containerRef} className="relative h-[450vh] w-full">

      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Canvas — full bleed, no overlay */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Loading screen */}
        {loadPercent < 60 && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-brand-50/90 backdrop-blur-sm gap-4">
            <span className="text-brand-600 font-semibold tracking-wide">
              Loading {loadPercent}%
            </span>
            <div className="w-48 h-1 bg-brand-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-500 rounded-full transition-all duration-200"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Fixed Navbar-area brand line ── */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-28 px-8 md:px-16 pointer-events-none">
          <div className="w-8 h-0.5 bg-brand-400 mb-3" />
          <p className="text-[11px] tracking-[0.3em] uppercase text-brand-600 font-semibold opacity-80">
            Educational Consultancy
          </p>
        </div>

        {/* ══════════════════════════════════════
            TEXT BLOCK 1  — Top-left, early scroll
        ══════════════════════════════════════ */}
        <motion.div
          style={{ opacity: op1, x: x1 }}
          className="absolute top-0 left-0 h-full flex flex-col justify-center
                     px-8 md:px-16 max-w-xs md:max-w-sm z-20 pointer-events-none"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-brand-500 font-semibold mb-4">
            Since 2019
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Global Reach.<br />
            Local Roots.<br />
            <span className="text-gradient">Unlimited potential.</span>
          </h1>
          <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
            From premier South Indian colleges to elite global universities.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════
            TEXT BLOCK 2  — Left, mid scroll
        ══════════════════════════════════════ */}
        <motion.div
          style={{ opacity: op2, x: x2 }}
          className="absolute top-0 left-0 h-full flex flex-col justify-center
                     px-8 md:px-16 max-w-xs md:max-w-sm z-20 pointer-events-none"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-brand-500 font-semibold mb-4">
            Domestic + Global
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            South India's<br />
            Top Colleges<br />
            <span className="text-gradient">at your reach.</span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
            Expert guidance for medical, engineering & management in KL, KA & TN.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════
            TEXT BLOCK 3  — Left, late scroll + CTAs
        ══════════════════════════════════════ */}
        <motion.div
          style={{ opacity: op3, x: x3 }}
          className="absolute top-0 left-0 h-full flex flex-col justify-center
                     px-8 md:px-16 max-w-xs md:max-w-sm z-20 pointer-events-auto"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-brand-500 font-semibold mb-4">
            Guidelinks International
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            The cap<br />fits those<br />
            <span className="text-gradient">who dare.</span>
          </h2>
          <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
            Expert counseling that turns ambition into admission letters.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <button
              className="group flex items-center gap-2 px-6 py-3 bg-brand-500 text-white
                         rounded-full font-semibold text-sm
                         shadow-[0_0_20px_rgba(14,165,233,0.35)]
                         hover:shadow-[0_0_30px_rgba(14,165,233,0.55)]
                         hover:bg-brand-400 transition-all duration-300 w-fit"
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 bg-white/80 text-brand-700
                         border border-brand-200 rounded-full font-semibold text-sm
                         hover:bg-white hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]
                         transition-all duration-300 w-fit backdrop-blur-md"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Call
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator — fades out after first 10% */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-400 to-transparent animate-pulse" />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
