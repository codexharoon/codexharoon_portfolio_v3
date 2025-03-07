"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

export function TestimonialsSection({ reference }: { reference: any }) {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Working with Haroon was a game-changer for our project. His technical expertise and attention to detail resulted in a flawless web application that exceeded our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder of StartupX",
      avatar: "https://i.pravatar.cc/150?img=11",
      content: "Haroon delivered our e-commerce platform ahead of schedule and with all the features we requested. His communication throughout the project was excellent.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "The website Haroon built for our company has significantly increased our conversion rates. His understanding of both design and functionality is impressive.",
      rating: 4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white"
      ref={reference}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What My Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardBody className="p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <Avatar src={testimonial.avatar} className="mr-4" />
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <p className="text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            icon={i < testimonial.rating ? "lucide:star-filled" : "lucide:star"} 
                            className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                            width={16} 
                            height={16} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <Icon icon="lucide:quote" className="text-primary opacity-20" width={40} height={40} />
                    </div>
                    <p className="text-gray-600 italic flex-grow">{testimonial.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
