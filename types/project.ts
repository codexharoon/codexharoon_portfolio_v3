export interface Project {
  id: string;
  title: string;
  category: "ios" | "macos";
  image: string;
  description: string;
  technologies: string[];
  highlights: string[];
}
