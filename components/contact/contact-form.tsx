"use client";

import React from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
        // Removed auto-timeout so users can see the success state
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

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center p-6 sm:p-10 text-center space-y-4 h-full min-h-[350px] bg-green-500/5 rounded-2xl border border-green-500/10"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-2"
        >
          <Icon icon="lucide:check-circle-2" className="text-green-500 w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>
        
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-green-600 dark:text-green-400">
          Message Sent Successfully!
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
          Thank you for reaching out. I've received your message and will get back to you within 24-48 hours.
        </p>
        
        <Button 
          variant="flat" 
          color="primary" 
          className="mt-4 sm:mt-6 font-medium px-6"
          onPress={() => setStatus("idle")}
          startContent={<Icon icon="lucide:refresh-cw" width={16} />}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

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
          className={`w-full md:w-auto font-medium rounded-full px-8 ${
            status === "error"
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-primary hover:bg-primary/90 text-white"
          }`}
          startContent={status === "idle" ? <Icon icon="lucide:send" width={16} height={16} /> : null}
        >
          {status === "idle" && "Send Message"}
          {status === "loading" && "Sending..."}
          {status === "error" && "Failed to Send"}
        </Button>

        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400 font-medium animate-in fade-in slide-in-from-top-1">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
