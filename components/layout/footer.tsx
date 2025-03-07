"use client";

import React from "react";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// Define interfaces for type safety
interface FooterLink {
  name: string;
  path: string;
  external?: boolean; // Make external optional with a default value
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing! (This is a demo)");
    setEmail("");
  };

  const footerLinks: FooterColumn[] = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/", external: false },
        { name: "About", path: "/about-me", external: false },
        { name: "Services", path: "/services", external: false },
        { name: "Blog", path: "/blog", external: false },
        { name: "Contact", path: "/contact-me", external: false }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", path: "/case-studies", external: false },
        { name: "Privacy Policy", path: "/privacy-policy", external: false },
        { name: "Terms of Service", path: "/terms-of-service", external: false },
        { name: "FAQ", path: "/faq", external: false }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", path: "https://linkedin.com/in/codexharoon", external: true },
        { name: "GitHub", path: "https://github.com/codexharoon", external: true },
        { name: "Twitter", path: "https://twitter.com/thecodexharoon", external: true },
        { name: "Instagram", path: "https://instagram.com/codexharoon", external: true }
      ]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Code x Haroon</h2>
              <p className="text-gray-400 mb-4">
                Building exceptional digital experiences with modern web technologies.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/codexharoon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:github" width={20} height={20} />
                </a>
                <a href="https://linkedin.com/in/codexharoon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:linkedin" width={20} height={20} />
                </a>
                <a href="https://twitter.com/thecodexharoon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:twitter" width={20} height={20} />
                </a>
                <a href="https://instagram.com/codexharoon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon icon="lucide:instagram" width={20} height={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link?.external ? (
                        <a 
                          href={link.path} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link 
                          href={link.path}
                          className="text-gray-400 hover:text-primary transition-colors"
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

        {/* Newsletter */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-medium mb-2">Subscribe to my newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on web development and design.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white"
                required
              />
              <Button type="submit" color="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Code x Haroon. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Designed and built with <span className="text-red-500">♥</span> By codexharoon.
          </p>
        </div>
      </div>
    </footer>
  );
}
