"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function HeroSection({ reference }: { reference: any }) {
  return (
    <section
      id="home"
      className="py-20 min-h-screen flex items-center relative overflow-hidden"
      ref={reference}
    >
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary opacity-10"></div>

      <div className="container xl:max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-secondary bg-opacity-20 px-5 py-3 rounded-2xl mb-6">
            <span className="text-5xl mr-4">👋</span>
            <div className="flex flex-col">
              <span className="text-xs font-medium mb-3">Hello, I am</span>
              <span className="text-primary font-bold text-3xl">Haroon</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            FULL STACK WEB ENGINEER
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="flex space-x-4">
            <Button
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
              color="primary"
              size="lg"
              className="font-medium cursor-pointer"
            >
              Get in Touch
            </Button>
            <Button
              as={Link}
              to="work"
              spy={true}
              smooth={true}
              duration={800}
              variant="bordered"
              color="primary"
              size="lg"
              className="font-medium cursor-pointer"
            >
              View Work
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://picsum.photos/400/400?random=profile"
                alt="Haroon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 bg-white p-3 rounded-full shadow-md">
              <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center animate-spin">
                <Icon icon="logos:react" width={30} height={30} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
