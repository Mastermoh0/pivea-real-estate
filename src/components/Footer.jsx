import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-backdrop">
      {/* Main content */}
      <div className="px-6 md:px-12 lg:px-20 pt-20 pb-16 flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* CTA Headline */}
        <div className="lg:w-1/2">
          <h2 className="font-display text-heading-lg leading-tight">
            Don't wait any longer,<br />
            Take your <span className="text-accent">HOME</span> today
          </h2>
        </div>

        {/* Links columns */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
          {/* Connect */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs uppercase tracking-[0.2em] text-muted font-body">Connect</h5>
            <a href="https://www.instagram.com/pivearealestate/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm hover:text-accent transition-colors">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/Piveagroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm hover:text-accent transition-colors">
              <FaFacebookF /> Facebook
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h5 className="text-xs uppercase tracking-[0.2em] text-muted font-body">Contact Us</h5>
            <a href="tel:+2349010020018" className="flex items-center gap-2 font-body text-sm hover:text-accent transition-colors">
              <FaPhoneAlt /> +234 (0)901 0020 018
            </a>
            <a href="mailto:Info@pivearealestate.ng" className="flex items-center gap-2 font-body text-sm hover:text-accent transition-colors">
              <FaEnvelope /> Info@pivearealestate.ng
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted font-body">
        <Link to="/contacts" className="hover:text-accent transition-colors">Come In</Link>
        <a href="https://policies.google.com/privacy?hl=en-US" className="hover:text-accent transition-colors">Privacy Policy</a>
        <p>
          &copy; {new Date().getFullYear()}. Website built by{' '}
          <a href="https://piveatech.com/" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">PiveaTech</a>.
        </p>
      </div>
    </footer>
  );
}
