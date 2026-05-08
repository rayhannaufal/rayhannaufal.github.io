'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-2 text-sm"
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
            >
              LET'S START <br />
              A <span className="text-slate-300">CONVERSATION.</span>
            </motion.h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-8 max-w-lg">
                Have a project in mind or just want to say hi? Feel free to reach out. 
                I'm always looking for new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-slate-900 text-base font-medium">rayhan.naufal55@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-slate-900 text-base font-medium">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-lg"
          >
            <form 
              method="POST" 
              action="https://script.google.com/macros/s/AKfycbwF19ta2GRRQkK3iN6taLD1uIwMXsBuBg8JuiM4eCt1Vvi9ueXGWH1_Bd6mg1Ufl8Kc7Q/exec"
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="Email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                <textarea
                  name="Message"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2 text-sm uppercase tracking-widest mt-4"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
