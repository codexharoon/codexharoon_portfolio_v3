"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import Link from "next/link";

export function AboutSection({ reference }: { reference: any }) {
  return (
    <section 
      id="about" 
      className="py-20 bg-white"
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
              About Me
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know me and my background in web development and software engineering.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg"></div>
                <img 
                  src="https://picsum.photos/600/800?random=about" 
                  alt="Haroon" 
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading font-bold mb-4">
                Full Stack Web Engineer
              </h3>
              <p className="text-gray-600 mb-4">
                Hello! I'm Haroon, a passionate Full Stack Web Engineer with over 5 years of experience in building web applications. 
                I specialize in creating responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-gray-600 mb-6">
                My journey in web development started in 2019 when I began freelancing and building small websites for local businesses. 
                Since then, I've worked with various technologies and frameworks to deliver high-quality digital solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Name:</h4>
                  <p className="text-gray-600">Haroon</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Email:</h4>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">From:</h4>
                  <p className="text-gray-600">New York, USA</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Experience:</h4>
                  <p className="text-gray-600">5+ Years</p>
                </div>
              </div>
              
              <Button 
                as={Link}
                href="/about-me"
                color="primary"
                className="font-medium"
              >
                More About Me
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
