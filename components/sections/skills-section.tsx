"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillsGrid } from "../skills/skills-grid";
import { ExperienceTimeline } from "../skills/experience-timeline";

export function SkillsSection({ reference }: { reference: any }) {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-background"
      ref={reference}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Tech Stack & Experience
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Apple platform technologies and frameworks I work with daily to build production-grade applications.
            </p>
          </motion.div>

          <motion.div
            className="mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">⚙️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold">Technologies</h3>
            </div>
            <SkillsGrid />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">💼</span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold">Professional Experience</h3>
            </div>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
