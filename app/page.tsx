import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoAnimation from "./components/LogoAnimation";
import Portfolio from "./components/Portfolio";
import KeyMetrics from "./components/KeyMetrics";
import Stack from "./components/Stack";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div  className="p-1 bg-black ">
        <LogoAnimation />
        <About />
        <Portfolio />
        <KeyMetrics />
        <Stack/>
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
