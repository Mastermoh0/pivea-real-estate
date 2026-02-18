import React from 'react';
import { motion } from 'framer-motion';
import { productData } from '../data/project_data';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-heading-xl"
        >
          Our Projects
        </motion.h1>
      </section>

      {/* Projects grid */}
      <section className="px-6 md:px-12 lg:px-20 pb-section-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[22rem] md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-colors duration-500" />
              {/* Info reveal */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-body block mb-1">
                  {item.name}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-backdrop mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-backdrop/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming soon */}
      <section className="px-6 md:px-12 lg:px-20 pb-section">
        <div className="border border-border-warm py-8 text-center">
          <p className="font-display text-lg md:text-xl text-muted">More Projects Coming Soon</p>
        </div>
      </section>
    </main>
  );
}
