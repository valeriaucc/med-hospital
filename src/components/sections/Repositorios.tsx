import { ExternalLink, Github, Globe } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function Repositorios() {
  return (
    <Section id="repositorio" tone="muted">
      <Reveal>
        <SectionTitle
          eyebrow="Recursos"
          title="Repositorio y despliegue"
          subtitle="Explora el código fuente de este sitio y la versión publicada en producción."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <a
            href={site.repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-brand-700"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl transition-opacity group-hover:opacity-70 dark:bg-brand-700/20" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-white shadow-soft dark:bg-white dark:text-ink-900">
                <Github className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                  Código en GitHub
                </h3>
                <ExternalLink
                  className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                Repositorio público con todo el código del frontend
                (Next.js + TypeScript + Tailwind), listo para clonar, hacer
                fork o estudiar.
              </p>
              <code className="mt-4 inline-block rounded-md bg-ink-100 px-2 py-1 font-mono text-xs text-ink-700 dark:bg-ink-800 dark:text-ink-300">
                {site.repo.label}
              </code>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  TypeScript
                </span>
                <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                  Next.js 14
                </span>
                <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                  Tailwind
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={site.deploy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-brand-700"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl transition-opacity group-hover:opacity-70 dark:bg-sky-700/20" />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
                <Globe className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                  Sitio en producción
                </h3>
                <ExternalLink
                  className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                Sitio publicado como Static Site en Render. Auto-deploy
                configurado: cada push a <code>main</code> dispara un nuevo
                build automáticamente.
              </p>
              <code className="mt-4 inline-block rounded-md bg-ink-100 px-2 py-1 font-mono text-xs text-ink-700 dark:bg-ink-800 dark:text-ink-300">
                {site.deploy.label}
              </code>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Render
                </span>
                <span className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                  Static Site
                </span>
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  Auto-deploy
                </span>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
