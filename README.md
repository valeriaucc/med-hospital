# ConsultaMed · MedHospital Web

Sitio web moderno y responsive que presenta el proyecto **ConsultaMed / MedHospital** — una plataforma de gestión hospitalaria para la administración digital de pacientes, médicos y citas médicas.

> Construido como onepager con Next.js 14, TypeScript, Tailwind CSS y Framer Motion. Listo para desplegar como **Static Site en Render**.

---

## Stack

- **Next.js 14** (App Router) con `output: 'export'` → sitio 100% estático.
- **TypeScript** estricto.
- **Tailwind CSS** con theme médico personalizado (paleta `brand` teal/sky + `ink` slate).
- **Framer Motion** para animaciones de scroll suaves.
- **lucide-react** para iconografía consistente.

## Estructura del proyecto

```
med-hospital/
├── render.yaml                  # Configuración de despliegue en Render
├── next.config.mjs              # Export estático activado
├── tailwind.config.ts           # Theme (colores, fonts, sombras)
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── src/
    ├── app/
    │   ├── layout.tsx           # Metadata, fonts (Inter + Poppins)
    │   ├── page.tsx             # Ensambla todas las secciones
    │   └── globals.css          # Tokens Tailwind + utilidades del tema
    ├── lib/
    │   └── content.ts           # Todo el copy de las slides centralizado
    └── components/
        ├── layout/
        │   ├── Navbar.tsx       # Sticky con anchors
        │   └── Footer.tsx
        ├── ui/                  # Componentes reutilizables
        │   ├── Section.tsx
        │   ├── SectionTitle.tsx
        │   ├── FeatureCard.tsx
        │   ├── TechCard.tsx
        │   ├── RoleCard.tsx
        │   ├── Reveal.tsx       # Wrapper Framer Motion
        │   └── Icon.tsx         # Mapeo central de iconos
        └── sections/
            ├── Hero.tsx
            ├── Introduccion.tsx
            ├── Objetivos.tsx
            ├── Tecnologias.tsx
            ├── Arquitectura.tsx
            ├── BaseDatos.tsx
            ├── Roles.tsx
            ├── Funcionalidades.tsx
            ├── Seguridad.tsx
            ├── Conclusion.tsx
            └── Equipo.tsx
```

## Desarrollo local

Requisitos: **Node.js >= 18.18**

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

Esto genera la carpeta `out/` con el sitio estático completo.

## Despliegue en Render

El repositorio ya incluye `render.yaml` que configura el sitio como **Static Site**. Pasos:

1. Sube este repo a GitHub/GitLab.
2. En [Render](https://render.com), elige **New → Blueprint** y conecta el repo.
3. Render detectará automáticamente `render.yaml` y creará el servicio con:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `./out`
   - Headers de seguridad (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
   - Previews en Pull Requests habilitadas.

> Si prefieres configurarlo manualmente: crea un *Static Site*, apunta al mismo `Build Command` y `Publish Directory` indicados arriba.

## Personalización

- **Cambiar copy:** edita `src/lib/content.ts`. Todo el texto está centralizado allí.
- **Cambiar paleta:** modifica la sección `colors.brand` en `tailwind.config.ts`.
- **Añadir secciones:** crea un componente en `src/components/sections/` y agrégalo a `src/app/page.tsx`. Si quieres que aparezca en el navbar, añade su id+label en `nav` dentro de `content.ts`.

## Equipo

- Valentina Burbano
- Valeria Góngora
- David Luna
- Vanessa Mena

Electiva I.
