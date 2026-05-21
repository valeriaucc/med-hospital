import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { conclusion, site } from "@/lib/content";

export function Conclusion() {
  return (
    <Section id="conclusion" tone="default">
      <Reveal>
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-sky-700 p-10 text-center text-white shadow-soft sm:p-14">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Conclusión
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
            {conclusion.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            {conclusion.body}
          </p>
          <p className="mt-8 text-sm text-white/70">
            Proyecto desarrollado por el equipo de {site.name} · {site.subject}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
