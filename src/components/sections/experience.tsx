import Image from "next/image";

import { LazyMount } from "@/components/ui/lazy-mount";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/data";

export function Experience() {
  return (
    <Section id="work">
      <Reveal inView>
        <SectionHeading eyebrow="Experience" title="Where I have worked." />
      </Reveal>

      <ol className="mt-16 border-t border-line">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.date}`} className="border-b border-line">
            <Reveal
              inView
              delay={index * 0.05}
              className="grid gap-5 py-8 md:grid-cols-12 md:py-10"
            >
              <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase md:col-span-3 md:pt-2">
                {experience.date}
              </p>
              <div className="md:col-span-9 lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white">
                    <LazyMount className="inline-flex h-7 w-7">
                      <Image
                        src={experience.icon}
                        alt=""
                        className="h-7 w-7 object-contain"
                        sizes="44px"
                      />
                    </LazyMount>
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{experience.title}</h3>
                    <p className="text-sm text-muted">{experience.company}</p>
                  </div>
                </div>
                <ul className="mt-5 flex max-w-2xl list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted marker:text-line">
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
