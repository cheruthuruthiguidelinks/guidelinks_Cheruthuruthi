import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    university: 'University of Toronto',
    country: 'Canada',
    text: 'Guidelinks made my dream of studying in Canada a reality. Their team was incredibly supportive throughout the entire visa and admission process.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    university: 'University of Melbourne',
    country: 'Australia',
    text: 'I was overwhelmed by the application process, but their counselors simplified everything. From university selection to finding accommodation, they helped with it all.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Emma Williams',
    university: 'Imperial College London',
    country: 'UK',
    text: 'The IELTS coaching provided by Guidelinks was phenomenal. It gave me the confidence I needed to score well and secure my admission in the UK.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-[80px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Student <span className="text-gradient">Success Stories</span>
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 shadow-xl border border-white/60 relative"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-100 opacity-50" />
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-brand-100 shadow-md"
                />
                <div>
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-brand-600 font-medium">
                      {testimonials[currentIndex].university}, {testimonials[currentIndex].country}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-md hover:bg-brand-50 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-600 shadow-md hover:bg-brand-50 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
