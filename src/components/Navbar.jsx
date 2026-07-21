import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Navbar = ({ onOpenCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);
  const location = useLocation();
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsOpen(false);
    setDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Institutions', path: '/institutions' },
    { name: 'Team', path: '/team' },
    { name: 'Predictor', path: '/college-predictor' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const destinationLinks = [
    // { name: 'Study in India', path: '/study-india' },
    { name: 'Study Abroad', path: '/study-abroad' },
    { name: 'All Destinations', path: '/destinations' },
    { name: 'Domestic Admissions', path: '/admission-south-india' },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/*
        Mobile: full-width top bar (left-0 right-0, no pill, no centering transform)
        Desktop (lg+): floating centered pill
      */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 mx-auto z-50 transition-all duration-300
          w-full lg:w-[90%] lg:max-w-7xl lg:rounded-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-100/50 lg:top-4 lg:border lg:border-brand-100/60 lg:shadow-[0_8px_32px_rgba(14,165,233,0.10)]'
            : 'bg-white/90 backdrop-blur-md border-b border-brand-50 lg:top-6 lg:border lg:border-brand-100/40 lg:shadow-sm'
        } px-5 lg:px-8 py-0 lg:py-3`}
      >
        <div className="flex justify-between items-center h-16 lg:h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Guidelinks Logo"
              className="object-contain transition-all duration-300"
              style={{
                height: isScrolled ? '42px' : '48px',
                width: 'auto',
                maxWidth: '180px',
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.slice(0, 4).map((item) => {
              const active = isLinkActive(item.path);
              return (
                <div key={item.name} className="relative py-2">
                  <Link
                    to={item.path}
                    className={`relative font-semibold text-sm transition-colors duration-300 ${
                      active ? 'text-brand-600' : 'text-slate-700 hover:text-brand-600'
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
              onMouseEnter={() => { clearTimeout(dropdownTimer.current); setDropdownOpen(true); }}
              onMouseLeave={() => { dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150); }}
            >
              <button className="flex items-center gap-1 font-semibold text-sm text-slate-700 hover:text-brand-600 transition-colors duration-300">
                Destinations
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl glass-effect shadow-xl border border-brand-100/60 p-2"
                  >
                    {destinationLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`block px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          isLinkActive(link.path)
                            ? 'bg-brand-50 text-brand-600'
                            : 'text-slate-700 hover:bg-brand-50 hover:text-brand-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(4).map((item) => {
              const active = isLinkActive(item.path);
              return (
                <div key={item.name} className="relative py-2">
                  <Link
                    to={item.path}
                    className={`relative font-semibold text-sm transition-colors duration-300 ${
                      active ? 'text-brand-600' : 'text-slate-700 hover:text-brand-600'
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

            <button
              onClick={onOpenCallback}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-xs tracking-wide shadow-md transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Callback</span>
            </button>

            <Link
              to="/contact"
              className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-semibold text-xs tracking-wide shadow-[0_4px_14px_rgba(14,165,233,0.30)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.40)] transition-all duration-300 cursor-pointer"
            >
              Consult Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu — full-screen overlay panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-down menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 left-0 right-0 z-50 lg:hidden bg-white rounded-b-3xl shadow-2xl border-t border-b border-brand-100/80 overflow-hidden"
            >
              <div className="p-5 flex flex-col gap-1.5 max-h-[calc(100vh-64px)] overflow-y-auto">
                {/* Main nav links */}
                {navLinks.map((item) => {
                  const active = isLinkActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center px-4 py-3 font-semibold text-sm rounded-xl transition-all duration-200 ${
                        active
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2.5 shrink-0" />}
                      {item.name}
                    </Link>
                  );
                })}

                {/* Destinations section */}
                <div className="mt-1 pt-3 border-t border-slate-100">
                  <p className="px-4 pb-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Destinations
                  </p>
                  {destinationLinks.map((item) => {
                    const active = isLinkActive(item.path);
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-5 py-2.5 font-medium text-sm rounded-xl transition-all duration-200 ${
                          active
                            ? 'bg-brand-50 text-brand-600'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Blog link */}
                <Link
                  to="/blog"
                  className={`flex items-center px-4 py-3 font-semibold text-sm rounded-xl transition-all duration-200 ${
                    isLinkActive('/blog') ? 'bg-brand-50 text-brand-600' : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                {/* CTA */}
                <div className="pt-3 pb-1 border-t border-slate-100 mt-1">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-sm shadow-md transition-all duration-300"
                  >
                    Book Free Consultation
                  </Link>
                  <p className="text-center text-xs text-slate-400 mt-3 pb-1">
                    📞 +91 85900 90969
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
