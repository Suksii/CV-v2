import { contact as baseContact, education as baseEducation } from "@/lib/cv-data";
import type { ContactItem, Experience } from "@/lib/cv-data";

// Variant of the CV for entry-level US truck dispatch applications.
export const person = {
  name: "Šućo Ramović",
  titles: ["Electrical Engineer", "Software Engineer"],
  summary:
    "Electrical engineer with four years of experience maintaining broadcast systems and supporting users at the national television of Montenegro, and in web development. I am looking for a remote entry-level position in US truck dispatch (dispatcher trainee or track and trace). I do not have dispatch experience yet and I am ready to go through training. I work remotely from Podgorica and I am available for the second shift on US hours.",
} as const;

export const contact: ContactItem[] = baseContact.filter(
  (item) => item.label !== "GitHub" && item.label !== "Portfolio"
);

export const skillGroups = [
  {
    title: "Languages",
    items: ["English (B2)", "Spanish (basic)", "Italian (basic)", "Serbian / Montenegrin (native)"],
  },
  {
    title: "Work",
    items: ["Remote work", "Second shift (US hours)", "User support"],
  },
  {
    title: "Software",
    items: ["Avid MediaCentral", "iNEWS", "AutoCAD", "ERP systems", "JavaScript / React"],
  },
] as const;

export const experience: Experience[] = [
  {
    position: "Software Engineer",
    company: "Radio i Televizija Crne Gore (RTCG)",
    date: "Aug 2022 — Jul 2026",
    description:
      "Broadcast engineer at the national television station. Maintained the production and broadcasting systems (Avid MediaCentral, iNEWS, MediaComposer, Maestro, iNEWS Command and Airspeed, plus SiMedia's Yes broadcasting and recording system) and supported employees in the production, technical and news departments, keeping the processes running without interruption. Also developed internal web applications for the organization. Full-time until June 2026, then part-time until July 2026.",
  },
  {
    position: "Web Developer",
    company: "Data Design",
    date: "Jun 2025 — present",
    description:
      "Full-time web developer. I build and maintain more than 50 projects (mostly e-commerce stores) in production and work on a large multi-module ERP system covering sales, finance, warehouse, personnel and mobile sales.",
  },
  {
    position: "Web Developer",
    company: "Freelance",
    date: "Nov 2023 — Jun 2025",
    description:
      "Built websites and web applications for government and private organizations, from the first agreement with the client to deployment.",
  },
  {
    position: "Electrical Engineer",
    company: "Ramel",
    date: "Sep 2021 — Jan 2022",
    description:
      "Designed high-voltage installations for buildings, households and hangars. Worked on the project documentation for the first section of the Montenegro highway (AutoCAD sketches, extracting project information).",
  },
];

export const education = baseEducation.slice(0, 1);
