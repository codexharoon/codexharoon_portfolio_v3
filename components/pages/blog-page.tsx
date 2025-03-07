"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export function BlogPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential React Hooks Every Developer Should Know",
      excerpt: "React Hooks have revolutionized how we write React components. In this article, we explore the most useful hooks and how to use them effectively.",
      date: "May 15, 2023",
      category: "React",
      image: "https://picsum.photos/600/400?random=1",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Building Scalable Node.js Applications: Best Practices",
      excerpt: "Learn how to structure your Node.js applications for scalability, maintainability, and performance in production environments.",
      date: "April 22, 2023",
      category: "Node.js",
      image: "https://picsum.photos/600/400?random=2",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "TypeScript vs JavaScript: When to Use Each",
      excerpt: "A comprehensive comparison of TypeScript and JavaScript, with guidelines on when to choose one over the other for your projects.",
      date: "March 10, 2023",
      category: "JavaScript",
      image: "https://picsum.photos/600/400?random=3",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Optimizing Web Performance: A Developer's Guide",
      excerpt: "Practical strategies and techniques to improve the performance of your web applications and deliver a better user experience.",
      date: "February 28, 2023",
      category: "Performance",
      image: "https://picsum.photos/600/400?random=4",
      readTime: "15 min read"
    },
    {
      id: 5,
      title: "Introduction to Serverless Architecture",
      excerpt: "Explore the benefits and challenges of serverless architecture and learn how to build applications using AWS Lambda and other serverless services.",
      date: "January 15, 2023",
      category: "Cloud",
      image: "https://picsum.photos/600/400?random=5",
      readTime: "11 min read"
    },
    {
      id: 6,
      title: "Mastering CSS Grid Layout",
      excerpt: "A deep dive into CSS Grid Layout and how it can be used to create complex, responsive layouts with minimal code.",
      date: "December 5, 2022",
      category: "CSS",
      image: "https://picsum.photos/600/400?random=6",
      readTime: "9 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", "React", "Node.js", "JavaScript", "Performance", "Cloud", "CSS"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredByCategory = activeCategory === "All" 
    ? filteredPosts 
    : filteredPosts.filter(post => post.category === activeCategory);

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
              <h1 className="text-4xl font-heading font-bold mb-4">Blog</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on web development, design, and technology.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="w-full md:w-auto flex overflow-x-auto pb-2 md:pb-0 gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    color={activeCategory === category ? "primary" : "default"}
                    variant={activeCategory === category ? "solid" : "light"}
                    onPress={() => setActiveCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="w-full md:w-64">
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  startContent={<Icon icon="lucide:search" className="text-gray-400" />}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredByCategory.length > 0 ? (
                filteredByCategory.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority={index < 3}
                        />
                      </div>
                      <CardBody className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{post.date}</span>
                          <Button
                            size="sm"
                            variant="light"
                            color="primary"
                            endContent={<Icon icon="lucide:arrow-right" />}
                          >
                            Read more
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Icon icon="lucide:search-x" className="mx-auto mb-4 text-gray-400" width={48} height={48} />
                  <h3 className="text-xl font-medium mb-2">No articles found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-medium mb-4">Subscribe to My Newsletter</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <div className="flex max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="mr-2"
                />
                <Button color="primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
