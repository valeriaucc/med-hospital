import { Target } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { objetivoGeneral, objetivosEspecificos } from "@/lib/content";

export function Objetivos() {
  return (
    <Section id="objetivos" tone="muted">
      <Reveal>
        <SectionTitle
          eyebrow="Hacia dónde apuntamos"
          title="Objetivos del proyecto"
          subtitle="Una meta clara para el sistema y los pasos concretos para alcanzarla."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="card h-full bg-gradient-to-br from-brand-600 to-sky-600 text-white">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30">
              <Target className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold">{objetivoGeneral.title}</h3>
            <p className="mt-3 text-white/90">{objetivoGeneral.body}</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h3 className="mb-6 text-xl font-bold text-ink-900">
              {objetivosEspecificos.title}
            </h3>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {objetivosEspecificos.items.map((it, i) => (
              <Reveal as="li" key={it.text} delay={i * 0.05}>
                <div className="card flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name={it.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-ink-800">{it.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
