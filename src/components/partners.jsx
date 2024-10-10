'use client'
import { useState } from "react"
import PartnersCard from "./partnersCard"
import PartenerModal from "./partnerModal"

const partners = [
    {name:"Lautaro Martinez", field:"abogado penal" , image: "https://cristypalacios.com/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg", id:"0"},
    {name:"Lautaro Martinez", field:"abogado penal" , image: "https://cristypalacios.com/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg", id:"0"},
    {name:"Lautaro Martinez", field:"abogado penal" , image: "https://cristypalacios.com/wp-content/uploads/2023/01/Perfil-Profesional-_63-819x1024.jpg", id:"0"}
    

]

const Partners = () => {

    const [open, setOpen] = useState(false);
    const [partner, setPartner] = useState(null)

    const handleClick = (data) => {
        setOpen(true)
        setPartner(data)
    }


    return(
        <div className="p-20 py-10" id="asociados">
            <h1 className="text-center text-3xl tracking-widest	p-6">Asociados</h1>
            {open && <PartenerModal close={() => setOpen(false)} data={partner}/>}
            <div className="flex flex-wrap w-full justify-around ">
                {partners ? partners.map(p => {
                    return <PartnersCard
                    name={p.name}
                    key={p.id}
                    field={p.field}
                    image={p.image}
                    open={handleClick}
                    partner={p}
                    />
                }): <p>Cargando...</p>}
            </div>
        </div>
    )
}

export default Partners;