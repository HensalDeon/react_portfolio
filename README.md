# Hensal Deon Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4 and React Three Fiber. Hero, about, experience, a filterable project grid and a contact form backed by EmailJS, behind a branded curtain preloader.

## Stack

| Area      | Choice                                                                      |
| --------- | --------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, static rendering), React 19                         |
| Language  | TypeScript, strict mode                                                     |
| Styling   | Tailwind CSS 4 with CSS variable design tokens                              |
| Motion    | CSS keyframes and IntersectionObserver-driven reveals, no animation library |
| 3D        | Three.js, React Three Fiber 9, Drei, Draco compressed glTF                  |
| Theming   | next-themes, light and dark with system default                             |
| Fonts     | Geist Sans, Geist Mono, Instrument Serif via `next/font`                    |
| Tooling   | ESLint 9 flat config, Prettier with Tailwind plugin                         |
| Hosting   | Netlify, via `@netlify/plugin-nextjs`                                       |

## Getting started

```bash
npm install
cp .env.example .env   # then fill in values
npm run dev
```

The site runs at `http://localhost:3000`.

## Scripts

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the development server        |
| `npm run build`        | Production build with type checking |
| `npm run start`        | Serve the production build          |
| `npm run lint`         | ESLint                              |
| `npm run typecheck`    | TypeScript without emitting         |
| `npm run format`       | Prettier, write mode                |
| `npm run format:check` | Prettier, check mode                |

## Environment variables

| Variable                          | Purpose                                        |
| --------------------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | Canonical URL used for metadata and Open Graph |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS service for the contact form           |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template for the contact form          |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS public key                             |

## Project structure

```
src/
├── app/                  # App Router: layout, page, globals.css, OG image, favicon (icon.svg, apple-icon.tsx)
├── assets/               # Static image imports (typed via next/image), grouped into projects/, tech/, company/
├── components/
│   ├── brand/            # HD monogram and the curtain preloader
│   ├── layout/           # Navbar, theme toggle, footer
│   ├── sections/         # Hero, about, experience, projects, contact
│   ├── three/            # React Three Fiber scenes and error boundary
│   ├── ui/               # Container, buttons, reveal, section heading
│   └── providers/        # Theme provider
├── content/              # Typed site content: site.ts, nav.ts, data.ts
├── hooks/                # useScrolled, useActiveSection, useMounted
└── lib/                  # Small utilities
public/
├── draco/                # Self-hosted Draco decoder for compressed models
└── models/               # Compressed glTF binaries and their licences
```

## Content

All copy and data lives in `src/content/`. Edit `site.ts` for name, role, tagline and social links, and `data.ts` for services, technologies, experience and projects. Images are imported through `src/assets/index.ts` so they get width, height and blur placeholders automatically. Screenshots are WebP at 1200px wide and icons at 128px, which keeps the whole folder near 1 MB.

## Brand

The mark is a stroke-built HD monogram (`src/components/brand/monogram.tsx`): the H's right leg doubles as the D's spine, with the crossbar in the accent colour. The same strokes drive the favicon (`src/app/icon.svg`, OS-aware light/dark), the Apple touch icon and Open Graph image (both generated with `next/og`), and the curtain preloader (`src/components/brand/preloader.tsx`), which draws the mark in on load before the page is revealed. Hero entrance animations read the `--intro-delay` CSS variable (`src/components/brand/intro.ts`) so they play in step with the curtain lifting.

## 3D models

Models in `public/models/` are compressed copies of the Sketchfab originals (Draco geometry, WebP textures capped at 1024px). They were produced with:

```bash
npx @gltf-transform/cli optimize scene.gltf out.glb --compress draco --texture-compress webp --texture-size 1024
```

Both models are CC BY 4.0. Attribution is in `public/models/LICENSES.md` and shown in the site footer.

## Deployment

Deployed to Netlify via `@netlify/plugin-nextjs` (configured in `netlify.toml`); any Next.js host works otherwise, and Vercel needs no configuration. Set `NEXT_PUBLIC_SITE_URL` to the production domain so Open Graph URLs resolve correctly.

## Contact

- [LinkedIn](https://www.linkedin.com/in/hensal-deon-472883227/)
- [GitHub](https://github.com/HensalDeon)
