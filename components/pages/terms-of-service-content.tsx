"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function TermsOfServiceContent() {
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
            
            <h1 className="text-4xl font-heading font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Code x Haroon ("Company", "we", "our", "us")! As you have clicked on our Terms of Service, please read these Terms of Service carefully before using our website.
              </p>
              <p>
                These Terms of Service govern your use of our website operated by Code x Haroon at https://codexharoon.com.
              </p>
              <p>
                Our Privacy Policy also governs your use of our website and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <Link href="/privacy-policy" className="text-primary">Privacy Policy</Link>.
              </p>
              <p>
                Your agreement with us includes these Terms of Service and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
              </p>
              <p>
                If you do not agree with Agreements, please do not use our website.
              </p>
              
              <h2>2. Communications</h2>
              <p>
                By using our website, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing us.
              </p>
              
              <h2>3. Content</h2>
              <p>
                Our website allows you to view information about our services, portfolio, and contact us.
              </p>
              <p>
                We reserve the right to, but not the obligation to, monitor and review content on our website.
              </p>
              <p>
                By using our website, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our website. You agree that this license includes the right for us to make your content available to other users of our website, who may also use your content subject to these Terms.
              </p>
              <p>
                You represent and warrant that: (i) the content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your content on or through our website does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
              </p>
              
              <h2>4. Prohibited Uses</h2>
              <p>
                You may use our website only for lawful purposes and in accordance with Terms. You agree not to use our website:
              </p>
              <ul>
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
              </ul>
              
              <h2>5. Intellectual Property</h2>
              <p>
                Our website and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Code x Haroon and its licensors. Our website is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Code x Haroon.
              </p>
              
              <h2>6. Links to Other Websites</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by Code x Haroon.
              </p>
              <p>
                Code x Haroon has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
              </p>
              
              <h2>7. Termination</h2>
              <p>
                We may terminate or suspend your access to our website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
              </p>
              
              <h2>8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2>9. Changes to Terms of Service</h2>
              <p>
                We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review these pages periodically. When we change the Terms in a material manner, we will notify you that material changes have been made to the Terms. Your continued use of our website after any such change constitutes your acceptance of the new Terms of Service.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at hello@codexharoon.com.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
