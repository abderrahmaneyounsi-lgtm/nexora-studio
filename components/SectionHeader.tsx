"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center mb-12 md:mb-16 ${className}`}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function useStaggerContainer(delay = 0.1) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };
}

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
