import { Icon } from "./Icon";

type RoleCardProps = {
  name: string;
  description: string;
  icon: string;
};

export function RoleCard({ name, description, icon }: RoleCardProps) {
  return (
    <article className="card h-full">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:ring-brand-800">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
        {name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
        {description}
      </p>
    </article>
  );
}
