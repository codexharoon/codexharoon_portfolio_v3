"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-primary mb-8">
              <Icon icon="lucide:arrow-left" className="mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-heading font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a contact request through https://codexharoon.com (the "Site").
              </p>
              
              <h2>Personal Information We Collect</h2>
              <p>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
              <p>
                Additionally, as you browse the Site, we collect information about the individual web pages that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
              </p>
              
              <h3>We collect Device Information using the following technologies:</h3>
              <ul>
                <li>
                  "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org</a>.
                </li>
                <li>
                  "Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                </li>
              </ul>
              
              <h2>Contact Forms</h2>
              <p>
                When you make a contact request through the Site, we collect certain information from you, including your name, email address, and the contents of your message. We refer to this information as "Contact Information."
              </p>
              <p>
                When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Contact Information.
              </p>
              
              <h2>How We Use Your Personal Information</h2>
              <p>
                We use the Contact Information that we collect generally to respond to your inquiries and to communicate with you when necessary. Additionally, we use this information to:
              </p>
              <ul>
                <li>Communicate with you;</li>
                <li>Screen for potential risk or fraud; and</li>
                <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
              </ul>
              <p>
                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our visitors browse and interact with the Site).
              </p>
              
              <h2>Sharing Your Personal Information</h2>
              <p>
                We do not share your Personal Information with third parties except as described in this Privacy Policy.
              </p>
              <p>
                We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
              </p>
              
              <h2>Your Rights</h2>
              <p>
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
              </p>
              <p>
                Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to the United States.
              </p>
              
              <h2>Data Retention</h2>
              <p>
                When you submit a contact form through the Site, we will maintain your Contact Information for our records unless and until you ask us to delete this information.
              </p>
              
              <h2>Changes</h2>
              <p>
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at hello@codexharoon.com.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
