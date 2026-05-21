import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { arquitectura, estructura } from "@/lib/content";

export function Arquitectura() {
  return (
    <Section id="arquitectura" tone="brand">
      <Reveal>
        <SectionTitle
          eyebrow="Cómo está construido"
          title={arquitectura.title}
          subtitle={arquitectura.body}
        />
      </Reveal>

      <div className="mt-14">
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-center">
          {arquitectura.layers.map((layer, i) => (
            <div key={layer.name} className="flex items-center gap-4">
              <Reveal delay={i * 0.1}>
                <article className="card w-full min-w-0 sm:w-72">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
                    <Icon name={layer.icon} className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {layer.role}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-ink-900">
                    {layer.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">{layer.detail}</p>
                </article>
              </Reveal>

              {i < arquitectura.layers.length - 1 ? (
                <ArrowRight
                  className="hidden h-6 w-6 shrink-0 text-brand-500 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {estructura.title}
            </h3>
            <p className="mt-3 text-ink-600">{estructura.subtitle}</p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Carpeta
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Función
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {estructura.items.map((it) => (
                <tr key={it.folder} className="hover:bg-brand-50/40">
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                        <Icon name={it.icon} className="h-4 w-4" />
                      </span>
                      <code className="font-mono text-sm font-semibold text-ink-900">
                        {it.folder}/
                      </code>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-ink-700">{it.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
