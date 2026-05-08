'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Prototyper',
    category: 'UI/UX Design',
    description: 'A revolutionary job finder platform focused on seamless user flow.',
    image: '/img/Landing_page.jpg',
    link: 'https://www.figma.com/file/yDDSeD01KckY3tvMjz2P7Q/Prototyping?type=design&node-id=142-261&mode=design&t=M6YpvZjHBIFDY7It-0',
  },
  {
    title: 'SI Banjir',
    category: 'Web Application',
    description: 'Real-time disaster monitoring and alert system for local communities.',
    image: '/img/simb.png',
    link: 'http://simb.42web.io/',
  },
  {
    title: 'JakaTour',
    category: 'Tourism Platform',
    description: 'Discover hidden gems and plan your next vacation with ease.',
    image: '/img/jakatour.png',
    link: 'http://jakatour.infinityfreeapp.com/',
  },
  {
    title: 'Mickey Mauze',
    category: 'E-Commerce',
    description: 'Modern shopping experience with a focus on toys and collectibles.',
    image: '/img/mickey.png',
    link: 'http://mickeymauze.infinityfreeapp.com',
  },
  {
    title: 'Weather App',
    category: 'Web Application',
    description: 'A clean and intuitive application for real-time weather forecasting.',
    image: '/img/weather_app.png',
    link: 'https://github.com/rayhannaufal/weather_app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter"
          >
            Featured <span className="text-slate-300">Projects.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur text-blue-600 rounded-full flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="h-0.5 w-12 bg-slate-200 group-hover:bg-blue-600 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/rayhannaufal"
                target="_blank"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm uppercase tracking-wider transition-colors"
            >
                View full Archive on Github <Github size={18} />
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
