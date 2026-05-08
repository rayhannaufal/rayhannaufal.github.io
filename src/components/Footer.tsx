'use client';

import React from 'react';
import { Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-3">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">
              RN<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-500 max-w-xs font-light">
              Designing and developing professional digital experiences with a focus on Information Systems and user-centric solutions.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/rayhannaufala/" },
              { icon: Github, href: "https://github.com/rayhannaufal" },
              { icon: Instagram, href: "https://www.instagram.com/rayhannaufal_a/" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-500"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <ArrowUp size={24} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold group-hover:text-slate-900 transition-colors">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
