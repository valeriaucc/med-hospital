import { Icon } from "./Icon";

type FeatureCardProps = {
  icon: string;
  title: string;
  bullets?: string[];
  description?: string;
};

export function FeatureCard({
  icon,
  title,
  bullets,
  description,
}: FeatureCardProps) {
  return (
    <article className="card h-full">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
          {description}
        </p>
      ) : null}
      {bullets && bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-300"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
