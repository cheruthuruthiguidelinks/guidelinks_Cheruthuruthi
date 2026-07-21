import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Building2, ShieldCheck, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import coimImg from '../assets/destination/coimbature1.jpeg'
import kochiImg from '../assets/destination/kochi1.jpeg'
import bngImg from '../assets/destination/bangalore.jpeg'

const cities = [
  {
    name: "Coimbatore",
    state: "Tamil Nadu",
    speciality: "Engineering & Medical Hub",
    count: "40+ Partner Colleges",
    image: coimImg
  },
  {
    name: "Bangalore",
    state: "Karnataka",
    speciality: "Tech & Management Excellence",
    count: "100+ Partner Colleges",
    image: bngImg
  },
  {
    name: "Kochi",
    state: "Kerala",
    speciality: "Professional Course Center",
    count: "25+ Partner Colleges",
    image: kochiImg
  }
];

const PageHero = () => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/25 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[90px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Domestic Excellence
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
      >
        South India <span className="text-gradient">Admissions</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed"
      >
        Gain seamless entries into South India's premier educational hubs. We guide candidates through direct admissions and NRI quota allocations in high-ranking MBBS, Engineering, and Management colleges.
      </motion.p>
    </div>
  </div>
);

const AdmissionSouthIndia = ({ showHero = true }) => {
  return (
    <>
      <Helmet>
        <title>Domestic Admissions South India | Guidelinks International</title>
        <meta name="description" content="Secure admissions in South India's premium medical and engineering colleges in Coimbatore, Bangalore, and Kochi through Guidelinks." />
      </Helmet>

      {showHero && <PageHero />}

      <div className={`${showHero ? 'py-20' : 'py-6'} max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`}>
        
        {/* City Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-[2rem] overflow-hidden transition-all duration-500 border border-brand-500/5 shadow-lg hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent z-10" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold mb-1 block">
                    {city.state}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-1.5 tracking-tight">
                    <MapPin className="w-5 h-5 text-accent-gold" />
                    {city.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center border border-brand-500/5 shrink-0">
                    <Building2 className="w-4.5 h-4.5 text-brand-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{city.speciality}</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center border border-brand-500/5 shrink-0">
                    <GraduationCap className="w-4.5 h-4.5 text-brand-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{city.count}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[3rem] bg-brand-900 border border-white/5 p-8 md:p-16 lg:p-20 relative overflow-hidden text-white shadow-2xl"
        >
          {/* Background glowing particles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:45px_45px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Focus List */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                Our Domain <span className="text-gradient-gold">Expertise</span>
              </h2>
              <p className="text-brand-100 mb-10 text-sm sm:text-base leading-relaxed font-medium">
                With comprehensive connections spanning top educational hubs in South India, we facilitate transparent seats allocations in prestigious faculties:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  "MBBS & Dental Seats",
                  "Top Tier B-Tech Specialities",
                  "Premier MBA & PGDM Sectors",
                  "Allied Health Science Fields"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-gold shrink-0" />
                    <span className="text-base font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Card */}
            <div className="lg:col-span-5 glass-card-dark bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
               <div>
                 <h3 className="text-xl font-extrabold mb-6 tracking-tight text-white">Why Guidelinks Domestic?</h3>
                 <ul className="space-y-5 text-xs text-brand-100 font-semibold">
                   <li className="flex gap-3">
                     <span className="text-accent-gold font-bold font-mono">01.</span>
                     <p className="leading-relaxed">Direct partner authorizations ensure transparent seat allocations and pricing.</p>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-accent-gold font-bold font-mono">02.</span>
                     <p className="leading-relaxed">Complete guidance through regulatory procedures for Management/NRI quotas.</p>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-accent-gold font-bold font-mono">03.</span>
                     <p className="leading-relaxed">Deep localized expertise in fee brackets, documentation, and campus rankings.</p>
                   </li>
                 </ul>
               </div>

               <motion.div
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="mt-8 w-full"
               >
                 <Link
                   to="/contact"
                   className="flex w-full items-center justify-center rounded-2xl bg-brand-500 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-600"
                 >
                   Check Seat Availability
                 </Link>
               </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </>
  );
};

export default AdmissionSouthIndia;
