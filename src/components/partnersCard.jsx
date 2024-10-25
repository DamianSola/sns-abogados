'use client'
import Image from "next/image";
import { useState } from "react";
import PartenerModal from "./partnerModal";

const PartnersCard = ({image, name, field, open, partner}) => {

    const seeMore = () => {
        open(partner);
    }


    return(
        <div className="md:w-80 shadow-2xl mb-6" >
            <div className="w-full h-auto">
            <img src={image} alt='photo' className="w-full h-full"/>
            </div>
            <div className="p-4 text-center">
                <p className="tracking-wider text-xl font-bold">{name}</p>
                {field.map((e,i) => {
                    return <p className="tracking-wider font-medium text-md text-[#434343]" key={i}>{e.name}</p>
                })
                }
                <button 
                className="p-2 border rounded-md border-[#434343] mt-4 hover:bg-[#434343] hover:text-white duration-200" 
                onClick={seeMore}>
                    ver mas
                </button>
            </div>
        </div>
    )
}

export default PartnersCard;