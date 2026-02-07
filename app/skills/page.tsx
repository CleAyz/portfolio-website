import { Metadata } from "next";
import { Section } from "@/components/Section";
import { skills } from "@/data/skills";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description:
    "Android, Kotlin, MVVM, Clean Architecture, Next.js, TypeScript, and more.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <Section
      id="skills"
      title="Skills & Tech Stack"
      subtitle="Technologies and practices I use to build production systems."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.map((category) => (
          <div
            key={category.id}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50"
          >
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
              {category.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
