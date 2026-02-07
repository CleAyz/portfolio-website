import { Metadata } from "next";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Mobile banking features, open banking, and side projects. Youth onboarding, consent management, loan origination.",
  path: "/projects",
});

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work across mobile banking and side projects."
    >
      <div className="space-y-12">
        {featured.length > 0 && (
          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              Featured
            </h3>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {featured.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {secondary.length > 0 && (
          <div>
            <h3 className="mb-6 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              More work
            </h3>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {secondary.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
