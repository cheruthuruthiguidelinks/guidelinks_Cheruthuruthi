import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, X, CheckCircle2, Loader2, Sparkles, User, Phone, Clock, BookOpen } from 'lucide-react';

const CallbackModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    formData.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '7dc262ea-e321-4ee4-8b29-03d44e4c56ef'
    );
    formData.append('subject', 'Urgent Callback Request - Guidelinks Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center sm:items-center justify-center overflow-y-auto p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-[2.5rem] max-w-lg w-full shadow-2xl border border-gray-100 relative overflow-y-auto max-h-[92vh] my-6 sm:my-0 p-6 sm:p-10"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleReset}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Callback Scheduled!
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs mx-auto">
                Thank you! Senior advisor Sijo or a counselor will call you back on your provided phone number shortly.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-8 py-3.5 bg-brand-900 text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-brand-650 transition cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Instant Counselor Callback
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Request a Callback
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Enter your details below and our senior counselors will get in touch at your preferred time.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ananya Nair"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Preferred Course / Interest */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Interested Stream / Destination
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="interest"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition appearance-none"
                    >
                      <option value="Pan-Asia Nursing & Paramedical">Pan-Asia Nursing & Paramedical</option>
                      <option value="Study Abroad (UK/Canada/Germany/Aus)">Study Abroad (UK / Canada / Germany)</option>
                      <option value="Domestic Admissions (South India)">South India Management & NRI Quotas</option>
                      <option value="MBBS / Medical Admissions">MBBS & Medical Admissions</option>
                      <option value="Engineering & Tech Courses">Engineering & Tech Courses</option>
                      <option value="General Counseling">General Admission Counseling</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 block">
                    Preferred Callback Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="time_slot"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition appearance-none"
                    >
                      <option value="As soon as possible">As Soon As Possible (Within 15 Mins)</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-600 font-bold text-center">
                    Something went wrong. Please try again or call +91 85900 90969 directly.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-brand-900 hover:bg-brand-650 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Callback...</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-4 h-4" />
                      <span>Confirm Callback Request</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CallbackModal;
