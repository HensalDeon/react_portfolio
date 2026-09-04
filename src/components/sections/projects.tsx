import { ProjectGrid } from "@/components/sections/project-grid";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/data";

export function Projects() {
  return (
    <Section id="projects">
      <Reveal inView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading eyebrow="Selected work" title="Projects I have shipped." />
        <p className="max-w-md text-base leading-relaxed text-muted lg:pb-1">
          Agency builds, e-commerce experiences and side projects. Filter by platform, or open any
          card to see it live.
        </p>
      </Reveal>

      <ProjectGrid projects={projects} />
    </Section>
  );
}
