"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillsGrid } from "../skills/skills-grid";
import { ExperienceTimeline } from "../skills/experience-timeline";

export function SkillsSection({ reference }: { reference: any }) {
  return (
    <section 
      id="skills" 
      className="py-20 bg-background"
      ref={reference}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Skills & Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my technical skills and professional journey in the field of web development.
            </p>
          </motion.div>
          
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6">Technical Skills</h3>
            <SkillsGrid />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6">Experience</h3>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
