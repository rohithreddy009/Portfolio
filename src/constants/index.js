import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    c,
    recoil,
    postgres,
    firebase,
    docker,
    nginx,
    prisma,
    spotify,
    wallet,
    sociopedia,
    hono,
    blog,
    redis,
    live
} from "../assets/icons";



export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name:"Java",
        type: "Programming"
    },
    {
        imageUrl: python,
        name:"Python",
        type: "Programming"
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "Postgres",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "redis",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "firebase",
        type: "Database",
    },
    {
        imageUrl: prisma,
        name: "Prisma",
        type: "ORM",
    },
    {
        imageUrl: express,
        name: "express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: hono,
        name: "Hono",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: recoil,
        name: "Recoil",
        type: "State Management",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "N/A",
    },
    {
        imageUrl: nginx,
        name: "Nginx",
        type: "N/A",
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/rohithreddy009',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/yrohithreddy',
    }
];

export const projects = [
    {
        iconUrl: live,
        theme: 'btn-back-black',
        name: 'LiveMeet',
        description: 'Video conferencing tool enables users to securely login, create meetings, access recordings, screenshare and managing participants',
        link: 'https://github.com/rohithreddy009/LiveMeet',
        liveLink: 'https://livemeet.rohithreddy.site',
        techStack: "TechStack: NextJS, Stream, Shadcn, TailwindCSS, Clerk, Typescript"
    },
    {
        iconUrl: sociopedia,
        theme: 'btn-back-green',
        name: 'Sociopedia',
        description: 'Socialmedia app where users can post and interact with their friends, comment on other ones post and make friends together',
        link: 'https://github.com/rohithreddy009/sociopedia',
        liveLink: 'https://sociopedia.rohithreddy.site',
        techStack: "TechStack: MongoDB, Express, React, Redux, MaterialUI"
    },
    {
        iconUrl: wallet,
        theme: 'btn-back-blue',
        name: 'Web Wallet',
        description: 'A secure Digital Wallet to transfer and receive money between users',
        link: 'https://github.com/rohithreddy009/web2_wallet_archived',
        liveLink: 'https://web2-wallet.rohithreddy.site',
        techStack: "TechStack: MongoDB, Express, React, TailwindCSS"
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-yellow',
        name: 'AuraTunes',
        description: 'Online music streaming web app',
        link: 'https://github.com/rohithreddy009/AuraTunes',
        liveLink: 'https://auratunes.rohithreddy.site',
        techStack: "TechStack: React, Express, TailwindCSS"
    },
    {
        iconUrl: blog,
        theme: 'btn-back-pink',
        name: 'Blogger',
        description: 'Blogger is an online publishing platform where users can read, write, and interact with articles covering a wide range of topics.',
        link: 'https://github.com/rohithreddy009/Medium',
        liveLink: "https://blogger.rohithreddy.site",
        techStack: "TechStack: Typescript, PostgreSQL, Prisma(ORM), Cloudflare Workers, Hono, React, TailwindCSS"
    },
];