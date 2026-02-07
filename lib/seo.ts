import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SeoParams {
  title?: string;
  description?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description,
  path = "",
}: SeoParams = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const fullDescription = description ?? SITE_CONFIG.description;
  const canonical = `${SITE_CONFIG.url}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
    alternates: {
      canonical,
    },
  };
}
