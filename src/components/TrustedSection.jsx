import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TrustedSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const hintOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  const text =
    "Trusted since 2019, secured the future of 10,000+ students through professional consultancy.";

  const words = text.split(" ");

  const highlightedWords = new Set([
    "10000+",
    "students",
    "professional",
    "consultancy",
  ]);

  const isHighlightWord = (word) => {
    const clean = word
      .toLowerCase()
      .replace(/[^a-z0-9+]/g, "");

    return highlightedWords.has(clean);
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] bg-[#0c1a2e]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[100px]" />

        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="sticky top-0 h-screen flex items-center px-6 md:px-24 overflow-hidden">

        <div className="max-w-6xl">

          <p className="text-xs uppercase tracking-[0.35em] text-sky-400 font-bold mb-8">
            OUR TRACK RECORD
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-5">

            {words.map((word, index) => {

              const start = index / words.length;
              const end = (index + 1) / words.length;

              return (
                <Word
                  key={index}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlighted={isHighlightWord(word)}
                >
                  {word}
                </Word>
              );
            })}

          </div>

        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-4">

          <motion.div
            style={{ opacity: hintOpacity }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-px bg-sky-400/30" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-sky-300/70">
              Scroll To Read
            </span>

            <div className="w-10 h-px bg-sky-400/30" />
          </motion.div>

          <div className="w-72 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="origin-left h-full bg-gradient-to-r from-sky-500 to-blue-400"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

const Word = ({ children, progress, range, isHighlighted }) => {

  const color = useTransform(
    progress,
    range,
    [
      "#2e3a52", // brighter initial color
      isHighlighted ? "#38BDF8" : "#FFFFFF",
    ]
  );

  const scale = useTransform(
    progress,
    range,
    [0.98, 1]
  );

  return (
    <motion.span
      style={{
        color,
        scale,
      }}
      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight"
    >
      {children}
    </motion.span>
  );
};

export default TrustedSection;