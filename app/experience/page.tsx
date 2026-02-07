import { Metadata } from "next";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { experience } from "@/data/experience";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description:
    "Professional experience at OCBC Bank. Mobile Lead, Senior Android Engineer.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional background and key achievements."
    >
      <div className="space-y-8">
        {experience.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </Section>
  );
}
