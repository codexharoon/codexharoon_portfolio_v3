"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO, PROFILE } from "@/data/constants";

function SwiftCodeBlock() {
  return (
    <motion.div
      className="code-block w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20, rotateX: 5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <div className="code-block-header">
        <div className="code-dot code-dot-red"></div>
        <div className="code-dot code-dot-yellow"></div>
        <div className="code-dot code-dot-green"></div>
        <span className="text-gray-400 text-xs ml-2 font-mono">Developer.swift</span>
      </div>
      <div className="p-3 sm:p-4 text-xs sm:text-sm leading-relaxed overflow-x-auto">
        <div>
          <span className="swift-keyword">class</span>{" "}
          <span className="swift-type">Developer</span>{" "}
          <span className="swift-property">{"{"}</span>
        </div>
        <div className="ml-4">
          <span className="swift-keyword">let</span>{" "}
          <span className="swift-property">name</span>{" "}
          <span className="swift-property">=</span>{" "}
          <span className="swift-string">&quot;Haroon&quot;</span>
        </div>
        <div className="ml-4">
          <span className="swift-keyword">let</span>{" "}
          <span className="swift-property">role</span>{" "}
          <span className="swift-property">=</span>{" "}
          <span className="swift-string">&quot;iOS &amp; macOS Dev&quot;</span>
        </div>
        <div className="ml-4 mt-2">
          <span className="swift-keyword">var</span>{" "}
          <span className="swift-property">skills</span>
          <span className="swift-property">:</span>{" "}
          <span className="swift-type">[String]</span>{" "}
          <span className="swift-property">=</span>{" "}
          <span className="swift-property">[</span>
        </div>
        <div className="ml-6 sm:ml-8">
          <span className="swift-string">&quot;Swift&quot;</span>
          <span className="swift-property">,</span>{" "}
          <span className="swift-string">&quot;UIKit&quot;</span>
          <span className="swift-property">,</span>
        </div>
        <div className="ml-6 sm:ml-8">
          <span className="swift-string">&quot;SwiftUI&quot;</span>
          <span className="swift-property">,</span>{" "}
          <span className="swift-string">&quot;AppKit&quot;</span>
        </div>
        <div className="ml-4">
          <span className="swift-property">]</span>
        </div>
        <div className="ml-4 mt-2">
          <span className="swift-keyword">func</span>{" "}
          <span className="swift-func">buildApp</span>
          <span className="swift-property">() -&gt;</span>{" "}
          <span className="swift-type">App</span>{" "}
          <span className="swift-property">{"{"}</span>
        </div>
        <div className="ml-6 sm:ml-8">
          <span className="swift-comment">// Let&apos;s create something amazing ✨</span>
        </div>
        <div className="ml-4">
          <span className="swift-property">{"}"}</span>
        </div>
        <div>
          <span className="swift-property">{"}"}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection({ reference }: { reference: any }) {
  return (
    <section
      id="home"
      className="pt-24 pb-12 sm:pb-20 min-h-screen flex items-center relative overflow-hidden gradient-hero"
      ref={reference}
    >
      {/* Floating orbs — hidden on very small screens to avoid overflow */}
      <motion.div
        className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary opacity-[0.04] blur-3xl"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-secondary opacity-[0.04] blur-3xl"
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating tech icons — desktop only */}
      <motion.div
        className="absolute top-1/4 right-1/4 hidden lg:block"
        animate={{ y: [-12, 6, -12], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass-badge px-3 py-2 flex items-center gap-2">
          <img src="/swift.png" alt="Swift" width={20} height={20} />
          <span className="text-xs font-medium text-primary">Swift</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-16 hidden lg:block"
        animate={{ y: [6, -12, 6], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="glass-badge px-3 py-2 flex items-center gap-2">
          <img src="/xcode.png" alt="Xcode" width={20} height={20} />
          <span className="text-xs font-medium text-primary">Xcode</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 hidden lg:block"
        animate={{ y: [-8, 10, -8], rotate: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="glass-badge px-3 py-2 flex items-center gap-2">
          <img src="/swiftui.png" alt="SwiftUI" width={20} height={20} />
          <span className="text-xs font-medium text-primary">SwiftUI</span>
        </div>
      </motion.div>

      <div className="container xl:max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glass greeting badge */}
          <motion.div
            className="glass-badge inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">👋</span>
            <div className="flex flex-col">
              <span className="text-xs font-medium mb-0.5 sm:mb-1 text-gray-500 dark:text-gray-400">Hello, I am</span>
              <span className="text-primary font-bold text-xl sm:text-2xl">{PERSONAL_INFO.firstName}</span>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              iOS & macOS App
            </span>
            <br />
            <span className="text-text">
              Developer
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {PROFILE.short}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-start justify-center items-center">
            <Button
              as={Link}
              to="work"
              spy={true}
              smooth={true}
              duration={800}
              size="lg"
              className="font-medium cursor-pointer bg-primary text-white hover:bg-primary/90 rounded-full px-6 sm:px-8 w-full sm:w-auto"
            >
              <Icon icon="lucide:smartphone" width={18} height={18} className="mr-1" />
              View My Apps
            </Button>
            <Button
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              duration={800}
              variant="bordered"
              size="lg"
              className="font-medium cursor-pointer border-primary text-primary hover:bg-primary/5 rounded-full px-6 sm:px-8 w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SwiftCodeBlock />
        </motion.div>
      </div>
    </section>
  );
}
