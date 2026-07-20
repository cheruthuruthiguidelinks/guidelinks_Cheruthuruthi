import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import canImg from "../assets/destination/canada.jpeg"
import ukImg from "../assets/destination/uk.jpeg"
import ausImg from "../assets/destination/aus.jpeg"
import gerImg from "../assets/destination/gerImg.jpg"

const countries = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    topUniversities: '100+',
    students: '500+',
    image:canImg  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    topUniversities: '90+',
    students: '450+',
    image:ukImg  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    topUniversities: '40+',
    students: '300+',
    image:ausImg  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    topUniversities: '50+',
    students: '200+',
    image:gerImg  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const Countries = () => {
  return (
    <section id="destinations" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-3"
          >
            Study Destinations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Explore Global <span className="text-gradient">Gateways</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Expand your academic horizon by matching with top institutions across the world's most sought-after education hubs.
          </motion.p>
        </div>

        {/* Countries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(14, 165, 233, 0.14)' }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md border border-gray-100 transition-all duration-500 aspect-[4/5] flex flex-col justify-end"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={country.image}
                  alt={country.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/88 via-slate-900/30 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10" />
              </div>

              {/* Card content */}
              <div className="relative p-7 z-20 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors duration-300 tracking-tight">
                    {country.name}
                  </h3>
                </div>

                <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-3.5 text-white text-xs divide-x divide-white/15 border border-white/10">
                  <div className="w-1/2 pr-3">
                    <p className="font-extrabold text-sm text-sky-300">{country.topUniversities}</p>
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-wider mt-0.5">Universities</p>
                  </div>
                  <div className="w-1/2 pl-3">
                    <p className="font-extrabold text-sm text-sky-300">{country.students}</p>
                    <p className="text-white/60 text-[9px] font-bold uppercase tracking-wider mt-0.5">Students Placed</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-white/70 group-hover:text-white text-xs font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0">
                  <span>Explore Pathways</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;
