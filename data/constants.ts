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
  location: "Faisalabad, Pakistan",
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
  short: "I craft native iOS & macOS applications with Swift, delivering polished user experiences that follow Apple's design philosophy.",
  full: `Software Engineer (iOS & macOS) with hands-on professional experience, specializing in Swift and UIKit, with working knowledge of AppKit. Experienced in developing and maintaining production-level Apple platform applications, implementing clean UI flows, and writing structured, maintainable code.`,
  extended: `Skilled in developing intuitive user interfaces, handling data persistence, and implementing core and advanced app features. Comfortable collaborating with backend engineers, UI/UX designers, and cross-functional tech teams, as well as working independently on assigned features. Strong at understanding requirements, delivering features with attention to performance and user experience, and continuously improving skills while following Apple platform best practices.`,
} as const;

// ─── Stats ───────────────────────────────────
export const STATS = [
  { label: "Experience", value: "1+ Years", icon: "lucide:briefcase" },
  { label: "Apps Built", value: "4+", icon: "lucide:smartphone" },
  { label: "Platforms", value: "iOS & macOS", icon: "lucide:monitor-smartphone" },
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
    { name: "Services", path: "/services", external: false },
    { name: "Contact", path: "/#contact", external: false },
  ],
  resources: [
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
  title: "Haroon — iOS & macOS App Developer",
  titleTemplate: "%s | Haroon — iOS & macOS Developer",
  description:
    "Muhammad Haroon is an iOS & macOS App Developer specializing in Swift, UIKit, SwiftUI, and AppKit. Building production-grade native Apple platform applications with a focus on performance and user experience.",
  keywords: [
    "iOS developer",
    "macOS developer",
    "Swift developer",
    "UIKit developer",
    "SwiftUI developer",
    "AppKit developer",
    "Xcode",
    "Apple developer",
    "mobile app developer",
    "iOS app developer portfolio",
    "Swift app developer",
    "hire iOS developer",
    "native app development",
    "CoreML developer",
    "iOS freelancer",
    "Muhammad Haroon developer",
    "Code x Haroon",
    "codexharoon",
    "Pakistan iOS developer",
    "iPhone app developer",
    "Mac app developer",
  ],
  themeColor: "#007AFF",
} as const;

