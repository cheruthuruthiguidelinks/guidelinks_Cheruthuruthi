import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';

const cities = [
  {
    name: "Coimbatore",
    state: "Tamil Nadu",
    speciality: "Engineering & Medical Hub",
    count: "40+ Colleges",
    image: "https://images.unsplash.com/photo-1590490359854-dfba19688d70?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    speciality: "Tech & Management Excellence",
    count: "100+ Colleges",
    image: "https://images.unsplash.com/photo-1597041066774-fa8664ec26ed?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Kochi",
    state: "Kerala",
    speciality: "Professional Course Center",
    count: "25+ Colleges",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800"
  }
];

const AdmissionSouthIndia = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="text-brand-600 font-semibold tracking-widest uppercase text-sm">Domestic Excellence</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-8">
          South India <span className="text-gradient">Admissions.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Guiding you to the finest educational institutions across South India. 
          Expert counseling for Medical, Engineering, and Management seats.
        </p>
      </motion.div>

      {/* Grid of Cities/States */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {cities.map((city, index) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 shadow-lg"
          >
            <div className="relative h-64">
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-brand-400 font-bold uppercase tracking-widest text-xs mb-1">{city.state}</p>
                <h3 className="text-2xl font-bold text-white">{city.name}</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-medium text-gray-700">{city.speciality}</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-medium text-gray-700">{city.count}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Areas Section */}
      <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Our Domain <span className="text-brand-400">Expertise</span></h2>
            <p className="text-brand-100 mb-12 leading-relaxed">
              With 15+ years of experience in the South Indian education sector, we provide direct links 
              to management and merit seats in top institutions.
            </p>
            <div className="space-y-6">
              {[
                "MBBS & Dental Clinical Seats",
                "Top Tier B-Tech Specializations",
                "Premier MBA & PGDM Programs",
                "Allied Health Science Admissions"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-400" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card bg-white/5 border-white/10 rounded-3xl p-10 backdrop-blur-3xl">
             <h3 className="text-2xl font-bold mb-6">Why Choose Guidelinks for Domestic?</h3>
             <ul className="space-y-6 text-brand-100">
               <li className="flex gap-4">
                 <span className="text-brand-400 font-bold">01.</span>
                 <p>Direct institutional representation ensure transparency in seat booking.</p>
               </li>
               <li className="flex gap-4">
                 <span className="text-brand-400 font-bold">02.</span>
                 <p>Complete documentation and legal assistance for NRI/Management quotas.</p>
               </li>
               <li className="flex gap-4">
                 <span className="text-brand-400 font-bold">03.</span>
                 <p>Deep localized knowledge of fee structures and scholarship availability.</p>
               </li>
             </ul>
             <button className="mt-10 w-full py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-2xl font-bold transition-all">
                Check Seat Availability
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSouthIndia;
