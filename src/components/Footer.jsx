import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className='bg-black text-backdrop pt-20 pb-10 px-4' 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='container mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0'>
        <div className='text-white lg:w-7/12'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl leading-tight'>
            Don't wait any longer, <br /> Take your HOME today
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row lg:space-x-10 text-white'>
          <div className='flex flex-col space-y-4'>
            <h5 className='text-md md:text-lg'>Connect</h5>
            <div className='flex flex-col space-y-2'>
              <a href='https://www.instagram.com/pivearealestate/' className='flex items-center space-x-2'>
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href='https://www.facebook.com/Piveagroup' className='flex items-center space-x-2'>
                <FaFacebookF />
                <span>Facebook</span>
              </a>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h5 className='text-md md:text-lg'>Contact Us</h5>
            <div className='flex flex-col space-y-2'>
              <a href='tel:+2349010020018' className='flex items-center space-x-2'>
                <FaPhoneAlt />
                <span>+234 (0)901 0020 018</span>
              </a>
              <a href='mailto:Info@pivearealestate.ng' className='flex items-center space-x-2'>
                <FaEnvelope />
                <span>Info@pivearealestate.ng</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-light opacity-50 text-xs'>
        <a href='/Contacts' className='text-white hover:underline'>Come In</a>
        <a href='https://policies.google.com/privacy?hl=en-US' className='text-white hover:underline'>Privacy Policy</a>
        <p className='text-white text-center md:text-left'>
          &copy; {new Date().getFullYear()}. Website built by <a href='https://piveatech.com/' className='hover:underline'>PiveaTech</a>.
        </p>
      </div>
    </motion.footer>
  );
}
