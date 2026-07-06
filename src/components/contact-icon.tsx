import type { IconType } from "react-icons";
import {
  FaCalendarDays,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";
import type { ContactItem } from "@/lib/cv-data";

const icons: Record<ContactItem["icon"], IconType> = {
  calendar: FaCalendarDays,
  location: FaLocationDot,
  phone: FaPhone,
  mail: FaEnvelope,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  globe: FaGlobe,
};

export function ContactIcon({
  icon,
  className,
}: {
  icon: ContactItem["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={className} aria-hidden />;
}
