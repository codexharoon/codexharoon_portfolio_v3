"use client";

import React from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        variant="bordered"
        isRequired
        isDisabled={status === "loading"}
        classNames={{
          inputWrapper: "border-gray-200 dark:border-gray-700 hover:border-primary focus-within:border-primary",
        }}
      />

      <Input
        label="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        type="email"
        variant="bordered"
        isRequired
        isDisabled={status === "loading"}
        classNames={{
          inputWrapper: "border-gray-200 dark:border-gray-700 hover:border-primary focus-within:border-primary",
        }}
      />

      <Textarea
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your app idea..."
        variant="bordered"
        minRows={5}
        isRequired
        isDisabled={status === "loading"}
        classNames={{
          inputWrapper: "border-gray-200 dark:border-gray-700 hover:border-primary focus-within:border-primary",
        }}
      />

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          isLoading={status === "loading"}
          className={`w-full md:w-auto font-medium rounded-full px-8 ${status === "success"
              ? "bg-green-500 hover:bg-green-600 text-white"
              : status === "error"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-primary hover:bg-primary/90 text-white"
            }`}
          startContent={status === "idle" ? <Icon icon="lucide:send" width={16} height={16} /> : null}
        >
          {status === "idle" && "Send Message"}
          {status === "loading" && "Sending..."}
          {status === "success" && "Message Sent!"}
          {status === "error" && "Failed to Send"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-green-600 dark:text-green-400 font-medium animate-in fade-in slide-in-from-top-1">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400 font-medium animate-in fade-in slide-in-from-top-1">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
