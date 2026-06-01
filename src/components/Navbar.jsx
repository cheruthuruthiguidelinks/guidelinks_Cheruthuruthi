import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-[90%] max-w-7xl rounded-full border border-white/20 px-6 md:px-8 py-3 ${
        isScrolled 
          ? 'glass-effect top-4 shadow-[0_12px_40px_rgba(49,87,56,0.12)] border-brand-500/10' 
          : 'bg-white/10 backdrop-blur-[6px] top-6 border-white/10'
      }`}
    >
      <div className="flex justify-between items-center relative">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center relative group cursor-pointer">
          {/* Logo glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-brand-400 to-accent-gold rounded-full blur-xl opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <img
            src={logo}
            alt="Guidelinks Logo"
            className="relative z-10 transition-all duration-500 group-hover:scale-[1.03] object-contain"
            style={{
              height: isScrolled ? '38px' : '46px',
              width: 'auto',
              maxWidth: '140px',
              willChange: 'transform',
            }}
          />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.slice(0, 3).map((item) => {
            const active = isLinkActive(item.path);
            return (
              <div key={item.name} className="relative py-2">
                <Link
                  to={item.path}
                  className={`relative font-semibold text-sm transition-colors duration-300 ${
                    active 
                      ? 'text-brand-500' 
                      : 'text-gray-800 hover:text-brand-500'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </div>
            );
          })}

          {/* Destinations Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => {
              clearTimeout(dropdownTimer.current);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
            }}
          >
            <button 
              className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 text-gray-800 hover:text-brand-500`}
            >
              Destinations <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl overflow-hidden glass-effect shadow-2xl border border-brand-500/10 p-2"
                >
                  <div className="flex flex-col gap-1">
                    {destinationLinks.map((link) => {
                      const active = isLinkActive(link.path);
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                            active 
                              ? 'bg-brand-500/10 text-brand-600' 
                              : 'text-gray-700 hover:bg-brand-50/70 hover:text-brand-500'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(3).map((item) => {
            const active = isLinkActive(item.path);
            return (
              <div key={item.name} className="relative py-2">
                <Link
                  to={item.path}
                  className={`relative font-semibold text-sm transition-colors duration-300 ${
                    active 
                      ? 'text-brand-500' 
                      : 'text-gray-800 hover:text-brand-500'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </div>
            );
          })}

          <div className="relative py-2">
            <Link
              to="/blog"
              className={`relative font-semibold text-sm transition-colors duration-300 ${
                isLinkActive('/blog') ? 'text-brand-500' : 'text-gray-800 hover:text-brand-500'
              }`}
            >
              Blog
              {isLinkActive('/blog') && (
                <motion.span 
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-accent-gold rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </div>

          {/* Premium CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden px-6 py-2.5 bg-brand-900 group rounded-full font-semibold shadow-[0_4px_20px_rgba(49,87,56,0.2)] hover:shadow-[0_8px_30px_rgba(49,87,56,0.35)] transition-all duration-300 cursor-pointer"
          >
            {/* Hover sliding overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-600 via-accent-gold to-brand-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}></div>
            <span className="relative z-10 flex items-center gap-2 text-white text-xs tracking-wider uppercase font-bold">
              Consult Now
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300 text-accent-gold" />
            </span>
          </motion.button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-brand-500 focus:outline-none p-1.5 rounded-full hover:bg-brand-50/50 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Floating Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[110%] left-0 right-0 lg:hidden glass-effect border border-brand-500/10 shadow-2xl rounded-2xl overflow-hidden p-4 flex flex-col gap-2 z-50 max-h-[75vh] overflow-y-auto"
          >
            {navLinks.map((item, index) => {
              const active = isLinkActive(item.path);
              return (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.name}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-2.5 font-semibold text-sm rounded-xl transition-all duration-300 ${
                      active 
                        ? 'bg-brand-500/10 text-brand-600' 
                        : 'text-gray-700 hover:bg-brand-50/50 hover:text-brand-500'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
            
            <div className="pt-2 border-t border-brand-500/10 mt-2">
              <p className="px-4 py-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Destinations</p>
              {destinationLinks.map((item, index) => {
                const active = isLinkActive(item.path);
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 6) * 0.05 }}
                    key={item.name}
                  >
                    <Link
                      to={item.path}
                      className={`block px-6 py-2 font-semibold text-sm rounded-xl transition-all duration-300 ${
                        active 
                          ? 'bg-brand-500/10 text-brand-600' 
                          : 'text-gray-700 hover:bg-brand-50/50 hover:text-brand-500'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 10 * 0.05 }}
            >
              <Link
                to="/blog"
                className={`block px-4 py-2.5 font-semibold text-sm rounded-xl transition-all duration-300 ${
                  isLinkActive('/blog') ? 'bg-brand-500/10 text-brand-600' : 'text-gray-700 hover:bg-brand-50/50 hover:text-brand-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full mt-3 py-3 bg-brand-900 text-white rounded-xl font-semibold shadow-lg relative overflow-hidden flex items-center justify-center gap-2 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-gold opacity-90 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}></div>
              <span className="relative z-10 flex items-center gap-2 text-xs tracking-wider uppercase font-bold">
                Consult Now
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              </span>
            </motion.button>
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
    </motion.nav>
  );
};

export default Navbar;
