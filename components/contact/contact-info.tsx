"use client";

import React from "react";
import { Icon } from "@iconify/react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
          <Icon icon="lucide:mail" className="text-pink-500" width={24} height={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium">Email</h3>
          <a href="mailto:hello@example.com" className="text-gray-600 hover:text-primary">
            hello@example.com
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon icon="lucide:phone" className="text-blue-500" width={24} height={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium">Phone</h3>
          <a href="tel:+1234567890" className="text-gray-600 hover:text-primary">
            +1 (234) 567-890
          </a>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <Icon icon="lucide:map-pin" className="text-green-500" width={24} height={24} />
        </div>
        <div>
          <h3 className="text-lg font-medium">Location</h3>
          <p className="text-gray-600">
            New York, NY, USA
          </p>
        </div>
      </div>
    </div>
  );
}
