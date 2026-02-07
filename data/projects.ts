export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  role: string;
  contributions: string[];
  outcome: string;
  featured: boolean;
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "youth-onboarding",
    name: "Youth Account Onboarding",
    description:
      "End-to-end digital onboarding flow for youth savings accounts in the OCBC mobile banking app.",
    problem:
      "Existing onboarding was paper-heavy, took 15+ minutes, and had high drop-off rates.",
    solution:
      "Built a fully digital flow with identity verification, e-signatures, and instant account activation.",
    techStack: ["Kotlin", "MVVM", "StateFlow", "Clean Architecture", "REST APIs"],
    role: "Tech Lead / Android Lead",
    contributions: [
      "Led architecture decisions for the onboarding module",
      "Designed state management flow for multi-step forms",
      "Implemented integration with identity verification provider",
      "Mentored junior developers on best practices",
    ],
    outcome:
      "Onboarding time reduced to under 5 minutes. 40% increase in completion rate.",
    featured: true,
  },
  {
    id: "open-banking-consent",
    name: "Open Banking Consent Management",
    description:
      "Consent-based data sharing flows allowing customers to securely share financial data with third-party apps.",
    problem:
      "Bank needed to comply with open banking regulations while maintaining security and UX.",
    solution:
      "Built consent screens, granular permission controls, and audit trails for data access.",
    techStack: [
      "Kotlin",
      "Coroutines",
      "Room",
      "Retrofit",
      "OAuth 2.0",
      "Clean Architecture",
    ],
    role: "Android Lead",
    contributions: [
      "Designed consent UI/UX flow with product team",
      "Integrated OAuth and token management",
      "Implemented revocation and expiry handling",
      "Cross-team coordination with backend and security",
    ],
    outcome: "Launched on schedule. Zero security incidents post-launch.",
    featured: true,
  },
  {
    id: "content-platform",
    name: "Content Platform (Side Project)",
    description:
      "A web-based content management and discovery platform built for learning and experimentation.",
    problem: "Wanted to explore full-stack development and modern web patterns.",
    solution:
      "Built a Next.js app with Supabase for auth, database, and real-time subscriptions.",
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    role: "Solo Developer",
    contributions: [
      "Full-stack implementation from scratch",
      "Row-level security and auth flows",
      "Real-time updates with Supabase subscriptions",
      "Responsive UI with accessible components",
    ],
    outcome: "Live demo. Solid foundation for future features (blog, dashboard).",
    featured: false,
    links: {
      demo: "https://www.skipqq.com",
    },
  },
  {
    id: "origination-flows",
    name: "Loan Origination Flows",
    description:
      "Mobile-first loan application and approval workflows within the banking app.",
    problem: "Customers had to visit branches or use separate apps for loan applications.",
    solution:
      "In-app loan origination with document upload, e-sign, and status tracking.",
    techStack: ["Kotlin", "MVVM", "Hilt", "Coroutines", "WorkManager"],
    role: "Senior Android Engineer",
    contributions: [
      "Built document capture and upload flows",
      "Implemented background sync with WorkManager",
      "Handled offline scenarios and retry logic",
      "Collaborated with risk and compliance teams",
    ],
    outcome: "30% of loan applications now originate via mobile.",
    featured: false,
  },
];
