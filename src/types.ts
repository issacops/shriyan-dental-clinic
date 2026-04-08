import { LucideIcon } from 'lucide-react';

export interface Treatment {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  patientProfile: {
    age: number;
    occupation: string;
    concern: string;
  };
  details: {
    challenge: string;
    solution: string;
    outcome: string;
    treatmentTime: string;
  };
  testimonial?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

export interface Doctor {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  headline?: string;
  education?: string;
  expertise?: string[];
}
