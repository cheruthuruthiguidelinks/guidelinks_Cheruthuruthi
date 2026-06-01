import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    university: 'University of Toronto',
    country: 'Canada',
    rating: 5,
    text: 'Guidelinks made my dream of studying in Canada a reality. Their team was incredibly supportive throughout the entire visa and admission process.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    university: 'University of Melbourne',
    country: 'Australia',
    rating: 5,
    text: 'I was overwhelmed by the application process, but their counselors simplified everything. From university selection to finding accommodation, they helped with it all.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Emma Williams',
    university: 'Imperial College London',
    country: 'UK',
    rating: 5,
    text: 'The IELTS coaching provided by Guidelinks was phenomenal. It gave me the confidence I needed to score well and secure my admission in the UK.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000); // Auto-scroll every 6 seconds
  };

  const stopAutoScroll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const nextSlide = () => {
    startAutoScroll();
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    startAutoScroll();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  // Slider animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="testimonials" className="py-28 bg-brand-50 relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-brand-200/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-3"
          >
            Alumni Reviews
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3.5xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Student <span className="text-gradient">Success Stories</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {/* Main Card Viewport */}
          <div className="overflow-hidden min-h-[340px] flex items-center justify-center py-4">
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
                dragElastic={0.4}
                onDragEnd={handleDragEnd}
                className="glass-card hover-border-glow rounded-[2rem] p-8 md:p-12 shadow-xl border border-white/60 relative cursor-grab active:cursor-grabbing w-full select-none"
              >
                {/* Floating gold quote mark */}
                <Quote className="absolute top-8 right-8 w-14 h-14 text-accent-gold/10 opacity-60 pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start text-center md:text-left">
                  
                  {/* Photo & Badge */}
                  <div className="shrink-0 relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-brand-400 to-accent-gold rounded-full blur-[6px] opacity-35" />
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      draggable="false"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    />
                  </div>

                  {/* Comment Contents */}
                  <div className="flex-1">
                    {/* Star Ratings */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-accent-gold text-accent-gold" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 italic font-medium leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-brand-600 font-semibold tracking-wide mt-0.5">
                        {testimonials[currentIndex].university} &middot; {testimonials[currentIndex].country}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-brand-100 flex items-center justify-center text-brand-650 shadow-md hover:bg-brand-50 hover:scale-108 transition-all duration-350 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-brand-100 flex items-center justify-center text-brand-650 shadow-md hover:bg-brand-50 hover:scale-108 transition-all duration-350 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
