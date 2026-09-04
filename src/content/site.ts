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
  socials: [
    { label: "GitHub", href: "https://github.com/HensalDeon" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hensal-deon-472883227/" },
  ],
  since: 2023,
} as const;
