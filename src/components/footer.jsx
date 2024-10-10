import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "./sns-logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#434343] text-white py-8 px-10" id="contacto">
      <div className="container mx-auto px-4">
        {/* Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-4 md:mb-0 bg-white">
            <Image src={Logo} alt="Logo" className="h-20 w-20" />
          </div>

          {/* Links */}
          <ul className="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
            <li><a href="#inicio" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="/nosotros" className="hover:text-gray-400">Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-gray-400">Servicios</a></li>
            <li><a href="#asociados" className="hover:text-gray-400">Asociados</a></li>
            <li><a href="#contacto" className="hover:text-gray-400">Contáctanos</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex flex-col mb-4 md:mb-0 ">
            <a href="https://www.google.com/maps?q=Calle+Falsa+123,+Ciudad"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg mb-2 flex items-center">
                <FaMapMarkerAlt  className="mr-2"/> Calle Falsa 123, Ciudad</a>
            <a  href="tel:+123456789" className="text-lg mb-2 flex items-center">
              <FaPhone  className="mr-2"/> +123 456 789</a>
            <a  href="mailto:contacto@correo.com" className="text-lg mb-2 flex items-center">
              <FaEnvelope  className="mr-2"/> info@example.com</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            {/* <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a> */}
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          &copy; 2024 Todos los derechos reservados.
            <Link href="https://www.linkedin.com/in/damiansola/" target="_blank" className="hover:text-white"> 
            developed by DamianSola</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
