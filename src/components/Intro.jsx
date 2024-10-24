'use client'

import Image from 'next/image';
import intro from "./junta-photo.webp"

const Introduction = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Picture Container */}
      <div className="w-full max-h-svh z-0 md:px-20 bg-black ">
        <img 
          src="https://hispajuris.es/wp-content/uploads/2022/07/abogados-madrid.jpg"
          alt="Introduction Image" 
          className="object-cover w-full max-h-svh	brightness-10 saturate-50

"
        />
      </div>
    </div>
  );
};

export default Introduction;
