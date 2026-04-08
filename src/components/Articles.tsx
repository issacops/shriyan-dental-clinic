"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../constants';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export const Articles: React.FC = () => {
    return (
        <section id="articles" className="py-24 bg-neutral-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-16 md:mb-24 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-terracotta-500"></div>
                        <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-terracotta-600 font-bold">
                            Dr. Viddulata's Journal
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-teal-900 leading-tight"
                    >
                        Insights for a <br /><span className="italic text-terracotta-600">Healthier Smile.</span>
                    </motion.h2>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTICLES.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link href={`/article/${article.slug}`} className="flex flex-col h-full block">
                                {/* Card Image */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                    <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-teal-900">
                                            <Tag size={10} className="text-terracotta-500" />
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3 font-medium">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={12} />
                                            {article.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <User size={12} />
                                            {article.author}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-2xl text-teal-900 mb-3 leading-snug group-hover:text-terracotta-600 transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <p className="font-sans text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {article.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-teal-900 group-hover:translate-x-2 transition-transform duration-300">
                                        Read Article
                                        <ArrowRight size={14} className="text-terracotta-500" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
