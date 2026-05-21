import { Icon } from "./Icon";

type TechCardProps = {
  tech: string;
  role: string;
  icon: string;
};

export function TechCard({ tech, role, icon }: TechCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-700 dark:hover:shadow-card-dark">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:group-hover:bg-brand-900/50">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">
          {tech}
        </p>
        <p className="truncate text-xs text-ink-500 dark:text-ink-400">
          {role}
        </p>
      </div>
    </div>
  );
}
