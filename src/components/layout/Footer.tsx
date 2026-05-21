import { Github, HeartPulse } from "lucide-react";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-ink-700 dark:text-ink-300">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
              <HeartPulse className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm">
              <span className="font-semibold text-ink-900 dark:text-white">
                {site.name}
              </span>{" "}
              · {site.tagline}
            </p>
          </div>
          <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Recursos
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={site.repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-700 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                Código en GitHub
              </a>
            </li>
            <li>
              <a
                href={site.deploy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-700 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
              >
                {site.deploy.label}
              </a>
            </li>
            <li>
              <a
                href="#equipo"
                className="text-ink-700 transition-colors hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
              >
                Equipo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Stack
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Next.js 14",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Render",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink-200 bg-ink-50 px-2.5 py-0.5 text-xs text-ink-700 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink-100 dark:border-ink-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-ink-500 dark:text-ink-400">
            © {year} {site.longName} · {site.subject}
          </p>
          <p className="text-xs text-ink-500 dark:text-ink-400">
            Hecho con Next.js + Tailwind · Desplegado en Render
          </p>
        </div>
      </div>
    </footer>
  );
}
