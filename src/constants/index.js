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
    brototype,
    traction,
    textutils,
    netflixclone,
    threejs,
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
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
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
    {
        name: "Java",
        icon: java,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
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
    {
        name: "Postgresql",
        icon: postgresql,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
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
        title: "Mern stack Developer (Intern)",
        company_name: "Brototype",
        icon: brototype,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Learning and gaining hands-on experience in web development using React.js and other related technologies during my bootcamp at Brototype.",
            "Engaging in collaborative projects with fellow bootcamp participants, including designers and mentors, to build web applications and hone my skills.",
            "Exploring responsive design principles and practicing cross-browser compatibility to create user-friendly web experiences.",
            "Actively participating in code reviews and embracing feedback from experienced developers to enhance my coding proficiency.",
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
    {
        name: "TextUtils",
        description:
            "An advanced text analysis and counting application designed to empower users with the ability to analyze and count words, characters, and various linguistic patterns in their texts, while also offering insights and recommendations for enhancing written content.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: textutils,
        source_code_link: "https://github.com/HensalDeon/textutils",
    },
];

export { services, technologies, experiences, testimonials, projects };
