import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

const credits = [
  { label: "Desktop model", author: "Yolala1232", href: "https://sketchfab.com/Yolala1232" },
  { label: "Planet model", author: "cmzw", href: "https://sketchfab.com/cmzw" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-3 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {credits.map((credit, index) => (
            <span key={credit.author}>
              {index > 0 && ", "}
              {credit.label} by{" "}
              <a
                href={credit.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
              >
                {credit.author}
              </a>
            </span>
          ))}
          , CC BY 4.0
        </p>
      </Container>
    </footer>
  );
}
