/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  FileText,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { SERVICES } from '../data';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'driveway-install',
    sqFt: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Basic Validation
    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }
    if (!formData.email.trim()) {
      setFormError('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending lead to John Bush Concrete database / email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'driveway-install',
      sqFt: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Contact Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Request a Free Estimate & Site Consultation
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Ready to start your driveway, patio, or walkway project? Fill out our simple online form below, or call John directly at **(847) 726-2090** to schedule your on-site consultation.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact details Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md space-y-6">
              <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl tracking-tight pb-4 border-b border-gray-100">
                John Bush Concrete Construction
              </h3>

              <div className="space-y-4">
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Office Location</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      2 Wellesley Ct<br />
                      Hawthorn Woods, IL 60047
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Phone Number</h4>
                    <a href="tel:8477262090" className="text-blue-600 hover:underline font-semibold text-xs sm:text-sm mt-0.5 block">
                      (847) 726-2090
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Email Address</h4>
                    <a href="mailto:estimates@johnbushconcrete.com" className="text-blue-600 hover:underline font-semibold text-xs sm:text-sm mt-0.5 block">
                      estimates@johnbushconcrete.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Working Hours</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      Monday - Saturday: 7:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Massive Direct Call Button */}
              <div className="pt-4">
                <a
                  href="tel:8477262090"
                  className="flex justify-center items-center gap-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call John Now</span>
                </a>
              </div>
            </div>

            {/* Elegant Gray Google Maps Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-100 h-64 sm:h-72 flex flex-col justify-between">
              {/* Fake styled road and water canvas representation */}
              <div className="absolute inset-0 z-0 opacity-80 bg-[#ededed] flex flex-col justify-center items-center overflow-hidden">
                {/* Horizontal road */}
                <div className="absolute w-full h-8 bg-white top-1/4 -rotate-2" />
                <div className="absolute w-full h-10 bg-white top-2/3 rotate-3" />
                {/* Vertical road */}
                <div className="absolute h-full w-12 bg-white left-1/3 -rotate-12" />
                <div className="absolute h-full w-8 bg-white left-2/3 rotate-6" />
                {/* Lake Zurich representation */}
                <div className="absolute w-40 h-40 bg-sky-200/50 rounded-full top-10 left-[10%] blur-sm" />
                {/* Custom Map Pinned Marker */}
                <div className="absolute top-[45%] left-[55%] z-10 flex flex-col items-center">
                  <div className="p-2.5 bg-blue-600 text-white rounded-full shadow-lg relative animate-bounce">
                    <MapPin className="w-5 h-5 fill-current" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rotate-45 translate-y-1" />
                  </div>
                  <span className="mt-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-900 bg-white/95 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-gray-100">
                    2 Wellesley Ct
                  </span>
                </div>
              </div>

              {/* Map Info Bar top */}
              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 border-b border-gray-100 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">John Bush Concrete HQ</h4>
                  <p className="text-gray-500 text-[10px]">Hawthorn Woods, IL 60047</p>
                </div>
                <a
                  href="https://maps.google.com/?q=2+Wellesley+Ct,+Hawthorn+Woods,+IL+60047"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Navigation button bottom */}
              <div className="relative z-10 p-4">
                <a
                  href="https://maps.google.com/?q=2+Wellesley+Ct,+Hawthorn+Woods,+IL+60047"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Estimate Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="font-extrabold text-gray-900 text-lg sm:text-xl tracking-tight">
                        Send an Estimate Request
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">
                        Tell us about your project requirements and get a reply within 24 business hours.
                      </p>
                    </div>

                    {formError && (
                      <div className="p-3.5 bg-red-50 text-red-700 border border-red-100 rounded-xl text-xs sm:text-sm font-semibold">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Dave H."
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(847) 555-0199"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="dave@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                        />
                      </div>

                      {/* Project selector */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Concrete Service
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Square footage input */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Estimated Sq Ft (Approx)
                        </label>
                        <input
                          type="text"
                          name="sqFt"
                          placeholder="e.g. 500 or 20x25"
                          value={formData.sqFt}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900"
                        />
                      </div>

                      {/* Message / Details */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Project Details & Site Notes
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Please describe any grading issues, old concrete that needs replacement, or specific layouts you are considering..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none transition-all text-gray-900 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      id="submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Submit Estimate Request'}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 h-full space-y-6"
                  >
                    <div className="p-4 bg-green-50 text-green-600 rounded-full">
                      <CheckCircle className="w-12 h-12" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-gray-500 text-sm max-w-md">
                        Your estimate request for **{SERVICES.find(s => s.id === formData.projectType)?.title || 'Concrete Work'}** has been successfully transmitted to John Bush.
                      </p>
                    </div>

                    {/* Lead receipt box */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-left w-full max-w-md space-y-3">
                      <div className="flex items-center gap-2 font-bold text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-2">
                        <FileText className="w-4 h-4" />
                        <span>Lead Transmission Receipt</span>
                      </div>
                      <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Contact Phone:</span> {formData.phone}</p>
                      <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Email Address:</span> {formData.email}</p>
                      {formData.sqFt && <p className="text-xs text-gray-600"><span className="font-semibold text-gray-800">Sizing:</span> {formData.sqFt} sq ft</p>}
                      {formData.message && <p className="text-xs text-gray-600 italic"><span className="font-semibold text-gray-800 not-italic">Notes:</span> "{formData.message}"</p>}
                    </div>

                    <p className="text-xs text-gray-400">
                      John Bush will review your specifications and contact you to schedule an on-site look.
                    </p>

                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Submit Another Estimate
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
