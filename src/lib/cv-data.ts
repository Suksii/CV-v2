export const person = {
  name: "Šućo Ramović",
  titles: ["Full Stack Developer", "Electrical Engineer"],
  summary:
    "Motivated web developer with a strong academic background in Electrical Engineering. I build and maintain production e-commerce platforms and business systems — from customer-facing storefronts to a large multi-module ERP — working across the full stack with JavaScript/TypeScript, React, Next.js, Vue.js and Node.js on the front end and PHP/Laravel on the back end.",
} as const;

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: "calendar" | "location" | "phone" | "mail" | "linkedin" | "github" | "globe";
};

export const contact: ContactItem[] = [
  { label: "Date of birth", value: "27.07.1996", icon: "calendar" },
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
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & other",
    items: ["Git", "C"],
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
      "Full-time web developer building and maintaining a large number of e-commerce stores and business web applications. Selected projects:",
    highlights: [
      {
        name: "TiramisuERP",
        text: "Actively develop and maintain a large multi-module ERP system (React, TypeScript, TanStack Router & Query, Zustand, AG-Grid Enterprise, React Hook Form & Zod) covering sales, finance, warehouse, e-commerce, gastro/POS, personnel and mobile-sales modules, with internationalization, Sentry error monitoring and real-time updates.",
      },
      {
        name: "Tehnoplus",
        text: "Online store for one of Montenegro's largest consumer electronics retailers (Next.js App Router, TypeScript, TanStack Query) over a Laravel REST API: catalog, sale campaigns, product comparison, wishlist, checkout with online payment, user accounts and a separate B2B wholesale mode with customer-specific pricing and Excel catalog export. Cache Components with a custom disk cache handler, Sentry monitoring and a Vitest suite over checkout and pricing logic.",
      },
      {
        name: "Lubenica",
        text: "Online furniture and home store for a retailer with six shops in Montenegro (Next.js, TypeScript, TanStack Query, React Hook Form & Zod): catalog, advanced search, sale campaigns, cart and checkout with online payment, wishlist and user accounts.",
      },
      {
        name: "Cvjećara Habitat",
        text: "Bilingual (ME/EN) flower and gift shop in Next.js with a CMS-driven page builder, multi-step checkout with delivery scheduling, wishlist and newsletter integration, covered by a Vitest suite.",
      },
      {
        name: "Ksport",
        text: "Headless Next.js storefront for a sportswear retailer (React, TypeScript, TailwindCSS, TanStack Query) with product catalog, cart & checkout, online payment, wishlist, user accounts and store locator.",
      },
      {
        name: "BusTicket",
        text: "Online bus-ticket booking platform in Next.js with 15-language localization (next-intl), route search, online & offline payment, ticket history, bus rental and an integrated AI chatbot.",
      },
      {
        name: "LevelUp & TimePlus",
        text: "E-commerce storefronts on a custom PHP platform (catalog, cart, wishlist, multi-language, blog, shipping and email/payment integrations), including full UI redesigns.",
      },
    ],
    outro:
      "In total I maintain more than 50 projects in production. I work on the shared Laravel REST API powering the stores — new endpoints, bug fixes and performance improvements. Daily stack: React.js, Next.js, TypeScript, Node.js, PHP/Laravel, TailwindCSS and SASS.",
  },
  {
    position: "Web Developer",
    company: "Freelance",
    date: "Nov 2023 — Jun 2025",
    intro:
      "Designed and built responsive websites and web applications for government and private organizations. Delivered projects using HTML, CSS, JavaScript, React.js, Vue.js, Next.js, Node.js, SASS and TailwindCSS — from UI implementation to deployment.",
    highlights: [
      {
        name: "Kata Agency",
        text: "Bilingual site for an architecture and design studio, built solo end to end (Next.js, Prisma, PostgreSQL, next-intl), with a custom admin panel: JWT auth, TipTap rich-text editor and full CRUD over projects, services and news.",
      },
    ],
  },
  {
    position: "Software Engineer",
    company: "Radio i Televizija Crne Gore (RTCG)",
    date: "Aug 2022 — Jul 2026",
    description:
      "Broadcast engineer at the national television station: maintained complex production and broadcasting systems including Avid MediaCentral, iNEWS, MediaComposer, Maestro, iNEWS Command and Airspeed, plus SiMedia's Yes broadcasting/recording system, supporting production, technical and news departments. Also developed internal web applications for the organization, building strong skills in React, Node.js and Vue.js. Full-time until June 2026, then part-time until July 2026.",
  },
  {
    position: "Electrical Engineer",
    company: "Ramel",
    date: "Sep 2021 — Jan 2022",
    description:
      "Designed high-voltage installations for buildings, households and hangars at a company specializing in electrical installations. Interpreted the project for the first section of the Montenegro highway — AutoCAD sketches, extracting project information and providing suggestions.",
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
  {
    degree: "High School Diploma (natural sciences)",
    school: "Gymnasium “Slobodan Škerović”, Podgorica",
    date: "2011 — 2015",
  },
];
