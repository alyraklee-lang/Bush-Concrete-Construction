/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Award,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  FileText,
  MapPin,
  Hammer,
  ThumbsUp,
  Shield
} from 'lucide-react';
import { FEATURES } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
  Calendar: <Calendar className="w-5 h-5 text-blue-600" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
  FileText: <FileText className="w-5 h-5 text-blue-600" />,
  MapPin: <MapPin className="w-5 h-5 text-blue-600" />,
  Hammer: <Hammer className="w-5 h-5 text-blue-600" />,
  ThumbsUp: <ThumbsUp className="w-5 h-5 text-blue-600" />,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Why Homeowners Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Core Commitments to You
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We understand that a concrete project is a significant investment in your home. Here is how we ensure a flawless, stress-free experience from start to finish.
          </p>
        </div>

        {/* Features Bento/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group flex flex-col items-start"
            >
              {/* Icon container */}
              <div className="p-3 rounded-xl bg-blue-50/75 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-5 flex items-center justify-center">
                {iconMap[feature.iconName]}
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick assurance banner */}
        <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-gray-900 text-lg">Need custom specifications or special winter curing?</h4>
            <p className="text-gray-500 text-xs sm:text-sm">We formulate weather-specific concrete mixes customized for Hawthorn Woods freeze-thaw cycles.</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:8477262090"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
            >
              Talk to John Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
