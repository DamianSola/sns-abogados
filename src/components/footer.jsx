import { FaFacebook, FaTwitter,FaClock , FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "./sns-logo.png";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Footer = () => {


  return (
    <footer className="bg-[#434343] text-gray-100 py-8 px-10" id="contacto">
      <div className="container mx-auto px-4">
        {/* Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-top ">
          {/* Logo */}
          <div className="mb-4 md:mb-0 bg-white text-center w-fit md:m-0 m-auto">
            <Image src={Logo} alt="Logo" className="md:w-28 w-32" />
          </div>

          {/* Links */}
          <ul className="hidden md:flex md:flex-row text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
            <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="/nosotros" className="hover:text-gray-400">Nosotros</a></li>
            {/* <li><a href="#servicios" className="hover:text-gray-400">Servicios</a></li> */}
            <li><a href="#asociados" className="hover:text-gray-400">Asociados</a></li>
            <li><a href="#contacto" className="hover:text-gray-400">Contáctanos</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex flex-col mb-4 md:mb-0 space-y-4">
            <p  href="tel:+123456789" className="text-xl mb-2 flex items-center">
            <FaClock   className="mr-2"/> Lunes a Viernes de 08:00 a 12:00 y de 16:00 a 19:00</p>
            <a href="https://www.google.com/maps/place/Av.+del+Bicentenario+de+la+Batalla+de+Salta+492,+A4400+Salta/@-24.7844042,-65.4026632,17z/data=!3m1!4b1!4m6!3m5!1s0x941bc396416f0f87:0xda255997495cb378!8m2!3d-24.7844042!4d-65.4026632!16s%2Fg%2F11dzqmgx7c?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKX"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg mb-2 flex items-center">
                <FaMapMarkerAlt  className="mr-2"/> Avenida Bicentenario de la Batalla de Salta nº 492 1er piso</a>
              <a  href="tel:+123456789" className="text-lg mb-2 flex items-center">
              <FaPhone  className="mr-2"/>Jorge Pablo Suárez Nelson +54 9 3874679815</a>
              <a  href="tel:+123456789" className="text-lg mb-2 flex items-center">
              <FaPhone  className="mr-2"/>Leonardo Martin González López +54 9 3875-017-140</a>
            <a  href="tel:+123456789" className="text-lg mb-2 flex items-center">
              <FaPhone  className="mr-2"/>Agustín Federico Simó +54 9 3875-545-757</a>
            <a  href="mailto:estudiojuridico@snsabogados.com.ar" className="text-lg mb-2 flex items-center">
              <FaEnvelope  className="mr-2"/> estudiojuridico@snsabogados.com.ar</a>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
          </div>

          <ContactForm/>
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
