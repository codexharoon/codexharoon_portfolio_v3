"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { CERTIFICATIONS } from "@/data/constants";

export function CertificationsSection({ reference }: { reference: any }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            id="certifications"
            className="py-20 bg-background"
            ref={reference}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Certifications
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Continuous learning and professional development in software engineering and computer science.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {CERTIFICATIONS.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="glass-card p-6 h-full flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Icon icon={cert.icon} className="text-primary" width={24} height={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-semibold mb-1 text-sm leading-tight">{cert.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-primary font-medium">{cert.issuer}</span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
