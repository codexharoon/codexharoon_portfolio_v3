"use client";

import React from "react";
import { addToast } from "@heroui/react";

interface ToastOptions {
  title: string;
  description?: string;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  duration?: number;
}

export const toast = ({ 
  title, 
  description, 
  color = "default", 
  duration = 5000 
}: ToastOptions) => {
  return addToast({
    title,
    description,
    color,
    timeout: duration,
  });
};
