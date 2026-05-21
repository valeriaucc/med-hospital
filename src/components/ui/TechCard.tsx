import { Icon } from "./Icon";

type TechCardProps = {
  tech: string;
  role: string;
  icon: string;
};

export function TechCard({ tech, role, icon }: TechCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink-900">{tech}</p>
        <p className="truncate text-xs text-ink-500">{role}</p>
      </div>
    </div>
  );
}
