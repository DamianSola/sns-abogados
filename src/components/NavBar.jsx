'use client'
import Logo from "./sns-logo.png"
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-20 sticky w-full bg-white text-[#434343] md:px-10 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold md:ml-0 ">
        <Image src={Logo} alt='logo-sns'  className="w-16"/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:border-b-2 border-[#434343] duration-100">Inicio</a></li>
          <li><a href="/nosotros" className=" hover:border-b-2 border-[#434343] duration-100">Nosotros</a></li>
          <li><a href="/#servicios" className=" hover:border-b-2 border-[#434343] duration-100">Servicios</a></li>
          <li><a href="/#asociados" className=" hover:border-b-2 border-[#434343] duration-100">Asociados</a></li>
          <li><a href="/#contacto" className=" hover:border-b-2 border-[#434343] duration-100">Contáctanos</a></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl text-black focus:outline-none duration-200 "
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white duration-200">
          <ul className="space-y-4 p-4 text-center"  onClick={toggleMenu}>
            <li><a href="/" className="block hover:text-[#434343] hover:border-b-2 border-black duration-75">Inicio</a></li>
            <li><a href="/nosotros" className="block hover:text-[#434343] hover:border-b-2 border-black duration-75">Nosotros</a></li>
            <li><a href="/#servicios" className="block hover:text-[#434343] hover:border-b-2 border-black duration-75">Servicios</a></li>
            <li><a href="/#asociados" className="block hover:text-[#434343] hover:border-b-2 border-black duration-75">Asociados</a></li>
            <li><a href="/#contacto" className="block hover:text-[#434343] hover:border-b-2 border-black duration-75">Contáctanos</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
