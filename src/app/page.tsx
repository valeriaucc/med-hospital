import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduccion } from "@/components/sections/Introduccion";
import { Objetivos } from "@/components/sections/Objetivos";
import { Tecnologias } from "@/components/sections/Tecnologias";
import { Arquitectura } from "@/components/sections/Arquitectura";
import { BaseDatos } from "@/components/sections/BaseDatos";
import { Roles } from "@/components/sections/Roles";
import { Funcionalidades } from "@/components/sections/Funcionalidades";
import { Seguridad } from "@/components/sections/Seguridad";
import { Conclusion } from "@/components/sections/Conclusion";
import { Equipo } from "@/components/sections/Equipo";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduccion />
        <Objetivos />
        <Tecnologias />
        <Arquitectura />
        <BaseDatos />
        <Roles />
        <Funcionalidades />
        <Seguridad />
        <Conclusion />
        <Equipo />
      </main>
      <Footer />
    </>
  );
}
