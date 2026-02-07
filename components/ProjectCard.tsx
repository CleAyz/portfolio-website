import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/50 ${
        project.featured ? "ring-2 ring-accent/20" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {project.name}
          </h3>
          {project.featured && (
            <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
              Featured
            </span>
          )}
        </div>

        <p className="text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>

        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium text-neutral-700 dark:text-neutral-200">
              Problem:
            </span>{" "}
            <span className="text-neutral-600 dark:text-neutral-300">
              {project.problem}
            </span>
          </div>
          <div>
            <span className="font-medium text-neutral-700 dark:text-neutral-200">
              Solution:
            </span>{" "}
            <span className="text-neutral-600 dark:text-neutral-300">
              {project.solution}
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Tech stack
          </span>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {project.techStack.join(" · ")}
          </p>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            My role
          </span>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {project.role}
          </p>
          {project.contributions.length > 0 && (
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              {project.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            Outcome
          </span>
          <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {project.outcome}
          </p>
        </div>

        {project.links && (project.links.github || project.links.demo) && (
          <div className="flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                <ExternalLinkIcon />
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
