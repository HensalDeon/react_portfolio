import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  firebase,
  git,
  figma,
  threejs,
  nextjs,
  brototype,
  trusttech,
  webandcrafts,
  traction,
  buzzgram,
  customcreation,
  animemaster,
  mudmaxanimations,
  sssl,
  trsutcapital,
  giftcards,
  sfm,
  familysub,
  keralarealtor,
  wac,
  eightysixmedia,
  nexsphere,
  mgps,
  goodseoul,
  blockchaincenter,
  aneco,
  gsu,
  mazaintrading,
  ecwrd,
} from "@/assets";

import type { StaticImageData } from "next/image";

export type Service = { title: string; description: string };
export type Technology = { name: string; icon: StaticImageData };
export type Experience = {
  title: string;
  company: string;
  icon: StaticImageData;
  date: string;
  points: string[];
};
export const projectCategories = ["Next.js", "React", "Webflow", "Three.js", "Other"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  category: ProjectCategory;
  name: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  liveUrl?: string;
  sourceUrl?: string;
};

export const services: Service[] = [
  {
    title: "Next.js and React",
    description:
      "Marketing sites and web apps on the App Router with TypeScript, Tailwind and headless CMS platforms such as Sanity.",
  },
  {
    title: "Webflow",
    description:
      "Design-faithful Webflow builds with CMS collections, interactions and a structure that stays maintainable.",
  },
  {
    title: "Node.js and APIs",
    description:
      "Express services, MongoDB data models and integrations for payments, email and third-party platforms.",
  },
  {
    title: "Performance and polish",
    description:
      "Fast loads, accessible markup, motion that respects the user and close attention to the design.",
  },
];

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const experiences: Experience[] = [
  {
    title: "Senior Web Developer",
    company: "Eighty Six Media",
    icon: eightysixmedia,
    date: "October 2025 - Present",
    points: [
      "Develop web applications using Webflow, React.js, and Next.js.",
      "Utilized TailwindCSS and CSS for responsive and scalable styling.",
    ],
  },
  {
    title: "Associate Software Developer",
    company: "Webandcrafts",
    icon: webandcrafts,
    date: "July 2024 - October 2025",
    points: [
      "Develop web applications using React.js and Next.js, focusing more on functionality than styling.",
      "Experienced with state management tools such as Recoil and Context.",
      "Integrated payment gateways like Checkout and Mastercard.",
      "Collaborated closely with the backend team to ensure smooth workflows.",
      "Worked with data fetching methods like SWR, GraphQL, and Axios.",
      "Utilized TailwindCSS, SCSS, and CSS for styling.",
    ],
  },
  {
    title: "Web Developer",
    company: "Trusttech",
    icon: trusttech,
    date: "Dec 2023 - July 2024",
    points: [
      "Developed Web applications using React Js, HTML5, SCSS, Tailwind CSS, Bootstrap,Javascript, Node.js, PHP and git/ github for version control and collaboration",
      "Collaborated with the design team using Figma to craft visually appealing and user-friendly web designs",
    ],
  },
  {
    title: "Mern stack Developer",
    company: "Brototype",
    icon: brototype,
    date: "Jan 2023 - Dec 2023",
    points: [
      "Skilled in frontend development with expertise in React.js, Redux, JavaScript, HTML5, CSS, Tailwind CSS, Bootstrap, Handlebars.js(hbs) and EJS.",
      "Developed web applications using modern backend technologies such as Node.js Express.js, MongoDB, NoSQL, SQL, Ajax, Axios and jQuery.",
      "Specialize in backend development using Node.js with Express.js framework and MongoDB(NoSQL) frontend development using React.js.",
      "Proficient in writing efficient database queries using ES6, enhancing application performance and reducing response times.",
      "Collaborated with the design team using Figma to create visually appealing and userfriendly web designs.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "ECWRD",
    category: "Other",
    description:
      "Developed a responsive and dynamic website for Emirates Council for Work Relation Development, a global workforce transformation partner working at the intersection of policy, innovation, and economic growth.",
    tags: ["WordPress", "Tailwind CSS", "CMS"],
    image: ecwrd,
    liveUrl: "https://ecwrd.ae/",
  },
  {
    name: "Mazain Sohar",
    category: "Next.js",
    description:
      "Built a modern and responsive procurement platform for Mazain Sohar, enabling industrial buyers to seamlessly connect with materials, tools, skilled manpower, and trusted suppliers through an efficient and user-friendly experience.",
    tags: ["Next.js", "Sanity", "TypeScript"],
    image: mazaintrading,
    liveUrl: "https://www.mazaintrading.com/",
  },
  {
    name: "MGPS",
    category: "Next.js",
    description:
      "Developed a responsive and dynamic website for Mahatma Gandhi Public School, focusing on smooth user experience, modern UI interactions, animated page transitions, and email functionality.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: mgps,
    liveUrl: "https://www.mgpschool.org/",
  },
  {
    name: "Global South Utilities",
    category: "Webflow",
    description:
      "Contributed as a frontend web developer to a modern, responsive website for GSU, focused on energy and water infrastructure solutions across the Global South. Built Webflow CMS content flows with smooth text transitions and engaging element animations.",
    tags: ["Webflow", "JavaScript", "CMS"],
    image: gsu,
    liveUrl: "https://www.gsu.ae/",
  },
  {
    name: "Aneco",
    category: "Webflow",
    description:
      "Developed a modern and responsive website for ANECO, a company specializing in advanced, chemical-free water treatment and disinfection technologies. Built the complete Webflow site with CMS-managed content, smooth transitions, and device-friendly layouts.",
    tags: ["Webflow", "JavaScript", "CMS"],
    image: aneco,
    liveUrl: "https://aneco-me.ae/",
  },
  {
    name: "Blockchain Center",
    category: "Webflow",
    description:
      "Developed a modern website for a blockchain organization with interactive elements, custom JavaScript enhancements, and dynamic CMS content while ensuring responsive and consistent design across devices.",
    tags: ["Webflow", "JavaScript", "CMS"],
    image: blockchaincenter,
    liveUrl: "https://www.theblockchaincenter.ae/",
  },
  {
    name: "Good Seoul",
    category: "Webflow",
    description:
      "Collaborated with the team to develop a visually rich, food-focused 3D website with immersive interactions, Spline scenes, custom JavaScript enhancements, smooth animations, and CMS-managed dynamic content.",
    tags: ["Webflow", "Spline", "JavaScript"],
    image: goodseoul,
    liveUrl: "https://goodseoul.com",
  },
  {
    name: "Nexsphere",
    category: "Next.js",
    description:
      "Nexsphere is a creative digital agency website focused on Brand, Design, Product, and In-House Development. Built with a modern UI experience, it showcases services like branding, UI/UX, motion, animation, and marketing with sleek interactive visuals.",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    image: nexsphere,
    liveUrl: "https://nexsphere.vercel.app",
  },

  {
    name: "WACpro",
    category: "React",
    description:
      "WACpro is an internal dashboard resembling an ERP system designed for company management. It features multiple modules like admin, accounts, assets, calls, campaigns, clients, HR, meetings, project management, sales, settings, team management, time tracking, and AI integrations, providing a comprehensive, centralized control center.",
    tags: ["React", "SWR", "Python"],
    image: wac,
    liveUrl: "https://pro.webandcrafts.com",
  },
  {
    name: "Keralarealtor",
    category: "Next.js",
    description:
      "Keralarealtor is a dedicated real estate platform focused exclusively on Kerala. It helps users seamlessly discover properties including villas, flats, houses, and commercial buildings for sale, rent, or lease. With a user-friendly interface and powerful filters, it simplifies the property hunt like never before.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: keralarealtor,
    liveUrl: "https://keralarealtor.in",
  },
  {
    name: "IKEA - SFM",
    category: "React",
    description:
      "Swedish Food Market brings the taste of Sweden to your doorstep across UAE, Qatar, Oman, and Egypt. This intuitive PWA allows customers to explore and order authentic IKEA food items for delivery, with a smooth and responsive experience across all devices.",
    tags: ["PWA Studio", "GraphQL", "SCSS"],
    image: sfm,
    liveUrl: "https://food.ikea.ae",
  },
  {
    name: "IKEA - Giftcards",
    category: "React",
    description:
      "Giftcards revolutionizes the way you shop across UAE, Qatar, Oman, and Egypt. Imagine a platform where purchasing gift cards is effortless, where browsing options is seamless Whether you’re gifting or treating yourself, this platform gives a smooth and responsive experience on any device.",
    tags: ["React", "SCSS", "Payments"],
    image: giftcards,
    liveUrl: "https://giftcards.ikea.ae/en",
  },
  {
    name: "IKEA - Family Delivery",
    category: "React",
    description:
      "Family Delivery transforms the way families enjoy services across Qatar and the UAE. Imagine a subscription where every family member enjoys shared rewards and benefits, making deliveries easier and more convenient.With one plan, everyone experiences seamless service.",
    tags: ["React", "SCSS", "Payments"],
    image: familysub,
    liveUrl: "https://subscribe.family.ikea.qa/en",
  },
  {
    name: "Simple Search Solutions",
    category: "React",
    description:
      "Simple Search Solutions sets the new standard for navigating the job market. Imagine a platform where job hunting feels like a breeze, where interaction with job listings is intuitive, and where your journey is seamlessly responsive across all your devices. ",
    tags: ["React", "Python", "Django"],
    image: sssl,
    sourceUrl: "https://github.com/HensalDeon/SimpleSearchSolutions",
  },
  {
    name: "BuzzGram",
    category: "React",
    description:
      "Buzzgram redefines the social media experience. Think endless scrolling for seamless content discovery, beautifully designed user profiles, the ability to report and interact with posts, and a fully responsive design for a smooth user journey across all devices.",
    tags: ["React", "MongoDB", "Node.js"],
    image: buzzgram,
    sourceUrl: "https://github.com/HensalDeon/BuzzGram",
  },
  {
    name: "Mudmax Animations",
    category: "Three.js",
    description:
      "A dynamic React website for an institute specializing in animation and VFX, providing a comprehensive platform to showcase their courses and services.Technologies used Tailwind CSS, Framer Motion, Formik, Yup, Toastify, Node.js, JavaScript, JWT, Express.js, MongoDB, Firebase, etc.",
    tags: ["Three.js", "React", "Node.js"],
    image: mudmaxanimations,
    liveUrl: "https://mudmaxanimations.com/",
  },
  {
    name: "T - CraftStudio",
    category: "Three.js",
    description:
      "T-CraftStudio is a cutting-edge 3D web application that allows users to customize and visualize their own unique T-shirt designs in real-time. Built with Vite, React.js, Three.js, React Three Fibre, React Three Drei, Framer Motion, and styled with Tailwind CSS. Deliver an interactive user experience.",
    tags: ["Three.js", "React", "Node.js"],
    image: customcreation,
    liveUrl: "https://t-craftstudio.netlify.app/",
  },
  {
    name: "Trust Capital",
    category: "Other",
    description:
      "Trust Capital is a trading platform dedicated to equipping traders worldwide with the tools, knowledge, and support they need to achieve their financial goals. Technologies used are HTML, CSS, Tailwind CSS, JavaScript, Laravel and PHP. Collaborated with the team to ensure seamless user experience",
    tags: ["HTML5", "Laravel", "Tailwind CSS"],
    image: trsutcapital,
    liveUrl: "https://trustcapital.ae/",
  },
  {
    name: "Traction",
    category: "Other",
    description:
      "An expansive e-commerce platform specializing in remote-controlled car toys, enabling customers to browse, purchase, and explore a wide selection of high-quality RC cars, trucks, and accessories, while also providing expert recommendations for thrilling remote car adventures.",
    tags: ["Node.js", "MongoDB", "CSS"],
    image: traction,
    sourceUrl: "https://github.com/HensalDeon/TRACTION",
  },
  {
    name: "AnimeMaster",
    category: "Next.js",
    description:
      "AnimeMaster is a responsive web app built with Next.js, TypeScript, Framer Motion and Tailwind css to showcase a curated collection of animes based on popularity. The project includes features such as responsiveness, popularity sorting, and an engaging infinite scroll.",
    tags: ["Next.js", "Node.js", "Tailwind CSS"],
    image: animemaster,
    sourceUrl: "https://github.com/HensalDeon/anime_master",
  },
];
