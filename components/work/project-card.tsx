"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const platformIcon = project.category === "ios" ? "lucide:apple" : project.category === "macos" ? "lucide:monitor" : project.category === "mobile" ? "lucide:smartphone" : "lucide:globe";
  const platformLabel = project.category === "ios" ? "iOS" : project.category === "macos" ? "macOS" : project.category === "mobile" ? "Mobile" : "Web";

  const gradients: Record<string, string> = {
    "1": "from-blue-500 to-cyan-400",
    "2": "from-purple-500 to-pink-400",
    "3": "from-green-500 to-teal-400",
    "4": "from-orange-500 to-red-400",
    "5": "from-indigo-500 to-purple-400",
    "6": "from-sky-500 to-blue-400",
    "7": "from-emerald-500 to-teal-400",
  };

  const gradient = gradients[project.id] || "from-primary to-secondary";

  return (
    <div className="glass-card overflow-hidden h-full flex flex-col">
      {/* App Icon Header */}
      <div className={`relative h-36 sm:h-48 bg-gradient-to-br ${gradient} flex items-center justify-center p-4 sm:p-6`}>
        {/* App icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 app-icon bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Icon icon={platformIcon} className="text-white" width={28} height={28} />
        </div>

        {/* Platform badge */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 glass-badge px-2.5 sm:px-3 py-0.5 sm:py-1 flex items-center gap-1 sm:gap-1.5">
          <Icon icon={platformIcon} width={10} height={10} className="text-primary sm:w-3 sm:h-3" />
          <span className="text-[10px] sm:text-xs font-medium text-primary">{platformLabel}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-grow">
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <li key={index} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
              <Icon icon="lucide:chevron-right" className="text-primary mt-0.5 flex-shrink-0" width={10} height={10} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2.5 sm:pt-3 border-t border-gray-100 dark:border-gray-800">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-pill text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        {project.link && (
          <div className="pt-3 sm:pt-4 mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 px-4 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all text-xs sm:text-sm font-medium"
            >
              <span>Visit Project</span>
              <Icon icon="lucide:external-link" className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
