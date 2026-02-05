
// Fix: Imported React to resolve the 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  highlights: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface CaseStudy {
  title: string;
  company: string;
  description: string;
  impact: string[];
  image: string;
}