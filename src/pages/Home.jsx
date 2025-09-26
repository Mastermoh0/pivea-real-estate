import React from 'react'
import { motion } from 'framer-motion';
import {construction_guy, house_interior, modern_house, mansion} from "../assets/images"
import { gridData } from '../data/service_data'
import { productData } from '../data/project_data'
import Marquee from "react-fast-marquee";





export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
   <main>
     <div>
     <div className='h-full w-full relative bg-black'>
  <img src={construction_guy} alt="" className="relative top-0 opacity-50 left-0 w-full h-full object-cover object-top" />
  
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    transition={{ duration: 1.0 }}
    className='absolute inset-0 flex flex-col justify-center items-center text-center text-white text-3xl font-bold p-4'
  >
    <h1 className='lg:text-[10rem] md:text-9xl sm:text-6xl font-medium mb-2'>Design</h1>
    <h1 className='lg:text-[10rem] md:text-9xl sm:text-6xl font-medium mb-2'>Construction</h1>
    <h1 className='lg:text-[10rem] md:text-9xl sm:text-6xl font-medium'>Technology</h1>
  </motion.div>
</div>

      <section id='about_section' className='pt-[15rem] px-2'>
      <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className='flex flex-col lg:flex-row justify-between relative'
          >
    <div className='lg:mx-32 mx-4'>
      <p className='text-2xl sm:text-3xl font-thin text-black mb-2'>Residential</p>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full lg:w-[40rem] text-black mb-2'>
        Iconic architecture expertly developed
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl py-4 font-normal text-black mb-2'>
        PIVEA is one of the fast-paced urban real estate development companies in Nigeria. Birthed by a union of leading authorities in housing and construction, we are passionate about providing real estate solutions for all.
      </p>
      <div className='flex flex-col sm:flex-row'>
        <div className='px-3'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl'>5+</h1>
          <p className='text-xl sm:text-2xl md:text-3xl w-full sm:w-[12rem] font-thin'>Years of experience</p>
        </div>
        <div className='px-3 mt-4 sm:mt-0'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl'>4x</h1>
          <p className='text-xl sm:text-2xl md:text-3xl w-full sm:w-[10rem] font-thin'>Builder of the year</p>
        </div>
      </div>
    </div>
    <div className='relative lg:min-w-[50rem] mt-8 lg:mt-0'>
      <div className='z-10 min-h-[34rem] relative lg:right-[20rem]'>
        <img src={house_interior} alt="" className="w-full h-auto max-h-[20rem] sm:max-h-[25rem] lg:max-h-[30rem] max-w-[20rem] mx-auto sticky top-1/2" />
      </div>
      <img src={modern_house} alt="" className="w-full h-auto max-h-[40rem] sm:max-h-[50rem] lg:max-h-[55rem] max-w-full lg:max-w-[50rem] mx-auto absolute top-0" />
    </div>
  </motion.div>
</section>

      <section className="w-full px-4 py-[15rem]">
      <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
      <div class="flex justify-center items-center pb-9">
  <div class="w-[35rem] text-lg lg:text-5xl text-center">
    We offer a wide array <br class="lg:hidden" />
    of services aimed at <br class="lg:hidden" />
    simplifying your life
  </div>
</div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {gridData.map((item) => (
                <motion.div key={item.id} className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] group">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100 rounded-lg"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end text-white space-y-2 transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <item.logo className="text-xl sm:text-2xl md:text-3xl" />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-full group-hover:opacity-100 transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
    ))}
    </div>
  </motion.div>
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
      <h5 className="text-sm sm:text-base md:text-lg text-gray-700">PORTFOLIO</h5>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-2">
        Making the world a more beautiful place.
      </h2>
      <div className="mt-6">
        <a
          href="/projects/"
          className="text-black border border-black px-6 py-2 inline-flex items-center"
        >
          View All Projects
        </a>
      </div>
    </div>
  </motion.div>

  {/* Grid Data */}
  <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[70%] flex flex-col gap-8 mt-8 lg:mt-0 lg:ml-auto"
          >
    {productData.map((item) => (
      <div key={item.id} className="flex flex-col lg:flex-row items-center lg:items-center gap-4 ">
        <img
          src={item.image}
          alt={item.title}
          className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-[20rem] sm:h-[25rem] md:h-[30rem] object-cover"
        />
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h3 className="text-sm sm:text-sm md:text-md lg:text-md text-black">{item.name}</h3>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      </div>
    ))}
  </motion.div>
</section>
<section className='relative py-80 w-full h-full'>
      {/* Background image */}
      <img src={mansion} alt="Background" className='absolute inset-0 w-full h-full object-cover' />
      
      {/* Marquee text */}
      <div className='relative z-10'>
        <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();" loop="infinite" className='text-center'>
          <h1 className='text-[9rem] md:text-[6rem] sm:text-[4rem] font-bold text-white'>Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture</h1>
        </marquee>
        <marquee behavior="scroll" direction="right" onmouseover="this.stop();" onmouseout="this.start();" loop="infinite" className='text-center'>
          <h1 className='text-[9rem] md:text-[6rem] sm:text-[4rem] font-bold text-white'>Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture   Pivea Architecture</h1>
        </marquee>
      </div>
    </section>


    </div>
   </main>

  )
}
