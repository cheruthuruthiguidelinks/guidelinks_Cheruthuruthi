import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/Guide-links.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Guidelinks Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium educational consultancy guiding students to top global universities with trust, transparency, and expert care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 font-bold text-xs">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 font-bold text-xs">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all duration-300 font-bold text-xs">
                IN
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Admissions South India', path: '/admission-south-india' },
                { name: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Top Destinations</h4>
            <ul className="space-y-3">
              {['Study in UK', 'Study in Canada', 'Study in Australia', 'Study in USA', 'Study in Germany'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Cheruthiruthi,<br />Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-gray-400">+91 85900 90969</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-gray-400">info@guidelinks.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Guidelinks International. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
