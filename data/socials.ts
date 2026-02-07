export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "external";
}

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: "mail",
  },
];
