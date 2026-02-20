"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export function FaqContent() {
  const faqs = [
    {
      question: "What app and web development services do you offer?",
      answer: "I offer a comprehensive range of development services across multiple platforms. This includes Native iOS and macOS app development (Swift), Android app development, Cross-Platform App Development, and custom Web Development to build full-scale, responsive applications and landing pages."
    },
    {
      question: "How much does a custom app or website cost?",
      answer: "The cost varies depending on the project's complexity, required platforms, necessary backend integrations, and design specifics. After an initial consultation to understand your goals, I will provide a custom, detailed proposal with timeline and cost estimates."
    },
    {
      question: "How long does it typically take to build an app or a website?",
      answer: "A straightforward website or basic utility app might take 2-4 weeks. A complex, cross-platform mobile application with custom animations, cloud database syncing, and user authentication can take several months. I'll provide a realistic timeline upon reviewing your requirements."
    },
    {
      question: "Do you help with App Store and Google Play deployment?",
      answer: "Yes! Deploying to the Apple App Store and Google Play Store can be complex. I manage the entire submission process, including configuring developer accounts, setting up test builds, and ensuring the app complies with both Apple's and Google's review guidelines."
    },
    {
      question: "Do you provide ongoing maintenance and support after launch?",
      answer: "Absolutely. I offer ongoing support to ensure your application stays compatible with new OS updates across iOS and Android, maintain your website's performance, fix any bugs, and implement new features as your project grows."
    },
    {
      question: "What is your typical development process?",
      answer: "My workflow generally follows this structure: First, requirement gathering and project planning. Next, UI/UX prototyping and architecture design. Then, the core development phase with regular updates and beta builds for your review. Finally, comprehensive testing and production deployment."
    },
    {
      question: "Can you help update an existing application or website?",
      answer: "Yes, I regularly work on existing codebases. Whether you need to fix legacy bugs, improve application performance, remodel your website's UI/UX, or add new modern features, I can seamlessly integrate with your existing project."
    },
    {
      question: "How do we get started working together?",
      answer: "You can easily reach out to me via the contact form on this website. We'll set up an initial consultation to discuss your project idea, goals, and see if we are a perfect fit for a collaboration!"
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
