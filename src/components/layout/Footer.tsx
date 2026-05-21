import { HeartPulse } from "lucide-react";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2 text-ink-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
            <HeartPulse className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="text-sm">
            <span className="font-semibold text-ink-900">{site.name}</span>{" "}
            · {site.tagline}
          </p>
        </div>
        <p className="text-xs text-ink-500">
          © {year} {site.longName} · {site.subject}
        </p>
      </div>
    </footer>
  );
}
