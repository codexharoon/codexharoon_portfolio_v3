"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export function FaqContent() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer a comprehensive range of web development services including frontend development, backend development, full-stack development, e-commerce solutions, mobile app development, and DevOps engineering. My expertise spans across various technologies like React, Node.js, MongoDB, PostgreSQL, and more."
    },
    {
      question: "How much does a website or web application cost?",
      answer: "The cost of a website or web application varies depending on several factors such as complexity, features, design requirements, and timeline. I provide custom quotes based on your specific needs. Please contact me with your project details for a personalized estimate."
    },
    {
      question: "How long does it take to build a website or web application?",
      answer: "The timeline for building a website or web application depends on its complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take several months. I'll provide you with a realistic timeline after understanding your project requirements."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer ongoing maintenance and support services to ensure your website or application continues to run smoothly after launch. This includes regular updates, security patches, performance optimization, and technical support."
    },
    {
      question: "What is your development process?",
      answer: "My development process typically includes the following phases: requirement gathering, planning, design, development, testing, deployment, and maintenance. I follow an agile methodology that allows for flexibility and iterative improvements throughout the development lifecycle."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes, I work with clients from all over the world remotely. I use various communication and project management tools to ensure smooth collaboration regardless of geographical location."
    },
    {
      question: "Can you help with an existing website or application?",
      answer: "Absolutely! I can help improve, update, or fix issues with your existing website or application. This includes performance optimization, adding new features, redesigning the UI/UX, or migrating to a different technology stack."
    },
    {
      question: "How do we get started working together?",
      answer: "To get started, simply reach out to me through the contact form on this website. We'll schedule an initial consultation to discuss your project requirements, goals, and expectations. Based on our discussion, I'll provide you with a proposal including scope, timeline, and cost estimates."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
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
              <h1 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about my services, process, and working relationship.
              </p>
            </div>
            
            <Accordion variant="splitted" className="mb-12">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={faq.question}
                  className="mb-4"
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="bg-primary bg-opacity-5 dark:bg-primary dark:bg-opacity-10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-medium mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                If you couldn't find the answer to your question, feel free to reach out directly.
              </p>
              <Button as={Link} href="/contact-me" color="primary" size="lg">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
