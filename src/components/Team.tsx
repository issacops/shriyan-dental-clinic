"use client";
import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { GraduationCap, Award, Stethoscope } from 'lucide-react';

export const Team: React.FC = () => {
    // Skip the founder (first item) to display only the team
    const teamMembers = TEAM.slice(1);

    if (teamMembers.length === 0) return null;

    return (
        <Section id="team" className="py-24 bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="font-sans font-bold text-xs tracking-widest text-terracotta-500 uppercase block mb-3">Our Experts</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-teal-900 mb-6">
                        Meet The Specialists
                    </h2>
                    <div className="w-16 h-0.5 bg-terracotta-500 mx-auto opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="group relative bg-[#FAFAF8] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.33, 1, 0.68, 1]"
                                />
                                {/* Overlay Content on specific breakpoints or always? Let's put text below for better reading of bio */}
                            </div>

                            {/* Content Body */}
                            <div className="p-8 flex flex-col flex-grow relative bg-white">
                                {/* Quote/Headline Badge */}
                                <div className="absolute -top-6 right-8 bg-terracotta-500 text-white rounded-full p-3 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                    <Stethoscope size={24} />
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-serif text-2xl text-teal-900 mb-1 group-hover:text-terracotta-600 transition-colors duration-300">{member.name}</h3>
                                    <p className="font-sans text-xs font-bold tracking-widest text-teal-600 uppercase mb-4">{member.role}</p>

                                    {member.headline && (
                                        <p className="font-serif italic text-lg text-stone-500 leading-snug">
                                            "{member.headline}"
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <p className="font-sans text-sm text-stone-600 leading-relaxed font-light">
                                        {member.bio}
                                    </p>

                                    {/* Education & Expertise */}
                                    <div className="pt-6 border-t border-stone-100 space-y-4">
                                        {member.education && (
                                            <div className="flex gap-3 items-start">
                                                <GraduationCap className="w-4 h-4 text-terracotta-500 mt-1 shrink-0" />
                                                <span className="text-xs font-sans text-stone-500 font-medium">{member.education}</span>
                                            </div>
                                        )}

                                        {member.expertise && (
                                            <div className="flex gap-3 items-start">
                                                <Award className="w-4 h-4 text-terracotta-500 mt-1 shrink-0" />
                                                <div className="flex flex-wrap gap-2">
                                                    {member.expertise.map((exp: string, idx: number) => (
                                                        <span key={idx} className="text-[10px] uppercase tracking-wider bg-stone-100 text-stone-600 px-2 py-1 rounded-md font-bold">
                                                            {exp}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
