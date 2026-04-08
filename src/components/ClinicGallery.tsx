"use client";
import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ClinicGallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects for columns
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

    const images = [
        {
            src: "/images/clinic-reception.jpg",
            title: "Warm Welcome",
            desc: "A reception that feels like a living room."
        },
        {
            src: "/images/clinic-waiting-sofa.jpg",
            title: "Patient Lounge",
            desc: "Comfortable seating while you wait."
        },
        {
            src: "/images/clinic-quote-door.jpg",
            title: "Inspiring Spaces",
            desc: "Every detail designed to uplift."
        },
        {
            src: "/images/clinic-hallway.jpg",
            title: "Modern Interiors",
            desc: "Clean lines and calming aesthetics."
        },
        {
            src: "/images/clinic-operatory.jpg",
            title: "Advanced Operatory",
            desc: "Equipped with the best for your care."
        },
        {
            src: "/images/clinic-chair.jpg",
            title: "Comfort & Care",
            desc: "State-of-the-art technology."
        }
    ];

    return (
        <Section id="gallery" className="py-24 bg-sage-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60 mix-blend-soft-light" />
                <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-teal-900 rounded-full blur-[120px] opacity-5 mix-blend-multiply" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-sans font-bold text-xs tracking-widest text-terracotta-500 uppercase block mb-3">Our Space</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-teal-900 mb-6 leading-tight">
                        Designed for <span className="italic text-terracotta-500">Tranquility.</span>
                    </h2>
                    <p className="font-sans text-teal-800/60 max-w-xl mx-auto font-light text-lg">
                        We’ve reimagined the dental clinic as a sanctuary.
                        Every corner is crafted to soothe your senses.
                    </p>
                </div>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="relative group h-[400px]"
                        >
                            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-lg relative">
                                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors duration-500 z-10" />
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-teal-950/90 via-teal-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                                    <h3 className="text-white font-serif text-xl">{img.title}</h3>
                                    <p className="text-white/80 text-xs mt-1 font-sans font-light">{img.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
