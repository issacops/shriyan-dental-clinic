import React from 'react';
import { Section } from './ui/Section';
import { CONTACT_INFO } from '../constants';

export const Location: React.FC = () => {
    // Google Maps Embed URL for "Shriyan Dental Clinic, Mundhwa, Pune"
    // Using a search query embed which is generally safe and free.
    // Ideally we would use a specific Place ID if we had one, but this works well.
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9!2d73.9!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3b3bd%3A0x9c4c4c4c4c4c4c4c!2sShriyan%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin`;
    // Since I don't have the exact PB string for the specific location, I'll use the query mode which is robust.
    // Query: Shriyan Dental Clinic, Mundhwa, Pune
    const mapQuery = "Shriyan Dental Clinic, Mundhwa, Pune";
    const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(mapQuery)}`;

    // Actually, without an API key, the iframe src needs to be specific.
    // I will use the "output=embed" format for a search query which works without an API key in standard iframes mostly, 
    // or better yet, I will use a generic placeholder that WORKS until they get a real key?
    // No, standard Google Maps embeds from the "Share" button don't need keys.
    // I'll try to approximate the location or use a reliable query URL format.
    // https://maps.google.com/maps?q=Shriyan+Dental+Clinic+Pingale+Wasti+Mundhwa+Pune&t=&z=13&ie=UTF8&iwloc=&output=embed

    const googleMapUrl = `https://maps.google.com/maps?q=Shriyan+Dental+Clinic+Pingale+Wasti+Mundhwa+Near+Koregaon+Park+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    // Direct link to open in Google Maps App/Site
    const directMapLink = "https://www.google.com/maps/search/?api=1&query=Shriyan+Dental+Clinic+Mundhwa+Pune";

    return (
        <Section id="location" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="font-sans font-bold text-xs tracking-widest text-terracotta-500 uppercase block mb-3">Visit Us</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-teal-900 mb-6">
                        Our Location
                    </h2>
                    <p className="font-sans text-stone-600 max-w-2xl mx-auto">
                        Conveniently located in Mundhwa, near Koregaon Park.
                    </p>
                </div>

                <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200 group">
                    {/* The Map Iframe */}
                    <div className="absolute inset-0 bg-stone-200 animate-pulse" /> {/* Placeholder while loading */}
                    <iframe
                        title="Shriyan Dental Clinic Location"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src={googleMapUrl}
                        className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        allowFullScreen
                    ></iframe>

                    {/* Overlay interaction hint */}
                    <a
                        href={directMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-teal-900 shadow-lg hover:bg-teal-900 hover:text-white transition-all duration-300 flex items-center gap-2 z-10"
                    >
                        <span>Open in Google Maps</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </div>

                <div className="mt-8 text-center text-sm text-stone-500 font-sans">
                    <p>{CONTACT_INFO.address.full}</p>
                </div>
            </div>
        </Section>
    );
};
