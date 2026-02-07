import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <Hero
      headline="Tech Lead who builds scalable products end-to-end"
      intro="Mobile & Android Lead at OCBC Bank. 4+ years shipping production systems. Kotlin, MVVM, Clean Architecture. Side projects in Next.js and Supabase."
      primaryCta={{ label: "View Projects", href: "/projects" }}
      secondaryCta={{ label: "Contact Me", href: "/contact" }}
    />
  );
}
