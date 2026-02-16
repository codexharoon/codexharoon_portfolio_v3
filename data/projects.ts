import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Coin Scanner",
    category: "ios",
    image: "https://picsum.photos/600/400?random=coin",
    description:
      "An AI-powered coin scanner using a custom-trained ML model integrated with Vision and the camera for real-time coin detection.",
    technologies: ["Swift", "UIKit", "CoreML", "Vision", "Camera API"],
    highlights: [
      "Built a custom-trained ML model integrated with Vision and the camera for real-time coin detection",
      "Implemented live classification to fetch coin details and real-time currency exchange data",
      "Optimized for smooth on-device performance",
    ],
  },
  {
    id: "2",
    title: "Private Notes",
    category: "ios",
    image: "https://picsum.photos/600/400?random=notes",
    description:
      "A private notes application with a fully custom rich text editor supporting images, drawings, and biometric security.",
    technologies: ["Swift", "UIKit", "PencilKit", "Face ID", "LocalAuth"],
    highlights: [
      "Developed a fully custom rich text editor supporting images and drawings (PencilKit)",
      "Implemented biometric note locking (Face ID / Touch ID)",
      "Added reminders, alarms with snooze support, and custom notifications",
    ],
  },
  {
    id: "3",
    title: "Flight Tracker",
    category: "macos",
    image: "https://picsum.photos/600/400?random=flight",
    description:
      "A macOS flight tracking application using Swift and AppKit, integrating MapKit to display real-time aircraft and airport locations.",
    technologies: ["Swift", "AppKit", "MapKit", "REST APIs", "Networking"],
    highlights: [
      "Built with Swift and AppKit, integrating MapKit as a mapping component",
      "Implemented nearby airport discovery and live location updates from APIs",
      "Added reliable network handling with proper connectivity and error alerts",
    ],
  },
  {
    id: "4",
    title: "AI Tattoo Maker",
    category: "ios",
    image: "https://picsum.photos/600/400?random=tattoo",
    description:
      "An AI tattoo maker application with a custom SVG-based editor supporting text and image elements for creating tattoo designs.",
    technologies: ["Swift", "UIKit", "Firebase", "AWS S3", "Speech-to-Text"],
    highlights: [
      "Developed a custom SVG-based editor supporting text and image elements",
      "Integrated AI image generation and speech-to-text for prompt input",
      "Used Firebase and AWS S3 for data storage and asset management",
    ],
  },
];
