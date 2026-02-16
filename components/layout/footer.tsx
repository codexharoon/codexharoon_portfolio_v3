"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, SOCIAL_LINKS, FOOTER_LINKS } from "@/data/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: "Quick Links",
      links: FOOTER_LINKS.quickLinks,
    },
    {
      title: "Resources",
      links: FOOTER_LINKS.resources,
    },
    {
      title: "Connect",
      links: FOOTER_LINKS.connect,
    },
  ];

  return (
    <footer className="bg-gray-950 dark:bg-gray-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-xs font-mono font-bold tracking-tighter shadow-lg shadow-primary/20">
                  &lt;/&gt;
                </span>
                <h2 className="text-lg sm:text-xl font-heading font-bold flex items-center gap-0.5">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Code</span>
                  <span className="text-gray-500 font-light mx-0.5">x</span>
                  <span className="text-white">Haroon</span>
                </h2>
              </div>
              <p className="text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed max-w-sm">
                Crafting native iOS & macOS applications with Swift. Focused on performance, user experience, and Apple platform best practices.
              </p>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:github" width={20} height={20} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:linkedin" width={20} height={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wider text-gray-300">{column.title}</h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link?.external ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          className="text-gray-400 hover:text-primary transition-colors text-xs sm:text-sm"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} {PERSONAL_INFO.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
