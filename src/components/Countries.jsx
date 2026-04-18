import React from 'react';
import { motion } from 'framer-motion';

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

const Countries = () => {
  return (
    <section id="destinations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Study <span className="text-gradient">Destinations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore top education hubs globally with our expert guidance tailored for each country.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
              <img 
                src={country.image} 
                alt={country.name} 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                    {country.name}
                  </h3>
                </div>
                <div className="flex bg-white/20 backdrop-blur-md rounded-lg p-3 text-white text-sm divide-x divide-white/30 border border-white/20">
                  <div className="pr-3">
                    <p className="font-semibold">{country.topUniversities}</p>
                    <p className="text-white/70 text-xs">Universities</p>
                  </div>
                  <div className="pl-3">
                    <p className="font-semibold">{country.students}</p>
                    <p className="text-white/70 text-xs">Students</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
