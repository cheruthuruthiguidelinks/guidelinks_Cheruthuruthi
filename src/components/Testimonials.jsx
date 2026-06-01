import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Anagha Krishnan',
    institution: 'KMC Manipal, Karnataka',
    badge: 'MBBS · Domestic',
    location: 'From Thrissur, Kerala',
    rating: 5,
    text: 'I always wanted MBBS but had no idea how to get a management quota seat. Guidelinks explained everything — fees, hostel, ranking — no hidden surprises. I am now in Manipal and loving it. The team was like family throughout.',
    initials: 'AK',
    bg: 'bg-rose-50',
    accent: 'text-rose-500',
    dot: 'bg-rose-400',
  },
  {
    id: 2,
    name: 'Aswin Mohan',
    institution: 'RV College of Engineering, Bangalore',
    badge: 'B.Tech CSE · Domestic',
    location: 'From Palakkad, Kerala',
    rating: 5,
    text: 'Getting into RV College Bangalore was a dream. I came to Guidelinks not knowing anything about Karnataka management quota. They handled the entire process — application, counseling, admission day. Got my seat without any stress.',
    initials: 'AS',
    bg: 'bg-blue-50',
    accent: 'text-blue-500',
    dot: 'bg-blue-400',
  },
  {
    id: 3,
    name: 'Adarsh Nair',
    institution: 'University of Melbourne, Australia',
    badge: 'MS Computer Science · Abroad',
    location: 'From Kochi, Kerala',
    rating: 5,
    text: 'Guidelinks made Australia possible for me. My SOP, LOR drafts, visa preparation — they guided every single step. Even after I landed in Melbourne they were available on WhatsApp for support. Genuinely felt cared for.',
    initials: 'AD',
    bg: 'bg-sky-50',
    accent: 'text-sky-500',
    dot: 'bg-sky-400',
  },
  {
    id: 4,
    name: 'Thejaswini V.',
    institution: 'SDM College of Dental Sciences, Coimbatore',
    badge: 'BDS · Domestic',
    location: 'From Kozhikode, Kerala',
    rating: 5,
    text: 'I came to Coimbatore for BDS and never expected it to be this smooth. The admission, hostel, and orientation were all coordinated by the Guidelinks team. Even my parents felt comfortable because they got regular updates.',
    initials: 'TV',
    bg: 'bg-violet-50',
    accent: 'text-violet-500',
    dot: 'bg-violet-400',
  },
  {
    id: 5,
    name: 'Amal Raj',
    institution: 'Deakin University, Australia',
    badge: 'MBA · Abroad',
    location: 'From Kannur, Kerala',
    rating: 5,
    text: 'I was skeptical about consultancies but Guidelinks completely changed my mind. No fake promises, very transparent about costs. My student visa got approved in 3 weeks. Now studying MBA in Melbourne. Best decision of my life.',
    initials: 'AR',
    bg: 'bg-emerald-50',
    accent: 'text-emerald-500',
    dot: 'bg-emerald-400',
  },
  {
    id: 6,
    name: 'Vishnu Prasad',
    institution: 'PES University, Bangalore',
    badge: 'B.Tech ECE · Domestic',
    location: 'From Thrissur, Kerala',
    rating: 5,
    text: 'PES University Bangalore was my first and only choice. I reached Guidelinks in June and they got me confirmed within two weeks. 100% transparent — showed me the fee receipt, college rank, everything. No middle-man fees hidden.',
    initials: 'VP',
    bg: 'bg-amber-50',
    accent: 'text-amber-500',
    dot: 'bg-amber-400',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
  };

  const stopAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startAutoScroll();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    startAutoScroll();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    startAutoScroll();
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) nextSlide();
    else if (info.offset.x > 50) prevSlide();
  };

  const t = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }),
  };

  return (
    <section id="testimonials" className="py-28 bg-white relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-100 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-3"
          >
            Real Students · Real Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight"
          >
            What Our Students <span className="text-gradient">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-slate-500 text-sm font-medium"
          >
            From Kerala to Bangalore, Coimbatore, Melbourne and beyond.
          </motion.p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing select-none"
              >
                <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_2px_20px_rgba(14,165,233,0.07)] overflow-hidden">
                  
                  {/* Top accent strip */}
                  <div className={`h-1.5 w-full ${t.dot}`} />

                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-7 md:gap-10">

                      {/* Left — Avatar + info */}
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-48 shrink-0">
                        {/* Initials avatar */}
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${t.bg} flex items-center justify-center shrink-0`}>
                          <span className={`text-xl md:text-2xl font-extrabold ${t.accent}`}>{t.initials}</span>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-slate-900 leading-tight">{t.name}</h4>
                          <p className={`text-xs font-bold mt-1 ${t.accent}`}>{t.badge}</p>
                          <p className="text-xs text-slate-400 font-medium mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 shrink-0" />
                            {t.location}
                          </p>
                        </div>
                      </div>

                      {/* Right — Review */}
                      <div className="flex-1 flex flex-col justify-between">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium italic flex-1">
                          "{t.text}"
                        </p>

                        <p className="mt-5 text-xs text-slate-400 font-semibold border-t border-slate-100 pt-4">
                          {t.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-7">
            {/* Prev */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex
                      ? `w-8 h-2.5 ${item.dot}`
                      : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Student counter */}
          <div className="text-center mt-5">
            <p className="text-xs text-slate-400 font-medium">
              {currentIndex + 1} of {testimonials.length} reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
