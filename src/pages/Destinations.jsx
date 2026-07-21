import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import can2Img from '../assets/destination/can3.jpeg'
import aus2Img from '../assets/destination/aus2.jpg'
import uk2Img from '../assets/destination/uk2.jpeg'
import ger2Img from '../assets/destination/ger2.jpeg'


const destinations = [
  {
    name: "Canada",
    image: can2Img,
    description: "Unlock stellar educational standards with generous post-graduation work opportunities and a structured pathway to permanent residency.",
    benefits: ["Top Tier Quality of Life", "Multicultural Environments", "Favorable PR Prospects"]
  },
  {
    name: "United Kingdom",
    image:uk2Img,
    description: "Study in historical institutions globally recognized for academic rigour and take advantage of fast-tracked one-year Masters programs.",
    benefits: ["Rich Academic Heritage", "Universal Degree Recognition", "1-Year Fast-track Masters"]
  },
  {
    name: "Australia",
    image: aus2Img,
    description: "Experience state-of-the-art research centers, high quality of living, and generous post-study work rights in a vibrant innovation hub.",
    benefits: ["World-class Research Facilities", "High Student Minimum Wages", "Exceptional Lifestyle & Weather"]
  },
  {
    name: "Germany",
    image:ger2Img,
    description: "Enter Europe's industrial powerhouse. Benefit from highly ranked public universities offering minimal or zero tuition fees.",
    benefits: ["Zero Tuition Fee Schemes", "Global Engineering Hub", "Unrivaled Economic Stability"]
  }
];

const PageHero = () => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    {/* Floating background glowing mesh */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[90px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Explore the World
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
      >
        Global <span className="text-gradient">Gateways</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
      >
        Tailored pathways connecting your academic goals with the world's most prestigious and highly-ranked educational institutions.
      </motion.p>
    </div>
  </div>
);

const Destinations = () => {
  return (
    <>
      <Helmet>
        <title>Study Abroad Destinations | Guidelinks International</title>
        <meta name="description" content="Explore premier study abroad hubs like Canada, UK, Australia, and Germany with expert guides and direct admissions from Guidelinks." />
      </Helmet>

      <PageHero />

      <div className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-20">
        {destinations.map((dest, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group glass-card rounded-[2.5rem] overflow-hidden flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } border border-brand-500/5 shadow-xl transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Image Column */}
              <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight uppercase">
                    {dest.name}
                  </h3>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
                <p className="text-gray-650 mb-8 leading-relaxed font-medium">
                  {dest.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-4">
                  {dest.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center border border-brand-500/5 shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-10 w-full sm:w-fit"
                >
                  <Link
                    to="/contact"
                    className="px-8 py-3.5 bg-brand-500 text-white rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-brand-650 transition-colors shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    Book Free Counselling
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Destinations;
