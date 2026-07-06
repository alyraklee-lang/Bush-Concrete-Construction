/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Users, Landmark, MapPin, CheckCircle, Flame } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: 'Family Owned & Operated',
      desc: 'Deep roots in the community. John Bush leads a dedicated crew of concrete experts.',
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: 'Fully Licensed & Insured',
      desc: 'Your property and assets are completely protected throughout the construction lifecycle.',
    },
    {
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
      title: 'Northwest Suburb Experts',
      desc: 'Over a decade of pouring specifically for the soils and harsh freeze-thaw weather of northern Illinois.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium visual stack */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 text-white p-8 md:p-10 shadow-xl border border-gray-800">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gray-500/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Heritage</span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-sans tracking-tight mt-2 mb-4">
                  The John Bush Concrete Promise
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  "Every yard of concrete we pour represents our company name. We treat every driveway, walkway, and patio as if it were on our own front lawn. Our priority is absolute durability combined with flawless craftsmanship."
                </p>
                
                <div className="flex items-center gap-4 border-t border-gray-800 pt-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-lg text-blue-400">
                    JB
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight">John Bush</h4>
                    <p className="text-blue-400 text-xs font-semibold">Founder & Lead Contractor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro stats banner */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">100%</p>
                <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider mt-1.5">Free Quotes</p>
              </div>
              <div className="border-x border-gray-100">
                <p className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">4000</p>
                <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider mt-1.5">PSI Standard</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none">5 ★</p>
                <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wider mt-1.5">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                <span>About Our Company</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-gray-900 tracking-tight leading-tight">
                High-Quality Residential Concrete Services Built to Overlast
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              Based in beautiful **Hawthorn Woods, Illinois**, John Bush Concrete Construction specializes in custom concrete driveways, patios, walkways, front stoops, and garage slabs. As a locally owned and operated contractor, we believe that premium quality starts with meticulous preparation. We build concrete structures engineered with robust base subgrades and reinforced steel frameworks to guard against Chicago’s intense winter cycles.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              We proudly serve homeowners throughout **Lake Zurich, Kildeer, Long Grove, Deer Park, Barrington, Buffalo Grove, Arlington Heights**, and nearby suburbs. From initial excavation to the final sweep and wash, our professional crew guarantees elite attention to detail, transparent scheduling, and honest pricing.
            </p>

            {/* List of custom values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {values.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="p-2 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm leading-snug">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
