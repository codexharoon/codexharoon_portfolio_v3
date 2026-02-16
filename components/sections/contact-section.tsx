"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { ContactForm } from "../contact/contact-form";
import { ContactInfo } from "../contact/contact-info";

export function ContactSection({ reference }: { reference: any }) {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-background"
      ref={reference}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Have an iOS or macOS app idea? Let&apos;s discuss how we can bring it to life with native Swift development.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full md:w-1/3">
              <ContactInfo />
            </div>

            <div className="w-full md:w-2/3">
              <div className="glass-card p-4 sm:p-6">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
