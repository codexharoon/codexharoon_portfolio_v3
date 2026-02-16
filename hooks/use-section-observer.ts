"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

export function useSectionObserver() {
  const [activeSection, setActiveSection] = React.useState("home");

  const homeRef = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("home");
    },
  });

  const aboutRef = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("about");
    },
  });

  const skillsRef = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("skills");
    },
  });

  const workRef = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("work");
    },
  });

  const certificationsRef = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("certifications");
    },
  });

  const contactRef = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("contact");
    },
  });

  return {
    activeSection,
    refs: {
      homeRef,
      aboutRef,
      skillsRef,
      workRef,
      certificationsRef,
      contactRef
    }
  };
}
