"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Input, Textarea, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { toast } from "@/components/ui/toast";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/constants";

export function ContactMePage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          color: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          color: "danger",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        color: "danger",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Email",
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`,
      color: "bg-pink-100",
      iconColor: "text-pink-500"
    },
    {
      icon: "lucide:phone",
      title: "Phone",
      value: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`,
      color: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: "lucide:map-pin",
      title: "Location",
      value: PERSONAL_INFO.location,
      link: null,
      color: "bg-green-100",
      iconColor: "text-green-500"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center text-primary mb-8">
              <Icon icon="lucide:arrow-left" className="mr-2" />
              Back to Home
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold mb-4">Get In Touch</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody className="p-6 flex flex-col items-center text-center">
                      <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mb-4`}>
                        <Icon icon={info.icon} className={info.iconColor} width={32} height={32} />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-primary">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card>
              <CardBody className="p-8">
                <h2 className="text-2xl font-medium mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
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

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      endContent={<Icon icon="lucide:send" />}
                      isLoading={isSubmitting}
                      isDisabled={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-medium mb-6">Find Me On</h2>
              <div className="flex space-x-4">
                <Tooltip content="GitHub Profile" placement="top" showArrow>
                  <Button
                    as="a"
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    isIconOnly
                    size="lg"
                    radius="full"
                    className="bg-gray-100 hover:bg-gray-800 hover:text-white dark:bg-gray-800 dark:hover:bg-gray-100 dark:hover:text-black transition-all"
                    aria-label="GitHub"
                  >
                    <Icon icon="lucide:github" width={24} height={24} />
                  </Button>
                </Tooltip>
                <Tooltip content="LinkedIn Profile" placement="top" showArrow>
                  <Button
                    as="a"
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    isIconOnly
                    size="lg"
                    radius="full"
                    className="bg-[#e8f3ff] text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white dark:bg-[#0a66c2]/20 dark:hover:bg-[#0a66c2] transition-all"
                    aria-label="LinkedIn"
                  >
                    <Icon icon="lucide:linkedin" width={24} height={24} />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
