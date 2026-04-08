"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Play, Heart, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { INSTAGRAM_POSTS } from '../constants';

export const InstagramFeed: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <Section className="bg-white py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-terracotta-500/20 to-transparent" />

            <div className="relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
                    <div>
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                            <div className="p-2 bg-pink-50 rounded-full text-pink-600">
                                <Instagram size={20} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-terracotta-500">Social Connect</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl text-teal-900">
                            Follow <span className="italic text-terracotta-500">@shriyandental</span>
                        </h2>
                        <p className="text-neutral-500 mt-2 max-w-md">
                            Behind the scenes, patient stories, and daily dental tips. Join our community of over 5k followers.
                        </p>
                    </div>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-teal-900 text-white hover:bg-teal-800 transition-all duration-300 shadow-xl shadow-teal-900/10"
                    >
                        <span className="uppercase tracking-widest text-xs font-bold">Follow Us</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Scrolling Feed */}
                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {INSTAGRAM_POSTS.map((post, i) => (
                        <motion.a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noreferrer"
                            className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden group cursor-pointer snap-center shadow-md hover:shadow-xl transition-all duration-500"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                        >
                            {/* Image */}
                            <img
                                src={post.imageUrl}
                                alt="Instagram Post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Center Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                                    <Play size={24} fill="currentColor" />
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Heart size={16} className="text-rose-500 fill-rose-500" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <span className="text-xs text-white/50 uppercase tracking-wider font-bold">Watch Reel</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </Section>
    );
};
