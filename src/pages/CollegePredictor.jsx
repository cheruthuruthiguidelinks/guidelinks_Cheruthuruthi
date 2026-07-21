import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Mail } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        AI Tools
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
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

const CollegePredictor = () => {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status !== 'success' && status !== 'error') return undefined;

    const timeout = window.setTimeout(() => setStatus('idle'), 5000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleNotify = async (event) => {
    event.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setErrorMessage('The notification form is not configured yet. Please try again later.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(event.target);
    formData.append('access_key', accessKey);
    formData.append('subject', 'College Predictor – Notify Me Request');
    formData.append('from_name', 'Guidelinks International');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        event.target.reset();
        setStatus('success');
      } else {
        setErrorMessage(data.message || 'We couldn’t submit your request. Please try again.');
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Unable to connect. Please check your internet connection and try again.');
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>AI College Predictor | Guidelinks International</title>
        <meta name="description" content="Predict your chances of admission into top tier institutions with our advanced AI college predictor tool." />
      </Helmet>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            role={status === 'error' ? 'alert' : 'status'}
            className={`fixed top-6 left-1/2 z-[500] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl px-5 py-4 text-center text-sm font-semibold shadow-xl ${
              status === 'success'
                ? 'bg-emerald-600 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {status === 'success'
              ? 'Thank you. We’ll notify you as soon as the College Predictor is available.'
              : errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
      
      <PageHero 
        title="College Predictor" 
        subtitle="Discover and rank top global and domestic colleges matching your grades and score profiles." 
      />

      <section className="py-24 relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center border border-brand-500/5 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold mesh blur in corner */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-accent-light/10 rounded-full blur-[60px]" />

          <div className="flex justify-center mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Under Active Development
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Coming Soon</h2>
          
          <p className="text-gray-500 mb-10 max-w-lg mx-auto font-medium text-sm leading-relaxed">
            Our AI-powered engine maps competitive entrance scores, academic history, and financial preferences against admission criteria for over 300+ colleges. Sign up to get notified upon release.
          </p>

          {/* Premium Email form */}
          <form 
            onSubmit={handleNotify}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full border border-brand-500/5 p-2 rounded-2xl bg-white/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 px-3 flex-1">
              <Mail className="w-5 h-5 text-gray-400 shrink-0" />
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email address" 
                className="w-full text-sm py-2 bg-transparent text-gray-800 focus:outline-none placeholder-gray-400 font-semibold"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="px-6 py-3 bg-brand-900 hover:bg-brand-650 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-colors shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Submitting...' : 'Get Notified'}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default CollegePredictor;
