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
    id: "8",
    title: "Expense Manager",
    category: "macos",
    image: "https://picsum.photos/600/400?random=expense",
    description:
      "A macOS expense management application built with AppKit featuring wallet creation, monthly budgets, transaction tracking, budget alerts, and rich analytics with graphs and reports.",
    technologies: ["Swift", "AppKit", "Core Data", "Charts", "Notifications"],
    highlights: [
      "Built a clean, modern dashboard for managing multiple wallets and monthly budgets",
      "Implemented full transaction tracking with categorization and budget-exceeded notifications",
      "Developed a rich analytics section with interactive graphs and detailed financial reports",
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
  {
    id: "5",
    title: "Spend in Peace",
    category: "web",
    link: "https://spendinpeace.vercel.app",
    image: "https://picsum.photos/600/400?random=finance",
    description:
      "A comprehensive finance platform tracking expenses, managing budgets, and providing AI-powered insights.",
    technologies: ["Next.js", "MongoDB", "Stripe", "AI Chat", "TailwindCSS", "shadcn/ui"],
    highlights: [
      "Built a secure full-stack web application with Next.js and MongoDB",
      "Integrated an AI chat assistant for personalized financial advice based on user data",
      "Implemented Stripe payment gateway and smart budget tracking with real-time analytics",
    ],
  },
  {
    id: "6",
    title: "Mian Cars Rental & Tours",
    category: "web",
    link: "http://miancarsrentalandtours.com/",
    image: "https://picsum.photos/600/400?random=car",
    description:
      "A car rental and tours booking website offering luxury vehicle rentals, affordable tours, and hotel booking services across Pakistan.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Designed and developed a responsive interface for car rentals and tour bookings",
      "Showcases services including vehicle rental, hotel bookings, and custom tour packages",
      "Built using core web technologies focusing on optimal performance and accessibility",
    ],
  },
  {
    id: "7",
    title: "GoVolunteer",
    category: "mobile",
    image: "https://picsum.photos/600/400?random=volunteer",
    description:
      "A cross-platform ride-sharing mobile application that connects users traveling along the same routes, allowing them to split rides and commute together seamlessly.",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    highlights: [
      "Developed a unified, cross-platform mobile application utilizing Flutter for a native-like experience on both iOS and Android",
      "Engineered a real-time ride-matching system using Cloud Firestore for efficient database querying and updates",
      "Implemented secure and straightforward user authentication loops integrating both Google and GitHub OAuth via Firebase Auth",
    ],
  },
];
