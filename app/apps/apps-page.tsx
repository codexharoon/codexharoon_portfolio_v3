"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/work/project-card";
import { ProjectFilter } from "@/components/work/project-filter";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/navbar";
import { SocialSidebar } from "@/components/navigation/social-sidebar";
import { JsonLd } from "@/components/seo/json-ld";

export function AppsPage() {
    const [filter, setFilter] = React.useState("all");

    const filteredProjects = React.useMemo(() => {
        if (filter === "all") {
            return projects;
        }
        return projects.filter(project => project.category === filter);
    }, [filter]);

    return (
        <div className="min-h-screen bg-background font-body text-text">
            <JsonLd />
            {/* We pass a non-matching string so no section is highlighted as active on the home page */}
            <Navbar activeSection="apps" />
            <SocialSidebar />

            <main className="pt-32 pb-16 sm:py-40">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="text-center mb-10 sm:mb-16"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
                                All Apps & Projects
                            </h1>
                            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
                                A comprehensive collection of my work across iOS, macOS, Mobile, and Web development.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <ProjectFilter activeFilter={filter} onFilterChange={setFilter} showAll={true} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        layout
                                    >
                                        <ProjectCard project={project} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}
