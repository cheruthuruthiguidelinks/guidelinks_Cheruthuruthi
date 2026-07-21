import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2,XCircle,CheckCircle2 } from "lucide-react";



  

const PageHero = ({ title, subtitle }) => (
  <div className="relative pt-36 pb-20 overflow-hidden bg-brand-50">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/25 rounded-full blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/10 rounded-full blur-[90px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
      >
        Reach Out
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

const Contact = () => {

  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");


  const onSubmit = async (event) => {
  event.preventDefault();

  setStatus("loading");

  const formData = new FormData(event.target);

  formData.append(
    "access_key",
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  );

  formData.append(
    "subject",
    "New Inquiry - Guidelinks International"
  );

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      event.target.reset();

      setStatus("success");

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

if (status === "success") {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-50 px-6">

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] shadow-xl p-12 max-w-lg text-center"
      >

        <CheckCircle2
          className="mx-auto text-green-500"
          size={72}
        />

        <h2 className="text-4xl font-bold mt-8">
          Thank You!
        </h2>

        <p className="mt-5 text-gray-500 leading-8">
          Your inquiry has been received successfully.
          <br />
          Our education counselors will contact you within
          <strong> 24 hours.</strong>
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Return Home
        </button>

        <p className="mt-5 text-sm text-gray-400">
          Redirecting automatically...
        </p>

        <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="h-full bg-brand-600"
          />

        </div>

      </motion.div>

    </section>
  );
}
if (status === "error") {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-50 px-6">

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] shadow-xl p-12 max-w-lg text-center"
      >

        <XCircle
          className="mx-auto text-red-500"
          size={72}
        />

        <h2 className="text-4xl font-bold mt-8">
          Submission Failed
        </h2>

        <p className="mt-5 text-gray-500 leading-8">
          We couldn't send your inquiry at the moment.
          <br />
          Please try again in a few minutes or contact us using
          the phone number or email provided.
        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={() => setStatus("idle")}
            className="flex-1 py-3 border border-brand-600 text-brand-600 rounded-xl font-semibold hover:bg-brand-50 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition"
          >
            Return Home
          </button>

        </div>

      </motion.div>

    </section>
  );
}
  return (
    <>
      <Helmet>
        <title>Contact Us | Guidelinks International</title>
        <meta name="description" content="Get in touch with Guidelinks for expert admission counseling, domestic allocations, and study abroad visa processing." />
      </Helmet>
      
      <PageHero 
        title="Contact Us" 
        subtitle="Our senior education counselors are standing by to map your university goals." 
      />

      <section className="py-24 relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Details */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
             className="lg:col-span-5 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">Get In Touch</h2>
              <p className="text-gray-500 font-medium">Reach out directly or drop us a query to lock in a consultation appointment.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0 border border-brand-500/5 shadow-sm">
                  <MapPin className="w-5.5 h-5.5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">Head Office</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold leading-relaxed">
                    Cheruthiruthi, Thrissur,<br />
                    Kerala, 679531, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0 border border-brand-500/5 shadow-sm">
                  <Phone className="w-5.5 h-5.5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">Phone Support</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold hover:text-brand-500 cursor-pointer transition-colors">+91 85900 90969</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center shrink-0 border border-brand-500/5 shadow-sm">
                  <Mail className="w-5.5 h-5.5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-900">General Inquiry</h4>
                  <p className="text-sm text-gray-500 mt-1 font-semibold hover:text-brand-500 cursor-pointer transition-colors">info@guidelinks.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="lg:col-span-7 glass-card rounded-[2.5rem] p-8 md:p-12 border border-brand-500/5 shadow-2xl relative"
          >
             {/* Sparkle decorative node */}
             <div className="absolute top-6 right-6 text-brand-500/10"><Sparkles className="w-10 h-10" /></div>

             <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name='name'
                      className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800" 
                      placeholder="Enter name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name='email'
                      className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800" 
                      placeholder="Enter email" 
                      required
                    />
                  </div>
                </div>
                <div>
                <div>
  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
    Phone Number
  </label>

  <input
    type="tel"
    name="phone"
    placeholder="enter number"
    required
    pattern="^\+?[0-9\s\-()]{7,20}$"
    className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800"
  />
</div>
<br></br>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Academic Program Interest</label>
                  
                  <select 
                  name='program'
                    className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-700"
                  >
                    <option>Select Option</option>
                    <option>MBBS & Medical Admissions</option>
                    <option>Engineering (B-Tech/M-Tech)</option>
                    <option>Management Quota (MBA/BBA)</option>
                    <option>Study Abroad (Canada/UK/Europe)</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    name='message'
                    className="w-full px-4 py-3.5 bg-white/50 border border-brand-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/15 focus:border-brand-500 focus:bg-white transition-all text-sm font-semibold text-gray-800" 
                    placeholder="How can our counselors help you?" 
                    required
                  />
                </div>
                <motion.button
  whileHover={status !== "loading" ? { scale: 1.02 } : {}}
  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
  type="submit"
  disabled={status === "loading"}
  className="w-full py-4 bg-brand-900 text-white rounded-2xl font-bold uppercase tracking-wider flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
>
  {status === "loading" ? (
    <>
      <Loader2 className="animate-spin w-5 h-5" />
      Sending...
    </>
  ) : (
    <>
      Send Message
      <Send className="w-4 h-4" />
    </>
  )}
</motion.button>
             </form>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
