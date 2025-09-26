import React from 'react';
import { motion } from 'framer-motion';
import { productData } from '../data/project_data';

export default function Projects() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <main className='p-8'>
    <section className="w-full px-4 py-[10rem]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12">Our Projects</h1>
      <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    transition={{ duration: 1.0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((item) => (
          <div key={item.id} className="group relative rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">{item.title}</h3>
              <p className="text-md sm:text-[0.6rem] md:text-xl text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
    <div className="mt-16 text-center py-8 text-white text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg">
        More Projects coming soon
      </div>
    </main>
  );
}
