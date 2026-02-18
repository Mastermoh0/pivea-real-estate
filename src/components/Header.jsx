import React, { useState, useEffect, useRef } from 'react';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  /* Close menu on route change */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /* Lock body scroll when nav is open */
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contacts', label: 'Contact' },
  ];

  return (
    <>
      {/* Fixed header bar */}
      <header className="fixed z-50 top-0 left-0 w-full px-6 md:px-10 py-5 flex justify-between items-center bg-transparent backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 z-50">
          <h1 className="text-lg md:text-xl font-display tracking-wide text-dark">
            Pivea Real Estate
          </h1>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 h-11 w-11 rounded-full bg-dark text-backdrop flex justify-center items-center text-xl transition-transform duration-300 hover:scale-105"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <IoCloseOutline size={22} /> : <HiBars3BottomLeft size={20} />}
        </button>
      </header>

      {/* Full-screen overlay navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className={`font-display text-4xl md:text-6xl lg:text-7xl tracking-wide transition-colors duration-300 ${location.pathname === link.to
                        ? 'text-accent'
                        : 'text-backdrop hover:text-accent'
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
