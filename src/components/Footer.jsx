import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Footer = () => {
  return (
    <footer className="bg-[#0b140d] text-gray-300 pt-24 pb-12 border-t border-brand-500/10 relative overflow-hidden">
      
      {/* Decorative ambient node */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand/About Col */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Guidelinks Logo"
                className="h-14 w-auto object-contain brightness-110"
                style={{ maxWidth: '150px' }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              Premium, trustworthy educational consultancy guiding students to elite international universities and domestic institutions with absolute transparency and care.
            </p>
            
            {/* Social Media Link Buttons */}
            <div className="flex space-x-3 pt-2">
              {['FB', 'IG', 'IN', 'YT'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500/10 border border-white/10 hover:border-accent-gold/45 text-white/70 hover:text-accent-gold flex items-center justify-center transition-all duration-350 font-bold text-xs tracking-wider"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2.5">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Admissions South India', path: '/admission-south-india' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-accent-gold transition-colors duration-300 flex items-center gap-2.5 text-sm font-semibold"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-gold"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations Column */}
          <div className="lg:col-span-2.5">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
              Destinations
            </h4>
            <ul className="space-y-4">
              {['Study in UK', 'Study in Canada', 'Study in Australia', 'Study in USA', 'Study in Germany'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-accent-gold transition-colors duration-300 flex items-center gap-2.5 text-sm font-semibold"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-400"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-6 border-b border-white/5 pb-2">
              Contact Us
            </h4>
            <div className="space-y-5 text-sm font-semibold">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4.5 h-4.5 text-accent-gold shrink-0 mt-0.5" />
                <span className="text-gray-450 leading-relaxed font-medium">
                  Cheruthiruthi, Thrissur,<br />
                  Kerala, 679531, India
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <Phone className="w-4.5 h-4.5 text-accent-gold shrink-0" />
                <span className="text-gray-450 font-medium hover:text-white transition-colors cursor-pointer">
                  +91 85900 90969
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <Mail className="w-4.5 h-4.5 text-accent-gold shrink-0" />
                <span className="text-gray-450 font-medium hover:text-white transition-colors cursor-pointer">
                  info@guidelinks.in
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-10 border-t border-white/5 text-gray-500 text-xs font-semibold flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Guidelinks International. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-gold transition-colors duration-300 flex items-center gap-1">
              Privacy Policy <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors duration-300 flex items-center gap-1">
              Terms of Service <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
