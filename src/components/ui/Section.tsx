import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "brand";
};

const toneStyles: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-white",
  muted: "bg-ink-50",
  brand: "bg-gradient-to-b from-brand-50 to-white",
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
