import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Footer = () => {
  return (
    <footer className="bg-[#0c1a2e] text-slate-400 pt-20 pb-10 border-t border-sky-900/30 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Guidelinks Logo"
                className="h-12 w-auto object-contain brightness-110"
                style={{ maxWidth: '145px' }}
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              Premium, trustworthy educational consultancy guiding students to elite international universities and domestic institutions with absolute transparency and care.
            </p>

            {/* Social links */}
            <div className="flex space-x-2.5 pt-1">
              {['FB', 'IG', 'IN', 'YT'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/4 hover:bg-sky-600/20 border border-white/8 hover:border-sky-400/30 text-slate-500 hover:text-sky-400 flex items-center justify-center transition-all duration-300 font-bold text-xs tracking-wider"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-5 border-b border-white/5 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Institutions', path: '/institutions' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Admissions South India', path: '/admission-south-india' },
                { name: 'Contact', path: '/contact' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-sky-400 transition-colors duration-300 flex items-center gap-2.5 text-sm font-semibold"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500/60" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-5 border-b border-white/5 pb-2">
              Destinations
            </h4>
            <ul className="space-y-3.5">
              {[
                'Study in UK',
                'Study in Canada',
                'Study in Australia',
                'Study in USA',
                'Study in Germany'
              ].map((link) => (
                <li key={link}>
                  <Link
                    to="/destinations"
                    className="text-slate-500 hover:text-sky-400 transition-colors duration-300 flex items-center gap-2.5 text-sm font-semibold"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-500/50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-5 border-b border-white/5 pb-2">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-500 leading-relaxed">
                  Cheruthiruthi, Thrissur,<br />
                  Kerala, 679531, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+918590090969" className="text-slate-500 hover:text-slate-200 transition-colors">
                  +91 85900 90969
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@guidelinks.in" className="text-slate-500 hover:text-slate-200 transition-colors">
                  info@guidelinks.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 text-slate-600 text-xs font-semibold flex flex-col md:flex-row justify-between items-center gap-5">
          <p>&copy; {new Date().getFullYear()} Guidelinks International. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-sky-400 transition-colors duration-300 flex items-center gap-1">
              Privacy Policy <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link to="/contact" className="hover:text-sky-400 transition-colors duration-300 flex items-center gap-1">
              Terms of Service <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
