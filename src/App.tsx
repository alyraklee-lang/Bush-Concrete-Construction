/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<{
    serviceId: string;
    sqFt: number;
    customPrice: string;
  } | null>(null);

  const handleOpenEstimate = () => {
    setModalInitialData(null);
    setIsEstimateModalOpen(true);
  };

  const handleOpenEstimateWithData = (data: { serviceId: string; sqFt: number; customPrice: string }) => {
    setModalInitialData(data);
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* Dynamic Sticky Header */}
      <Header onOpenEstimate={handleOpenEstimate} />

      <main>
        {/* Visual Hero Banner */}
        <Hero onOpenEstimate={handleOpenEstimate} />

        {/* Brand narrative */}
        <About />

        {/* Concrete Services & Integrated Cost Calculator */}
        <Services onOpenEstimateWithData={handleOpenEstimateWithData} />

        {/* Core Homeowner Commitments */}
        <WhyChooseUs />

        {/* Masonry-Style Portfolio Gallery */}
        <Gallery />

        {/* Highlighted Dave H. testimonial & stars */}
        <Testimonials />

        {/* Collapsible FAQ Accordion */}
        <FAQ />

        {/* Contact info, responsive Maps, and lead form */}
        <Contact />
      </main>

      {/* Global Footer & Local SEO suburbs */}
      <Footer />

      {/* Interactive guided estimation modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  );
}

