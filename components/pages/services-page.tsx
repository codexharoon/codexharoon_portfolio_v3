"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export function ServicesPage() {
  const services = [
    {
      icon: "lucide:layout",
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces using modern frameworks like React, Vue, and Angular with clean and maintainable code.",
      features: [
        "Responsive web design",
        "Interactive UI/UX",
        "Cross-browser compatibility",
        "Performance optimization",
        "Accessibility compliance"
      ]
    },
    {
      icon: "lucide:server",
      title: "Backend Development",
      description: "Building robust server-side applications using Node.js, Express, and databases like MongoDB and PostgreSQL to power web applications.",
      features: [
        "API development",
        "Database design",
        "Authentication & authorization",
        "Server-side rendering",
        "Performance optimization"
      ]
    },
    {
      icon: "lucide:settings",
      title: "DevOps Engineering",
      description: "Setting up CI/CD pipelines with tools like Jenkins, GitHub Actions, and AWS CodePipeline to automate builds, tests, and deployments.",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as code",
        "Containerization with Docker",
        "Cloud deployment",
        "Monitoring and logging"
      ]
    },
    {
      icon: "lucide:shopping-bag",
      title: "E-commerce Development",
      description: "Building custom e-commerce solutions with secure payment gateways, inventory management, and user-friendly shopping experiences.",
      features: [
        "Custom shopping carts",
        "Payment gateway integration",
        "Inventory management",
        "Order processing",
        "Customer account management"
      ]
    },
    {
      icon: "lucide:smartphone",
      title: "Mobile App Development",
      description: "Developing cross-platform mobile applications using React Native and Flutter that work seamlessly on both iOS and Android devices.",
      features: [
        "Cross-platform development",
        "Native-like performance",
        "Offline functionality",
        "Push notifications",
        "App store deployment"
      ]
    },
    {
      icon: "lucide:search",
      title: "SEO Optimization",
      description: "Optimizing websites for search engines to improve visibility, increase organic traffic, and enhance user experience.",
      features: [
        "On-page optimization",
        "Technical SEO",
        "Content strategy",
        "Performance optimization",
        "Analytics and reporting"
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20 pb-16">
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
              <h1 className="text-4xl font-heading font-bold mb-4">My Services</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I offer a comprehensive range of web development services to help businesses and individuals establish a strong online presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6">
                      <div className="mb-4 bg-primary bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon icon={service.icon} width={24} height={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <h4 className="text-sm font-medium mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Icon icon="lucide:check" className="mr-2 mt-1 text-green-500" width={16} />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-primary bg-opacity-5 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-medium mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I can help you build a custom solution tailored to your specific needs and requirements.
              </p>
              <Button as={Link} href="/contact-me" color="primary" size="lg">
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
