"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardBody className="p-4">
        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </CardBody>
      <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
}
