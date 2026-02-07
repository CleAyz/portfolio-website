import { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch. Email, GitHub, LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Reach out for opportunities, collaboration, or a chat."
    >
      <div className="mx-auto max-w-xl space-y-12">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Connect
          </h3>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Send a message
          </h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            I typically respond within a few days.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
