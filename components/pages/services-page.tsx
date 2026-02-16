"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function ServicesPage() {
  const services = [
    {
      id: "ios-dev",
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and SwiftUI/UIKit. From concept to App Store launch, tailored for iPhone and iPad.",
      icon: "logos:apple",
      features: [
        "Custom UI/UX Implementation",
        "Core Data & SwiftData Integration",
        "App Store Optimization (ASO)",
        "TestFlight & Beta Testing Management"
      ]
    },
    {
      id: "macos-dev",
      title: "macOS App Development",
      description: "Powerful, desktop-class macOS applications using AppKit and SwiftUI. Optimized for Apple Silicon and the Mac ecosystem.",
      icon: "lucide:monitor",
      features: [
        "Menu Bar Apps",
        "System Extensions",
        "Cross-platform (iPad -> Mac) refinement",
        "Performance Optimization"
      ]
    },
    {
      id: "web-dev",
      title: "Web Development",
      description: "Modern, responsive web applications built with Next.js, React, and Tailwind CSS. SEO-optimized and performant.",
      icon: "lucide:globe",
      features: [
        "Full Stack Development",
        "E-commerce Solutions",
        "CMS Integration",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      id: "android-dev",
      title: "Android App Development",
      description: "Native Android applications using Kotlin and Jetpack Compose. delivering a seamless experience across the Google ecosystem.",
      icon: "logos:android-icon",
      features: [
        "Material Design 3",
        "Jetpack Compose UI",
        "Google Play Publishing",
        "Wear OS Integration"
      ]
    },
    {
      id: "cross-platform",
      title: "Cross-Platform App Development",
      description: "Cost-effective solutions that run seamlessly on both iOS and Android from a single codebase, without compromising quality.",
      icon: "lucide:smartphone-nfc",
      features: [
        "React Native & Expo",
        "Flutter & Dart",
        "Single Codebase, Two Apps",
        "Native-like Performance"
      ]
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "User-centric design that blends aesthetics with functionality. creating intuitive interfaces that users love.",
      icon: "lucide:palette",
      features: [
        "Wireframing & Prototyping",
        "Design Systems",
        "User Research",
        "Figma High-Fidelity Mockups"
      ]
    },
    {
      id: "api-integration",
      title: "API Integration & Backend",
      description: "Seamless integration of RESTful APIs and backend services. Connecting your app to the cloud securely and efficiently.",
      icon: "lucide:server",
      features: [
        "REST & GraphQL APIs",
        "Firebase Integration",
        "Offline Data Synchronization",
        "Authentication & Security"
      ]
    },
    {
      id: "code-review",
      title: "Code Review & Consulting",
      description: "Expert review of existing Swift codebases, focusing on architecture, performance, and best practices.",
      icon: "lucide:code-2",
      features: [
        "Architecture Analysis",
        "Performance Profiling",
        "Refactoring Legacy Code",
        "Best Practices Audits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <Icon icon="lucide:arrow-left" width={16} height={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Services
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Professional iOS and macOS development services tailored to bring your ideas to the Apple ecosystem with precision and quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 sm:p-8 flex flex-col h-full hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Icon icon={service.icon} width={24} height={24} className="text-primary" />
              </div>

              <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2.5 mt-auto">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Icon icon="lucide:check" className="text-primary mt-0.5 flex-shrink-0" width={16} height={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Icon icon="logos:swift" width={200} height={200} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 relative z-10">
              Ready to start your project?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8 relative z-10">
              Whether you need a new app built from scratch or improvements to an existing one,
              I&apos;m here to help you achieve your goals.
            </p>

            <Link
              href="/#contact"
              className="relative z-10 inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
