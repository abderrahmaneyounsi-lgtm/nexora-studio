"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface ThreeDCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function ThreeDCard({
  children,
  className = "",
  intensity = 14,
}: ThreeDCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 260,
    damping: 22,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const style: MotionStyle = {
    rotateX,
    rotateY,
    transformStyle: "preserve-3d",
  };

  return (
    <div className="h-full" style={{ perspective: "1200px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`group/card relative h-full ${className}`}
      >
        <div
          className="absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 group-hover/card:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none"
          aria-hidden
        />
        <div style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
