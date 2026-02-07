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
    id: "ocbc-current",
    company: "OCBC Bank",
    role: "Mobile / Android Lead",
    period: "2022 – Present",
    responsibilities: [
      "Lead Android development for consumer banking features",
      "Architect and implement new modules (onboarding, consent, origination)",
      "Mentor engineers and conduct code reviews",
      "Collaborate with product, design, and backend teams",
      "Own technical decisions for mobile squad",
    ],
    achievements: [
      "Led delivery of youth onboarding and open banking consent features",
      "Established Clean Architecture and MVVM standards across the team",
      "Reduced crash rate and improved app performance metrics",
      "Cross-team alignment on API contracts and release processes",
    ],
  },
  {
    id: "ocbc-senior",
    company: "OCBC Bank",
    role: "Senior Android Engineer",
    period: "2020 – 2022",
    responsibilities: [
      "Developed and maintained core banking features",
      "Implemented new flows and integrations",
      "Participated in architecture discussions",
      "Supported production incidents",
    ],
    achievements: [
      "Delivered loan origination flows on mobile",
      "Improved build times and CI/CD pipeline",
      "Contributed to security and compliance initiatives",
    ],
  },
  {
    id: "ocbc-android",
    company: "OCBC Bank",
    role: "Android Engineer",
    period: "2019 – 2020",
    responsibilities: [
      "Feature development for the OCBC mobile app",
      "Bug fixes and maintenance",
      "Unit and integration testing",
    ],
    achievements: [
      "Shipped multiple consumer banking features",
      "Built internal tools for testing and debugging",
    ],
  },
];
