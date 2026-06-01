import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    /* 
      FIX: Removed x: '-50%' from Framer Motion initial/animate.
      Centering is handled purely by CSS: left-1/2 + -translate-x-1/2.
      Framer Motion only animates y and opacity now.
    */
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-[90%] max-w-7xl rounded-full px-6 md:px-8 py-3 ${
        isScrolled
          ? 'glass-effect top-4 shadow-[0_8px_32px_rgba(14,165,233,0.10)] border border-brand-100/60'
          : 'bg-white/70 backdrop-blur-md top-6 border border-brand-100/40 shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center relative group cursor-pointer shrink-0">
          <img
            src={logo}
            alt="Guidelinks Logo"
            className="relative z-10 transition-all duration-500 group-hover:scale-[1.03] object-contain"
            style={{
              height: isScrolled ? '36px' : '44px',
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
                      ? 'text-brand-600'
                      : 'text-slate-700 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
              className="flex items-center gap-1 font-semibold text-sm transition-colors duration-300 text-slate-700 hover:text-brand-600"
            >
              Destinations{' '}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl overflow-hidden glass-effect shadow-xl border border-brand-100/60 p-2"
                >
                  <div className="flex flex-col gap-1">
                    {destinationLinks.map((link) => {
                      const active = isLinkActive(link.path);
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                            active
                              ? 'bg-brand-50 text-brand-600'
                              : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
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
                      ? 'text-brand-600'
                      : 'text-slate-700 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
                isLinkActive('/blog') ? 'text-brand-600' : 'text-slate-700 hover:text-brand-600'
              }`}
            >
              Blog
              {isLinkActive('/blog') && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </div>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold text-xs tracking-wide shadow-[0_4px_14px_rgba(14,165,233,0.30)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.40)] transition-all duration-300 cursor-pointer"
          >
            Consult Now
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-brand-600 focus:outline-none p-2 rounded-full hover:bg-brand-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[110%] left-0 right-0 lg:hidden glass-effect border border-brand-100/60 shadow-xl rounded-2xl overflow-hidden p-4 flex flex-col gap-1 z-50 max-h-[75vh] overflow-y-auto"
          >
            {navLinks.map((item) => {
              const active = isLinkActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 font-semibold text-sm rounded-xl transition-all duration-200 ${
                    active
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-2 border-t border-brand-100/60 mt-2">
              <p className="px-4 py-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Destinations
              </p>
              {destinationLinks.map((item) => {
                const active = isLinkActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-6 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200 ${
                      active
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-slate-600 hover:bg-brand-50 hover:text-brand-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/blog"
              className={`block px-4 py-3 font-semibold text-sm rounded-xl transition-all duration-200 ${
                isLinkActive('/blog') ? 'bg-brand-50 text-brand-600' : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm shadow-md transition-all duration-300 text-center"
            >
              Consult Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
