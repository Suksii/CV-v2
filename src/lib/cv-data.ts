export const person = {
  name: "Šućo Ramović",
  titles: ["Full Stack Developer", "Electrical Engineer"],
  summary:
    "Full stack web developer with a background in Electrical Engineering. I build and maintain production e-commerce platforms and a large multi-module ERP, with TypeScript, React and Next.js on the front end and PHP/Laravel on the back end.",
} as const;

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: "calendar" | "location" | "phone" | "mail" | "linkedin" | "github" | "globe";
};

export const contact: ContactItem[] = [
  { label: "Location", value: "Podgorica, Montenegro", icon: "location" },
  { label: "Phone", value: "+382 69 741 999", href: "tel:+38269741999", icon: "phone" },
  {
    label: "Email",
    value: "sucoramovic96@gmail.com",
    href: "mailto:sucoramovic96@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "suco-ramovic",
    href: "https://www.linkedin.com/in/suco-ramovic-58a728256/",
    icon: "linkedin",
  },
  { label: "GitHub", value: "Suksii", href: "https://github.com/Suksii", icon: "github" },
  {
    label: "Portfolio",
    value: "sucoramovic.vercel.app",
    href: "https://sucoramovic.vercel.app/",
    icon: "globe",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "HTML",
      "CSS",
      "TailwindCSS",
      "SASS",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "PHP", "Laravel", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  },
  {
    title: "Tools",
    items: ["Git", "Vitest", "Sentry", "Vercel"],
  },
] as const;

export type Highlight = { name: string; text: string };

export type Experience = {
  position: string;
  company: string;
  date: string;
  intro?: string;
  highlights?: Highlight[];
  outro?: string;
  description?: string;
};

export const experience: Experience[] = [
  {
    position: "Web Developer",
    company: "Data Design",
    date: "Jun 2025 — present",
    intro:
      "More than 50 projects in production. I work on the shared Laravel REST API behind our stores and build the Next.js storefronts on top of it.",
    highlights: [
      {
        name: "TiramisuERP",
        text: "Multi-module ERP (sales, finance, warehouse, POS, mobile sales) in React, TypeScript, TanStack, Zustand and AG-Grid.",
      },
      {
        name: "Tehnoplus",
        text: "Electronics store with online payment and a B2B wholesale mode.",
      },
      {
        name: "Lubenica",
        text: "Furniture and home store for a retailer with six shops.",
      },
      {
        name: "Cvjećara Habitat",
        text: "Bilingual flower shop with a CMS page builder.",
      },
      { name: "Ksport", text: "Headless storefront for a sportswear retailer." },
      {
        name: "BusTicket",
        text: "Bus-ticket booking in 15 languages with online payment and an AI chatbot.",
      },
      {
        name: "LevelUp & TimePlus",
        text: "PHP-platform stores with full UI redesigns.",
      },
    ],
  },
  {
    position: "Web Developer",
    company: "Freelance",
    date: "Nov 2023 — Jun 2025",
    description:
      "Websites and web apps for government and private clients (React, Vue.js, Next.js, Node.js). Built Kata Agency solo end to end: a bilingual studio site with a custom admin panel (Next.js, Prisma, PostgreSQL).",
  },
  {
    position: "Software Engineer",
    company: "Radio i Televizija Crne Gore (RTCG)",
    date: "Aug 2022 — Jul 2026",
    description:
      "Maintained broadcast production systems (Avid MediaCentral, iNEWS, Airspeed, SiMedia Yes) at the national broadcaster. Built internal web apps used daily by staff (React, Node.js, Vue.js).",
  },
  {
    position: "Electrical Engineer",
    company: "Ramel",
    date: "Sep 2021 — Jan 2022",
    description:
      "High-voltage installation design; Montenegro highway project.",
  },
];

export type Education = {
  degree: string;
  school: string;
  date: string;
};

export const education: Education[] = [
  {
    degree: "BSc in Electrical Engineering",
    school: "University of Montenegro, Faculty of Electrical Engineering",
    date: "2015 — 2020",
  },
];
