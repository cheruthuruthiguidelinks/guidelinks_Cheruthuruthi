import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center relative group cursor-pointer"
          >
            {/* AI Effect Glow behind logo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-400 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition duration-500"></div>
            <img src={logo} alt="Guidelinks Logo" className={`w-auto relative z-10 transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-12 sm:h-14' : 'h-16 sm:h-20'}`} />
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { name: 'Home', path: '/' },
              { name: 'Destinations', path: '/destinations' },
              { name: 'Domestic Admissions', path: '/admission-south-india' },
              { name: 'Blog', path: '/blog' }
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={item.name}
              >
                <Link
                  to={item.path}
                  className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-brand-500 font-semibold transition-colors`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden px-7 py-2.5 bg-gray-900 group rounded-full font-medium shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.4)] transition-all duration-300"
            >
              {/* AI Button Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-600 via-purple-500 to-brand-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}></div>
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                Consult Now
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-gray-900'} hover:text-brand-500 focus:outline-none p-2`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/20 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'Destinations', path: '/destinations' },
              { name: 'Domestic Admissions', path: '/admission-south-india' },
              { name: 'Blog', path: '/blog' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-500 hover:bg-brand-50/50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-brand-600 to-purple-500 text-white rounded-xl font-bold shadow-md hover:from-brand-500 hover:to-purple-400 transition-colors" style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}>
              Consult Now
            </button>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
