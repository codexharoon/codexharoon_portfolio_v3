"use client";

import React from "react";
import { experiences } from "@/data/experiences";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <div className="ml-2 sm:ml-4">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          className="relative pb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
        >
          {/* Vertical line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-0 top-5 h-full w-0.5 bg-primary/20"></div>
          )}

          {/* Timeline dot */}
          <div className="absolute left-[-6px] sm:left-[-8px] top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-lg shadow-primary/30"></div>

          {/* Content */}
          <div className="ml-5 sm:ml-8">
            <div className="glass-card p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs font-semibold bg-primary text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  {experience.year}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  {experience.current ? "• Present" : "• Ended"}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1">{experience.title}</h3>
              <p className="text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-3">{experience.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{experience.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 sm:space-y-2">
                {experience.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={13} height={13} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
