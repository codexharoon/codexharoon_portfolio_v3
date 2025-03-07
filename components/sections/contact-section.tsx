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
      className="py-20 bg-background"
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
              Take A Coffee & Chat With Me
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feel free to reach out if you have any questions, project inquiries, or just want to say hello.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:w-1/3">
              <ContactInfo />
            </div>
            
            <div className="md:w-2/3">
              <Card className="p-2">
                <CardBody>
                  <ContactForm />
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
