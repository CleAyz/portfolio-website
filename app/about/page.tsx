import { Metadata } from "next";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Career summary and approach to building software. Mobile & Android Lead at OCBC Bank.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Software Engineer & Tech Lead focused on scalable, maintainable systems."
    >
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Career summary
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              I lead Android development for consumer banking at OCBC, where I
              architect features, mentor engineers, and ship products used by
              millions. My background is in mobile—Kotlin, MVVM, Clean
              Architecture—but I also build web apps with Next.js and Supabase
              to stay sharp across the stack.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              What I work on day-to-day
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              I balance hands-on development with leadership: designing
              architecture, reviewing code, unblocking the team, and aligning
              with product and design. I care about clean code, testability, and
              systems that scale without accruing technical debt.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              How I think about building software
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              I believe in simplicity first—solving the real problem before
              adding complexity. Good architecture should make changes easy and
              predictable. I focus on long-term maintainability, clear ownership,
              and making sure the team can move fast without breaking things.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Leadership + hands-on balance
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              I stay close to the code. Leading means making tough calls,
              removing ambiguity, and helping others grow—but I still implement
              features and fix bugs. That keeps me honest about what works and
              what doesn’t in production.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
