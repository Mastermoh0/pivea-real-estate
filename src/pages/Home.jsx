import React from 'react';
import { motion } from 'framer-motion';
import { construction_guy, house_interior, modern_house, mansion } from '../assets/images';
import { featureData } from '../data/service_data';
import { productData } from '../data/project_data';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-dark">
        <img
          src={construction_guy}
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 flex flex-col justify-center items-center h-full text-center text-backdrop px-4"
        >
          <h1 className="font-display text-hero">Design</h1>
          <h1 className="font-display text-hero">Construction</h1>
          <h1 className="font-display text-hero">Technology</h1>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — ABOUT / RESIDENTIAL
      ═══════════════════════════════════════════ */}
      <section className="section-pad px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20"
        >
          {/* Text column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-muted font-body mb-4">
              Residential
            </span>
            <h2 className="font-display text-heading-xl mb-6">
              Iconic architecture expertly developed
            </h2>
            <p className="font-body text-base md:text-lg text-dark/70 mb-10 max-w-xl leading-relaxed">
              PIVEA is one of the fast-paced urban real estate development companies in Nigeria.
              Birthed by a union of leading authorities in housing and construction, we are
              passionate about providing real estate solutions for all.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <h3 className="font-display text-5xl md:text-6xl text-dark">5+</h3>
                <p className="font-body text-sm text-muted mt-1">Years of experience</p>
              </div>
              <div>
                <h3 className="font-display text-5xl md:text-6xl text-dark">4x</h3>
                <p className="font-body text-sm text-muted mt-1">Builder of the year</p>
              </div>
            </div>
          </div>

          {/* Image column — overlapping effect */}
          <div className="lg:w-1/2 relative min-h-[30rem] md:min-h-[40rem]">
            <img
              src={modern_house}
              alt="Modern house exterior"
              className="w-full h-[28rem] md:h-[36rem] object-cover"
            />
            <img
              src={house_interior}
              alt="House interior"
              className="absolute -bottom-8 -left-6 md:-left-12 w-48 md:w-64 h-48 md:h-64 object-cover border-4 border-backdrop shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — SERVICES HEADLINE
      ═══════════════════════════════════════════ */}
      <section className="section-pad px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-heading-xl mb-6">
            We offer a wide array of services aimed at simplifying your life
          </h2>
          <span className="text-xs uppercase tracking-[0.25em] text-muted font-body">
            Beautiful design &amp; robust options
          </span>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — FEATURES GRID
      ═══════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-20 pb-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {featureData.map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-border-warm p-8 md:p-10 transition-colors duration-500 hover:bg-dark hover:border-dark"
            >
              <item.icon className="text-3xl text-accent mb-6 transition-colors group-hover:text-backdrop" />
              <h3 className="font-display text-xl md:text-2xl mb-3 transition-colors group-hover:text-backdrop">
                {item.title}
              </h3>
              <p className="font-body text-sm text-dark/60 leading-relaxed transition-colors group-hover:text-backdrop/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — PORTFOLIO
      ═══════════════════════════════════════════ */}
      <section className="section-pad px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12">
        {/* Sticky sidebar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted font-body mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-heading-lg mb-8">
            Making the world a more beautiful place.
          </h2>
          <Link
            to="/projects"
            className="inline-block font-body text-sm border border-dark px-6 py-3 tracking-wide uppercase transition-all duration-300 hover:bg-dark hover:text-backdrop"
          >
            View All Projects
          </Link>
        </motion.div>

        {/* Scrolling project cards */}
        <div className="lg:w-2/3 flex flex-col gap-16">
          {productData.map((item, i) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-full md:w-2/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[20rem] md:h-[28rem] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="md:w-1/3 flex flex-col justify-center pt-2">
                <span className="text-xs uppercase tracking-[0.2em] text-muted font-body mb-2">
                  {item.name}
                </span>
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl mb-3">{item.title}</h3>
                <p className="font-body text-sm text-dark/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — MARQUEE
      ═══════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <img
          src={mansion}
          alt="Luxury mansion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="relative z-10 flex flex-col gap-4">
          <Marquee speed={60} gradient={false}>
            {[...Array(6)].map((_, i) => (
              <span key={`a-${i}`} className="font-display text-6xl md:text-8xl lg:text-9xl text-backdrop/90 mx-8 whitespace-nowrap">
                Pivea Architecture
              </span>
            ))}
          </Marquee>
          <Marquee speed={60} direction="right" gradient={false}>
            {[...Array(6)].map((_, i) => (
              <span key={`b-${i}`} className="font-display text-6xl md:text-8xl lg:text-9xl text-backdrop/90 mx-8 whitespace-nowrap">
                Pivea Real Estate
              </span>
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}
