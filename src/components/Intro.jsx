'use client'

import Image from 'next/image';
import intro from "./junta-photo.webp"

const Introduction = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Picture Container */}
      <div className="w-full max-h-svh z-0">
        <Image 
          src={intro}
          alt="Introduction Image" 
          className="object-cover w-full max-h-svh	brightness-10"
        />
      </div>
    </div>
  );
};

export default Introduction;
