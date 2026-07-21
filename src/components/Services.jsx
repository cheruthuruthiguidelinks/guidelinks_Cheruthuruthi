import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, 
  GraduationCap, 
  BookOpen, 
  Gift, 
  Building2, 
  Luggage, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  FileCheck,
  Globe,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'domestic-quotas',
    category: 'domestic',
    icon: Building2,
    badge: 'South India Hub',
    title: 'Management & NRI Quota Admissions',
    subtitle: 'Direct Seat Bookings in Top Engineering, Medical & Management Colleges',
    description: 'Guaranteed seat allocations in premiere institutions across Bangalore, Coimbatore, Mangalore, and Kerala with complete fee transparency and direct management coordination.',
    features: [
      'MBBS, BDS, B.Tech, MBA & Paramedical direct bookings',
      'Transparent NRI and Management fee structure breakdowns',
      'Affiliated with RGUHS, VTU, Anna University & Apex bodies',
      'Guaranteed seat confirmation & spot admission support'
    ]
  },
  {
    id: 'study-abroad',
    category: 'abroad',
    icon: GraduationCap,
    badge: 'Global Pathways',
    title: 'Study Abroad University Placement',
    subtitle: 'End-to-End International Admissions in UK, Canada, Australia & Germany',
    description: 'Comprehensive profile assessment, SOP/LOR drafting, university shortlisting, and direct application filing to high-ranking global universities.',
    features: [
      'Tailored university mapping matching your GPA & career goals',
      'Expert SOP (Statement of Purpose) & LOR writing support',
      'Application fee waivers & fast-track admission processing',
      'Post-study work permit & permanent residency guidance'
    ]
  },
  {
    id: 'visa-assistance',
    category: 'visa',
    icon: Plane,
    badge: '99.4% Success Rate',
    title: 'Visa Processing & Documentation',
    subtitle: 'Certified Embassy Documentation & Mock Interview Preparation',
    description: 'Flawless visa filing backed by certified immigration counselors to ensure error-free documentation, financial proofing, and embassy interview readiness.',
    features: [
      'Strict verification of financial proof & bank sponsorship documents',
      'CAS / I-20 / LOA acquisition & fast-track filing',
      '1-on-1 mock embassy visa interview training',
      'Dependent & spouse visa guidance'
    ]
  },
  {
    id: 'test-prep',
    category: 'prep',
    icon: BookOpen,
    badge: 'High Band Guarantee',
    title: 'IELTS, OET & Language Coaching',
    subtitle: 'Targeted Prep for Academic IELTS, OET & German Language (A1 to B2)',
    description: 'Interactive live coaching modules designed by certified instructors to help students clear language proficiency hurdles required for study & work abroad.',
    features: [
      'Personalized 1-on-1 speaking & writing review sessions',
      'Comprehensive OET coaching for medical & nursing candidates',
      'German language classes (A1, A2, B1, B2) for tuition-free study',
      'Weekly mock tests with detailed scoring analytics'
    ]
  },
  {
    id: 'scholarship-loans',
    category: 'financial',
    icon: Gift,
    badge: 'Financial Aid',
    title: 'Scholarship & Education Loan Support',
    subtitle: 'Maximizing Institutional Grants & Fast-Tracking Bank Loans',
    description: 'Identify university scholarships, merit grants, and secure hassle-free collateral & non-collateral education loans from nationalized partner banks.',
    features: [
      'Mapping university merit scholarships & early-bird grants',
      'Nationalized & private bank education loan assistance',
      'Low-interest rate guidance & pre-sanction letters',
      'Financial documentation & proof-of-funds verification'
    ]
  },
  {
    id: 'pre-post-departure',
    category: 'abroad',
    icon: Luggage,
    badge: 'Student Care',
    title: 'Pre-Departure & Post-Arrival Assistance',
    subtitle: 'Smooth Overseas Transition & Accommodation Booking',
    description: 'We stay by your side even after admission. From airport reception and temporary housing to part-time job briefings and local SIM cards.',
    features: [
      'Guaranteed student accommodation & hostel reservations',
      'Airport pickup coordination & local orientation',
      'Forex card, currency exchange & international bank accounts',
      'Part-time work regulations & CV adaptation for overseas jobs'
    ]
  }
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'abroad', label: 'Study Abroad' },
  { id: 'domestic', label: 'Domestic Quotas' },
  { id: 'visa', label: 'Visa & Documentation' },
  { id: 'prep', label: 'Test Prep' },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/70 text-brand-700 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Academic Advisory</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"
          >
            Our Comprehensive <span className="text-gradient">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            From direct college seat bookings in South India to global university admissions and visa approvals—we provide transparent, 360-degree support at every stage.
          </motion.p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-900 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-brand-50 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:border-brand-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle top accent gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center group-hover:bg-brand-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full group-hover:bg-brand-50 group-hover:text-brand-800 transition-colors">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-6">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-50 group-hover:bg-brand-900 text-slate-800 group-hover:text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-900 via-brand-800 to-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              Need Tailored Counseling?
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Unsure which path or service suits your profile best?
            </h3>
            <p className="text-slate-300 text-sm font-medium max-w-xl">
              Talk directly with senior education advisor Sijo and our expert team for a zero-cost 1-on-1 profile evaluation.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-8 py-4 bg-blue text-brand-950 font-extrabold rounded-2xl text-xs uppercase tracking-widest hover:bg-sky-50 transition-all shadow-xl hover:scale-105 cursor-pointer relative z-10"
          >
            Speak With Counselor
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;
