import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Domestic Education: South India's Rising Hubs",
    excerpt: "Why Bangalore and Chennai are becoming the preferred destinations for professional courses over abroad.",
    date: "April 15, 2026",
    author: "Edu Specialist",
    category: "Domestic Admission",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Post-Study Work Permits in Canada: 2026 Updates",
    excerpt: "Essential changes you need to know before applying for Canadian universities this year.",
    date: "April 10, 2026",
    author: "Global Consultant",
    category: "International",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Mastering the IELTS: Tips for a 8.5 Band Score",
    excerpt: "Specific strategies for the listening and speaking modules that actually work.",
    date: "April 05, 2026",
    author: "IELTS Expert",
    category: "Coaching",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  }
];

const Blog = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-brand-600 font-semibold tracking-widest uppercase text-sm">Insights & Updates</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
          Knowledge <span className="text-gradient">Horizon.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay ahead with the latest trends in global and domestic education.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(14,165,233,0.1)] transition-all duration-500 border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-brand-600 shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-brand-600 font-bold text-sm group/btn">
                Read Article 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
