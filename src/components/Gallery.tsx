/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Calendar, Scaling, Eye } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Driveway', 'Patio', 'Stoop', 'Walkway', 'Garage Floor'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Featured Concrete Projects
            </h2>
            <p className="text-gray-500 text-sm max-w-xl">
              Explore our real residential concrete installations. Click on any project to view high-resolution details, sizing, and completion specs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-250 cursor-pointer ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                {/* Image container */}
                <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white scale-75 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Info Overlay */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-blue-600 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedProject(null)}
            >
              {/* Lightbox Body */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative grid grid-cols-1 md:grid-cols-12"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 text-white hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Massive Image (7 cols) */}
                <div className="md:col-span-7 bg-gray-100 relative min-h-[300px] md:min-h-[450px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Side: Deep Project Specs (5 cols) */}
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
                      {selectedProject.category} Project Spotlight
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                          <Scaling className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-semibold uppercase">Dimensions</p>
                          <p className="text-xs font-bold text-gray-900">{selectedProject.size || 'Custom'}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 font-semibold uppercase">Poured In</p>
                          <p className="text-xs font-bold text-gray-900">{selectedProject.completionYear || 'Recently'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA inside lightbox */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-3">Love this look? Get a similar custom design for your property.</p>
                    <button
                      id="lightbox-estimate-btn"
                      onClick={() => {
                        setSelectedProject(null);
                        // Open main estimator
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire About This Project</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
