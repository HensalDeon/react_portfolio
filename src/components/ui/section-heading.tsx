import { Parallax } from "@/components/ui/parallax";
import { SplitLines } from "@/components/ui/split-lines";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl w-full">
      <Parallax range={[12, -12]}>
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{eyebrow}</p>
      </Parallax>
      <SplitLines
        as="h2"
        text={title}
        className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl"
      />
    </div>
  );
}
