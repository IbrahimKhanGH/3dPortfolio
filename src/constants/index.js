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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI/UX",
    icon: mobile,
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
    deploy_link: "http://localhost:5173/"
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
    deploy_link: "Nutrishify-herokoapp.com"
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
    deploy_link: "http://localhost:5173/"
  },
];

export { services, technologies, projects };
