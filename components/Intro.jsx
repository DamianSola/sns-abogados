'use client'

import Image from 'next/image';
import imagenPortada from "../../public/images/sns_image.intro.jpg"

const Introduction = () => {
  return (
    <div className="flex justify-center items-center">
      
      <div className="w-full max-h-svh z-0 md:px-20 bg-black ">
        <Image 
          src={imagenPortada} width={500} height={200}
          alt="Introduction Image" 
          className="object-cover w-full max-h-svh"
        />
      </div>
    </div>
  );
};

export default Introduction;
