import { ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { PlanetScene } from "@/components/three/planet-scene";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" containerClassName="grid gap-14 lg:grid-cols-12 lg:gap-8">
      <Reveal inView className="lg:col-span-6">
        <SectionHeading eyebrow="Contact" title="Let's build something." />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{site.contactBlurb}</p>
        <ContactForm />
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.15em] uppercase">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
              >
                {social.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal inView delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:self-center">
        <Parallax range={[48, -48]}>
          <PlanetScene />
        </Parallax>
      </Reveal>
    </Section>
  );
}
