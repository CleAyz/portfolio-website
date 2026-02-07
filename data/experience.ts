export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export const experience: Experience[] = [
  {
    id: "ocbc-lead",
    company: "OCBC Bank",
    role: "Engineering Lead – Origination (Android / Hybrid)",
    period: "Jun 2024 – Present",
    responsibilities: [
      "Drive feature delivery and app quality for origination and onboarding flows while staying hands-on in code, reviews, and optimisation",
      "Set technical direction and standards; mentor engineers and run constructive code reviews",
      "Own technical decisions and cross-team alignment for the mobile squad",
    ],
    achievements: [
      "Shipped high-impact origination and onboarding features on schedule with improved stability",
      "Improved code quality and performance through consistent architecture and review practices",
      "Balanced delivery, team growth, and technical debt so the app remains maintainable at scale",
    ],
  },
  {
    id: "ocbc-android",
    company: "OCBC Bank",
    role: "Android Mobile Developer",
    period: "Jan 2023 – Dec 2024",
    responsibilities: [
      "Owned end-to-end delivery of native Android features (Kotlin, MVVM) while supporting hybrid handover",
      "Designed and implemented flows for savings, onboarding, and consent with clear separation of concerns",
      "Collaborated with product, design, and backend on API contracts and release processes",
    ],
    achievements: [
      "Shipped CPF Time Deposit in-app: digitised a key savings product and improved self-service for customers",
      "Led technical delivery of flagship account onboarding; initiative recognised internally for innovation and business impact",
      "Drove Hybrid → native Android transition and established MVVM and Clean Architecture patterns for the team",
    ],
  },
  {
    id: "ocbc-hybrid",
    company: "OCBC Bank",
    role: "Hybrid Mobile Developer (Lead Developer – Open Banking)",
    period: "May 2021 – May 2023",
    responsibilities: [
      "Led technical direction and delivery for Open Banking initiatives (React, TypeScript, Cordova)",
      "Architected and built aggregation and consent flows so customers could view data across multiple providers",
      "Served as Release Manager: coordinated builds, deployments, and app store submissions for monthly releases",
    ],
    achievements: [
      "Delivered Your Financial OneView: customers can consolidate and access financial data across providers in one place",
      "Stabilised release cadence and production reliability through process improvements and production support",
      "Bridged product and engineering: translated business goals into technical solutions and sustainable architecture",
    ],
  },
];
