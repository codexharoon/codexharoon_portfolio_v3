"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export function AboutMePage() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-primary mb-8">
              <Icon icon="lucide:arrow-left" className="mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-heading font-bold mb-6">About Me</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Hello! I'm Haroon, a passionate Full Stack Web Engineer with over 5 years of experience in building web applications. 
                I specialize in creating responsive, user-friendly interfaces and robust backend systems.
              </p>
              
              <h2>My Journey</h2>
              <p>
                My journey in web development started in 2019 when I began freelancing and building small websites for local businesses. 
                Since then, I've worked with various technologies and frameworks to deliver high-quality digital solutions.
              </p>
              
              <p>
                I hold a Bachelor's degree in Software Engineering and continuously strive to expand my knowledge and skills in the ever-evolving tech landscape.
              </p>
              
              <h2>My Philosophy</h2>
              <p>
                I believe that great software is not just about writing code; it's about solving real problems for real people. 
                My approach to development is focused on creating solutions that not only meet the technical requirements but also provide an excellent user experience.
              </p>
              
              <p>
                I'm passionate about clean code, performance optimization, and accessibility. I strive to build applications that are not only functional but also inclusive and accessible to all users.
              </p>
              
              <h2>Beyond Coding</h2>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. 
                I'm also an avid reader and enjoy learning about different cultures and perspectives.
              </p>
              
              <p>
                I believe in continuous learning and growth, both professionally and personally. This mindset has helped me stay current with the latest technologies and best practices in the rapidly evolving field of web development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-medium mb-4">My Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "HTML5", "CSS3", "Tailwind CSS", "Git", "Docker"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-xl font-medium mb-4">Education & Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon icon="lucide:award" className="mr-2 mt-1 text-primary" />
                      <div>
                        <p className="font-medium">BSc in Software Engineering</p>
                        <p className="text-sm text-gray-600">University of Technology, 2020</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon icon="lucide:award" className="mr-2 mt-1 text-primary" />
                      <div>
                        <p className="font-medium">AWS Certified Developer</p>
                        <p className="text-sm text-gray-600">Amazon Web Services, 2022</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon icon="lucide:award" className="mr-2 mt-1 text-primary" />
                      <div>
                        <p className="font-medium">MongoDB Certified Developer</p>
                        <p className="text-sm text-gray-600">MongoDB, Inc., 2021</p>
                      </div>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Let's Work Together</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
