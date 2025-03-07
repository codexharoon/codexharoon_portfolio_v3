"use client";

import React from "react";
import { skills } from "@/data/skills";
import { Icon } from "@iconify/react";

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {skills.map((skill) => (
        <div 
          key={skill.id}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-12 h-12 flex items-center justify-center mb-2">
            <Icon icon={skill.icon} width={36} height={36} />
          </div>
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
