import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contacts() {
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
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-base md:text-lg text-dark/60 mt-4 max-w-xl mx-auto"
        >
          We would love to hear from you. Reach out using any of the methods below.
        </motion.p>
      </section>

      {/* Contact info */}
      <section className="section-pad px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-4xl mx-auto"
        >
          {/* Connect */}
          <div className="flex-1">
            <h3 className="text-xs uppercase tracking-[0.25em] text-muted font-body mb-6">Connect</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/pivearealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body group"
              >
                <span className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center transition-all group-hover:bg-dark group-hover:text-backdrop group-hover:border-dark">
                  <FaInstagram />
                </span>
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/Piveagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body group"
              >
                <span className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center transition-all group-hover:bg-dark group-hover:text-backdrop group-hover:border-dark">
                  <FaFacebookF />
                </span>
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact details */}
          <div className="flex-1">
            <h3 className="text-xs uppercase tracking-[0.25em] text-muted font-body mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+2349010020018" className="flex items-center gap-3 font-body group">
                <span className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center transition-all group-hover:bg-dark group-hover:text-backdrop group-hover:border-dark">
                  <FaPhoneAlt />
                </span>
                <span className="text-sm">+234 (0)901 0020 018</span>
              </a>
              <a href="mailto:Info@pivearealestate.ng" className="flex items-center gap-3 font-body group">
                <span className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center transition-all group-hover:bg-dark group-hover:text-backdrop group-hover:border-dark">
                  <FaEnvelope />
                </span>
                <span className="text-sm">Info@pivearealestate.ng</span>
              </a>
              <a
                href="https://www.google.com/maps?q=Road+11%2C+Gwarimpa%2C+Abuja%2C+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body group"
              >
                <span className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center transition-all group-hover:bg-dark group-hover:text-backdrop group-hover:border-dark">
                  <FaMapMarkerAlt />
                </span>
                <span className="text-sm">Road 11, Gwarimpa, Abuja, Nigeria</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-12 lg:px-20 pb-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6761702681287!2d7.405!3d9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd6723d%3A0x75b39f9bff0d2fb7!2sRoad%2011%2C%20Gwarimpa%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1635959562834!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pivea Real Estate location"
            className="w-full"
          />
        </motion.div>
      </section>
    </main>
  );
}
