import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Project Managament",
    company: "BIG Language",
    startDate: "Jan 2025",
    endDate: "Present",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Define project scope, set objectives, break work into tasks, and create timelines",
      "Assign work to team members, manage resources, and facilitate communication between stakeholders.",
      "Track progress, manage risks, solve problems, and adjust plans when things change",
      "Ensure the final output meets quality standards and is delivered on time",
      "Wrap up documentation, review lessons learned, and hand over deliverables.",
    ],
  },
  {
    designation: "Full Stack Development Intern",
    company: "Vates",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Development of a multi-insurance platform for the client.",
      "Build the backend logic and APIs that will handle data processing, storage, and retrieval",
      "Unit test development.",
    ],
  },
  {
    designation: "Web Development Intern",
    company: "Henrys",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
];

export default experiences;
