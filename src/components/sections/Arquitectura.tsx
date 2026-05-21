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
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
                      <Icon name={layer.icon} className="h-6 w-6" />
                    </div>
                    <span className="badge-num font-mono">M{i === 0 ? "" : i === 1 ? "V" : "T"}</span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                    {layer.role}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-ink-900 dark:text-white">
                    {layer.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 dark:text-ink-400">
                    {layer.detail}
                  </p>
                  {layer.sample ? (
                    <pre className="mt-4 overflow-x-auto rounded-lg bg-ink-900 p-3 text-[11px] leading-relaxed text-ink-100 dark:bg-ink-950">
                      <code>{layer.sample}</code>
                    </pre>
                  ) : null}
                </article>
              </Reveal>

              {i < arquitectura.layers.length - 1 ? (
                <ArrowRight
                  className="hidden h-6 w-6 shrink-0 text-brand-500 lg:block dark:text-brand-400"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-white/70 p-5 text-center text-sm text-ink-600 backdrop-blur dark:border-brand-900/40 dark:bg-ink-900/70 dark:text-ink-300">
            <span className="font-semibold text-brand-700 dark:text-brand-300">
              Flujo:
            </span>{" "}
            El usuario hace una petición →{" "}
            <span className="font-mono">View</span> procesa la lógica →{" "}
            <span className="font-mono">Model</span> consulta o actualiza la BD →{" "}
            <span className="font-mono">Template</span> renderiza la respuesta.
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">
              {estructura.title}
            </h3>
            <p className="mt-3 text-ink-600 dark:text-ink-400">
              {estructura.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-50 text-xs uppercase tracking-wider text-ink-500 dark:bg-ink-800 dark:text-ink-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Carpeta
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Función
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
              {estructura.items.map((it) => (
                <tr
                  key={it.folder}
                  className="hover:bg-brand-50/40 dark:hover:bg-ink-800/40"
                >
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                        <Icon name={it.icon} className="h-4 w-4" />
                      </span>
                      <code className="font-mono text-sm font-semibold text-ink-900 dark:text-white">
                        {it.folder}/
                      </code>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-ink-700 dark:text-ink-300">
                    {it.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
