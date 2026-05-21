import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MedHospital · ConsultaMed",
    short_name: "MedHospital",
    description:
      "Plataforma web de gestión hospitalaria para administrar pacientes, médicos y citas médicas.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0d9488",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
