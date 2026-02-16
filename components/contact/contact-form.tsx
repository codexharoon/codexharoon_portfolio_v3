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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
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
        classNames={{
          inputWrapper: "border-gray-200 dark:border-gray-700 hover:border-primary focus-within:border-primary",
        }}
      />

      <Button
        type="submit"
        className="w-full md:w-auto bg-primary text-white font-medium rounded-full px-8 hover:bg-primary/90"
        startContent={<Icon icon="lucide:send" width={16} height={16} />}
      >
        Send Message
      </Button>
    </form>
  );
}
