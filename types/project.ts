export interface Project {
  id: string;
  title: string;
  category: "ios" | "macos" | "web" | "mobile";
  image: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
}
