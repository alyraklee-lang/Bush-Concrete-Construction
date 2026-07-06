/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Calendar, MapPin, Hammer } from 'lucide-react';

interface HeaderProps {
  onOpenEstimate: () => void;
}

export default function Header({ onOpenEstimate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top micro-bar for direct contact info and local credibility */}
      <div id="top-bar" className="bg-[#111827] text-white text-xs py-2 px-4 sm:px-6 md:px-8 border-b border-gray-800 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Serving Hawthorn Woods, IL & Northwest Suburbs</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <a href="tel:8477262090" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-white">(847) 726-2090</span>
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline">Mon - Sat: 7:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        id="main-nav-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-gray-900 border-b border-gray-100'
            : 'bg-white/90 sm:bg-transparent text-gray-900 sm:text-white py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, '#')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'bg-gray-100 group-hover:bg-gray-200 text-gray-800' : 'bg-white/10 group-hover:bg-white/20 text-blue-400 sm:text-white'
            }`}>
              <Hammer className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight leading-tight">
                John Bush
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-widest uppercase text-blue-500 sm:text-blue-400 font-semibold leading-none">
                Concrete Construction
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600'
                    : 'text-gray-800 sm:text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:8477262090"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-xs transition-all duration-200 ${
                isScrolled
                  ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  : 'bg-white/10 text-gray-900 sm:text-white hover:bg-white/20 border border-black/10 sm:border-white/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (847) 726-2090</span>
            </a>
            <button
              id="get-estimate-nav-btn"
              onClick={onOpenEstimate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Get Free Estimate</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:8477262090"
              className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors duration-200 ${
                isScrolled
                  ? 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  : 'border-white/20 text-gray-900 sm:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[88px] sm:top-[104px] z-30 bg-white shadow-xl border-b border-gray-100 overflow-hidden lg:hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-150"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="tel:8477262090"
                  className="flex justify-center items-center gap-2 w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-xl text-sm transition-all border border-gray-200"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call (847) 726-2090</span>
                </a>
                <button
                  id="get-estimate-mobile-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEstimate();
                  }}
                  className="flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Free Estimate</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
