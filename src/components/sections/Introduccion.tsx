import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { introduccion, problematica } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";

export function Introduccion() {
  return (
    <Section id="introduccion" tone="default">
      <Reveal>
        <SectionTitle
          eyebrow="Acerca del proyecto"
          title={introduccion.title}
          subtitle={introduccion.body}
        />
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card h-full">
            <span className="eyebrow mb-3">Problemática</span>
            <h3 className="text-2xl font-bold text-ink-900 dark:text-white">
              {problematica.title}
            </h3>
            <p className="mt-3 text-ink-600 dark:text-ink-400">
              {problematica.body}
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <div className="card h-full">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
              Puntos de dolor
            </h4>
            <ul className="mt-4 space-y-3">
              {problematica.pains.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-300"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
                    <Icon name="activity" className="h-3.5 w-3.5" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
