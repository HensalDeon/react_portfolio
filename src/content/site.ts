export const site = {
  name: "Hensal Deon",
  firstName: "Hensal",
  role: "Senior Web Developer",
  company: "Eighty Six Media",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Fast, considered web experiences for ambitious brands.",
  description:
    "Hensal Deon is a senior web developer building marketing sites and web products with Next.js, Webflow and headless CMS platforms.",
  intro:
    "I'm Hensal, a senior web developer at Eighty Six Media. I build marketing sites and web products with Next.js, Webflow and headless CMS platforms, with recent work for IKEA, Mazain Sohar and the Blockchain Center.",
  about: [
    "I started in 2023 building MERN applications and quickly moved into agency work, where I have shipped e-commerce, gift card and subscription experiences for IKEA across the Gulf, procurement and education platforms on Next.js, and a run of Webflow sites for brands in the UAE.",
    "I care about the parts people feel but rarely name: load times, layout that holds together on every screen, motion that guides instead of distracts, and code the next developer can read. I work closely with designers and backend teams, and I am comfortable owning a build from first wireframe to launch.",
  ],
  contactBlurb:
    "Have a project in mind, or want to talk about a role? Send a note and I will get back to you soon.",
  socials: [
    { label: "GitHub", href: "https://github.com/HensalDeon" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hensal-deon-472883227/" },
  ],
  since: 2023,
} as const;
