'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Vue.js',
  'Python',
  'Flutter',
  'PHP & MySQL',
  'HTML & CSS',
  'Google Cloud',
  'UI/UX Design',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">
              Expertise
            </h2>
            <p className="text-slate-500 text-sm font-light uppercase tracking-widest">
              Technical Stack & Tools
            </p>
          </motion.div>

          <div className="md:w-2/3 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-2 text-xs font-bold text-slate-600 uppercase tracking-widest bg-white border border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
