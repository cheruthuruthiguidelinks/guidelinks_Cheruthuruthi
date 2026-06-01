import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Domestic Education: South India's Rising Hubs",
    excerpt: "An in-depth review on why cities like Bangalore, Coimbatore, and Kochi are becoming the preferred destinations for professional courses.",
    date: "May 15, 2026",
    author: "Admissions Analyst",
    category: "Domestic Seat",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Post-Study Work Permits in Canada: 2026 Regulations",
    excerpt: "Essential updates you must review regarding visa eligibility, duration, and PR tracks before applying this intake.",
    date: "May 10, 2026",
    author: "Immigration Counsel",
    category: "International",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Mastering the IELTS: Strategies for a 8.5 Band Score",
    excerpt: "Actionable prep guidelines covering listening retention and speaking clarity that actually influence graders.",
    date: "May 05, 2026",
    author: "IELTS Head Coach",
    category: "Preparation",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Insights & News | Guidelinks International</title>
        <meta name="description" content="Stay ahead with the latest admissions insights, study visa regulations, and IELTS coaching prep updates from Guidelinks." />
      </Helmet>

      <div className="pt-36 pb-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 mb-4 block"
          >
            Insights & Guides
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
          >
            Knowledge <span className="text-gradient">Horizon</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Expert analysis, tips, and official announcements covering domestic and global educational networks.
          </motion.p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 22px 45px rgba(49, 87, 56, 0.07)"
              }}
              className="group glass-card rounded-[2rem] overflow-hidden transition-all duration-500 border border-brand-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-650 shadow-sm border border-brand-500/5 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Meta details */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent-gold" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-brand-500" /> {post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-brand-650 transition-colors duration-300 tracking-tight leading-snug">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-8 pb-8">
                <button className="flex items-center gap-2 text-brand-600 hover:text-accent-gold font-bold text-xs tracking-wider uppercase group/btn transition-colors duration-300 cursor-pointer">
                  Read Article 
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
