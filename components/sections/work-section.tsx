"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ProjectCard } from "../work/project-card";
import { ProjectFilter } from "../work/project-filter";
import { projects } from "@/data/projects";

export function WorkSection({ reference }: { reference: any }) {
  const [filter, setFilter] = React.useState("all");
  
  const filteredProjects = React.useMemo(() => {
    if (filter === "all") {
      return projects.slice(0, 6); // Show only first 6 projects on homepage
    }
    return projects.filter(project => project.category === filter).slice(0, 6);
  }, [filter]);

  return (
    <section 
      id="work" 
      className="py-20 bg-white"
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
              My Creative Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of my recent projects showcasing my skills and expertise in web and mobile development.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectFilter activeFilter={filter} onFilterChange={setFilter} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                as={Link}
                href="/work"
                color="primary"
                variant="bordered"
                size="lg"
                className="font-medium"
              >
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
