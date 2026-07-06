/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ArrowUp, Phone, Hammer, Mail, MapPin, Facebook, ShieldCheck } from 'lucide-react';
import { SERVICE_AREAS } from '../data';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-gray-950 text-white border-t border-gray-900">
      
      {/* Primary Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2.5 rounded-lg bg-blue-600 text-white">
                <Hammer className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-base tracking-tight leading-tight">
                  John Bush
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-blue-400 font-bold leading-none">
                  Concrete Construction
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Serving Hawthorn Woods and northern Chicago suburbs with premier residential concrete installations. We specialize in robust subgrade preparation, high-strength mixes, and hand-tooled finishes designed to stand up to the test of time.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-900 hover:bg-blue-600 text-gray-400 hover:text-white transition-colors"
                aria-label="Follow John Bush on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-gray-900 hover:bg-red-600 text-gray-400 hover:text-white font-bold text-xs transition-colors"
                aria-label="Review John Bush on Yelp"
              >
                Yelp
              </a>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 ml-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Concrete Solutions
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleLinkClick(e, '#why-choose-us')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Homeowner Guarantees
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, '#projects')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Recent Portfolios
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleLinkClick(e, '#testimonials')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Homeowner Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Get On-Site Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">Office Location</h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>John Bush Concrete, 2 Wellesley Ct, Hawthorn Woods, IL 60047</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:8477262090" className="hover:text-blue-400 transition-colors font-semibold text-white">
                  (847) 726-2090
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:estimates@johnbushconcrete.com" className="hover:text-blue-400 transition-colors">
                  estimates@johnbushconcrete.com
                </a>
              </div>
            </div>

            {/* SEO Service Suburbs */}
            <div className="pt-4 border-t border-gray-900">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Local Service Suburbs</h5>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-gray-500">
                {SERVICE_AREAS.map((city, idx) => (
                  <span key={idx} className="hover:text-blue-400 cursor-default">
                    {city.name} {city.isPrimary && '•'}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Terms */}
      <div className="bg-black py-6 border-t border-gray-950 text-center text-xs text-gray-600 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} John Bush Concrete Construction. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-gray-400 cursor-default">Licensed</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-default">Bonded & Insured</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-default">Premium Materials</span>
          </div>
        </div>
      </div>

      {/* Floating Call Bar (Mobile Only) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 flex sm:hidden justify-between items-center gap-3 shadow-2xl">
        <a
          href="tel:8477262090"
          className="flex-1 py-3 px-4 bg-blue-600 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-md"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span className="text-sm">Call John: (847) 726-2090</span>
        </a>
      </div>

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-20 sm:bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </footer>
  );
}
