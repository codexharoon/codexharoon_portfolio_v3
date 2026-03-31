// =============================================
// PORTFOLIO CONSTANTS — Single Source of Truth
// =============================================

// ─── Personal Info ───────────────────────────
export const PERSONAL_INFO = {
  name: "Muhammad Haroon",
  firstName: "Haroon",
  title: "iOS & macOS App Developer",
  subtitle: "Software Engineer",
  email: "info@codexharoon.com",
  phone: "(+92) 324 5003102",
  location: "Punjab, Pakistan",
  website: "https://codexharoon.com",
  brandName: "Code x Haroon",
} as const;

// ─── Social Links ────────────────────────────
export const SOCIAL_LINKS = {
  github: "https://github.com/codexharoon",
  linkedin: "https://linkedin.com/in/codexharoon",
  website: "https://codexharoon.com",
} as const;

// ─── Profile Bio ─────────────────────────────
export const PROFILE = {
  short: "Pakistan-based Software Engineer crafting native iOS & macOS applications with Swift — delivering polished user experiences that follow Apple's design philosophy.",
  full: `Software Engineer (iOS & macOS) based in Punjab, Pakistan, with hands-on professional experience specializing in Swift, UIKit, and SwiftUI, with working knowledge of AppKit. Experienced in developing and maintaining production-level Apple platform applications, implementing clean UI flows, and writing structured, maintainable code. Available for freelance and remote iOS development projects worldwide.`,
  extended: `Skilled in developing intuitive user interfaces, handling data persistence, and implementing core and advanced app features. Alongside native Apple platform development, I also provide services including custom website development, cross-platform mobile apps, and full-stack web applications. Comfortable collaborating with backend engineers, UI/UX designers, and cross-functional tech teams, as well as working independently on assigned features. Strong at understanding requirements, delivering features with attention to performance and user experience, and continuously improving skills while following Apple platform best practices.`,
} as const;

// ─── Stats ───────────────────────────────────
export const STATS = [
  { label: "Experience", value: "1+ Years", icon: "lucide:briefcase" },
  { label: "Apps Built", value: "8+", icon: "lucide:smartphone" },
  { label: "Platforms", value: "Multi-Platform", icon: "lucide:monitor-smartphone" },
] as const;

// ─── Navigation Sections ─────────────────────
export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Apps" },
  // { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

// ─── Certifications ──────────────────────────
export const CERTIFICATIONS = [
  {
    id: "1",
    title: "Linear Algebra for Machine Learning and Data Science",
    issuer: "Coursera",
    date: "Mar 2023",
    icon: "lucide:award",
  },
  {
    id: "2",
    title: "Git and GitHub Mastery Workshop",
    issuer: "SE Society NTU",
    date: "Dec 2023",
    icon: "lucide:git-branch",
  },
  {
    id: "3",
    title: "Introduction to Data Structures and Algorithms",
    issuer: "Codedamn",
    date: "Feb 2024",
    icon: "lucide:layers",
  },
  {
    id: "4",
    title: "Master Linear Data Structure",
    issuer: "Codedamn",
    date: "May 2024",
    icon: "lucide:database",
  },
] as const;

// ─── Footer Links ────────────────────────────
export const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", path: "/", external: false },
    { name: "About", path: "/#about", external: false },
    { name: "Apps", path: "/apps", external: false },
    { name: "Services", path: "/services", external: false },
    { name: "Contact", path: "/#contact", external: false },
  ],
  resources: [
    { name: "FAQ", path: "/faq", external: false },
    { name: "Privacy Policy", path: "/privacy-policy", external: false },
    { name: "Terms of Service", path: "/terms-of-service", external: false },
  ],
  connect: [
    { name: "LinkedIn", path: SOCIAL_LINKS.linkedin, external: true },
    { name: "GitHub", path: SOCIAL_LINKS.github, external: true },
  ],
} as const;

// ─── Meta / SEO ──────────────────────────────
export const SEO = {
  title: "Muhammad Haroon • iOS & macOS Developer in Pakistan | Swift Expert",
  titleTemplate: "%s | Muhammad Haroon • iOS & macOS Developer Pakistan",
  description:
    "Muhammad Haroon is a professional iOS & macOS App Developer, Mobile Architect, and Software Engineer based in Punjab, Pakistan. Specializing in Swift, UIKit, SwiftUI, and AppKit — building production-grade native Apple platform apps. Also offering web development, cross-platform mobile apps, and freelance software engineering services. Hire the best iOS developer and mobile application architect in Pakistan.",
  keywords: [
    // ── Core Role Titles ──
    "iOS developer",
    "macOS developer",
    "iOS architect",
    "macOS architect",
    "mobile developer",
    "mobile architect",
    "application developer",
    "application architect",
    "software engineer",
    "iOS software engineer",
    "macOS software engineer",
    "mobile software engineer",
    "app developer",
    "Apple developer",
    "Apple platform engineer",
    "Swift developer",
    "Swift engineer",
    // ── Core Skills & Frameworks ──
    "UIKit expert",
    "SwiftUI specialist",
    "AppKit developer",
    "Xcode",
    "native iOS apps",
    "Core Data",
    "Core ML",
    "Combine framework",
    "TestFlight",
    "App Store submission",
    "Human Interface Guidelines",
    // ── Geo-targeted: Pakistan ──
    "iOS developer Pakistan",
    "macOS developer Pakistan",
    "iOS architect Pakistan",
    "macOS architect Pakistan",
    "mobile developer Pakistan",
    "mobile architect Pakistan",
    "application developer Pakistan",
    "application architect Pakistan",
    "software engineer Pakistan",
    "iOS software engineer Pakistan",
    "mobile software engineer Pakistan",
    "app developer Pakistan",
    "Swift developer Pakistan",
    "Apple developer Pakistan",
    "SwiftUI developer Pakistan",
    "UIKit developer Pakistan",
    "best iOS developer Pakistan",
    "mobile app developer Pakistan",
    // ── Geo-targeted: Punjab & Cities ──
    "iOS developer Punjab",
    "iOS developer Lahore",
    "iOS developer Faisalabad",
    "macOS developer Punjab",
    "macOS developer Lahore",
    "mobile developer Lahore",
    "mobile developer Punjab",
    "software engineer Punjab",
    "software engineer Lahore",
    "app developer Lahore",
    "app developer Punjab",
    "application architect Punjab",
    "application architect Lahore",
    // ── Intent-based / Long-tail ──
    "hire iOS developer Pakistan",
    "hire macOS developer Pakistan",
    "hire mobile developer Pakistan",
    "hire Swift developer",
    "hire app developer Pakistan",
    "freelance iOS developer",
    "freelance macOS developer",
    "freelance mobile developer",
    "remote iOS developer",
    "iPhone app developer Pakistan",
    "iOS app development services",
    "macOS app development services",
    "mobile app development services",
    "web developer Pakistan",
    "cross-platform app developer Pakistan",
    // ── Brand ──
    "Muhammad Haroon developer",
    "Muhammad Haroon iOS",
    "Code x Haroon",
    "codexharoon",
  ],
  themeColor: "#007AFF",
} as const;

