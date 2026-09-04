# Hensal Deon Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion and React Three Fiber.

> **Status:** mid-redesign on the `feat/nextjs-revamp` branch. The foundation, navigation and hero are complete. About, Experience, Projects and Contact are placeholders and will be rebuilt next.

## Stack

| Area      | Choice                                                     |
| --------- | ---------------------------------------------------------- |
| Framework | Next.js 16 (App Router, static rendering), React 19        |
| Language  | TypeScript, strict mode                                    |
| Styling   | Tailwind CSS 4 with CSS variable design tokens             |
| Motion    | Motion (formerly Framer Motion)                            |
| 3D        | Three.js, React Three Fiber 9, Drei, Draco compressed glTF |
| Theming   | next-themes, light and dark with system default            |
| Fonts     | Geist Sans, Geist Mono, Instrument Serif via `next/font`   |
| Tooling   | ESLint 9 flat config, Prettier with Tailwind plugin        |

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
├── app/                  # App Router: layout, page, globals.css, OG image, favicon
├── assets/               # Static image imports (typed via next/image)
├── components/
│   ├── layout/           # Navbar, theme toggle, footer
│   ├── sections/         # Page sections (hero, placeholders)
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

All copy and data lives in `src/content/`. Edit `site.ts` for name, role, tagline and social links, and `data.ts` for services, technologies, experience and projects. Images are imported through `src/assets/index.ts` so they get width, height and blur placeholders automatically.

## 3D models

Models in `public/models/` are compressed copies of the Sketchfab originals (Draco geometry, WebP textures capped at 1024px). They were produced with:

```bash
npx @gltf-transform/cli optimize scene.gltf out.glb --compress draco --texture-compress webp --texture-size 1024
```

Both models are CC BY 4.0. Attribution is in `public/models/LICENSES.md` and shown in the site footer.

## Deployment

Any Next.js host works. Vercel needs no configuration. Set `NEXT_PUBLIC_SITE_URL` to the production domain so Open Graph URLs resolve correctly.

## Contact

- [LinkedIn](https://www.linkedin.com/in/hensal-deon-472883227/)
- [GitHub](https://github.com/HensalDeon)
