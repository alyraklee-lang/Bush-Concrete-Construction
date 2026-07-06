/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Layers,
  Scaling,
  User,
  ShieldCheck,
  Award,
  FileText
} from 'lucide-react';
import { SERVICES } from '../data';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    serviceId: string;
    sqFt: number;
    customPrice: string;
  } | null;
}

export default function EstimateModal({ isOpen, onClose, initialData }: EstimateModalProps) {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(initialData?.serviceId || 'driveway-install');
  const [length, setLength] = useState<string>('35');
  const [width, setWidth] = useState<string>('12');
  const [rebar, setRebar] = useState<boolean>(true);
  const [soilPrep, setSoilPrep] = useState<boolean>(true);
  
  // Contact details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Sync initialData if provided
  useState(() => {
    if (initialData) {
      setServiceId(initialData.serviceId);
      // approximate dimensions for initial sqft
      const approxLen = Math.round(Math.sqrt(initialData.sqFt * 2));
      const approxWid = Math.round(initialData.sqFt / approxLen);
      setLength(approxLen.toString());
      setWidth(approxWid.toString());
      setStep(3); // skip right to contact info if coming from estimator
    }
  });

  const selectedServiceObj = SERVICES.find(s => s.id === serviceId) || SERVICES[0];
  const sqFtNum = Number(length) * Number(width) || 0;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert('Please fill out all required contact fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setServiceId('driveway-install');
    setLength('35');
    setWidth('12');
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setIsDone(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="bg-white rounded-3xl overflow-hidden w-full max-w-xl shadow-2xl relative border border-gray-100 my-8">
        
        {/* Header Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isDone ? (
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            {/* Top Bar Indicators */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl tracking-tight">
                  Free Concrete Estimate Request
                </h3>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-between items-center relative mt-2 max-w-sm">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-200 z-0" />
                
                {[1, 2, 3].map((num) => {
                  const isActive = step >= num;
                  const isCurrent = step === num;
                  return (
                    <div
                      key={num}
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-110'
                          : isActive
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-400 border border-gray-200'
                      }`}
                    >
                      {step > num ? <Check className="w-3.5 h-3.5" /> : num}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Body Scroll Container */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              {/* Step 1: Service Type */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" />
                      <span>Choose Concrete Solution</span>
                    </h4>
                    <p className="text-gray-500 text-xs">Select which residential service you would like to estimate.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {SERVICES.map((s) => {
                      const isSelected = serviceId === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setServiceId(s.id)}
                          className={`p-4 rounded-xl text-left border text-xs sm:text-sm transition-all cursor-pointer ${
                            isSelected
                              ? 'border-blue-500 bg-blue-500/5 shadow-sm text-blue-900 font-bold'
                              : 'border-gray-100 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-200'
                          }`}
                        >
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Sizing dimensions */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <Scaling className="w-4 h-4 text-blue-600" />
                      <span>Define Area Dimensions</span>
                    </h4>
                    <p className="text-gray-500 text-xs">Provide approximate dimensions for your new concrete pad.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Length (ft)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="1000"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all text-gray-900"
                        placeholder="e.g. 40"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Width (ft)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all text-gray-900"
                        placeholder="e.g. 15"
                      />
                    </div>
                  </div>

                  {/* Calculated Area Stat */}
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/50 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-blue-800 font-semibold">Calculated Total Sizing</p>
                      <p className="text-sm text-gray-500 italic">Based on {length || '0'} x {width || '0'} feet</p>
                    </div>
                    <p className="text-2xl font-extrabold text-blue-700">
                      {sqFtNum.toLocaleString()} <span className="text-xs font-bold uppercase">sq ft</span>
                    </p>
                  </div>

                  {/* Extras checkbox */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Optional Extras</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rebar}
                          onChange={() => setRebar(!rebar)}
                          className="accent-blue-600"
                        />
                        <span>Steel rebar reinforcement grid (Recommended)</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={soilPrep}
                          onChange={() => setSoilPrep(!soilPrep)}
                          className="accent-blue-600"
                        />
                        <span>Subgrade gravel filling & heavy compaction base</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      <span>Your Contact Information</span>
                    </h4>
                    <p className="text-gray-500 text-xs">Tell us where to send the final official quote and how to reach you.</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dave H."
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(847) 555-0199"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="dave@example.com"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Custom notes or instructions
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Anything else John should know about your lot..."
                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900 resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom actions */}
            <div className="bg-gray-50 px-8 py-5 border-t border-gray-100 flex justify-between items-center">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        ) : (
          /* Finished State Screen */
          <div className="p-8 text-center space-y-6 flex flex-col items-center">
            <div className="p-4 bg-green-50 text-green-600 rounded-full animate-bounce">
              <ShieldCheck className="w-12 h-12" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                Request Filed Successfully!
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm max-w-md">
                John Bush has received your concrete specifications and is reviewing your project details.
              </p>
            </div>

            {/* Generated quote report */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-left w-full space-y-3.5">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="flex items-center gap-1.5 font-bold text-xs text-gray-500 uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Interactive Proposal</span>
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded uppercase">
                  Pending Review
                </span>
              </div>
              <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Assigned Client:</span> {name}</p>
              <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Phone & Email:</span> {phone} • {email}</p>
              <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Target service:</span> {selectedServiceObj.title}</p>
              <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Calculated Area:</span> {sqFtNum} sq ft ({length}x{width} ft)</p>
              <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Slab Reinforcing:</span> {rebar ? 'Included (Steel rebar mesh)' : 'Fiber mesh standard'}</p>
              {notes && <p className="text-xs text-gray-600 italic"><span className="font-semibold text-gray-800 not-italic">Homeowner comments:</span> "{notes}"</p>}
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold text-xs transition-colors cursor-pointer"
              >
                Estimate Another Project
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
