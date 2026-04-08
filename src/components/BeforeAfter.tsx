"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { CASE_STUDIES } from '../constants';
import Link from 'next/link';

const CASES = CASE_STUDIES; // Or slice if you only want top 4

export const BeforeAfter: React.FC = () => {
  return (
    <Section className="bg-neutral-100 py-32 relative overflow-hidden">

      {/* Texture & Ambient Lighting */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terracotta-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-sans font-bold text-xs tracking-widest text-teal-900">005</span>
              <div className="h-[1px] w-8 bg-teal-900/20"></div>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-teal-900/60">Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl md:text-7xl text-teal-900 leading-[0.9]">
              Real stories, <br />
              <span className="italic text-terracotta-500">Real smiles.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-neutral-500 font-sans font-light text-sm max-w-xs leading-relaxed text-right hidden md:block">
              Explore our gallery of transformations. <br />
              Each smile is a masterpiece of precision and art.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="w-16 h-16 rounded-full border border-teal-900/20 flex items-center justify-center text-teal-900 hover:bg-teal-900 hover:text-white transition-colors duration-300"
            >
              <Plus size={20} />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASE_STUDIES.map((item, i) => (
            <Link key={item.id} href={`/case-study/${item.slug}`}>
              <motion.div
                className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent opacity-90 transition-opacity duration-300 z-20" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-terracotta-400 font-medium tracking-wider text-sm uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-serif text-white mb-3 leading-tight group-hover:text-terracotta-50 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 mb-6 opacity-0 xl:opacity-100 max-w-[90%] group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.details.outcome.substring(0, 60)}...
                  </p>

                  <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                    <span className="uppercase tracking-widest text-xs font-bold">View Transformation</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Section >
  );
};