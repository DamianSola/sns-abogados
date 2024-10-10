import Image from "next/image";

const ServiceCard = ({image, name}) => {

    return(
        <div className="sm:p-4 py-6 w-32 md:w-auto text-center hover:scale-110 duration-200">
            <div className="">
                <img src={image}  alt="Service Card Image" className="rounded-full h-24 w-24 md:h-48 md:w-48 m-auto"/>
            </div>
            <p className="p-4 font-bold">{name}</p>
        </div>
    )

}

export default ServiceCard;

