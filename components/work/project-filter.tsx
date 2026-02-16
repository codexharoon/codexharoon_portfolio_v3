"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const filters = [
    { id: "all", label: "All Apps", icon: "lucide:layout-grid" },
    { id: "ios", label: "iOS", icon: "lucide:smartphone" },
    { id: "macos", label: "macOS", icon: "lucide:monitor" },
  ];

  return (
    <div className="flex justify-center mb-8 sm:mb-10">
      <div className="inline-flex glass-card p-1 sm:p-1.5 gap-0.5 sm:gap-1">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "solid" : "light"}
            size="sm"
            className={`rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm px-3 sm:px-4 min-w-0 ${activeFilter === filter.id
              ? "bg-primary text-white"
              : "text-gray-500 hover:text-primary"
              }`}
            onPress={() => onFilterChange(filter.id)}
            startContent={<Icon icon={filter.icon} width={14} height={14} className="flex-shrink-0" />}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
