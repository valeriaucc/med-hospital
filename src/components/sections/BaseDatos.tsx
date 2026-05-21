import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { baseDatos } from "@/lib/content";

export function BaseDatos() {
  return (
    <Section id="base-datos" tone="default">
      <Reveal>
        <SectionTitle
          eyebrow="Modelo de datos"
          title={baseDatos.title}
          subtitle={baseDatos.subtitle}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {baseDatos.entities.map((entity, i) => (
          <Reveal key={entity.name} delay={i * 0.05}>
            <article className="card h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white">
                  <Icon name={entity.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-mono text-lg font-bold text-ink-900">
                  {entity.name}
                </h3>
              </div>
              <ul className="space-y-2 border-t border-ink-100 pt-3">
                {entity.fields.map((field) => (
                  <li
                    key={field}
                    className="flex items-center gap-2 font-mono text-xs text-ink-600"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {field}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
