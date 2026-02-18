import React from 'react';
import { motion } from 'framer-motion';
import { team, ceo, employee1, employee2, employee3 } from '../assets/images';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const teamMembers = [
  { name: 'Mustapha Ibrahim Umar', role: 'CEO', image: ceo },
  { name: 'Habiba Ismail', role: 'Social Media Manager', image: employee3 },
  { name: 'Aneesa Bilkisu Abdul', role: 'Project Manager', image: employee2 },
  { name: "Muhammad Al-Amin Ibrahim", role: 'Senior IT', image: employee1 },
];

const goals = [
  { heading: true, text: 'Innovate each project with no exceptions.' },
  { heading: false, text: 'We understand the need to earn our client trust. Therefore, we act with honesty and integrity, not compromising the truth in all situations.' },
  { heading: true, text: 'Always overdeliver to our clients.' },
  { heading: false, text: 'Our team members are forward thinking people, already motivated, and inspired to deliver high quality project results.' },
  { heading: true, text: 'Build things that inspire people.' },
  { heading: false, text: 'We aim for the highest standard of excellence in all what we do.' },
];

export default function About() {
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
          About Us
        </motion.h1>
      </section>

      {/* Team Photo */}
      <section className="px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={team} alt="Pivea team at work" className="w-full h-auto object-cover" />
        </motion.div>
      </section>

      {/* Company statement */}
      <section className="section-pad px-6 md:px-12 lg:px-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-muted font-body block mb-4">
            Company
          </span>
          <h2 className="font-display text-heading-xl">
            We are a professional real estate firm based in Abuja
          </h2>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="section-pad px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start"
        >
          <h2 className="font-display text-heading-lg mb-4">Meet The Team.</h2>
          <p className="font-body text-sm text-dark/60 leading-relaxed">
            We're an award-winning multidisciplinary team based in Abuja with a passion for creating
            innovative architecture. We work with businesses and people to create a more beautiful world.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-display text-lg">{member.role}</h3>
                <p className="font-body text-sm text-muted mt-1">{member.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Goals */}
      <section className="section-pad px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-heading-xl mb-12">Our Goals</h2>

          <div className="flex flex-col">
            {goals.map((item, i) => (
              <div key={i} className="py-6 border-b border-border-warm">
                <p
                  className={
                    item.heading
                      ? 'font-display text-xl md:text-2xl lg:text-3xl'
                      : 'font-body text-sm md:text-base text-dark/60 leading-relaxed'
                  }
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/contacts"
            className="inline-block font-body text-sm border border-dark px-6 py-3 mt-12 tracking-wide uppercase transition-all duration-300 hover:bg-dark hover:text-backdrop"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
