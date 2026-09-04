import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * The HD monogram. Both letters are built from strokes on a 64-unit grid and
 * share one stem: the right leg of the H doubles as the spine of the D. The
 * crossbar carries the accent colour. Every path is normalised to a length of
 * one so the preloader can draw the strokes with a single dash animation.
 */
export const monogramStrokes = [
  { d: "M9 11V53", accent: false },
  { d: "M9 32H29", accent: true },
  { d: "M29 11V53", accent: false },
  { d: "M29 11H34A21 21 0 0 1 34 53H29", accent: false },
] as const;

export const MONOGRAM_VIEWBOX = "0 0 64 64";
export const MONOGRAM_STROKE = 5.5;

type MonogramProps = Omit<ComponentProps<"svg">, "children"> & {
  /** Accessible name. Omit when the mark is decorative. */
  title?: string;
};

export function Monogram({ className, title, ...props }: MonogramProps) {
  return (
    <svg
      viewBox={MONOGRAM_VIEWBOX}
      fill="none"
      stroke="currentColor"
      strokeWidth={MONOGRAM_STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={cn("shrink-0", className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {monogramStrokes.map((stroke) => (
        <path
          key={stroke.d}
          d={stroke.d}
          pathLength={1}
          className={stroke.accent ? "stroke-accent" : undefined}
        />
      ))}
    </svg>
  );
}

type MonogramSvgOptions = {
  foreground: string;
  accent: string;
  strokeWidth?: number;
};

/** Standalone SVG markup for places that cannot render React, such as data URLs. */
export function monogramSvg({
  foreground,
  accent,
  strokeWidth = MONOGRAM_STROKE,
}: MonogramSvgOptions): string {
  const paths = monogramStrokes
    .map((stroke) => `<path d="${stroke.d}"${stroke.accent ? ` stroke="${accent}"` : ""}/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MONOGRAM_VIEWBOX}" fill="none" stroke="${foreground}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

export function monogramDataUrl(options: MonogramSvgOptions): string {
  return `data:image/svg+xml;base64,${btoa(monogramSvg(options))}`;
}
