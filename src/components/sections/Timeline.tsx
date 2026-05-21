import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <Section id="timeline" tone="default">
      <Reveal>
        <SectionTitle
          eyebrow="Proceso"
          title={timeline.title}
          subtitle={timeline.subtitle}
        />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div
          aria-hidden="true"
          className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-brand-300 via-brand-400 to-sky-400 sm:block dark:from-brand-700 dark:via-brand-600 dark:to-sky-600"
        />

        <ol className="space-y-8">
          {timeline.milestones.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 0.05}>
              <div className="relative grid items-start gap-4 sm:grid-cols-[40px_1fr]">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft">
                  <Icon name={m.icon} className="h-5 w-5" />
                </div>
                <article className="card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                      {m.title}
                    </h3>
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                      {m.phase}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                    {m.description}
                  </p>
                </article>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
