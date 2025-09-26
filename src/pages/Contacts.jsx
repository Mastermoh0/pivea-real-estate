import React from 'react';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

/*
This is a real estate website for Pivea Real Estate company based in Abuja, Nigeria.
The site showcases their properties, team members, and allows potential clients to get in touch.

The Contacts page provides multiple ways for visitors to connect with the company:
- Social media links (Instagram, Facebook)
- Direct contact methods (Phone, Email)
- Physical location with embedded map
*/

export default function Contacts() {
  return (
    <main>
      {/* 
      Main contact section with gradient background card
      Contains company contact information and social links
      Uses responsive layout that stacks on mobile and aligns side-by-side on larger screens
      */}
      <section className='py-[15rem] flex flex-col items-center px-4'>
        <div className="mt-16 w-fit px-9 text-center py-8 text-white text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <div className='text-center lg:text-left'>
            <h2 className='flex justify-center text-8xl sm:text-5xl font-semibold text-white mb-2'>
              Get in Touch
            </h2>
            <p className='text-lg text-center sm:text-xl md:text-2xl py-4 font-normal text-white mb-2'>
              We would love to hear from you. Please reach out using the following methods.
            </p>
            {/* Social media and contact information container */}
            <div className=' flex justify-center flex-col lg:flex-row lg:space-x-10 text-white'>
              {/* Social media links section */}
              <div className='flex flex-col space-y-4'>
                <h5 className='text-md md:text-lg'>Connect</h5>
                <div className='flex flex-col space-y-2'>
                  <a href='https://www.instagram.com/pivearealestate/' className='flex items-center space-x-2 hover:underline'>
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                  <a href='https://www.facebook.com/Piveagroup' className='flex items-center space-x-2 hover:underline'>
                    <FaFacebookF />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
              {/* Direct contact methods section */}
              <div className='flex flex-col space-y-4'>
                <h5 className='text-md md:text-lg'>Contact Us</h5>
                <div className='flex flex-col space-y-2'>
                  <a href='tel:+2349010020018' className='flex items-center space-x-2 hover:underline'>
                    <FaPhoneAlt />
                    <span>+234 901 0020 018</span>
                  </a>
                  <a href='mailto:Info@pivearealestate.ng' className='flex items-center space-x-2 hover:underline'>
                    <FaEnvelope />
                    <span>Info@pivearealestate.ng</span>
                  </a>
                  <a href='https://www.google.com/maps?q=Road+11%2C+Gwarimpa%2C+Abuja%2C+Nigeria' className='flex items-center space-x-2 hover:underline'>
                    <FaMapMarkerAlt />
                    <span>Meet up: Road 11, Gwarimpa, Abuja, Nigeria</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        Google Maps embed section
        Shows company's physical location in Gwarimpa, Abuja
        Responsive iframe that maintains aspect ratio and includes rounded corners
        */}
        <div className="w-full max-w-4xl mt-16">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6761702681287!2d7.405!3d9.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd6723d%3A0x75b39f9bff0d2fb7!2sRoad%2011%2C%20Gwarimpa%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1635959562834!5m2!1sen!2s"
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
