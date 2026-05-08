'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Bachelor of Information Systems
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            RAYHAN <br />
            <span className="text-blue-600">
              NAUFAL ANWAR.
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl font-light">
            An <span className="text-slate-900 font-medium">Information Systems</span> student at 
            <span className="text-slate-900 font-medium"> UPN "Veteran" Yogyakarta</span>. Passionate 
            about engineering, programming, and data science, turning complex problems into elegant digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 text-sm"
            >
              View My Work <ArrowUpRight size={18} />
            </motion.a>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/rayhannaufala/" },
                { icon: Github, href: "https://github.com/rayhannaufal" },
                { icon: Instagram, href: "https://www.instagram.com/rayhannaufal_a/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, color: '#2563eb' }}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all border border-slate-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-10 lg:mt-0"
        >
          <div className="relative z-10 w-full aspect-square max-w-[350px] mx-auto">
            <div className="absolute inset-0 bg-blue-100 rounded-[32px] rotate-6 opacity-50" />
            <div className="relative h-full w-full rounded-[32px] overflow-hidden border-[6px] border-white shadow-xl">
              <Image
                src="/img/profile.jpeg"
                alt="Rayhan Naufal Anwar"
                fill
                className="object-cover transition-all duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
