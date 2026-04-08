'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, Quote } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { notFound } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface Props {
  slug: string;
}

export const CaseStudyClient: React.FC<Props> = ({ slug }) => {
  const router = useRouter();
  const study = CASE_STUDIES.find((c) => c.slug === slug);

  // Smooth scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="bg-stone-50 min-h-screen pb-20 pt-24">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-teal-900/60 hover:text-teal-900 transition-colors group mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <span className="text-terracotta-500 font-medium tracking-wider mb-2 block text-sm uppercase">
                {study.category} Case Study
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-teal-900 mb-6 leading-tight">
                {study.title}
              </h1>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 max-w-md">
                <h3 className="text-sm font-bold text-teal-900 uppercase tracking-widest mb-4 border-b border-stone-100 pb-2">
                  Patient Profile
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Age</span>
                    <span className="font-serif text-teal-900">{study.patientProfile.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Occupation</span>
                    <span className="font-serif text-teal-900 text-right">{study.patientProfile.occupation}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-stone-500 block mb-1">Chief Concern</span>
                    <p className="font-serif text-teal-900 italic">"{study.patientProfile.concern}"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-stone-100"
              >
                <div className="w-12 h-12 bg-terracotta-50 rounded-full flex items-center justify-center text-terracotta-500">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">Duration</p>
                  <p className="text-xl font-serif text-teal-900">{study.details.treatmentTime}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Breakdown */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-400 mb-6">
                <span className="font-serif font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-4">The Challenge</h3>
              <p className="text-stone-600 leading-relaxed">
                {study.details.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-teal-900 p-8 rounded-3xl shadow-lg relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-800 rounded-bl-full opacity-50 -mr-16 -mt-16"></div>

              <div className="w-10 h-10 bg-teal-800/50 rounded-full flex items-center justify-center text-teal-200 mb-6 relative z-10">
                <span className="font-serif font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-4 relative z-10">Our Solution</h3>
              <p className="text-teal-100 leading-relaxed relative z-10">
                {study.details.solution}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                <CheckCircle size={20} />
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-4">The Outcome</h3>
              <p className="text-stone-600 leading-relaxed">
                {study.details.outcome}
              </p>
            </motion.div>
          </div>

          {/* Testimonial Section */}
          {study.testimonial && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 text-center max-w-3xl mx-auto"
            >
              <Quote className="w-12 h-12 text-terracotta-200 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-serif text-teal-900 leading-normal mb-8">
                "{study.testimonial}"
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-terracotta-200"></div>
                <span className="text-terracotta-500 font-medium uppercase tracking-widest text-sm">Patient Feedback</span>
                <div className="h-px w-12 bg-terracotta-200"></div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <div className="mt-20 p-12 bg-neutral-100 rounded-[3rem] text-center">
            <h2 className="text-3xl font-serif text-teal-900 mb-4">Ready for your transformation?</h2>
            <p className="text-stone-500 mb-8 max-w-lg mx-auto">
              Schedule a consultation with Dr. Viddulata Jagtap to discuss your personal cosmetic goals.
            </p>
            <Link
              href="/#book"
              className="inline-block px-8 py-4 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-800 transition-colors"
            >
              Book Consultation
            </Link>
            <p className="mt-4 text-xs text-stone-400">
              <Link href="/" className="hover:underline">Or return to home</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
