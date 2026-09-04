import { ArrowDown, ArrowUpRight } from "lucide-react";

import { HeroScene } from "@/components/three/hero-scene";
import { LinkButton } from "@/components/ui/button";
import { Parallax } from "@/components/ui/parallax";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { experiences, projects } from "@/content/data";
import { site } from "@/content/site";

const headline = [
  <>
    Fast, <em className="text-accent">considered</em>
  </>,
  "web experiences for",
  "ambitious brands.",
];

const stats = [
  { value: `${projects.length}+`, label: "Projects shipped" },
  { value: String(experiences.length), label: "Teams worked with" },
  { value: String(site.since), label: "Building for the web since" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid min-h-svh grid-cols-1 items-center gap-12 pt-28 pb-12 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {site.role} at {site.company}
            </p>
          </Reveal>

          <h1 className="flex flex-col font-serif text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
            <span className="sr-only">Fast, considered web experiences for ambitious brands.</span>
            {headline.map((line, index) => (
              <span
                key={index}
                aria-hidden
                className="-my-[0.15em] block overflow-hidden py-[0.15em]"
              >
                <span
                  className="block animate-line-up motion-reduce:animate-none"
                  style={{ animationDelay: `${0.1 + index * 0.08}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton href="#projects">
                Selected work
                <ArrowDown className="h-4 w-4" aria-hidden />
              </LinkButton>
              <LinkButton href="#contact" variant="secondary">
                Get in touch
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.15em] uppercase">
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
        </div>

        <Reveal delay={0.25} className="lg:col-span-5">
          <Parallax offset="top-exit" range={[0, -64]}>
            <HeroScene />
          </Parallax>
        </Reveal>
      </Container>

      <Container>
        <div className="flex flex-col gap-6 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="order-2 font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                  {stat.label}
                </dt>
                <dd className="order-1 font-serif text-3xl leading-none">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#about"
            className="inline-flex items-center gap-3 self-start font-mono text-[11px] tracking-[0.15em] text-muted uppercase transition-colors hover:text-foreground sm:self-auto"
          >
            Scroll
            <span className="relative block h-10 w-px overflow-hidden bg-line" aria-hidden>
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-hint_1.8s_ease-in-out_infinite] bg-foreground motion-reduce:animate-none" />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
