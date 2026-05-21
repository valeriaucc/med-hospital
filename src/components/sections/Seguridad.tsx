import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { seguridad } from "@/lib/content";

export function Seguridad() {
  return (
    <Section id="seguridad" tone="muted">
      <Reveal>
        <SectionTitle
          eyebrow="Confianza y protección"
          title={seguridad.title}
          subtitle={seguridad.subtitle}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {seguridad.items.map((item, i) => (
          <Reveal key={item.text} delay={i * 0.05}>
            <article className="card flex h-full flex-col items-center gap-3 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <p className="text-sm font-semibold text-ink-800 dark:text-ink-200">
                {item.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
