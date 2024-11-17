'use client'
import { useState } from "react"
import PartnersCard from "./partnersCard"
import PartenerModal from "./partnerModal"
import Partner from "./partners.json"

// const partners = [
//     {name:"Lautaro Martinez", field:"abogado penal" , image: "https://cristypalacios.com/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg", id:"0"},
//     {name:"Lautaro Martinez", field:"abogado penal" , image: "https://cristypalacios.com/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg", id:"0"},
//     {name:"Lautaro Martinez", field:"abogado penal" , image: "https://cristypalacios.com/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg", id:"0"}
    

// ]

const Partners = () => {

    const [open, setOpen] = useState(false);
    const [partner, setPartner] = useState(null)

    const handleClick = (data) => {
        setOpen(true)
        setPartner(data)
    }


    return(
        <div className="p-6 sm:p-20 py-10" id="asociados">
            <h1 className="text-center text-3xl tracking-widest	p-6">Asociados</h1>
            {open && <PartenerModal close={() => setOpen(false)} data={partner}/>}
            <div className="flex flex-wrap w-full justify-around ">
                {Partner ? Partner.map((p,i) => {
                    return <PartnersCard
                    name={p.name}
                    key={i}
                    field={p.field}
                    image={"https://cisternasycia.cl/wp-content/uploads/2023/12/JT.-Eyzaguirre.Abogados-Color014-scaled-e1703768567494.jpg"}
                    open={handleClick}
                    partner={p}
                    formation={p.formation}
                  
                    />
                }): <p>Cargando...</p>}
            </div>
        </div>
    )
}

export default Partners;