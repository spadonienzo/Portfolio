import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "rick-and-morty",
    title: "Rick And Morty",
    description:
      "Project developed using React, Redux on the front end. It involves fetching data from an API and displaying it on the screen. It has user managament with a signup and login interface. Additionally, users can filter, create new characters and search through the data. On the backend, Node.js and MongoDB were employed to create an API enabling user creation and the ability to save favorites.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/spadonienzo/Rick-And-Morty",
    url: "https://rick-and-morty-espadoni.vercel.app/",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    id: "emaily",
    title: "Emaily",
    description:
      "This project is a full-stack web application for managing and distributing online surveys. I built it using React and Redux on the front end, with a Node.js and Express backend and a MongoDB database. The platform allows registered users to create an account, purchase credits through a secure Stripe payment gateway, and use those credits to send customized survey emails to their recipients.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/spadonienzo/emaily",
    url: "https://emaily-3ue6.onrender.com/",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "Stripe", "MongoDB"],
  },
  {
    id: "fenice",
    title: "Fenice",
    description: "A website for a dental center using React.js, Tailwind.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://github.com/nixrajput/video-calling-app-flutter/releases",
    tags: ["React.js", "Tailwind"],
  },
];
export default projects;
