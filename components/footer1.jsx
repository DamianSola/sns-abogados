const Footer = () => {
    return (
      <footer className="bg-[#434343] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Logo Section */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Logo</h2>
              <p className="mt-2">Your business slogan or description.</p>
            </div>
  
            {/* Navigation Links */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Enlaces</h2>
              <ul className="space-y-2">
                <li><a href="/inicio" className="hover:underline">Inicio</a></li>
                <li><a href="/nosotros" className="hover:underline">Nosotros</a></li>
                <li><a href="/servicios" className="hover:underline">Servicios</a></li>
                <li><a href="/asociados" className="hover:underline">Asociados</a></li>
                <li><a href="/contacto" className="hover:underline">Contáctanos</a></li>
              </ul>
            </div>
  
            {/* Contact Information */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
              <ul className="space-y-2">
                <li><span>Ubicación: Calle Falsa 123, Ciudad</span></li>
                <li><span>Teléfono: +54 123 456 789</span></li>
                <li><span>Correo: ejemplo@correo.com</span></li>
              </ul>
              <div className="mt-4">
                {/* Social Media Icons (Placeholder) */}
                <span>Facebook | Twitter | Instagram</span>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="text-center border-t border-gray-700 mt-8 pt-4">
            <p>&copy; 2024 Your Company Name. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  