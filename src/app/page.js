import Footer from "@/components/footer";
import Introduction from "@/components/Intro";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import Services from "@/components/services";
import Partners from "@/components/partners";
import Values from "@/components/newValues";

export default function Home() {
  return (
    <div className="h-auto">
      <Navbar/>
      <main className="h-auto ">
       <Introduction/>
       <Partners/>
       <Values/>
      </main>
      <Footer/>
    </div>
  );
}
