type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">{title}</h2>
    </div>
  );
}
