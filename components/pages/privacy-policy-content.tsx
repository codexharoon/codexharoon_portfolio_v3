"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/constants";

export function PrivacyPolicyContent() {
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
            Privacy Policy
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
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Introduction</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to {PERSONAL_INFO.brandName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect,
              use, and protect your personal information when you visit our portfolio website at{" "}
              <a href={PERSONAL_INFO.website} className="text-primary hover:underline">{PERSONAL_INFO.website.replace("https://", "")}</a>.
              Your privacy is important to us, and we are committed to transparency about our data practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Information We Collect</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We collect minimal information necessary to provide a great user experience:
            </p>
            <div className="space-y-3">
              <div className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5">Contact Form Data</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  When you submit our contact form, we collect your name, email address, and message content.
                  This information is used solely to respond to your inquiry.
                </p>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5">Analytics Data</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  We use Vercel Analytics and Speed Insights to collect anonymized usage data including page views,
                  referral sources, device type, and performance metrics. This data does not identify you personally.
                </p>
              </div>
              <div className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5">Cookies & Local Storage</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Our site uses local storage to remember your theme preference (light/dark mode).
                  We do not use advertising or tracking cookies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">How We Use Your Information</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Respond to inquiries submitted through the contact form</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Analyze website performance and improve user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:check-circle" className="text-accent mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Remember your display preferences (theme settings)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Data Sharing</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties.
              Anonymized analytics data is processed by Vercel in accordance with their{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                privacy policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Data Security</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your data. Our website is served
              over HTTPS, and we follow security best practices in our development process. However, no method
              of electronic transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Your Rights</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:shield" className="text-primary mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Request access to any personal data we hold about you</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:shield" className="text-primary mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Request deletion of your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="lucide:shield" className="text-primary mt-0.5 flex-shrink-0" width={16} height={16} />
                <span>Opt out of analytics tracking by using browser privacy settings</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-3">Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your data rights,
              please contact us at{" "}
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary hover:underline">
                {PERSONAL_INFO.email}
              </a>.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <p className="text-xs text-gray-400">
              This privacy policy may be updated periodically. We encourage you to review this page
              for the latest information on our privacy practices.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
