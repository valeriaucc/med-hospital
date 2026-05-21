import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TechCard } from "@/components/ui/TechCard";
import { tecnologias } from "@/lib/content";

export function Tecnologias() {
  return (
    <Section id="tecnologias" tone="default">
      <Reveal>
        <SectionTitle
          eyebrow="Stack del proyecto"
          title={tecnologias.title}
          subtitle={tecnologias.subtitle}
        />
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tecnologias.items.map((t, i) => (
          <Reveal key={t.tech} delay={i * 0.04}>
            <TechCard tech={t.tech} role={t.role} icon={t.icon} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
