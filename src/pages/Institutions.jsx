import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  MapPin, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Globe2, 
  X, 
  ChevronRight,
  Sparkles,
  PhoneCall,
  IndianRupee,
  GraduationCap,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultInstitutions = [
  {
    id: 'pan-asia-institutions',
    name: 'Pan-Asia Institutions',
    tagline: 'Pathway to Excellence',
    location: 'Nelamangala, Bangalore, Karnataka - 562123',
    category: 'Nursing & Paramedical',
    badge: 'Featured Partner',
    affiliations: ['RGUHS', 'INC', 'KNC', 'KSDNEB', 'Paramedical Board'],
    hospital: '100-Bedded Multi Speciality Hospital',
    overview: 'Pan-Asia Institutions in Bangalore offers premier healthcare education with top-notch clinical training, state-of-the-art simulation labs, and direct international placement pathways.',
    courses: [
      { name: 'B.Sc Nursing', duration: '4 Years', type: 'Undergraduate Degree' },
      { name: 'General Nursing & Midwifery (GNM)', duration: '3 Years', type: 'Diploma Program' },
      { name: 'DDT - Dialysis Technology', duration: '3 Years', type: 'Paramedical Diploma' },
      { name: 'DMIT - Medical Imaging Technology', duration: '3 Years', type: 'Paramedical Diploma' },
      { name: 'DMLT - Medical Laboratory Technology', duration: '3 Years', type: 'Paramedical Diploma' },
      { name: 'DOT & AT - Operation Theatre & Anaesthesia Tech', duration: '3 Years', type: 'Paramedical Diploma' }
    ],
    highlights: [
      '100 Bedded Multi Speciality Hospital for hands-on clinical training',
      'Digital classrooms with smart interactive panels & projectors',
      'Equipped simulation labs with latest medical technology',
      'Digital library with HELINET facility',
      'Ragging-free campus with 24x7 CCTV monitoring & security',
      'Wi-Fi enabled campus with well-experienced faculties',
      'Separate highly secured hostels for boys and girls',
      'Education loan and scholarship assistance guaranteed'
    ],
    feeStructure: {
      bscNursing: {
        title: 'B.Sc Nursing (4 Years)',
        yearly: [
          { year: '1st Year', fee: '₹ 2,85,000' },
          { year: '2nd Year', fee: '₹ 1,70,000' },
          { year: '3rd Year', fee: '₹ 1,70,000' },
          { year: '4th Year', fee: '₹ 1,70,000' }
        ],
        total: '₹ 7,95,000'
      },
      gnm: {
        title: 'General Nursing & Midwifery (3 Years)',
        yearly: [
          { year: '1st Year', fee: '₹ 1,70,000' },
          { year: '2nd Year', fee: '₹ 1,10,000' },
          { year: '3rd Year', fee: '₹ 1,10,000' }
        ],
        total: '₹ 3,90,000'
      },
      paramedical: {
        title: 'Diploma in Paramedical Sciences (DDT, DMIT, DOT & AT, DMLT)',
        yearly: [
          { year: '1st Year', fee: '₹ 1,50,000' },
          { year: '2nd Year', fee: '₹ 95,000' },
          { year: '3rd Year', fee: '₹ 95,000' }
        ],
        total: '₹ 3,40,000'
      }
    },
    internationalPathway: 'Provides comprehensive language training including German, OET, and IELTS to prepare nursing & healthcare students for global career opportunities in the UK, Germany, and Europe.'
  }
];

const PageHero = () => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-light/10 rounded-full blur-[100px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Partner Campus Network
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
      >
        Premier <span className="text-gradient">Institutions</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
      >
        Explore verified nursing, medical, and paramedical institutions with complete fee transparency and direct admission guidance.
      </motion.p>
    </div>
  </div>
);

const Institutions = () => {
  const [selectedInst, setSelectedInst] = useState(null);

  return (
    <>
      <Helmet>
        <title>Pan-Asia Institutions & Partner Colleges | Guidelinks International</title>
        <meta name="description" content="Explore Pan-Asia Institutions Bangalore - B.Sc Nursing, GNM, Dialysis & Imaging technology courses, fee structure, and international placement pathways." />
      </Helmet>
      
      <PageHero />

      <section className="py-20 relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12">
          {defaultInstitutions.map((inst) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden hover:border-brand-300 transition-all duration-300"
            >
              {/* Top Banner Header */}
              <div className="bg-gradient-to-r from-[#8b0000] via-[#b30000] to-[#8b0000] text-white p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider mb-3 backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5" /> {inst.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                      {inst.name}
                    </h2>
                    <p className="text-red-100 font-semibold text-sm tracking-wide">
                      {inst.tagline}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="/Pamplate.pdf"
                      download="Pan-Asia-Institutions-Pamphlet.pdf"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider border border-white/20 transition cursor-pointer backdrop-blur-md"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Prospectus</span>
                    </a>
                    <button
                      onClick={() => setSelectedInst(inst)}
                      className="px-6 py-3 bg-white text-red-950 font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-red-50 transition shadow-md cursor-pointer"
                    >
                      View Fee Structure
                    </button>
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-red-950/80 hover:bg-red-950 text-white font-bold rounded-xl text-xs uppercase tracking-wider border border-white/20 transition cursor-pointer"
                    >
                      Book Seat
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="p-8 md:p-12 space-y-10">
                {/* Location & Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-2 text-brand-600 font-bold text-sm">
                      <MapPin className="w-4 h-4 shrink-0 text-brand-500" />
                      <span>{inst.location}</span>
                    </div>
                    <p className="text-gray-600 font-medium text-base leading-relaxed">
                      {inst.overview}
                    </p>
                  </div>

                  <div className="lg:col-span-4 bg-brand-50/70 p-6 rounded-2xl border border-brand-100 space-y-3">
                    <div className="flex items-center gap-2 text-brand-900 font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-brand-600" />
                      <span>Recognitions & Affiliations</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {inst.affiliations.map((aff) => (
                        <span key={aff} className="px-3 py-1 bg-white text-brand-800 text-xs font-bold rounded-lg border border-brand-200/60 shadow-2xs">
                          {aff}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Courses Offered */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brand-600" />
                    <span>Courses Offered</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inst.courses.map((course, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-brand-300/50 transition">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] font-extrabold tracking-wider uppercase text-brand-600 bg-brand-100/60 px-2.5 py-0.5 rounded-md">
                            {course.duration}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{course.name}</h4>
                        <p className="text-xs text-gray-500 font-medium">{course.type}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-600" />
                    <span>What Sets Us Apart</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {inst.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/60 border border-slate-100 text-gray-700 font-medium text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* International Placement Pathway Box */}
                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-300/40 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        International Placement Pathway
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                        {inst.internationalPathway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action Bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <Building2 className="w-4 h-4 text-brand-600" />
                    <span>Direct Admissions open for current academic intake</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <a
                      href="/Pamplate.pdf"
                      download="Pan-Asia-Institutions-Pamphlet.pdf"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-50 hover:bg-red-100 text-red-900 font-bold rounded-xl text-xs uppercase tracking-wider transition cursor-pointer border border-red-200/60"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Brochure (PDF)</span>
                    </a>
                    <button
                      onClick={() => setSelectedInst(inst)}
                      className="flex-1 sm:flex-initial px-6 py-3 bg-brand-50 hover:bg-brand-100 text-brand-900 font-bold rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
                    >
                      Fee Details
                    </button>
                    <Link
                      to="/contact"
                      className="flex-1 sm:flex-initial px-8 py-3 bg-brand-900 hover:bg-brand-650 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-lg text-center cursor-pointer"
                    >
                      Enquire Admission
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Fee Structure Modal ── */}
      <AnimatePresence>
        {selectedInst && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative p-6 sm:p-10"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedInst(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1 block">
                  Official Fees Structure
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {selectedInst.name}
                </h3>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  {selectedInst.location}
                </p>
              </div>

              {/* Fee Tables */}
              <div className="space-y-8">
                {/* BSC Nursing */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
                  <h4 className="font-extrabold text-gray-900 text-base mb-4 flex items-center justify-between">
                    <span>{selectedInst.feeStructure.bscNursing.title}</span>
                    <span className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full font-bold">
                      Total: {selectedInst.feeStructure.bscNursing.total}
                    </span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    {selectedInst.feeStructure.bscNursing.yearly.map((y, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-400 font-bold block mb-1">{y.year}</span>
                        <span className="text-sm font-extrabold text-brand-900">{y.fee}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GNM */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
                  <h4 className="font-extrabold text-gray-900 text-base mb-4 flex items-center justify-between">
                    <span>{selectedInst.feeStructure.gnm.title}</span>
                    <span className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full font-bold">
                      Total: {selectedInst.feeStructure.gnm.total}
                    </span>
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {selectedInst.feeStructure.gnm.yearly.map((y, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-400 font-bold block mb-1">{y.year}</span>
                        <span className="text-sm font-extrabold text-brand-900">{y.fee}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Paramedical */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
                  <h4 className="font-extrabold text-gray-900 text-base mb-4 flex items-center justify-between">
                    <span>{selectedInst.feeStructure.paramedical.title}</span>
                    <span className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full font-bold">
                      Total: {selectedInst.feeStructure.paramedical.total}
                    </span>
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {selectedInst.feeStructure.paramedical.yearly.map((y, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-xs text-gray-400 font-bold block mb-1">{y.year}</span>
                        <span className="text-sm font-extrabold text-brand-900">{y.fee}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="/Pamplate.pdf"
                  download="Pan-Asia-Institutions-Pamphlet.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  <Download className="w-4 h-4 text-brand-600" />
                  <span>Download PDF Pamphlet</span>
                </a>
                
                <Link
                  to="/contact"
                  onClick={() => setSelectedInst(null)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-900 hover:bg-brand-650 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-lg text-center cursor-pointer"
                >
                  Proceed to Seat Booking
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Institutions;
