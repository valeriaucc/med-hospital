import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { baseDatos } from "@/lib/content";

type Entity = (typeof baseDatos.entities)[number];

function EntityCard({ entity }: { entity: Entity }) {
  return (
    <article className="card h-full">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white">
          <Icon name={entity.icon} className="h-5 w-5" />
        </span>
        <h3 className="font-mono text-lg font-bold text-ink-900 dark:text-white">
          {entity.name}
        </h3>
      </div>
      <ul className="space-y-2 border-t border-ink-100 pt-3 dark:border-ink-800">
        {entity.fields.map((field) => (
          <li
            key={field.name}
            className="flex items-center justify-between font-mono text-xs"
          >
            <span className="flex items-center gap-2 text-ink-600 dark:text-ink-400">
              <span
                className={`h-1 w-1 rounded-full ${
                  field.isKey ? "bg-amber-500" : "bg-brand-500"
                }`}
              />
              {field.name}
            </span>
            {field.type ? (
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                  field.type === "PK"
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                    : field.type === "FK"
                      ? "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300"
                      : "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-400"
                }`}
              >
                {field.type}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function BaseDatos() {
  return (
    <Section id="base-datos" tone="default">
      <Reveal>
        <SectionTitle
          eyebrow="Modelo de datos"
          title={baseDatos.title}
          subtitle={baseDatos.subtitle}
        />
      </Reveal>

      <Reveal className="mt-14">
        <div className="overflow-x-auto rounded-2xl border border-ink-200 bg-gradient-to-br from-ink-50 via-white to-brand-50/40 p-6 dark:border-ink-800 dark:from-ink-900 dark:via-ink-900 dark:to-ink-900">
          <div className="mx-auto min-w-[760px] max-w-4xl">
            <svg
              viewBox="0 0 760 320"
              className="w-full"
              role="img"
              aria-label="Diagrama de entidad-relación de MedHospital"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                  className="fill-brand-500"
                >
                  <polygon points="0 0, 10 3, 0 6" />
                </marker>
              </defs>

              {/* Specialty (top-left) */}
              <g>
                <rect
                  x="40"
                  y="40"
                  width="160"
                  height="90"
                  rx="12"
                  className="fill-white stroke-brand-300 dark:fill-ink-800 dark:stroke-brand-700"
                  strokeWidth="2"
                />
                <text
                  x="120"
                  y="68"
                  textAnchor="middle"
                  className="fill-ink-900 font-mono text-sm font-bold dark:fill-white"
                >
                  Specialty
                </text>
                <line
                  x1="50"
                  y1="80"
                  x2="190"
                  y2="80"
                  className="stroke-ink-200 dark:stroke-ink-700"
                  strokeWidth="1"
                />
                <text
                  x="60"
                  y="100"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  id (PK)
                </text>
                <text
                  x="60"
                  y="116"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  nombre
                </text>
              </g>

              {/* Doctor (top-right) */}
              <g>
                <rect
                  x="560"
                  y="40"
                  width="160"
                  height="110"
                  rx="12"
                  className="fill-white stroke-brand-300 dark:fill-ink-800 dark:stroke-brand-700"
                  strokeWidth="2"
                />
                <text
                  x="640"
                  y="68"
                  textAnchor="middle"
                  className="fill-ink-900 font-mono text-sm font-bold dark:fill-white"
                >
                  Doctor
                </text>
                <line
                  x1="570"
                  y1="80"
                  x2="710"
                  y2="80"
                  className="stroke-ink-200 dark:stroke-ink-700"
                  strokeWidth="1"
                />
                <text
                  x="580"
                  y="100"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  id (PK)
                </text>
                <text
                  x="580"
                  y="116"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  nombre
                </text>
                <text
                  x="580"
                  y="132"
                  className="fill-sky-600 font-mono text-[10px] dark:fill-sky-300"
                >
                  especialidad_id (FK)
                </text>
              </g>

              {/* Appointment (center) */}
              <g>
                <rect
                  x="300"
                  y="120"
                  width="160"
                  height="120"
                  rx="12"
                  className="fill-white stroke-brand-400 dark:fill-ink-800 dark:stroke-brand-600"
                  strokeWidth="2.5"
                />
                <text
                  x="380"
                  y="148"
                  textAnchor="middle"
                  className="fill-ink-900 font-mono text-sm font-bold dark:fill-white"
                >
                  Appointment
                </text>
                <line
                  x1="310"
                  y1="160"
                  x2="450"
                  y2="160"
                  className="stroke-ink-200 dark:stroke-ink-700"
                  strokeWidth="1"
                />
                <text
                  x="320"
                  y="180"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  id (PK)
                </text>
                <text
                  x="320"
                  y="196"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  fecha
                </text>
                <text
                  x="320"
                  y="212"
                  className="fill-sky-600 font-mono text-[10px] dark:fill-sky-300"
                >
                  doctor_id (FK)
                </text>
                <text
                  x="320"
                  y="228"
                  className="fill-sky-600 font-mono text-[10px] dark:fill-sky-300"
                >
                  patient_id (FK)
                </text>
              </g>

              {/* Patient (bottom-left) */}
              <g>
                <rect
                  x="40"
                  y="200"
                  width="160"
                  height="100"
                  rx="12"
                  className="fill-white stroke-brand-300 dark:fill-ink-800 dark:stroke-brand-700"
                  strokeWidth="2"
                />
                <text
                  x="120"
                  y="228"
                  textAnchor="middle"
                  className="fill-ink-900 font-mono text-sm font-bold dark:fill-white"
                >
                  Patient
                </text>
                <line
                  x1="50"
                  y1="240"
                  x2="190"
                  y2="240"
                  className="stroke-ink-200 dark:stroke-ink-700"
                  strokeWidth="1"
                />
                <text
                  x="60"
                  y="260"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  id (PK)
                </text>
                <text
                  x="60"
                  y="276"
                  className="fill-ink-500 font-mono text-[10px] dark:fill-ink-400"
                >
                  documento
                </text>
              </g>

              {/* Lines (relationships) */}
              <g
                className="stroke-brand-400 dark:stroke-brand-500"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              >
                {/* Doctor -> Specialty */}
                <path d="M 560 95 Q 380 95 200 85" strokeDasharray="4 3" />
                {/* Appointment -> Doctor */}
                <path d="M 460 160 Q 530 130 560 110" strokeDasharray="4 3" />
                {/* Appointment -> Patient */}
                <path d="M 300 220 Q 240 240 200 240" strokeDasharray="4 3" />
              </g>

              {/* Labels on lines */}
              <g className="fill-ink-500 font-sans text-[10px] dark:fill-ink-400">
                <text x="370" y="80" textAnchor="middle">
                  pertenece a
                </text>
                <text x="540" y="125" textAnchor="middle">
                  atendida por
                </text>
                <text x="240" y="220" textAnchor="middle">
                  agendada para
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-ink-600 dark:text-ink-400">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
              PK · Primary Key
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
              FK · Foreign Key
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="20" height="6" viewBox="0 0 20 6">
                <line
                  x1="0"
                  y1="3"
                  x2="20"
                  y2="3"
                  stroke="currentColor"
                  strokeDasharray="3 2"
                  strokeWidth="1.5"
                />
              </svg>
              Relación
            </span>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {baseDatos.entities.map((entity, i) => (
          <Reveal key={entity.name} delay={i * 0.05}>
            <EntityCard entity={entity} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
