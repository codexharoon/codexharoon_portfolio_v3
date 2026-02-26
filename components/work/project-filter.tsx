"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  showAll?: boolean;
}

export function ProjectFilter({ activeFilter, onFilterChange, showAll = true }: ProjectFilterProps) {
  const baseFilters = [
    { id: "ios", label: "iOS", icon: "lucide:apple" },
    { id: "macos", label: "macOS", icon: "lucide:monitor" },
    { id: "mobile", label: "Mobile", icon: "lucide:smartphone" },
    { id: "web", label: "Web", icon: "lucide:globe" },
  ];

  const filters = showAll
    ? [{ id: "all", label: "All Apps", icon: "lucide:layout-grid" }, ...baseFilters]
    : baseFilters;

  return (
    <div className="flex justify-center w-full mb-6 sm:mb-10 px-2 sm:px-0">
      <div className="flex flex-wrap justify-center glass-card p-1 sm:p-1.5 gap-1.5 sm:gap-2">
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
