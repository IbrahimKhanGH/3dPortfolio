import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  portfolio,
  threejs,
  python,
  flask,
  java,
  cplusplus,
  Nutrishify,
  CaringGuide,
  EPICUSA,
  appTrack,
  RTWeather,
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
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Caring Guide",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "Developed critical pages (home, dashboard, journal) using a stack comprising React, TypeScript, TailwindCSS, Python, and Next.js, resulting in an optimized user experience, while Python and Next.js facilitated efficient data storage.",
      "Led the end-to-end website design, meticulously managing user profiles, favorite articles, and journal pages. The visually appealing dashboard page effectively enhanced user engagement and usability.",
      "Achieved milestones in website development with Node.js, optimizing data storage for future mobile app integration.",
      "Collaborated with a cross-functional team to conduct code reviews, identify performance bottlenecks, and implement enhancements, resulting in a highly stable and scalable web application.",
    ],
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "c++",
    icon: cplusplus,
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

const projects = [
  {
    name: "appTrack",
    description:
      "a web-based platform designed to simplify your job and internship application process. Connect with ease and effortlessly manage your applications in one centralized location. Stay organized, track deadlines, and gain valuable insights to optimize your career prospects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
    ],
    image: appTrack,
    source_code_link: "https://github.com/",
    deploy_link: "http://localhost:5173/",
  },
  
  {
    name: "Caring Guide",
    description:
      "Web-based platform and upcoming mobile app that connects individuals in need of care with experienced caregivers. It provides a mentoring-like program, allowing caregivers to learn from those who have firsthand experience in caring for individuals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: CaringGuide,
    source_code_link: "https://github.com/",
    deploy_link: "http://localhost:5173/",
  },
  {
    name: "Nutrishify",
    description:
      "Web-based platform that turns user Spotify data into dynamic nutrition labels, consisting of  top tracks, playlists, and even lyrics. Creating a new, fresh perspective on music consumption.",
    tags: [
      {
        name: "python-flask",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: Nutrishify,
    source_code_link: "https://github.com/IbrahimKhanGH/spotifytest",
    deploy_link: "Nutrishify-herokoapp.com",
  },
  {
    name: "EPIC USA Construction",
    description:
      "An intuitive platform that showcases a construction company's expertise, extensive portfolio, and core values. Streamlined for easy navigation, it offers a professional online presence to help the company grow and excel in the industry",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: EPICUSA,
    source_code_link: "https://github.com/",
    deploy_link: "http://localhost:5173/",
  },
  {
    name: "Portfolio",
    description:
      "The website you are on right now! This web app utilizes a dynamic and visually appealing presentation of my professional profile with interactive 3d models and animations that hopefully engage you!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "lightblue-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/IbrahimKhanGH/3dPortfolio",
    deploy_link: "IbrahimKhan.me",
  },
  {
    name: "Real Time Weather App",
    description:
      "Web Platform To display Real Time Weather data anywhere acorss the Globe. Utilizes device location as well as visual representation of current weather in given location.",
    tags: [
      {
        name: "javascript",
        color: "pink-text-gradient",
        
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: RTWeather,
    source_code_link: "https://github.com/",
    deploy_link: "http://localhost:5173/",
  },
];

export { services, technologies, projects, experiences };
