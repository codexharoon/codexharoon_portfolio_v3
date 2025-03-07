"use client";

import React from "react";
import { Button } from "@heroui/react";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-gray-100 rounded-lg p-1">
        <Button
          variant={activeFilter === "all" ? "solid" : "light"}
          color={activeFilter === "all" ? "primary" : "default"}
          className="rounded-lg"
          onPress={() => onFilterChange("all")}
        >
          All Work
        </Button>
        <Button
          variant={activeFilter === "web" ? "solid" : "light"}
          color={activeFilter === "web" ? "primary" : "default"}
          className="rounded-lg"
          onPress={() => onFilterChange("web")}
        >
          Web Apps
        </Button>
        <Button
          variant={activeFilter === "mobile" ? "solid" : "light"}
          color={activeFilter === "mobile" ? "primary" : "default"}
          className="rounded-lg"
          onPress={() => onFilterChange("mobile")}
        >
          Mobile Apps
        </Button>
      </div>
    </div>
  );
}
