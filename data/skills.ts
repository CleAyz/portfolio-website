export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "android",
    title: "Android & Mobile",
    items: [
      "Kotlin",
      "MVVM",
      "StateFlow",
      "Clean Architecture",
      "Coroutines",
      "Hilt",
      "Jetpack Compose",
      "Room",
      "Retrofit",
    ],
  },
  {
    id: "web",
    title: "Web",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend & Tools",
    items: [
      "REST APIs",
      "Supabase",
      "Git",
      "CI/CD",
      "OAuth 2.0",
    ],
  },
  {
    id: "product",
    title: "Product & Leadership",
    items: [
      "Technical Leadership",
      "Architecture Design",
      "Cross-team Collaboration",
      "Mentoring",
      "Agile / Scrum",
    ],
  },
];
