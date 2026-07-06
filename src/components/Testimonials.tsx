/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, CheckCircle, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [primaryTestimonial, ...secondaryTestimonials] = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative ambient spots */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-500/10 border border-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            What Hawthorn Woods Neighbors Say
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Don’t take our word for it. Read honest reviews from local homeowners who have experienced the professionalism and elite concrete results of John Bush.
          </p>
        </div>

        {/* Highlighted Primary Testimonial (Dave H.) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Massive background quote mark */}
            <Quote className="absolute -top-4 -left-4 w-32 h-32 text-gray-800/20 select-none pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(primaryTestimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-2xl font-serif italic text-gray-100 leading-relaxed mb-8">
                "{primaryTestimonial.text}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-sm text-blue-400">
                  DH
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-sm leading-tight">{primaryTestimonial.name}</h4>
                  <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-blue-400" />
                    <span>Verified Homeowner in {primaryTestimonial.location}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {secondaryTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-gray-700 transition-colors"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">
                  {testimonial.name.split(' ')[0][0]}
                  {testimonial.name.split(' ')[1]?.[0] || ''}
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs leading-none">{testimonial.name}</h4>
                  <p className="text-gray-500 text-[10px] mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-blue-400" />
                    <span>{testimonial.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
