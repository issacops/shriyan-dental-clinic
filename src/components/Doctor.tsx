"use client";
import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { Award, GraduationCap, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TEAM } from '../constants';

export const Doctor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const founder = TEAM[0];

  return (
    <Section id="doctor" className="bg-sage-50 py-32 md:py-48 relative overflow-hidden rounded-[3rem] my-8 max-w-[98%] mx-auto">

      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-200/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 flex items-center gap-4 mb-20 px-4">
        <span className="font-sans font-bold text-xs tracking-widest text-teal-900">002</span>
        <div className="h-[1px] w-8 bg-teal-900/20"></div>
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-teal-900/60 font-semibold">The Doctor</span>
      </div>

      {/* Founder Section */}
      <div ref={containerRef} className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-4">

        {/* Left: Content */}
        <motion.div style={{ y: textY }} className="lg:col-span-6 order-2 lg:order-1">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-7xl text-teal-900 mb-10 leading-[0.95]"
          >
            A Journey of <br />
            <span className="italic text-terracotta-500">Care & Growth.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 font-sans text-teal-800 leading-relaxed font-light"
          >
            <p className="text-lg text-teal-900 font-medium">
              From one humble dental chair to a thriving practice in Mundhwa, Dr. Viddulata Jagtap's story is built on trust.
            </p>
            <p>
              With over 20 years of experience, she hasn't just treated teeth; she has built relationships. Her philosophy is simple: Treat every patient like family, with honest advice and gentle hands.
            </p>
            <blockquote className="relative p-8 bg-white rounded-3xl shadow-lg shadow-teal-900/5 border border-sage-100 hover:shadow-xl transition-shadow duration-300">
              <span className="absolute top-0 left-0 text-7xl text-terracotta-400 opacity-20 font-serif leading-none -translate-x-2 -translate-y-4">"</span>
              <p className="italic text-teal-900 font-serif text-xl relative z-10">
                I believe in dentistry that listens. When you sit in my chair, you are heard, understood, and cared for.
              </p>
            </blockquote>
          </motion.div>

          {/* Qualifications / Badges */}
          <div className="flex gap-4 mt-8">
            <div className="px-4 py-2 bg-white rounded-full border border-sage-200 text-xs font-bold text-teal-900 uppercase tracking-wider">
              B.D.S. Pune
            </div>
            <div className="px-4 py-2 bg-white rounded-full border border-sage-200 text-xs font-bold text-teal-900 uppercase tracking-wider">
              20+ Years Exp.
            </div>
          </div>

        </motion.div>

        {/* Right: Founder Image */}
        <div className="lg:col-span-6 order-1 lg:order-2 perspective-1000">
          <motion.div
            style={{ y: imageY }}
            initial={{ clipPath: 'inset(10% 10% 10% 10%)', rotateY: 5 }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {/* Decorative Corner Triangle */}
            <div className="absolute -top-6 -right-6 w-32 h-32 z-10 hidden md:block">
              <svg viewBox="0 0 100 100" className="fill-terracotta-500">
                <path d="M0 0 L100 0 L100 100 Z" />
              </svg>
            </div>

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover object-top grayscale-[0%] transition-all duration-500"
            />

            <div className="absolute bottom-8 left-8 bg-teal-950/90 backdrop-blur-md p-6 rounded-3xl max-w-xs z-20 border border-white/10 shadow-lg">
              <p className="font-serif text-xl italic text-white">{founder.name}</p>
              <p className="text-[10px] uppercase tracking-widest text-terracotta-500 mt-2 font-bold">{founder.role}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};