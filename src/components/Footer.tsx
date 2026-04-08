import React from 'react';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-950 text-neutral-200 pt-32 pb-12 px-6 md:px-12 border-t border-white/5 font-sans -mt-12 pt-48 rounded-t-[4rem] relative z-0">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">

          <div className="lg:col-span-2 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white">shriyan<span className="italic font-light text-terracotta-500">dental</span></h2>
            <p className="max-w-md text-white/60 font-sans font-light leading-relaxed text-sm md:text-base">
              Trusted dental care in Mundhwa, Pune. We believe in the power of a healthy smile to transform your life.
              Experience care that listens.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-terracotta-500 mb-8 font-bold">Contact</h4>
            <ul className="space-y-6 text-sm text-white/70 font-light">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin size={18} className="shrink-0 mt-0.5 text-white/40 group-hover:text-terracotta-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">{CONTACT_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone size={18} className="text-white/40 group-hover:text-terracotta-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Mail size={18} className="text-white/40 group-hover:text-terracotta-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-terracotta-500 mb-8 font-bold">Connect</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {[
                { label: 'WhatsApp', href: CONTACT_INFO.whatsapp.getLink() },
                { label: 'Instagram', href: 'https://www.instagram.com/shriyandental' },
                { label: 'Facebook', href: 'https://www.facebook.com/shriyandental' },
                { label: 'Twitter / X', href: '#' },
                { label: 'LinkedIn', href: '#' }
              ].map(social => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 group">
                    {social.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-terracotta-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] pt-12 border-t border-white/5 font-bold">
          <p>&copy; {new Date().getFullYear()} Shriyan Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};