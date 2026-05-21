"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Github,
  Rocket,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { site, stats } from "@/lib/content";

const highlights = [
  { icon: Users, label: "Pacientes" },
  { icon: Stethoscope, label: "Médicos" },
  { icon: CalendarCheck, label: "Citas médicas" },
  { icon: ShieldCheck, label: "Seguridad" },
];

const panelStats = [
  { label: "Citas hoy", value: "24" },
  { label: "Pacientes", value: "1.2k" },
  { label: "Médicos", value: "38" },
  { label: "Especialidades", value: "12" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-grid opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-700/20"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-0 -z-10 h-[480px] w-[480px] rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-700/20"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.a
            href={site.repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50 dark:border-brand-800/60 dark:bg-ink-900 dark:text-brand-300 dark:hover:border-brand-700 dark:hover:bg-ink-800"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            {site.repo.label}
            <span className="h-1 w-1 rounded-full bg-brand-500" />
            {site.subject}
          </motion.a>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-bold leading-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white text-balance"
          >
            {site.name}
            <span className="block bg-brand-gradient bg-clip-text text-transparent">
              {site.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-400"
          >
            {site.description} Automatiza procesos, centraliza información
            clínica y mejora la experiencia de atención médica.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Ver en GitHub
            </a>
            <a href="#introduccion" className="btn-secondary">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Conoce el proyecto
            </a>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-600 dark:text-ink-400"
          >
            {highlights.map(({ icon: Ic, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Ic
                  className="h-4 w-4 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid max-w-md grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-brand-gradient opacity-90 shadow-soft" />
            <div className="absolute inset-3 rounded-[2.25rem] bg-white/95 p-6 backdrop-blur dark:bg-ink-900/95">
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                    <Stethoscope className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">
                      Panel MedHospital
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      Vista de control rápida
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    online
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {panelStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                      className="rounded-xl border border-ink-100 bg-ink-50/60 p-3 dark:border-ink-800 dark:bg-ink-800/60"
                    >
                      <p className="text-xs text-ink-500 dark:text-ink-400">
                        {stat.label}
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-white">
                        {stat.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto rounded-xl border border-brand-100 bg-brand-50/60 p-3 dark:border-brand-900/40 dark:bg-brand-900/20">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
                    Próxima cita
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-900 dark:text-white">
                    Dr. Rivera · Cardiología
                  </p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">
                    10:30 AM · Sala 204
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
