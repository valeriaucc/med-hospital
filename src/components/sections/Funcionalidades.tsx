import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { funcionalidades } from "@/lib/content";

export function Funcionalidades() {
  return (
    <Section id="funcionalidades" tone="default">
      <Reveal>
        <SectionTitle
          eyebrow="Lo que ofrece"
          title={funcionalidades.title}
          subtitle={funcionalidades.subtitle}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {funcionalidades.modules.map((m, i) => (
          <Reveal key={m.title} delay={(i % 4) * 0.05}>
            <FeatureCard title={m.title} icon={m.icon} bullets={m.bullets} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
