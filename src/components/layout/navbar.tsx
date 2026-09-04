"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Monogram } from "@/components/brand/monogram";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navLinks, sectionIds } from "@/content/nav";
import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // The active pill is positioned imperatively so it can slide between links
  // with a CSS transition instead of a layout-animation library.
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const pillPlaced = useRef(false);
  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    const place = () => {
      const link = nav.querySelector<HTMLElement>("[aria-current]");
      if (!link) {
        pill.style.opacity = "0";
        return;
      }
      if (!pillPlaced.current) {
        pill.style.transition = "none";
        pillPlaced.current = true;
        requestAnimationFrame(() => {
          pill.style.transition = "";
        });
      }
      pill.style.opacity = "1";
      pill.style.width = `${link.offsetWidth}px`;
      pill.style.transform = `translateX(${link.offsetLeft}px)`;
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [active]);

  const solid = scrolled || open;
  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        solid
          ? "border-line bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          onClick={close}
        >
          <Monogram className="h-7 w-7 transition-transform duration-500 ease-out-expo group-hover:rotate-[-6deg]" />
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        <nav
          ref={navRef}
          aria-label="Primary"
          className="relative hidden items-center gap-1 md:flex"
        >
          <span
            ref={pillRef}
            aria-hidden
            className="absolute top-0 left-0 h-full w-0 rounded-full bg-subtle opacity-0 transition-[transform,width,opacity] duration-500 ease-out-expo motion-reduce:transition-none"
          />
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <LinkButton href="#contact" size="sm" className="hidden md:inline-flex">
            Let&apos;s talk
          </LinkButton>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-subtle focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="animate-menu-in border-t border-line motion-reduce:animate-none md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={close}
                className={cn(
                  "rounded-lg px-3 py-3 text-base transition-colors hover:bg-subtle",
                  active === link.id ? "text-foreground" : "text-muted",
                )}
              >
                {link.label}
              </a>
            ))}
            <LinkButton href="#contact" onClick={close} className="mt-2">
              Let&apos;s talk
            </LinkButton>
          </Container>
        </nav>
      )}
    </header>
  );
}
