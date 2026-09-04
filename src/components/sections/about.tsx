import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, technologies } from "@/content/data";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <Section id="about" containerClassName="grid gap-14 lg:grid-cols-12 lg:gap-8">
      <Reveal inView className="lg:col-span-5">
        <SectionHeading eyebrow="About" title="A developer who cares about the details." />
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <div className="flex flex-col gap-14 lg:col-span-6 lg:col-start-7">
        <Reveal inView delay={0.1}>
          <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">What I do</h3>
          <ol className="mt-5 border-t border-line">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-lg font-medium tracking-tight">{service.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal inView delay={0.15}>
          <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            Tools I reach for
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech.name}
                className="flex items-center gap-2 rounded-full border border-line py-1.5 pr-3.5 pl-2 text-sm"
              >
                <Image
                  src={tech.icon}
                  alt=""
                  className={cn("h-5 w-5 object-contain", tech.monochrome && "dark:invert")}
                  sizes="20px"
                />
                {tech.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
