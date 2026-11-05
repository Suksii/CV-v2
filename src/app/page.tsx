import { CvSheet } from "@/components/cv-sheet";
import {
  person,
  contact,
  skillGroups,
  experience,
  education,
} from "@/lib/cv-data";

export default function Home() {
  return (
    <CvSheet
      person={person}
      contact={contact}
      skillGroups={skillGroups}
      experience={experience}
      education={education}
    />
  );
}
