"use client";

import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface ScrollDotsProps {
  activeSection: string;
}

export function ScrollDots({ activeSection }: ScrollDotsProps) {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            duration={800}
            className="relative cursor-pointer group"
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id ? "bg-primary" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.span
              className="absolute left-0 transform -translate-x-full -translate-y-1/4 px-2 py-1 bg-primary text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              {section.label}
            </motion.span>
          </Link>
        ))}
      </div>
    </div>
  );
}
