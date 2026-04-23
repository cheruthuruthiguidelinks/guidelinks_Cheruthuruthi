import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'College Predictor', path: '/college-predictor' },
    { name: 'Contact', path: '/contact' }
  ];

  const destinationLinks = [
    { name: 'Study in India', path: '/study-india' },
    { name: 'Study Abroad', path: '/study-abroad' },
    { name: 'All Destinations', path: '/destinations' },
    { name: 'Domestic Admissions', path: '/admission-south-india' },
  ];

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
            <Link to="/">
              <img src={logo} alt="Guidelinks Logo" className={`w-auto relative z-10 transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-12 sm:h-14' : 'h-16 sm:h-20'}`} />
            </Link>
          </motion.div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.slice(0, 3).map((item, index) => (
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

            {/* Dropdown for Destinations */}
            <motion.div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                className={`flex items-center gap-1 ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-brand-500 font-semibold transition-colors`}
              >
                Destinations <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden glass-effect shadow-xl border border-white/20"
                  >
                    <div className="flex flex-col py-2">
                      {destinationLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="px-4 py-2 hover:bg-brand-50/50 text-gray-700 hover:text-brand-600 font-medium transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.slice(3).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 4) * 0.1 }}
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

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
               <Link
                  to="/blog"
                  className={`${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-brand-500 font-semibold transition-colors`}
                >
                  Blog
                </Link>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="relative overflow-hidden px-6 py-2.5 bg-gray-900 group rounded-full font-medium shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.4)] transition-all duration-300"
            >
              {/* AI Button Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-600 via-purple-500 to-brand-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}></div>
              <span className="relative z-10 flex items-center gap-2 text-white font-semibold whitespace-nowrap">
                Consult Now
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </motion.button>
          </div>

          <div className="lg:hidden flex items-center">
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-white/20 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-500 hover:bg-brand-50/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-2 pb-1 border-t border-gray-200/50">
                <p className="px-3 py-2 text-sm text-gray-500 font-bold uppercase tracking-wider">Destinations</p>
                {destinationLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-brand-500 hover:bg-brand-50/50 rounded-lg transition-colors pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

               <Link
                  to="/blog"
                  className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-500 hover:bg-brand-50/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

              <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-brand-600 to-purple-500 text-white rounded-xl font-bold shadow-md hover:from-brand-500 hover:to-purple-400 transition-colors" style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}>
                Consult Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
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
