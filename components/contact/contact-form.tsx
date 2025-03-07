"use client";

import React from "react";
import { Button, Input, Textarea } from "@heroui/react";

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
    // Here you would typically send the data to your backend
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        variant="bordered"
        isRequired
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
      />
      
      <Textarea
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Enter your message"
        variant="bordered"
        minRows={5}
        isRequired
      />
      
      <Button 
        type="submit" 
        color="primary" 
        className="w-full md:w-auto transition-colors hover:bg-secondary"
      >
        Send Message
      </Button>
    </form>
  );
}
