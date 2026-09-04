"use client";

import { ArrowUpRight, Code } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { projectCategories, type Project, type ProjectCategory } from "@/content/data";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

const INITIAL_VISIBLE = 9;

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", projects.length]]);
    for (const project of projects) {
      map.set(project.category, (map.get(project.category) ?? 0) + 1);
    }
    return map;
  }, [projects]);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const truncated = filter === "All" && !expanded && filtered.length > INITIAL_VISIBLE;
  const visible = truncated ? filtered.slice(0, INITIAL_VISIBLE) : filtered;

  const filters: Filter[] = ["All", ...projectCategories.filter((c) => counts.has(c))];

  return (
    <div className="mt-12">
      <div
        role="group"
        aria-label="Filter projects by platform"
        className="flex flex-wrap gap-2 border-b border-line pb-6"
      >
        {filters.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none",
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-line text-muted hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {option}
              <span
                className={cn(
                  "font-mono text-[11px] tabular-nums",
                  active ? "text-background/70" : "text-muted/70",
                )}
              >
                {counts.get(option)}
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.name}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {truncated && (
        <div className="mt-12 flex justify-center">
          <Button variant="secondary" onClick={() => setExpanded(true)}>
            Show all {filtered.length} projects
          </Button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.sourceUrl;
  const isSource = !project.liveUrl && Boolean(project.sourceUrl);
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="group flex h-full flex-col rounded-2xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
    >
      <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-subtle">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
        />
      </figure>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium tracking-tight">{project.name}</h3>
          {href && (
            <span className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-foreground">
              {isSource ? (
                <Code className="h-4 w-4" aria-hidden />
              ) : (
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              )}
              <span className="sr-only">{isSource ? "View source" : "Open live site"}</span>
            </span>
          )}
        </div>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
