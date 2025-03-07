import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Man Cars Rental and Tours",
    category: "web",
    image: "https://picsum.photos/300/200?random=1",
    description: "A website application for car rental and tour booking services.",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "2",
    title: "Password Generator",
    category: "web",
    image: "https://picsum.photos/300/200?random=2",
    description: "A simple tool that generates secure passwords for users.",
    technologies: ["JavaScript", "HTML", "CSS"]
  },
  {
    id: "3",
    title: "CodesTech",
    category: "web",
    image: "https://picsum.photos/300/200?random=3",
    description: "Full stack web development blog and tutorials.",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"]
  },
  {
    id: "4",
    title: "Real Estate (Commercial)",
    category: "web",
    image: "https://picsum.photos/300/200?random=4",
    description: "A commercial real estate platform with property listings and agent profiles.",
    technologies: ["React", "Firebase", "Google Maps API"]
  },
  {
    id: "5",
    title: "AllGamesGuide",
    category: "mobile",
    image: "https://picsum.photos/300/200?random=5",
    description: "All games related news and guides in one place.",
    technologies: ["React Native", "Redux", "Firebase"]
  },
  {
    id: "6",
    title: "HaroonxAcademy",
    category: "mobile",
    image: "https://picsum.photos/300/200?random=6",
    description: "Mobile learning platform with video courses and quizzes.",
    technologies: ["Flutter", "Dart", "Firebase"]
  }
];
