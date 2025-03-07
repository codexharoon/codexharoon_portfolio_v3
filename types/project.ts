export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile";
  image: string;
  description: string;
  technologies: string[];
}
