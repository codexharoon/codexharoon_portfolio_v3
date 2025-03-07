"use client";

import React from "react";
import { experiences } from "@/data/experiences";

export function ExperienceTimeline() {
  return (
    <div className="ml-4">
      {experiences.map((experience, index) => (
        <div key={experience.id} className="relative pb-8">
          {/* Vertical line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-0 top-5 h-full w-0.5 bg-gray-200"></div>
          )}
          
          {/* Timeline dot */}
          <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-primary"></div>
          
          {/* Content */}
          <div className="ml-6">
            <div className="flex items-center mb-1">
              <span className="text-sm font-medium bg-primary text-white px-2 py-0.5 rounded">
                {experience.year}
              </span>
            </div>
            <h3 className="text-lg font-medium">{experience.title}</h3>
            <p className="text-gray-600">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
