/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Award, Star } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onOpenEstimate: () => void;
}

export default function Hero({ onOpenEstimate }: HeroProps) {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
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
    <section id="hero-section" className="relative bg-gray-950 min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      {/* Background Image with elegant gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Premium freshly poured concrete driveway construction"
          className="w-full h-full object-cover object-center opacity-40 scale-105 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/50" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Trust Badge / Sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-400 text-xs font-semibold mb-6 tracking-wide"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Serving Hawthorn Woods & Surrounding Areas</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans text-white tracking-tight leading-none mb-6"
          >
            Premium Concrete Work <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-200 to-white">
              Built to Last.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-8 max-w-2xl"
          >
            Serving Hawthorn Woods and nearby communities with high-quality residential concrete installation and replacement. Engineered for structural strength and pristine curb appeal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              id="hero-estimate-cta"
              onClick={onOpenEstimate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-blue-900/30 hover:shadow-blue-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:8477262090"
              className="bg-gray-900/80 hover:bg-gray-800 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-200 border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Call Now: (847) 726-2090</span>
            </a>
          </motion.div>

          {/* Micro Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-800/80"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Licensed & Insured</p>
                <p className="text-gray-400 text-xs">Total Peace of Mind</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-blue-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">5-Star Reviews</p>
                <p className="text-gray-400 text-xs">Homeowner Approved</p>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">4000 PSI Standard</p>
                <p className="text-gray-400 text-xs">High Strength Slabs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
