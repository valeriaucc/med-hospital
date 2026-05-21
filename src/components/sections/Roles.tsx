import { Check, Eye, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { RoleCard } from "@/components/ui/RoleCard";
import { roles } from "@/lib/content";

function PermissionCell({ value }: { value: boolean | "read" }) {
  if (value === true) {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
        aria-label="Sí"
        title="Sí"
      >
        <Check className="h-4 w-4" aria-hidden="true" />
      </span>
    );
  }
  if (value === "read") {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
        aria-label="Solo lectura"
        title="Solo lectura"
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
      </span>
    );
  }
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 text-ink-400 dark:bg-ink-800 dark:text-ink-500"
      aria-label="No"
      title="No"
    >
      <X className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

export function Roles() {
  const { headers, rows } = roles.permissions;

  return (
    <Section id="roles" tone="muted">
      <Reveal>
        <SectionTitle
          eyebrow="Autenticación"
          title={roles.title}
          subtitle={roles.subtitle}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {roles.items.map((role, i) => (
          <Reveal key={role.name} delay={i * 0.05}>
            <RoleCard
              name={role.name}
              description={role.description}
              icon={role.icon}
            />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-center font-display text-2xl font-bold text-ink-900 dark:text-white">
            Matriz de permisos
          </h3>
          <p className="mt-2 text-center text-sm text-ink-600 dark:text-ink-400">
            Qué puede hacer cada rol dentro del sistema.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-200 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-ink-50 dark:bg-ink-800">
                <tr>
                  {headers.map((h, idx) => (
                    <th
                      key={h}
                      scope="col"
                      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 ${
                        idx === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
                {rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-brand-50/40 dark:hover:bg-ink-800/40"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-medium text-ink-800 dark:text-ink-200"
                    >
                      {row.feature}
                    </th>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="px-4 py-3 text-center">
                        <PermissionCell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-ink-600 dark:text-ink-400">
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              Permitido
            </span>
            <span className="inline-flex items-center gap-2">
              <Eye className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              Solo lectura
            </span>
            <span className="inline-flex items-center gap-2">
              <X className="h-3.5 w-3.5 text-ink-400 dark:text-ink-500" />
              Sin acceso
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
