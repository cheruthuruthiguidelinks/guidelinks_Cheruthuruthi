import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const countries = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    topUniversities: '100+',
    students: '500+',
    image: 'https://images.unsplash.com/photo-1549880816-0e10cced57ae?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    topUniversities: '90+',
    students: '450+',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    topUniversities: '40+',
    students: '300+',
    image: 'https://images.unsplash.com/photo-1523482580691-628d3bdbe0cc?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    topUniversities: '50+',
    students: '200+',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
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
            className="text-3.5xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Explore Global <span className="text-gradient">Gateways</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Expand your academic horizon by matching with top institutions across the world's most sought-after education hubs.
          </motion.p>
        </div>

        {/* Countries Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0 25px 50px rgba(49, 87, 56, 0.15)"
              }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-gray-100 transition-all duration-550 aspect-[4/5] flex flex-col justify-end"
            >
              {/* Background image & gradient masks */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={country.image} 
                  alt={country.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                {/* Dual-layer vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10" />
              </div>

              {/* Card Contents */}
              <div className="relative p-8 z-20 w-full">
                
                {/* Card Header (Flag & Name) */}
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="text-3xl filter drop-shadow-md">{country.flag}</span>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-accent-gold transition-colors duration-300 tracking-tight">
                    {country.name}
                  </h3>
                </div>

                {/* Country Statistics badging */}
                <div className="flex bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white text-xs divide-x divide-white/20 border border-white/15 shadow-inner">
                  <div className="w-1/2 pr-3.5">
                    <p className="font-extrabold text-sm tracking-tight text-accent-gold">{country.topUniversities}</p>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mt-0.5">Universities</p>
                  </div>
                  <div className="w-1/2 pl-3.5">
                    <p className="font-extrabold text-sm tracking-tight text-accent-gold">{country.students}</p>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mt-0.5">Students Placed</p>
                  </div>
                </div>

                {/* Micro-reveal action link */}
                <div className="mt-5 flex items-center gap-2 text-white/80 group-hover:text-white text-xs font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  <span>Explore Pathways</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
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
