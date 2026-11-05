import { CvSheet } from "@/components/cv-sheet";
import { person, contact, skillGroups, experience, education } from "@/lib/cv-data-dispatch";

export default function DispatchCv() {
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
