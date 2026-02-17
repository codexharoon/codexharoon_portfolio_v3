"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background/80 backdrop-blur-sm z-50 fixed inset-0">
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Animated geometric loader */}
        <div className="relative w-24 h-24">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-primary/30 border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2 border-4 border-t-transparent border-r-blue-500 border-b-transparent border-l-blue-500/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Core */}
          <motion.div
            className="absolute inset-8 bg-gradient-to-tr from-primary to-blue-500 rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]"
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <motion.h3
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading...
          </motion.h3>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
