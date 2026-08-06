import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { User, GraduationCap, Compass, Globe, ExternalLink } from 'lucide-react';
import devovaLogo from '../assets/logos/devova-solutions-logo.jpeg';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-light/10 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Who Guides You
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

const Team = () => {
  const counsellors = [
    {
      name: 'Rinju Mathew',
      role: 'Senior Admission Advisor (Abroad)',
      desc: 'Expert in UK, Canada, and Germany applications, helping candidates curate standout SOPs and secure study visas.',
      initials: 'RM',
      accent: 'text-sky-600 bg-sky-50',
    },
    {
      name: 'Anjali Menon',
      role: 'Chief Counsellor (Domestic Admissions)',
      desc: 'Specializes in NEET counseling, engineering quota seat mapping, and top South Indian university admissions.',
      initials: 'AM',
      accent: 'text-blue-600 bg-blue-50',
    },
    {
      name: 'Sneha Joseph',
      role: 'Visa & Documentation Specialist',
      desc: 'Dedicated to student financial drafting, block accounts coordination, and international student orientations.',
      initials: 'SJ',
      accent: 'text-violet-600 bg-violet-50',
    },
    {
      name: 'Karthik Raja',
      role: 'Career Pathway Consultant',
      desc: 'Guiding undergraduates and postgraduates through direct seat allocations and management quota eligibility evaluations.',
      initials: 'KR',
      accent: 'text-emerald-600 bg-emerald-50',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Guidelinks International</title>
        <meta name="description" content="Meet the expert team at Guidelinks International, led by Managing Director Sijo, dedicated to your international and domestic admissions success." />
      </Helmet>
      
      <PageHero 
        title="Meet Our Team" 
        subtitle="Empowering your academic success with experienced advisors, documentation specialists, and trusted digital partners." 
      />

      {/* Leadership Section */}
      <section className="py-20 relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Leadership</h2>
          <p className="text-gray-500 font-medium max-w-md mx-auto text-sm">Driving transparency and setting the standards for premium educational advisory.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-brand-500/5 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
          >
            {/* MD Portrait Placeholder */}
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-3xl bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-650 to-brand-450 opacity-90" />
              <div className="relative z-10 flex flex-col items-center gap-1.5">
                <User className="w-12 h-12 md:w-16 md:h-16 text-white/95" />
                <span className="text-[10px] uppercase tracking-widest font-black text-sky-200">Founder</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 mb-2 block">Managing Director</span>
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Sijo</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-6 text-sm sm:text-base">
                Since founding Guidelinks in 2019, Sijo has been dedicated to establishing a direct, transparent, and student-first consultancy pathway. Under his leadership, Guidelinks has expanded its partner network to cover over 200 universities globally and secured the academic future of more than 10,000 students.
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  Direct Advisory
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  100% Transparency
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Counsellors Grid */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-brand-100/30 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-3 block">Expert Advisory</span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Our Counselling Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counsellors.map((c, i) => (
              <motion.div 
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card hover-border-glow rounded-3xl p-6 border border-brand-500/5 shadow-sm flex flex-col gap-5 justify-between"
              >
                <div className="flex flex-col gap-4">
                  {/* Initials Avatar */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-base ${c.accent}`}>
                    {c.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-gray-900 leading-tight mb-1">{c.name}</h4>
                    <p className="text-xs font-bold text-brand-600">{c.role}</p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Technology & Marketing Partner */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block">Innovation & Growth</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Our Technology Partner</h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2rem] p-8 md:p-10 border border-brand-100/60 shadow-lg mt-8"
          >
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-40 h-16 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200">
                  <img
                    src={devovaLogo}
                    alt="Devova Solutions logo"
                    className="absolute left-1/2 -top-[84px] w-56 max-w-none -translate-x-1/2"
                  />
                </div>
              
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Devova Solutions</h3>
                <p className="text-xs font-bold text-brand-650 tracking-wider">OFFICIAL DIGITAL & PLATFORM PARTNER</p>
              </div>

              <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-md">
                Devova Solutions drives the web experiences, tech architectures, and digital marketing outreach for Guidelinks International.
              </p>

              <motion.a 
                href="https://www.devova.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold text-xs shadow-md hover:bg-black transition-all cursor-pointer mt-2"
              >
                Visit www.devova.tech
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
