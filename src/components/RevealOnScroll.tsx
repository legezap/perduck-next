"use client";

import { motion, useInView, type TargetAndTransition } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "clip";
}

const variants: Record<
  NonNullable<Props["direction"]>,
  { hidden: TargetAndTransition; visible: TargetAndTransition }
> = {
  up: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -32 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  clip: {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  },
};

export default function RevealOnScroll({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const { hidden, visible } = variants[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
