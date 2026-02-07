import type { Experience } from "@/data/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {experience.role}
          </h3>
          <p className="text-accent font-medium">{experience.company}</p>
        </div>
        <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
          {experience.period}
        </span>
      </div>

      {experience.responsibilities.length > 0 && (
        <div>
          <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            Responsibilities
          </h4>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            {experience.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {experience.achievements.length > 0 && (
        <div className="rounded-lg bg-accent/5 p-4 dark:bg-accent/10">
          <h4 className="text-sm font-medium uppercase tracking-wide text-accent">
            Key achievements
          </h4>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-700 dark:text-neutral-200">
            {experience.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
