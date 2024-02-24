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
    sociopedia
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
        name:"java",
        type: "Programming"
    },
    {
        imageUrl: python,
        name:"python",
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
        imageUrl: firebase,
        name: "firebase",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
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
    },
    {
        imageUrl: prisma,
        name: "Prisma",
        type: "ORM",
    },
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
        iconUrl: sociopedia,
        theme: 'btn-back-green',
        name: 'Sociopedia',
        description: 'Socialmedia app where users can post and interact with their friends, comment on other ones post and make friends together establishing a vibrant community',
        link: 'https://github.com/rohithreddy009/sociopedia',
        liveLink: 'https://sociopedia.rohithreddy.site'
    },
    {
        iconUrl: wallet,
        theme: 'btn-back-blue',
        name: 'Web2 Wallet',
        description: 'A secure Digital Wallet to transfer and receive money to/from users',
        link: 'https://github.com/rohithreddy009/web2_wallet_archived',
        liveLink: 'https://web2-wallet.rohithreddy.site'
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-yellow',
        name: 'AuraTunes',
        description: 'Online music streaming web app',
        link: 'https://github.com/rohithreddy009/AuraTunes',
        liveLink: 'https://auratunes.rohithreddy.site'
    },
    
    
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];