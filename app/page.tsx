import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoAnimation from "./components/LogoAnimation";

export default function Home() {
  return (
    <>
    <Hero />
    <LogoAnimation />
    <About />

    </>
  );
}
