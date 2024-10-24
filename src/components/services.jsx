'use client'
import ServiceCard from "./serviceCard"
import Servicios from "./fields.json"
import { useState } from "react"
// const servcios= [{name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "00"},
//     {name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "01"},
//     {name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "02"},
//     {name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "03"}
// ]

const Services = () => {

    const [show, setShow] = useState(false)
    const [slice, setSlice] = useState(8)

    const VerButton = () => {
        setShow(!show);
        setSlice(show ? 8 : 12);
    }

    return(
        <div className="p-10 sm:px-20 py-10 text-center duration-200" id="servicios">
            <h1 className="text-center text-3xl tracking-widest	p-6">Servicios</h1>
            <div className="flex flex-wrap w-full justify-around md:justify-between duration-200">
                {Servicios || Servicios.length === 0 ? Servicios.slice(0,slice).map(s => {
                    return <ServiceCard
                    key={s.id}
                    name={s.name}
                    image={"https://abogadosde.com.ar/servicios/wp-content/uploads/2021/09/Abogados-de-derecho-civil-trabajando.jpg"}
                    />
                }):
                <p>Cargando Servicios...</p>
                }
            </div>
                <button className="p-2 border rounded-md border-[#434343] mt-4 hover:bg-[#434343] hover:text-white duration-200" 
                onClick={VerButton}>{show ? "Ver Menos" : "Ver Todos"}</button>
        </div>
    )
}

export default Services;