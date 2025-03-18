import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Leo from "../images/IMG_SNS5.leo.JPG";
import Simo from "../images/IMG_SNS6.simo.JPG";
import bollito from "../images/IMG_SNS8.bollito.JPG";
import Image from 'next/image';

const PartenerModal = ({close, data}) => {


  const {name, field, image, phone, email, formation,  instagram, experience} = data

  const imagePath = image === 'simo' ? Simo : image === 'bollito'? bollito : Leo


    return(
        <div className="fixed inset-0 bg-gray-800 text-[#434343] bg-opacity-50 flex items-center justify-center z-50 max-h-screen">
          <div className="bg-white rounded-lg md:w-3/4 p-6 relative max-h-svh">
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
              <div className="flex md:block w-1/2 md:w-2/5 p-2 md:items-start items-center">
                <Image src={imagePath} alt={name} className="w-full md:pb-4" width={500} height={100}/>
                <div className='max-w-md mx-auto p-4'>
  {email && email.map((e, i) => {
    return (
      <div className="flex items-center py-2" key={i}>
        <FaEnvelope className="mr-2 text-lg" />
        <a 
          href={`mailto:${e}`} 
          target="_blank" 
          className='hover:border-b hover:border-black duration-200 text-sm md:text-base'>
          {e}
        </a>
      </div>
    );
  })}

  <div className="flex items-center py-2">
    <FaPhone className="mr-2 text-lg" />
    <a  
      href={`https://wa.me/${phone}?text=Hola%20quiero%20hacer%20una%20consulta`} 
      target="_blank" 
      className='hover:border-b hover:border-black duration-200 text-sm md:text-base'>
      {phone}
    </a>
  </div>

  {instagram && (
    <div className="flex items-center py-2">
      <FaInstagram className="mr-2 text-lg" />
      <a  
        href={`https://www.instagram.com/${instagram}`} 
        target="_blank" 
        className='hover:border-b hover:border-black duration-200 text-sm md:text-base'>
        {instagram}
      </a>
    </div>
  )}
</div>
              </div>
              <div className="w-full md:w-2/3 p-4 overflow-y-auto max-h-96 md:max-h-svh">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                {/* <p className="text-sm  mb-6">{field}</p> */}
                {formation && 
                  <>
                    <p className="text-lg  my-2">Formacion</p>
                    <p  className="text-sm  my-4 text-justify">{formation}</p>
                  </>
                }
                <p className="text-lg my-2">Experiencia</p>
                <p className="text-sm my-4 text-justify">{experience}</p>
               
              </div>
            </div>
        </div>
        
      </div>
    )
}

export default PartenerModal;