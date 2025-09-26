import React from 'react'
import {team, ceo, employee1, employee2, employee3} from "../assets/images"
import { motion } from 'framer-motion';

export default function About() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <main className='p-8'>
    <section className="w-full px-4 py-[5rem]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12">About Us</h1>
    </section>
    <section className='w-full px-4 py-[10rem]'>
      <img src={team} alt="" className='w-full h-full'/>
      <div className='flex justify-center items-center w-full'>
      <div className="flex justify-center items-center flex-col text-center py-[5rem] w-full">
      <span className="text-2xl font-thin">COMPANY</span>
      <span className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">We are a professional real estate firm based in Abuja</span>
    </div>
      </div>
    </section>
    <section className="w-full flex flex-col lg:flex-row p-4 lg:p-8 py-[15rem]">
  {/* Intro Text */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    transition={{ duration: 1.0 }}
    viewport={{ once: true }}
    className="w-full lg:w-1/3 lg:sticky top-1/2 lg:h-fit flex items-start justify-center p-4"
  >
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
      Meet The Team.
      </h2>
      <h5 className="text-sm py-2 sm:text-base md:text-lg text-gray-700">We're an award-winning multidisciplinary team based in Abuja with a passion for creating innovative architecture. We work with businesses and people to create a more beautiful world.</h5>
    </div>
  </motion.div>
  <div className="w-full mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
    {/* Top Row */}
    <div className="bg-card shadow-lg rounded-lg group">
  <img src={ceo} alt="Image 1" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
  <div className="p-4">
    <h3 className="text-lg font-semibold mb-2">CEO</h3>
    <p className="text-sm text-muted-foreground">Mustapha Ibrahim Umar</p>
  </div>
</div>

<div className="bg-card shadow-lg rounded-lg group">
<img src={employee3} alt="Image 1" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Social Media Manager</h3>
        <p className="text-sm text-muted-foreground">Habiba Ismail</p>
      </div>
    </div>
    {/* Bottom Row */}
    <div className="bg-card shadow-lg rounded-lg group">
  <img src={employee2} alt="Image 1" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Project Manager</h3>
        <p className="text-sm text-muted-foreground">Aneesa Bilkisu Abdul</p>
      </div>
    </div>
    <div className="bg-card shadow-lg rounded-lg group">
  <img src={employee1} alt="Image 1" className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Senior IT</h3>
        <p className="text-sm text-muted-foreground">Muhammad Al-Amin Ibrahim</p>
      </div>
    </div>
  </div>
</section>
<section className="w-full px-4 py-[5rem]">
  <div className="flex justify-center items-center w-full">
    <div className="flex justify-center items-center flex-col text-center py-[5rem] w-[60rem]">
      <span className="text-8xl font-bold">Our Goals</span>
      <div className="flex flex-col space-y-8">
        <div className="relative">
          <span className="text-4xl font-bold">Innovate each project with no exceptions.</span>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
        </div>
        <div className="relative">
          <span className="text-2xl font-thin">We understand the need to earn our client trust. Therefore, we act with honesty and integrity, not compromising the truth in all situations.</span>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
        </div>
        <div className="relative">
          <span className="text-4xl font-bold">Always overdeliver to our clients.</span>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
        </div>
        <div className="relative">
          <span className="text-2xl font-thin">Our team members are forward thinking people, already motivated, and inspired to deliver high quality project results.</span>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
        </div>
        <div className="relative">
          <span className="text-4xl font-bold">Build things that inspire people.</span>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
        </div>
        <div className="relative">
          <span className="text-2xl font-thin">We aim for the highest standard of excellence in all what we do.</span>
          <div className="absolute bottom-0  left-0 right-0 h-px bg-gray-300"></div>
        </div>
      </div>
      
    </div>
  </div>
  <div className="flex justify-center items-center">
    <a
          href="./Contacts"
          className="text-black border border-black px-6 py-2  inline-flex items-center"
        >
          Contact us
        </a>
  </div>
</section>
    </main>  
  )
}
