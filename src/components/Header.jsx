import React, { useState, useEffect, useRef } from 'react';
import { PiBuildingApartmentFill } from "react-icons/pi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed z-50 top-0 left-0 text-secondary w-full bg-transparent backdrop-blur-md pl-8`}>
      <div className='container mx-auto flex justify-between p-4 gap-4 items-center'>
        <Link to={"/"} className='flex w-max gap-2 items-center'>
          <PiBuildingApartmentFill className='text-xl lg:text-3xl md:text-2xl' />
          <h1 className="text-xl lg:text-3xl md:text-2xl font-medium font-serif">Pivea Real Estate</h1>
        </Link>
        
        <div className="flex w-max gap-2 items-center relative">
          {/* Dropdown Trigger Button */}
          <button
            onClick={toggleDropdown}
            className="h-12 w-12 bg-black rounded-full text-white hover:text-dark cursor-pointer flex justify-center items-center text-2xl"
          >
            <HiBars3BottomLeft />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div ref={dropdownRef} className="absolute top-12 right-3 mt-2 w-fit bg-white shadow-lg rounded-lg">
              <button className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-200">
                <Link to="/">Home</Link>
              </button>
              <button className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-200">
                <Link to="/projects">Projects</Link>
              </button>
              <button className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-200">
                <Link to="/About">About</Link>
              </button>
              <button className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-200">
                <Link to="/Contacts">Contact Us</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
