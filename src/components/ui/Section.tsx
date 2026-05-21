import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "brand";
};

const toneStyles: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-white dark:bg-ink-950",
  muted: "bg-ink-50 dark:bg-ink-900/40",
  brand:
    "bg-gradient-to-b from-brand-50 to-white dark:from-ink-900 dark:to-ink-950",
};

export function Section({
  id,
  children,
  className = "",
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 ${toneStyles[tone]} ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
