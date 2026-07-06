/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering name
  benefits: string[];
  basePriceRange?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  size?: string;
  completionYear?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  stars: number;
  text: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  distance: string;
  isPrimary: boolean;
}
