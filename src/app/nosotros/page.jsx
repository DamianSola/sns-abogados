import Services from "@/components/services";
import Image from "next/image";
import fotoNos from "../../images/sns_image.nosotros.jpg"

const { default: Footer } = require("@/components/footer")
const { default: Navbar } = require("@/components/NavBar")

const AboutUs = () => {
    return(
        <div>
            <Navbar/>
            <main className="min-h-screen w-full">
                <div className="w-full" >
                    <Image src='https://www.unir.net/wp-content/uploads/2020/12/legal-law-concept-open-law-book-with-a-wooden-judges-gavel-on-table-picture-id1277143862.jpg'
                    className="w-full md:h-80"
                    width={500} height={100}
                    alt='imagen-nos'/>
                </div>
                <div className="px-6 md:px-20 text-left pb-10" >
                    <h1 className="text-3xl tracking-widest py-6 font-bold">Nosotros</h1>
                    <div className="md:flex items-start">
                    <p className="md:tracking-wide text-justify md:leading-loose md:pr-10">
                    SNS Abogados es una organización constituida por profesionales expertos en las distintas áreas del derecho con una misma visión y ética del ejercicio profesional, poniendo el foco en el asesoramiento jurídico personalizado y aplicado mediante un profundo conocimiento del derecho y de los intereses de sus clientes. 
                    SNS Abogados se encuentra compuesto por profesionales del derecho especializados en todas las áreas del Asesoramiento Jurídico, con especial dedicación en las prácticas vinculadas a los litigios judiciales y extrajudiciales; arbitrajes y mediaciones; y el Asesoramiento Jurídico Preventivo e Integral de todas las áreas del Derecho.
                    En el Derecho Laboral, todo lo relacionado al derecho individual y colectivo del trabajo, del empleado y del empleador. Actuaciones ante los distintos órganos Administrativos (Secretaría de Trabajo, Superintendencia de Riesgo de Trabajo, Distintas ART, etc.). Comunicaciones judiciales y extrajudiciales, cómo la correcta representación en la Sede Judicial de los conflictos.
                    En el Derecho Comercial, en la confección, interpretación y defensa de los distintos  contratos comerciales, fusiones y adquisiciones, concursos y quiebras, derecho societario, administrativo y fiscal, fondo de comercios, etc.
                    En el Derecho Civil, todo los relacionado al Derecho de Familia (Divorcio; Alimentos -Aumento, Disminución y Cese-; División de Bienes; Régimen de Comunicación; Cuidado Personal; Régimen de Visitas; Régimen de Coparentalidad; Régimen del Matrimonio, Uniones Civiles y Concubinato; etc.), Contratos Civiles, Capacidad de las personas (Restricciones), representaciones de sus derechos en Sede Judicial y Extra Judicial, Mediaciones -Privadas y Judiciales- y Arbitrajes.
                    En el Área de Violencia Familiar, en todo lo relativo a su representación en  Sede Judicial, Policial  y Privada.
                    En el Derecho Penal, en todo lo relativo a la defensa de los derechos del clientes, cómo víctima, querellante o imputado, en las actuaciones policiales, de fiscalía, en los distintos Institutos Penitenciarios, etc.
                    </p>
                    <Image src={fotoNos} className='p-4 md:p-1' width={400} height={100} alt='foto-nos'/>
                    </div>
                </div>
                <div className="px-6 md:px-20 text-left pb-10" >
                    <h1 className="text-3xl tracking-widest py-6 font-bold">Nuestra Propuesta</h1>
                    <p className="md:tracking-wide text-justify md:leading-loose">
                    El mundo actual, especialmente el Empresarial; necesita respuestas rápidas, concretas y eficaces en todos los campos de actuación del abogado. Los ejecutivos y empresarios requieren cada día más una actuación ágil, participativa y proactiva de parte del abogado, quien debe integrarse cada vez más al mundo de la empresa. Éste es nuestro objetivo y ésta es nuestra propuesta. Ofrecemos un equipo jurídico altamente especializado, dispuesto a intervenir y brindar una mejor orientación y ejecución de los trabajos. Aspiramos, desde siempre, a forjar vínculos transparentes y duraderos con nuestros clientes y buscamos resultados basados en esas pautas.
                    </p>
                </div> 
                <div className="px-6 md:px-20 text-left pb-10" >
                    <h1 className="text-3xl tracking-widest py-6 font-bold">El ESTUDIO SNS ABOGADOS -ESTUDIO JURÌDICO INTEGRAL</h1>
            
                    <p className="md:tracking-wide text-justify md:leading-loose">
                        En febrero del año 2020, los Dres. Jorge Pablo Suárez Nelson y Agustín Federico Simó se asocian y fundan el Estudio Jurídico Integral SNS Abogados. En Octubre del mismo año, se agrega el Ab. Leonardo Martín González López.                      
                        Hoy el Estudio tiene más de cuatro años de trabajo conjunto.
                        Sus integrantes, cuentan con más de quince años de experiencia en el ejercicio de la profesión, en las Áreas del Derecho Laboral, Civil y Comercial, Administrativo, Penal, Tributario, Concursal, Seguros, Daños y Derecho de Familia.
                        El Estudio Jurídico tiene como característica el asesoramiento y atención personalizada a su variada cartera de clientes en sus diferentes situaciones y conflictos.
                        Especial consideración merecen por parte de sus integrantes, los aspectos relacionados a la   actividad preventiva, advirtiendo mediante asesoramiento temporáneo de las situaciones conflictivas que pudieren ocurrir, aportando en cada caso las adecuadas soluciones.
                        El Estudio cuenta con una extensa red de colaboradores, en las distintas profesiones, como así también de corresponsales en el  Interior de la Provincia de Salta y el País, a fin de permitir un correcto tratamiento de situaciones que exceden el ámbito territorial de la Ciudad de Salta. 
                        Los invitamos a contactarse, y formular las consultas necesarias para poder ayudarlo en la defensa de sus intereses.
                    </p>
                    
                </div>
                <Services/>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutUs;