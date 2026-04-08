"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Staggered Text Variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVars: Variants = {
    hidden: { y: 100, opacity: 0, rotateX: -20 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };

  return (
    <div ref={containerRef} className="relative h-[100vh] w-full bg-teal-950 text-white rounded-b-[3rem] md:rounded-b-[4rem] overflow-hidden shadow-2xl z-20 perspective-1000">

      {/* Parallax Background Image */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-teal-950/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent z-10" />

        <img
          src="/images/hero-bg.png"
          alt="Shriyan Dental Clinic Ambiance"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-32">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-8">
            {/* Section Marker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-8 bg-terracotta-500"></div>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] opacity-90 font-medium text-terracotta-400">Trusted Dental Care in Pune</span>
            </motion.div>

            <div className="overflow-hidden pb-4">
              <motion.h1
                variants={containerVars}
                initial="hidden"
                animate="visible"
                className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] leading-[1.1] tracking-tight mb-6 md:mb-8"
              >
                <motion.div variants={itemVars} className="block">Your Smile.</motion.div>
                <motion.div variants={itemVars} className="block">
                  <span className="italic font-light text-white/90">Our Gentle</span>
                </motion.div>
                <motion.div variants={itemVars} className="block text-terracotta-400">Expertise.</motion.div>
              </motion.h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-8 md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#book">
                  <Button variant="terracotta" className="w-full sm:w-auto">Book Appointment</Button>
                </a>
                <a href="#doctor" className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-teal-900 transition-all">
                    <ArrowDown size={18} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Meet Dr. Viddulata</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right: Intro Text Block */}
          <div className="lg:col-span-4 pb-4">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-sans text-lg font-light leading-relaxed text-white/90 border-l-2 border-terracotta-500 pl-6 backdrop-blur-sm"
            >
              A place where anxiety fades and confidence begins. Welcome to <b>Shriyan Dental Clinic</b> — where Dr. Viddulata Jagtap brings 20+ years of compassionate care to your family.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
