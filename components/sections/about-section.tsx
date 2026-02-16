"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO, PROFILE, STATS } from "@/data/constants";

export function AboutSection({ reference }: { reference: any }) {
  return (
    <section
      id="about"
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
              About Me
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about crafting native Apple platform experiences
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Left — Avatar & Stats */}
            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Gradient Avatar */}
              <div className="relative mb-8">
                <div className="w-full aspect-square max-w-[220px] sm:max-w-xs mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center glass-card">
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 sm:mb-4 flex items-center justify-center p-0.5">
                      <Image
                        src="/profile.jpg"
                        alt={PERSONAL_INFO.name}
                        width={96}
                        height={96}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{PERSONAL_INFO.name}</h3>
                    <p className="text-primary text-xs sm:text-sm font-medium">{PERSONAL_INFO.title}</p>
                  </div>
                </div>

                {/* Floating Swift badge */}
                <motion.div
                  className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 glass-badge px-3 sm:px-4 py-1.5 sm:py-2"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon icon="logos:swift" width={20} height={20} />
                </motion.div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 gap-3">
                {STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon icon={stat.icon} className="text-primary" width={18} height={18} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <p className="font-semibold text-sm sm:text-base">{stat.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Bio & Details */}
            <motion.div
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4">
                {PERSONAL_INFO.subtitle} <span className="text-primary">—</span> {PERSONAL_INFO.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                {PROFILE.full}
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                {PROFILE.extended}
              </p>

              {/* Info Grid — 1col on small mobile, 2col on larger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="glass-card p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon icon="lucide:user" className="text-primary" width={14} height={14} />
                    <h4 className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</h4>
                  </div>
                  <p className="font-medium text-sm sm:text-base">{PERSONAL_INFO.name}</p>
                </div>
                <div className="glass-card p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon icon="lucide:mail" className="text-primary" width={14} height={14} />
                    <h4 className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</h4>
                  </div>
                  <p className="font-medium text-xs sm:text-sm break-all">{PERSONAL_INFO.email}</p>
                </div>
                <div className="glass-card p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon icon="lucide:map-pin" className="text-primary" width={14} height={14} />
                    <h4 className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</h4>
                  </div>
                  <p className="font-medium text-sm sm:text-base">{PERSONAL_INFO.location}</p>
                </div>
                <div className="glass-card p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon icon="lucide:phone" className="text-primary" width={14} height={14} />
                    <h4 className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone</h4>
                  </div>
                  <p className="font-medium text-sm sm:text-base">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["Swift", "UIKit", "SwiftUI", "AppKit", "Xcode", "CoreML"].map((tech) => (
                  <span key={tech} className="tech-pill text-[11px] sm:text-xs">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
