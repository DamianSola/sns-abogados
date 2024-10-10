import ServiceCard from "./serviceCard"
const servcios= [{name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "00"},
    {name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "01"},
    {name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "02"},
    {name: "Asesoramiento General" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtHZIc3ec8GiSwTf2Zvs3dZvzSNO5SgSCZg&s" , id: "03"}
]

const Services = () => {
    return(
        <div className="p-10 sm:p-20 py-10 " id="servicios">
            <h1 className="text-center text-3xl tracking-widest	p-6">Servicios</h1>
            <div className="flex flex-wrap w-full justify-around md:justify-between">
                {servcios || servcios.length === 0 ? servcios.map(s => {
                    return <ServiceCard
                    key={s.id}
                    name={s.name}
                    image={s.image}
                    />
                }):
                <p>Cargando Servicios...</p>
                }
            </div>
        </div>
    )
}

export default Services;