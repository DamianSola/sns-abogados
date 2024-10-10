import { FaPhone, FaEnvelope } from 'react-icons/fa';

const PartenerModal = ({close, data}) => {


  const {name, field, image} = data

    return(
        <div className="fixed inset-0 bg-gray-800 text-[#434343] bg-opacity-50 flex items-center justify-center z-50 max-h-screen">
          <div className="bg-white rounded-lg md:w-2/3 p-6 relative max-h-svh">
          {/* Botón de cerrar modal */}
            <span
              className="absolute top-2 right-2 cursor-pointer"
              onClick={close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <div className="md:flex my-4">
              <div className="flex md:block w-1/2 md:w-1/3 p-4 md:items-start items-center">
                <img src={image} alt={name} className="w-full md:pb-4"/>
                  <div className='block px-4 '>

                <div className="flex items-center py-2">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:contacto@correo.com" target="_blank" className='hover:border-b hover:border-black duration-200'>contacto@correo.com</a>
                </div>
                <div className="flex items-center py-2">
                  <FaPhone className="mr-2" />
                  <a  
                    href="https://wa.me/3874672442?text=Hola%20quiero%20hacer%20una%20consulta" 
                    target="_blank" className='hover:border-b hover:border-black duration-200'>+123 456 7890</a>
                </div>
                  </div>
              </div>
              <div className="w-full md:w-2/3 p-4 overflow-y-auto max-h-96 md:max-h-svh">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm  mb-6">{field}</p>
                <p className="text-lg  my-2">Formacion</p>
                <p  className="text-sm  my-4 text-justify">Juan Pérez se graduó con honores de la Facultad de Derecho de la Universidad Nacional en 2010, obteniendo su título de Licenciado en Derecho. 
                  Posteriormente, completó una Maestría en Derecho Comercial en la Universidad de Buenos Aires, especializándose en resolución de conflictos comerciales y arbitraje. 
                  Durante su formación, participó en diversos seminarios y programas de formación continua, destacándose en temas de Derecho Corporativo Internacional y Derecho de Propiedad Intelectual.</p>
                <p className="text-lg my-2">Experiencia</p>
                <p className="text-sm my-4 text-justify">
                  Con más de 12 años de experiencia en el ámbito jurídico, Juan Pérez ha trabajado en prestigiosos estudios de abogados y ha representado tanto a empresas nacionales como internacionales en litigios complejos. 
                  A lo largo de su carrera, ha liderado casos en áreas como Derecho Comercial, Derecho Civil y Derecho Laboral, obteniendo resultados favorables para sus clientes en negociaciones y arbitrajes. 
                  Juan también ha asesorado a startups en temas de compliance y propiedad intelectual, ayudando a proteger sus activos legales en mercados globales.
                </p>
               
              </div>
            </div>
        </div>
        
      </div>
    )
}

export default PartenerModal;