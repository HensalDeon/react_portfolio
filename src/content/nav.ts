export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

export const sectionIds: readonly SectionId[] = navLinks.map((link) => link.id);
