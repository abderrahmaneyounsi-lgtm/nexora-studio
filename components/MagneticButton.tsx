"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: "gradient" | "outline";
  className?: string;
}

export default function MagneticButton({
  children,
  href,
  variant = "gradient",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });
  const rotateX = useSpring(useTransform(y, [-20, 20], [8, -8]), { stiffness: 200, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-20, 20], [-8, 8]), { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    variant === "gradient"
      ? "bg-gradient-brand text-white glow-violet-hover"
      : "border border-border text-text-primary hover:border-primary/50";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center px-8 py-3.5 rounded-full font-body text-base font-semibold transition-shadow duration-200 ${baseStyles} ${className}`}
    >
      <span style={{ transform: "translateZ(12px)" }}>{children}</span>
    </motion.a>
  );
}
