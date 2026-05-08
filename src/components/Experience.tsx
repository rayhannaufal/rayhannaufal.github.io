'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Cloud Computing Cohort',
    company: 'Bangkit Academy 2024 Batch 1',
    location: 'Bandung, West Java (Remote)',
    period: 'Feb 2024 - Jul 2024',
    description: [
      'Intensive cloud computing program focusing on Google Cloud Platform.',
      'Developed scalable cloud solutions and collaborated with cross-functional teams.'
    ]
  },
  {
    role: 'Back End Developer Intern',
    company: 'Solutionlabs Grup Indonesia',
    location: 'Yogyakarta, Indonesia',
    period: 'Dec 2023 - Jan 2024',
    description: [
      'Developed and maintained server-side web applications and created APIs.',
      'Optimized server performance, implemented security, and managed databases.'
    ]
  },
  {
    role: 'UI/UX Designer Virtual Intern',
    company: 'Niagahoster x Rakamin Academy',
    location: 'Yogyakarta, Indonesia (Remote)',
    period: 'Sep 2023',
    description: [
      'Completed tasks related to User Research, Competitive Research, and Wireframing.',
      'Created prototypes and conducted usability testing for web hosting interfaces.'
    ]
  },
  {
    role: 'Junior Web Developer (VSGA)',
    company: 'Kominfo',
    location: 'Indonesia',
    period: 'Jun 2023 - Jul 2023',
    description: [
      'Implemented user interfaces and executed multimedia programming tasks.',
      'Organized resources, applied structured programming, and used component libraries.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter"
          >
            Work <span className="text-blue-600">History.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />
              
              <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-2 text-blue-600 font-bold mb-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      <Briefcase size={16} />
                      <span className="uppercase tracking-widest text-xs">{exp.role}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{exp.company}</h3>
                    <div className={`flex flex-wrap gap-3 text-slate-400 text-xs mb-4 font-medium uppercase tracking-wider ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                    <ul className={`space-y-2 text-slate-600 text-sm font-light ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative z-10 w-4 h-4 bg-white rounded-full border-[3px] border-blue-600 shadow-sm shrink-0" />
                <div className="flex-1 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
