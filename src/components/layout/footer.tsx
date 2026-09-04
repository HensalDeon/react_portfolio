import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-3 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>
          3D desktop model by{" "}
          <a
            href="https://sketchfab.com/Yolala1232"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
          >
            Yolala1232
          </a>
          , CC BY 4.0
        </p>
      </Container>
    </footer>
  );
}
