import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    bootstrap,
    nodejs,
    mongodb,
    postgresql,
    firebase,
    git,
    figma,
    docker,
    threejs,
    nextjs,
    brototype,
    trusttech,
    webandcrafts,
    traction,
    buzzgram,
    textutils,
    netflixclone,
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
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "React Js Developer",
        icon: mobile,
    },
    {
        title: "Next Js Developer",
        icon: web,
    },
    {
        title: "Node Js Developer",
        icon: backend,
    },
    {
        title: "Full Stack Developer",
        icon: creator,
    },
];

const technologies = [
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
    // {
    //   name: "Java",
    //   icon: java,
    // },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
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
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    // {
    //   name: "Postgresql",
    //   icon: postgresql,
    // },
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

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Webandcrafts",
        icon: webandcrafts,
        iconBg: "#fff",
        date: "July 2024 - Present",
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
        company_name: "Trusttech",
        icon: trusttech,
        iconBg: "#356BB2",
        date: "Dec 2023 - July 2024",
        points: [
            "Developed Web applications using React Js, HTML5, SCSS, Tailwind CSS, Bootstrap,Javascript, Node.js, PHP and git/ github for version control and collaboration",
            "Collaborated with the design team using Figma to craft visually appealing and user-friendly web designs",
        ],
    },
    {
        title: "Mern stack Developer",
        company_name: "Brototype",
        icon: brototype,
        iconBg: "#E6DEDD",
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

const testimonials = [
    {
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "WACpro",
        description:
            "WACpro is an internal dashboard resembling an ERP system designed for company management. It features multiple modules like admin, accounts, assets, calls, campaigns, clients, HR, meetings, project management, sales, settings, team management, time tracking, and AI integrations, providing a comprehensive, centralized control center.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "SWR",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "pink-text-gradient",
            },
        ],
        image: wac,
        live_link: "https://pro.webandcrafts.com",
    },
    {
        name: "Keralarealtor",
        description:
            "Keralarealtor is a dedicated real estate platform focused exclusively on Kerala. It helps users seamlessly discover properties including villas, flats, houses, and commercial buildings for sale, rent, or lease. With a user-friendly interface and powerful filters, it simplifies the property hunt like never before.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Node.js",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: keralarealtor,
        live_link: "https://keralarealtor.in",
    },
    {
        name: "IKEA - SFM",
        description:
            "Swedish Food Market brings the taste of Sweden to your doorstep across UAE, Qatar, Oman, and Egypt. This intuitive PWA allows customers to explore and order authentic IKEA food items for delivery, with a smooth and responsive experience across all devices.",
        tags: [
            {
                name: "pwa venia react",
                color: "blue-text-gradient",
            },
            {
                name: "graphQL",
                color: "pink-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            },
        ],
        image: sfm,
        live_link: "https://food.ikea.ae",
    },
    {
        name: "IKEA - Giftcards",
        description:
            "Giftcards revolutionizes the way you shop across UAE, Qatar, Oman, and Egypt. Imagine a platform where purchasing gift cards is effortless, where browsing options is seamless Whether you’re gifting or treating yourself, this platform gives a smooth and responsive experience on any device.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            },
            {
                name: "checkout, mastercard",
                color: "pink-text-gradient",
            },
        ],
        image: giftcards,
        live_link: "https://ikea-giftstaging.webc.in/en",
    },
    {
        name: "IKEA - Family Delivery",
        description:
            "Family Delivery transforms the way families enjoy services across Qatar and the UAE. Imagine a subscription where every family member enjoys shared rewards and benefits, making deliveries easier and more convenient.With one plan, everyone experiences seamless service.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            },
            {
                name: "checkout, mastercard",
                color: "pink-text-gradient",
            },
        ],
        image: familysub,
        live_link: "https://4532subscribe.family.ikea.qa/en",
    },
    {
        name: "Simple Search Solutions",
        description:
            "Simple Search Solutions sets the new standard for navigating the job market. Imagine a platform where job hunting feels like a breeze, where interaction with job listings is intuitive, and where your journey is seamlessly responsive across all your devices. ",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "django",
                color: "pink-text-gradient",
            },
        ],
        image: sssl,
        source_code_link: "https://github.com/HensalDeon/SimpleSearchSolutions",
    },
    {
        name: "BuzzGram",
        description:
            "Buzzgram redefines the social media experience. Think endless scrolling for seamless content discovery, beautifully designed user profiles, the ability to report and interact with posts, and a fully responsive design for a smooth user journey across all devices.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
        ],
        image: buzzgram,
        source_code_link: "https://github.com/HensalDeon/BuzzGram",
    },
    {
        name: "Mudmax Animations",
        description:
            "A dynamic React website for an institute specializing in animation and VFX, providing a comprehensive platform to showcase their courses and services.Technologies used Tailwind CSS, Framer Motion, Formik, Yup, Toastify, Node.js, JavaScript, JWT, Express.js, MongoDB, Firebase, etc.",
        tags: [
            {
                name: "three.js",
                color: "blue-text-gradient",
            },
            {
                name: "react.js",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
        ],
        image: mudmaxanimations,
        live_link: "https://mudmaxanimations.com/",
    },
    {
        name: "T - CraftStudio",
        description:
            "T-CraftStudio is a cutting-edge 3D web application that allows users to customize and visualize their own unique T-shirt designs in real-time. Built with Vite, React.js, Three.js, React Three Fibre, React Three Drei, Framer Motion, and styled with Tailwind CSS. Deliver an interactive user experience.",
        tags: [
            {
                name: "three.js",
                color: "blue-text-gradient",
            },
            {
                name: "react.js",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
        ],
        image: customcreation,
        live_link: "https://t-craftstudio.netlify.app/",
    },
    {
        name: "Trust Capital",
        description:
            "Trust Capital is a trading platform dedicated to equipping traders worldwide with the tools, knowledge, and support they need to achieve their financial goals. Technologies used are HTML, CSS, Tailwind CSS, JavaScript, Laravel and PHP. Collaborated with the team to ensure seamless user experience",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "laravel",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: trsutcapital,
        source_code_link: "https://github.com",
    },
    {
        name: "Traction",
        description:
            "An expansive e-commerce platform specializing in remote-controlled car toys, enabling customers to browse, purchase, and explore a wide selection of high-quality RC cars, trucks, and accessories, while also providing expert recommendations for thrilling remote car adventures.",
        tags: [
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: traction,
        source_code_link: "https://github.com/HensalDeon/TRACTION",
    },
    {
        name: "AnimeMaster",
        description:
            "AnimeMaster is a responsive web app built with Next.js, TypeScript, Framer Motion and Tailwind css to showcase a curated collection of animes based on popularity. The project includes features such as responsiveness, popularity sorting, and an engaging infinite scroll.",
        tags: [
            {
                name: "next.js",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: animemaster,
        live_link: "https://animemaster.vercel.app",
    },
    {
        name: "Netflix Clone",
        description:
            "A cutting-edge Netflix clone project, offering users a seamless streaming experience with a vast library of movies, TV shows, and original content, all complemented by personalized recommendations and user-friendly features for an immersive entertainment journey.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: netflixclone,
        source_code_link: "https://github.com/HensalDeon/netflix-replica",
    },
];

const contactInputs = [
    {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "What's your good name?",
    },
    {
        label: "email",
        type: "email",
        name: "email",
        placeholder: "What's your web address?",
    },
    {
        label: "Message",
        type: "textarea",
        name: "message",
        placeholder: "What you want to say?",
    },
];
export { services, technologies, experiences, testimonials, projects, contactInputs };
