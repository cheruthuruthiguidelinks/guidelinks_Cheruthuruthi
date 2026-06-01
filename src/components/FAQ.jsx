import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exact services does Guidelinks International offer?",
    answer: "We provide end-to-end educational consultancy. This includes profile evaluations, career path mapping, college selection, application support, and visa filing for study abroad destinations (UK, Canada, Germany, Australia, USA). For domestic admissions, we guide candidates in securing merit and direct management/NRI quota seats in premium engineering, medical, and dental colleges across South India."
  },
  {
    question: "How do domestic management and NRI quota seat allocations work?",
    answer: "We act as official advisors helping parents map eligibility, fee structures, and document filings. We guide you through direct seating allocations in top institutions across Bangalore, Coimbatore, and Kerala (e.g., PES, RVCE, KMC Manipal). All college fees are structured directly with official institutional receipts — there are no hidden middleman markups."
  },
  {
    question: "Is the seat booking and counseling process transparent?",
    answer: "Yes, 100% transparency is our core value. From your initial slot reservation to fee schedules and hostel bookings, every single detail is shared in writing. All tuition fees are paid directly to the colleges' official bank accounts with immediate receipts, ensuring your peace of mind."
  },
  {
    question: "What is your success rate for international study visas?",
    answer: "Our study visa approval rate is 99.2%. This is achieved through meticulous documentation review, dedicated SOP curation reviews, financial statement mapping, and mock visa interview training with senior immigration experts."
  },
  {
    question: "Do you offer pre-departure and arrival support for study abroad?",
    answer: "Yes, our service doesn't end with a visa. We organize pre-departure briefing sessions covering local culture, bank account setups, student accommodation bookings, and part-time job search guides. Even after landing, our counselors remain reachable via WhatsApp to assist."
  },
  {
    question: "How do we get started with a free consultation?",
    answer: "You can book a free slot by visiting our Contact page, filling out the quick query form, or calling us directly at +91 85900 90969. We will analyze your entrance scores, academic history, and budget to build a customized plan."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative gradient nodes */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-200/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-sky-200/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-100 rounded-full mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">FAQ Helpdesk</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-medium text-base max-w-md mx-auto"
          >
            Have questions about quotas, application procedures, or visas? Here are clear, upfront answers.
          </motion.p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(14,165,233,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.05)]"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-800 pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: { height: { duration: 0.3, ease: 'easeOut' }, opacity: { duration: 0.25 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.25, ease: 'easeIn' }, opacity: { duration: 0.15 } }
                      }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50">
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
