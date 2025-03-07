"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export function CaseStudiesContent() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "FashionRetail Inc.",
      category: "E-commerce",
      image: "https://picsum.photos/800/600?random=10",
      description: "A complete redesign and development of an e-commerce platform, resulting in a 45% increase in conversion rates and a 30% decrease in cart abandonment.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      results: [
        "45% increase in conversion rates",
        "30% decrease in cart abandonment",
        "60% improvement in page load speed",
        "25% increase in average order value"
      ]
    },
    {
      id: 2,
      title: "Real Estate Listing Application",
      client: "PropertyFinder Ltd.",
      category: "Web Application",
      image: "https://picsum.photos/800/600?random=11",
      description: "A custom real estate listing application with advanced search functionality, interactive maps, and a user-friendly interface for property management.",
      technologies: ["React", "Express", "PostgreSQL", "Google Maps API"],
      results: [
        "200% increase in user engagement",
        "50% reduction in property listing time",
        "35% increase in lead generation",
        "Seamless integration with existing CRM"
      ]
    },
    {
      id: 3,
      title: "Healthcare Patient Portal",
      client: "MediCare Health Services",
      category: "Healthcare",
      image: "https://picsum.photos/800/600?random=12",
      description: "A secure patient portal allowing users to schedule appointments, access medical records, and communicate with healthcare providers in a HIPAA-compliant environment.",
      technologies: ["React", "Node.js", "PostgreSQL", "Azure"],
      results: [
        "40% reduction in administrative workload",
        "65% increase in patient satisfaction",
        "30% decrease in missed appointments",
        "Secure handling of sensitive patient data"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-primary mb-8">
              <Icon icon="lucide:arrow-left" className="mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold mb-4">Case Studies</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Detailed examinations of projects I've worked on, the challenges faced, and the solutions implemented.
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="h-64 lg:h-auto relative">
                        <Image 
                          src={study.image} 
                          alt={study.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardBody className="p-8">
                        <div className="mb-2">
                          <span className="text-xs font-medium bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
                            {study.category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-medium mb-2">{study.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Client: {study.client}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>
                        
                        <div className="mb-4">
                          <h3 className="text-sm font-medium mb-2">Technologies Used:</h3>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="text-sm font-medium mb-2">Key Results:</h3>
                          <ul className="space-y-1">
                            {study.results.map((result, i) => (
                              <li key={i} className="flex items-start">
                                <Icon icon="lucide:check-circle" className="mr-2 mt-1 text-green-500" width={16} />
                                <span className="text-sm text-gray-600 dark:text-gray-300">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          color="primary" 
                          variant="light"
                          endContent={<Icon icon="lucide:arrow-right" />}
                        >
                          View Full Case Study
                        </Button>
                      </CardBody>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-medium mb-4">Interested in Working Together?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects and how I can help bring your ideas to life.
              </p>
              <Button as={Link} href="/contact-me" color="primary" size="lg">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
