"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { PERSONAL_INFO } from "@/data/constants";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="glass-card p-4 flex items-center space-x-4">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon icon="lucide:mail" className="text-primary" width={20} height={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-0.5">Email</h3>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm transition-colors">
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>

      <div className="glass-card p-4 flex items-center space-x-4">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon icon="lucide:phone" className="text-primary" width={20} height={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-0.5">Phone</h3>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm transition-colors">
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>

      <div className="glass-card p-4 flex items-center space-x-4">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon icon="lucide:map-pin" className="text-primary" width={20} height={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-0.5">Location</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {PERSONAL_INFO.location}
          </p>
        </div>
      </div>

      <div className="glass-card p-4 flex items-center space-x-4">
        <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon icon="lucide:globe" className="text-primary" width={20} height={20} />
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-0.5">Website</h3>
          <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm transition-colors">
            {PERSONAL_INFO.website.replace("https://", "")}
          </a>
        </div>
      </div>
    </div>
  );
}
