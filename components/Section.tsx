import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-4xl">
        {(title || subtitle) && (
          <div className="mb-12">
            {title && (
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
