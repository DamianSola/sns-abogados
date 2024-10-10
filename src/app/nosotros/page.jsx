const { default: Footer } = require("@/components/footer")
const { default: Navbar } = require("@/components/NavBar")



const AboutUs = () => {
    return(
        <div>
            <Navbar/>
            <main className="min-h-screen w-full">
                <div className="w-full" >
                    <img src='https://www.unir.net/wp-content/uploads/2020/12/legal-law-concept-open-law-book-with-a-wooden-judges-gavel-on-table-picture-id1277143862.jpg'
                    className="w-full md:h-80"/>
                </div>
                <div className="px-6 md:px-20 text-left pb-10" >
                    <h1 className="text-3xl tracking-widest py-6 font-bold">Nosotros</h1>
                    <p className="md:tracking-wide text-justify md:leading-loose ">
                    PASBBA es una organización constituida por profesionales expertos en las distintas áreas del derecho con una misma visión y ética del ejercicio profesional, poniendo el foco en el asesoramiento jurídico personalizado y aplicado mediante un profundo conocimiento del derecho y de los intereses de sus clientes.
                    PASBBA Abogados se encuentra compuesto por profesionales del derecho especializados en todas las áreas del asesoramiento empresarial, con especial dedicación en las prácticas vinculadas a los litigios y arbitrajes, el asesoramiento jurídico preventivo e integral, en el derecho individual y colectivo del trabajo, contratos civiles y comerciales, fusiones y adquisiciones, concursos y quiebras, derecho societario, administrativo y fiscal.
                    </p>
                </div>
                <div className="px-6 md:px-20 text-left pb-10" >
                    <h1 className="text-3xl tracking-widest py-6 font-bold">Nuestra Propuesta</h1>
                    <p className="md:tracking-wide text-justify md:leading-loose">
                        El mundo empresarial hoy necesita respuestas rápidas, concretas y eficaces en todos los campos de actuación del abogado. Los ejecutivos y empresarios requieren cada día más una actuación ágil, participativa y proactiva de parte del abogado, quien debe integrarse cada vez más al mundo de la empresa.
                        Éste es nuestro objetivo y ésta es nuestra propuesta. Ofrecemos un equipo jurídico altamente especializado, dispuesto a intervenir y brindar una mejor orientación y ejecución de los trabajos.
                        Aspiramos, desde siempre, a forjar vinculos transparentes y duraderos con nuestros clientes y buscamos resultados basados en esas pautas.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutUs;