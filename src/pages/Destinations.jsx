import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Globe, Shield, Wallet } from 'lucide-react';

const destinations = [
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1549880816-0e10cced57ae?auto=format&fit=crop&q=80&w=800",
    description: "World-class education with generous post-study work permits.",
    benefits: ["Quality of Life", "Multiculturalism", "PR Prospects"]
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    description: "Home to historical institutions and fast-track degree programs.",
    benefits: ["Academic Heritage", "Global Recognition", "1-Year Masters"]
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580691-628d3bdbe0cc?auto=format&fit=crop&q=80&w=800",
    description: "Exceptional research facilities and stunning lifestyle.",
    benefits: ["Sunshine & Study", "High Wages", "Innovation Hub"]
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
    description: "The economic powerhouse of Europe with low-tuition options.",
    benefits: ["Free Education", "Engineering Hub", "Strong Economy"]
  }
];

const Destinations = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-brand-600 font-semibold tracking-widest uppercase text-sm">Explore the World</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
          Global <span className="text-gradient">Gateways.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tailored pathways to the world's most prestigious educational institutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border border-gray-100 shadow-xl"
          >
            <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <h3 className="absolute bottom-6 left-8 text-3xl font-bold text-white uppercase tracking-tighter">
                {dest.name}
              </h3>
            </div>
            
            <div className="p-10 md:w-1/2 flex flex-col justify-center">
              <p className="text-gray-600 mb-8 leading-relaxed italic">
                "{dest.description}"
              </p>
              <div className="space-y-4">
                {dest.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center">
                      <Shield className="w-3 h-3 text-brand-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <button className="mt-10 px-8 py-3 bg-brand-600 text-white rounded-2xl font-bold text-sm hover:bg-brand-700 transition-colors w-full md:w-fit">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
