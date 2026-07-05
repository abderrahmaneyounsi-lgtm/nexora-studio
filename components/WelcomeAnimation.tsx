"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface WelcomeAnimationProps {
  onComplete: () => void;
}

export default function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100));
    }, 60);

    const exitTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        document.body.style.overflow = "";
        onComplete();
      }, 900);
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Background grid with depth */}
          <div className="absolute inset-0 grid-pattern-3d opacity-40" />

          {/* Radial glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-brand blur-[120px] opacity-30"
          />

          {/* 3D Logo Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotateX: -90, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80 }}
            className="relative mb-10"
            style={{ perspective: "800px" }}
          >
            <motion.div
              className="welcome-cube"
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="welcome-cube-face welcome-cube-front">N</div>
              <div className="welcome-cube-face welcome-cube-back">X</div>
              <div className="welcome-cube-face welcome-cube-right">S</div>
              <div className="welcome-cube-face welcome-cube-left">✦</div>
              <div className="welcome-cube-face welcome-cube-top" />
              <div className="welcome-cube-face welcome-cube-bottom" />
            </motion.div>

            {/* Orbiting particles */}
            <motion.div
              className="orbit-container"
              animate={{ rotateZ: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="orbit-particle"
                  style={{ transform: `rotateZ(${i * 90}deg) translateY(-70px)` }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Brand text — 3D flip in */}
          <motion.div
            initial={{ opacity: 0, rotateX: 90, y: 40 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            className="text-center"
            style={{ transformStyle: "preserve-3d", perspective: "600px" }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2">
              <span className="gradient-text">Nexora</span>{" "}
              <span className="text-text-primary">Studio</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="font-body text-text-secondary text-sm md:text-base tracking-widest uppercase"
            >
              We Build Websites That Convert
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-12 h-0.5 bg-border rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-brand rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
            className="mt-4 font-body text-xs text-text-secondary tracking-wider"
          >
            Chargement de l&apos;expérience...
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
