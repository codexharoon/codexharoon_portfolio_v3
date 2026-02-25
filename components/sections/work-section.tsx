"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProjectCard } from "../work/project-card";
import { ProjectFilter } from "../work/project-filter";
import { projects } from "@/data/projects";

export function WorkSection({ reference }: { reference: any }) {
  const [filter, setFilter] = React.useState("ios");

  const filteredProjects = React.useMemo(() => {
    return projects.filter(project => project.category === filter).slice(0, 4);
  }, [filter]);

  return (
    <section
      id="work"
      className="py-16 sm:py-20 bg-background"
      ref={reference}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Featured Apps
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Production iOS and macOS applications built with Swift, featuring AI/ML, custom editors, and native integrations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ProjectFilter activeFilter={filter} onFilterChange={setFilter} showAll={false} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 sm:mt-12 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Button
                as="a"
                href="/apps"
                color="primary"
                size="lg"
                className="font-medium px-8 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                endContent={<Icon icon="lucide:arrow-right" className="w-5 h-5 ml-2" />}
              >
                View More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
