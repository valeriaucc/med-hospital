import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Introduccion } from "@/components/sections/Introduccion";
import { Objetivos } from "@/components/sections/Objetivos";
import { Tecnologias } from "@/components/sections/Tecnologias";
import { Arquitectura } from "@/components/sections/Arquitectura";
import { BaseDatos } from "@/components/sections/BaseDatos";
import { Roles } from "@/components/sections/Roles";
import { Funcionalidades } from "@/components/sections/Funcionalidades";
import { Seguridad } from "@/components/sections/Seguridad";
import { Timeline } from "@/components/sections/Timeline";
import { Conclusion } from "@/components/sections/Conclusion";
import { Equipo } from "@/components/sections/Equipo";
import { Repositorios } from "@/components/sections/Repositorios";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
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
        <Timeline />
        <Conclusion />
        <Equipo />
        <Repositorios />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
