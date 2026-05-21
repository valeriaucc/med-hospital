import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Equipo() {
  return (
    <Section id="equipo" tone="muted">
      <Reveal>
        <SectionTitle
          eyebrow="Equipo"
          title="Detrás de ConsultaMed"
          subtitle={`Estudiantes de ${site.subject} que diseñaron y desarrollaron el proyecto.`}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {site.authors.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.05}>
            <article className="card flex h-full flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient font-display text-2xl font-bold text-white shadow-soft">
                {initials(a.name)}
              </div>
              <p className="mt-4 font-semibold text-ink-900 dark:text-white">
                {a.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                Equipo {site.name}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
