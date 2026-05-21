"use client";

import { useEffect, useState } from "react";
import { Github, HeartPulse, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { useScrollSpy } from "@/lib/useScrollSpy";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeId = useScrollSpy(nav.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-200/80 bg-white/85 backdrop-blur dark:border-ink-800/80 dark:bg-ink-950/85"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-bold text-ink-900 dark:text-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-soft">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>{site.name}</span>
        </a>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Principal"
        >
          {nav.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-700 dark:text-brand-300"
                    : "text-ink-600 hover:text-brand-700 dark:text-ink-300 dark:hover:text-brand-300"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-brand-gradient"
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver código en GitHub"
            className="hidden h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700 sm:inline-flex dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-brand-700 dark:hover:text-brand-300"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <ThemeToggle />
          <a
            href={site.repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-700 lg:inline-flex lg:items-center lg:gap-2"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700 lg:hidden dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-200 bg-white lg:hidden dark:border-ink-800 dark:bg-ink-950">
          <nav
            className="container-page flex flex-col gap-1 py-3"
            aria-label="Móvil"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  activeId === item.id
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                    : "text-ink-700 hover:bg-brand-50 hover:text-brand-700 dark:text-ink-300 dark:hover:bg-ink-900 dark:hover:text-brand-300"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.repo.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Ver en GitHub
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
