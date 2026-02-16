"use client";

import React from "react";
import { skills } from "@/data/skills";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          className="glass-card flex flex-col items-center p-3 sm:p-5 cursor-default"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 sm:mb-3 rounded-xl bg-primary/5">
            <Icon icon={skill.icon} width={24} height={24} className="sm:w-8 sm:h-8" />
          </div>
          <span className="text-[11px] sm:text-sm font-medium text-center leading-tight">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
