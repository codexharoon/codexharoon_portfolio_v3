"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/constants";

export function SocialSidebar() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: "lucide:github", url: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: "lucide:linkedin", url: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-6 bottom-0 z-50 hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + index * 0.1 } }}
                whileHover={{ scale: 1.2, color: "#007AFF" }}
                aria-label={link.label}
              >
                <Icon icon={link.icon} width={20} height={20} />
              </motion.a>
            ))}
            <motion.div
              className="h-20 w-px bg-gray-300 dark:bg-gray-700"
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
