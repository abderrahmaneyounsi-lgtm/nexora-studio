"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 80, top: "15%", left: "8%", delay: 0, duration: 18, rotate: [0, 360, 720] },
  { size: 56, top: "60%", left: "85%", delay: 1, duration: 22, rotate: [0, -360, -720] },
  { size: 40, top: "75%", left: "12%", delay: 2, duration: 16, rotate: [0, 180, 360] },
  { size: 64, top: "25%", left: "88%", delay: 0.5, duration: 20, rotate: [0, 270, 540] },
  { size: 32, top: "45%", left: "5%", delay: 1.5, duration: 14, rotate: [0, -180, -360] },
];

export default function FloatingShapes3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute shape-3d"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            rotateX: shape.rotate,
            rotateY: shape.rotate,
            rotateZ: [0, 45, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="shape-face shape-face-front" />
          <div className="shape-face shape-face-back" />
          <div className="shape-face shape-face-right" />
          <div className="shape-face shape-face-left" />
          <div className="shape-face shape-face-top" />
          <div className="shape-face shape-face-bottom" />
        </motion.div>
      ))}

      {/* Floating rings */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 ring-3d"
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 ring-3d ring-3d-sm"
        animate={{ rotateX: -360, rotateZ: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
