"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/constants";

export function TermsOfServiceContent() {
  const lastUpdated = "February 16, 2026";

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <Icon icon="lucide:arrow-left" width={16} height={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-gray dark:prose-invert max-w-none space-y-8"
        >
          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Agreement to Terms</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing and using {PERSONAL_INFO.brandName}&apos;s portfolio website at{" "}
              <a href={PERSONAL_INFO.website} className="text-primary hover:underline">{PERSONAL_INFO.website.replace("https://", "")}</a>,
              you agree to be bound by these Terms of Service. If you do not agree with any part of these terms,
              please discontinue use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Use of This Website</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              This website is a personal portfolio showcasing iOS &amp; macOS development work. You may use this site to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Browse portfolio content and project showcases</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Review services offered and professional experience</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Submit inquiries through the contact form</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Connect through linked social profiles</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Intellectual Property</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              All content on this website — including but not limited to text, graphics, design elements,
              project descriptions, code snippets, and logos — is the intellectual property of {PERSONAL_INFO.name}{" "}
              unless otherwise stated. You may not reproduce, distribute, or create derivative works from
              this content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Services &amp; Engagements</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              The portfolio showcases past and current development work. Any engagement for iOS or macOS development
              services will be governed by a separate agreement or contract negotiated between both parties.
              Information on this site does not constitute a binding offer or contract for services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Disclaimers</h2>
            <div className="space-y-3">
              <div className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5">No Warranty</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  This website is provided &quot;as is&quot; without warranties of any kind. While we strive to keep
                  content accurate and up to date, we make no guarantees regarding completeness or reliability.
                </p>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5">External Links</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  This site may link to external websites (GitHub, LinkedIn, App Store, etc.).
                  We are not responsible for the content or privacy practices of third-party sites.
                </p>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5">Limitation of Liability</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {PERSONAL_INFO.name} shall not be liable for any damages arising from the use
                  or inability to use this website or its content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Prohibited Activities</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              When using this website, you agree not to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:x-circle" className="text-red-500 mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Attempt to gain unauthorized access to any part of the website</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:x-circle" className="text-red-500 mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Use automated tools to scrape or download content</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:x-circle" className="text-red-500 mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Submit false or misleading information through the contact form</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:x-circle" className="text-red-500 mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Use this site for any illegal or harmful purpose</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Changes to Terms</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of this website after
              changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Contact</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary hover:underline">
                {PERSONAL_INFO.email}
              </a>.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <p className="text-xs text-gray-400">
              These terms are governed by applicable laws. Any disputes shall be resolved through
              good-faith negotiation between parties.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
