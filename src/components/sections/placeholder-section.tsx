import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SectionId } from "@/content/nav";

type PlaceholderSectionProps = {
  id: SectionId;
  eyebrow: string;
  title: string;
  note: string;
};

/** Temporary stand-in so navigation anchors resolve while sections are rebuilt. */
export function PlaceholderSection({ id, eyebrow, title, note }: PlaceholderSectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <p className="mt-6 max-w-xl text-muted">{note}</p>
      </Container>
    </section>
  );
}
