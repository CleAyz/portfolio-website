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
    href: "https://github.com/CleAyz",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/clementayz",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:clementayz@gmail.com",
    icon: "mail",
  },
];
