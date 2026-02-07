import Link from "next/link";

interface HeroProps {
  headline: string;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  headline,
  intro,
  primaryCta = { label: "View Projects", href: "/projects" },
  secondaryCta = { label: "Contact Me", href: "/contact" },
}: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
          {intro}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 sm:w-auto"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
