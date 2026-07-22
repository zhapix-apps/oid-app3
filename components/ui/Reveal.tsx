"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  scale?: boolean;
}

export default function Reveal({ children, className = "", delay = 0, scale = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={scale ? { opacity: 0, scale: 0.92 } : { opacity: 0, y: 28 }}
      whileInView={scale ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
