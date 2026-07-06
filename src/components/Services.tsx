/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  RotateCcw,
  Footprints,
  Home,
  Sparkles,
  SquareDot,
  TrendingUp,
  Grid,
  CheckCircle,
  Calculator,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onOpenEstimateWithData: (data: { serviceId: string; sqFt: number; customPrice: string }) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-blue-600" />,
  RotateCcw: <RotateCcw className="w-5 h-5 text-blue-600" />,
  Footprints: <Footprints className="w-5 h-5 text-blue-600" />,
  Home: <Home className="w-5 h-5 text-blue-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-blue-600" />,
  SquareDot: <SquareDot className="w-5 h-5 text-blue-600" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-blue-600" />,
  Grid: <Grid className="w-5 h-5 text-blue-600" />,
};

export default function Services({ onOpenEstimateWithData }: ServicesProps) {
  // Calculator state
  const [calcServiceId, setCalcServiceId] = useState('driveway-install');
  const [length, setLength] = useState<number>(35);
  const [width, setWidth] = useState<number>(12);
  const [useRebar, setUseRebar] = useState<boolean>(true);
  const [finishType, setFinishType] = useState<string>('broom'); // 'broom' or 'stamped'

  const selectedCalcService = SERVICES.find((s) => s.id === calcServiceId) || SERVICES[0];
  const sqFt = length * width;

  // Derive pricing from selected service price strings
  // 'driveway-install': 8.50 to 12.00
  // 'driveway-replace': 9.50 to 14.00
  // 'sidewalk-install': 7.50 to 10.00
  // 'patios': 9.00 to 16.00
  // 'garage-floors': 8.00 to 11.00
  // 'walkways': 7.50 to 11.00
  const getBaseRate = (id: string): { min: number; max: number } => {
    switch (id) {
      case 'driveway-install':
        return { min: 8.5, max: 12.0 };
      case 'driveway-replace':
        return { min: 9.5, max: 14.0 };
      case 'sidewalk-install':
        return { min: 7.5, max: 10.0 };
      case 'patios':
        return { min: 9.0, max: 16.0 };
      case 'garage-floors':
        return { min: 8.0, max: 11.0 };
      case 'walkways':
        return { min: 7.5, max: 11.0 };
      default:
        return { min: 8.0, max: 12.0 }; // Default custom
    }
  };

  const rates = getBaseRate(calcServiceId);
  let minRate = rates.min;
  let maxRate = rates.max;

  // Add extra modifiers
  if (useRebar) {
    minRate += 1.25;
    maxRate += 1.75;
  }
  if (finishType === 'stamped') {
    minRate += 4.5;
    maxRate += 6.5;
  }

  const estimatedMin = Math.round(sqFt * minRate);
  const estimatedMax = Math.round(sqFt * maxRate);

  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
  };

  const handleEstimateSubmit = () => {
    onOpenEstimateWithData({
      serviceId: calcServiceId,
      sqFt,
      customPrice: `${formatPrice(estimatedMin)} - ${formatPrice(estimatedMax)}`,
    });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkle className="w-3.5 h-3.5" />
            <span>Our Expert Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Residential Concrete Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We deliver beautifully graded, structurally reinforced, and flawlessly finished concrete that transforms your home’s curb appeal and stands up to harsh Illinois winters.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Icon Circle */}
                <div className="p-3 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5">
                  {iconMap[service.iconName]}
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bulleted Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom detail row */}
              <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">
                <span className="text-gray-400 text-[10px] uppercase font-semibold tracking-wider">Avg Range</span>
                <span className="text-blue-600 font-bold text-xs sm:text-sm">{service.basePriceRange}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Concrete Calculator Box */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Calculator Inputs Left (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-400 text-xs font-semibold">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Instant Concrete Estimator</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Calculate Your Approximate Project Cost
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
                  Select your concrete task, enter approximate dimensions, and specify reinforcing or decorative options to get an instant pricing estimate for your property.
                </p>
              </div>

              {/* Input Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Select */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    value={calcServiceId}
                    onChange={(e) => setCalcServiceId(e.target.value)}
                    className="w-full bg-gray-900 text-white border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {SERVICES.filter(s => s.basePriceRange !== 'Custom quote').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                    <option value="custom">Custom Specialty Project</option>
                  </select>
                </div>

                {/* Reinforced Choice */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Reinforcement Standard
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setUseRebar(false)}
                      className={`flex-1 text-center py-2.5 rounded-xl text-xs font-medium border transition-all ${
                        !useRebar
                          ? 'bg-white text-gray-900 border-white font-semibold'
                          : 'bg-gray-900 text-gray-400 border-gray-800 hover:text-white'
                      }`}
                    >
                      Fiber Mesh Only
                    </button>
                    <button
                      type="button"
                      onClick={() => setUseRebar(true)}
                      className={`flex-1 text-center py-2.5 rounded-xl text-xs font-medium border transition-all ${
                        useRebar
                          ? 'bg-blue-600 text-white border-blue-500 font-semibold'
                          : 'bg-gray-900 text-gray-400 border-gray-800 hover:text-white'
                      }`}
                    >
                      Steel Rebar Grid
                    </button>
                  </div>
                </div>

                {/* Length Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Approx. Length (ft): <span className="text-blue-400 font-bold">{length}</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>5 ft</span>
                    <span>120 ft</span>
                  </div>
                </div>

                {/* Width Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Approx. Width (ft): <span className="text-blue-400 font-bold">{width}</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    step="2"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>2 ft</span>
                    <span>60 ft</span>
                  </div>
                </div>

                {/* Finish Selection */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Surface Treatment & Finish
                  </label>
                  <div className="flex gap-3">
                    <label className={`flex-1 flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      finishType === 'broom' ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-gray-800 bg-gray-900/50 text-gray-400 hover:text-white'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="finishType"
                          value="broom"
                          checked={finishType === 'broom'}
                          onChange={() => setFinishType('broom')}
                          className="accent-blue-500"
                        />
                        <div className="text-left">
                          <p className="text-xs font-bold">Standard Broom Finish</p>
                          <p className="text-[10px] text-gray-400">Slip-resistant, highly durable traction</p>
                        </div>
                      </div>
                    </label>
                    
                    <label className={`flex-1 flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      finishType === 'stamped' ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-gray-800 bg-gray-900/50 text-gray-400 hover:text-white'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="finishType"
                          value="stamped"
                          checked={finishType === 'stamped'}
                          onChange={() => setFinishType('stamped')}
                          className="accent-blue-500"
                        />
                        <div className="text-left">
                          <p className="text-xs font-bold">Stamped slate / Decorative</p>
                          <p className="text-[10px] text-gray-400">Ashlar patterns, stamped textures</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            </div>

            {/* Price Report Right (5 cols) */}
            <div className="lg:col-span-5 bg-gray-900/90 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 text-center lg:text-left shadow-lg">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Total Surface Area</p>
                <p className="text-3xl font-extrabold text-white">
                  {sqFt.toLocaleString()}{' '}
                  <span className="text-xs text-blue-400 uppercase font-semibold">sq ft</span>
                </p>
              </div>

              <div className="space-y-2 border-y border-gray-800 py-6">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Estimated Price Range</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">
                  {calcServiceId === 'custom' ? 'Custom Quote Needed' : `${formatPrice(estimatedMin)} - ${formatPrice(estimatedMax)}`}
                </p>
                <p className="text-[11px] text-gray-500 italic leading-snug">
                  *Includes grading, forming, standard excavation, premium concrete pour, and cleanup. Price varies depending on accessibility and site grading.
                </p>
              </div>

              <button
                id="estimator-quote-cta"
                onClick={handleEstimateSubmit}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request Official Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
