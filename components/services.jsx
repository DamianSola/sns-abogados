'use client'
import Servicios from "./fields.json"
import { useState } from "react"


const Services = () => {

    const [show, setShow] = useState(false)
    const [slice, setSlice] = useState(8)

    const VerButton = () => {
        setShow(!show);
        setSlice(show ? 8 : 12);
    }

    return(
        <div className="p-10 sm:px-20 bg-gray-100 py-10 text-center duration-200" id="servicios">
            <h1 className="text-3xl text-left tracking-widest py-6 font-bold">Ramas del Derecho</h1>
                 <div className="block w-full  duration-200 text-left">
                {Servicios || Servicios.length === 0 ? Servicios.slice(0,slice).map(s => {
                    return <div key={s.id} className="p-4">
                        <p className="font-semibold text-xl text-[#434334]">- {s.name}</p>
                        </div>
                }):
                <p>Cargando Servicios...</p>
                }
            </div>
        </div>
    )
}

export default Services;