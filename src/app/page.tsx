import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <PlaceholderSection
          id="about"
          eyebrow="About"
          title="A developer who cares about the details."
          note="This section is being rebuilt as part of the redesign."
        />
        <PlaceholderSection
          id="work"
          eyebrow="Experience"
          title="Where I have worked."
          note="This section is being rebuilt as part of the redesign."
        />
        <PlaceholderSection
          id="projects"
          eyebrow="Selected work"
          title="Projects I have shipped."
          note="This section is being rebuilt as part of the redesign."
        />
        <PlaceholderSection
          id="contact"
          eyebrow="Contact"
          title="Let's build something."
          note="This section is being rebuilt as part of the redesign."
        />
      </main>
      <Footer />
    </>
  );
}
