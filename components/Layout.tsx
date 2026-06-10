import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Phone, Mail, MapPin, Scale, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Client Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Bar */}
      <div className="bg-karish-navy text-white py-2 px-4 text-xs sm:text-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-karish-gold" /> (555) 123-4567</span>
            <span className="flex items-center gap-2 hidden sm:flex"><Mail size={14} className="text-karish-gold" /> info@karishlaw.com</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:block text-slate-300">Serving California State Wide</span>
          </div>
        </div>
      </div>

      {/* Navigation - Dark Theme */}
      <nav className="bg-karish-navy shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-32 flex items-center justify-between">
            
            {/* Mobile Header (Logo Left, Menu Right) */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Logo className="h-20 w-auto" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Menu - Split Layout */}
            <div className="hidden md:flex items-center justify-center w-full">
              {/* Left Links */}
              <div className="flex items-center gap-12 flex-1 justify-end pr-12">
                <Link
                  to="/"
                  className={`font-sans text-base font-medium transition-colors duration-200 uppercase tracking-wide ${
                    isActive('/') 
                      ? 'text-karish-gold' 
                      : 'text-slate-300 hover:text-karish-gold'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`font-sans text-base font-medium transition-colors duration-200 uppercase tracking-wide ${
                    isActive('/about') 
                      ? 'text-karish-gold' 
                      : 'text-slate-300 hover:text-karish-gold'
                  }`}
                >
                  About Us
                </Link>
              </div>

              {/* Center Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center justify-center px-4">
                <Logo className="h-28 w-auto transform hover:scale-105 transition-transform duration-300" />
              </Link>

              {/* Right Links */}
              <div className="flex items-center gap-12 flex-1 justify-start pl-12">
                <Link
                  to="/services"
                  className={`font-sans text-base font-medium transition-colors duration-200 uppercase tracking-wide ${
                    isActive('/services') 
                      ? 'text-karish-gold' 
                      : 'text-slate-300 hover:text-karish-gold'
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className={`font-sans text-base font-medium transition-colors duration-200 uppercase tracking-wide ${
                    isActive('/contact') 
                      ? 'text-karish-gold' 
                      : 'text-slate-300 hover:text-karish-gold'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-karish-navy border-t border-slate-800 absolute w-full left-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-slate-800 text-karish-gold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-karish-navy text-white pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="bg-white/10 p-4 rounded inline-block mb-4">
                 <Scale size={32} className="text-karish-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Karish Law Firm</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specializing in complex litigation and strategic settlements across California. 
                Integrating aggressive advocacy with innovative legal strategies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-semibold mb-6 text-karish-gold">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/about" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Practice Areas</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Client Resources</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors flex items-center"><ChevronRight size={14} className="mr-2"/> Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-semibold mb-6 text-karish-gold">Practice Areas</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>Civil Litigation</li>
                <li>Business Disputes</li>
                <li>Personal Injury</li>
                <li>PAGA Defense & Litigation</li>
                <li>Lemon Law (AB 1755)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-semibold mb-6 text-karish-gold">Contact Us</h4>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-3 text-karish-gold mt-1" />
                  <span>101 California Street, Suite 2050<br />San Francisco, CA 94111</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-karish-gold" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-karish-gold" />
                  <span>info@karishlaw.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Karish Law Firm. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms of Service</span>
              <span className="cursor-pointer hover:text-white">Disclaimer</span>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-600 text-center">
            <p>Disclaimer: The information provided on this website is for general informational purposes only and does not constitute legal advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;