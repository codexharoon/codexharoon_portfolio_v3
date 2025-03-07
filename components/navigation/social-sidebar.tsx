"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export function SocialSidebar() {
  const socialLinks = [
    { icon: "lucide:github", url: "https://github.com/codexharoon", label: "GitHub" },
    { icon: "lucide:linkedin", url: "https://linkedin.com/in/codexharoon", label: "LinkedIn" },
    { icon: "lucide:twitter", url: "https://twitter.com/thecodexharoon", label: "Twitter" },
    { icon: "lucide:instagram", url: "https://instagram.com/codexharoon", label: "Instagram" }
  ];

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="fixed left-6 bottom-0 z-50 hidden md:block"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center space-y-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.2, color: "#6A5ACD" }}
            aria-label={link.label}
          >
            <Icon icon={link.icon} width={20} height={20} />
          </motion.a>
        ))}
        <motion.div 
          className="h-20 w-px bg-gray-300"
          variants={itemVariants}
          animate={{ height: [0, 80] }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </motion.div>
  );
}
