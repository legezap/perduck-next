"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  INLINE SVG LOGO COMPONENTS                                        */
/* ------------------------------------------------------------------ */

function IKGroupLogo({ colorProgress }: { colorProgress: number }) {
  const red = lerpColor("#888888", "#E30613", colorProgress);
  const dark = lerpColor("#888888", "#333333", colorProgress);
  const white = lerpColor("#888888", "#FFFFFF", colorProgress);

  return (
    <svg viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <circle cx="28" cy="28" r="24" fill={red} />
      <text x="18" y="36" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="22" fill={white}>
        IK
      </text>
      <text x="60" y="37" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="20" letterSpacing="3" fill={dark}>
        GROUP
      </text>
    </svg>
  );
}

function MicrosoftLogo({ colorProgress }: { colorProgress: number }) {
  const red = lerpColor("#888888", "#F25022", colorProgress);
  const green = lerpColor("#888888", "#7FBA00", colorProgress);
  const blue = lerpColor("#888888", "#00A4EF", colorProgress);
  const yellow = lerpColor("#888888", "#FFB900", colorProgress);
  const text = lerpColor("#888888", "#FFFFFF", colorProgress);

  const gap = 2;
  const size = 11;
  const ox = 8;
  const oy = 14;

  return (
    <svg viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      <rect x={ox} y={oy} width={size} height={size} fill={red} rx="1" />
      <rect x={ox + size + gap} y={oy} width={size} height={size} fill={yellow} rx="1" />
      <rect x={ox} y={oy + size + gap} width={size} height={size} fill={green} rx="1" />
      <rect x={ox + size + gap} y={oy + size + gap} width={size} height={size} fill={blue} rx="1" />
      <text x="42" y="35" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="400" fontSize="17" fill={text}>
        Microsoft
      </text>
    </svg>
  );
}

function SparkLogisticsLogo({ colorProgress }: { colorProgress: number }) {
  const green = lerpColor("#888888", "#00B140", colorProgress);
  const white = lerpColor("#888888", "#FFFFFF", colorProgress);

  return (
    <svg viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      {/* Spark bolt icon */}
      <polygon points="18,8 10,30 20,30 14,48 34,22 22,22 28,8" fill={green} />
      <text x="42" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="17" fill={white}>
        spark
      </text>
      <text x="42" y="45" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400" fontSize="10" letterSpacing="2" fill={green}>
        LOGISTICS
      </text>
    </svg>
  );
}

function AltronixLogo({ colorProgress }: { colorProgress: number }) {
  const red = lerpColor("#888888", "#CC0000", colorProgress);
  const blue = lerpColor("#888888", "#0057B8", colorProgress);

  return (
    <svg viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      {/* Triangle A */}
      <polygon points="24,8 8,46 40,46" fill="none" stroke={red} strokeWidth="3" strokeLinejoin="round" />
      <line x1="16" y1="34" x2="32" y2="34" stroke={red} strokeWidth="2.5" />
      <text x="50" y="37" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="19" fill={blue}>
        Altronix
      </text>
    </svg>
  );
}

function VanderlandeLogo({ colorProgress }: { colorProgress: number }) {
  const orange = lerpColor("#888888", "#FF6600", colorProgress);
  const white = lerpColor("#888888", "#FFFFFF", colorProgress);

  return (
    <svg viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      {/* Orange accent bar */}
      <rect x="0" y="42" width="220" height="3" rx="1.5" fill={orange} />
      <text x="110" y="33" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="16" letterSpacing="3" fill={white} textAnchor="middle">
        VANDERLANDE
      </text>
    </svg>
  );
}

function AbsolutSkandicLogo({ colorProgress }: { colorProgress: number }) {
  const dark = lerpColor("#888888", "#E8E8E8", colorProgress);
  const gold = lerpColor("#888888", "#D4AF37", colorProgress);

  return (
    <svg viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="tb2-svg">
      {/* House/building icon */}
      <polygon points="16,20 24,10 32,20" fill="none" stroke={gold} strokeWidth="2" strokeLinejoin="round" />
      <rect x="18" y="20" width="12" height="14" fill="none" stroke={gold} strokeWidth="2" />
      <rect x="22" y="24" width="4" height="6" fill={gold} opacity="0.6" />
      <text x="42" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="11" letterSpacing="1.5" fill={dark}>
        ABSOLUT
      </text>
      <text x="42" y="40" fontFamily="Arial, Helvetica, sans-serif" fontWeight="400" fontSize="11" letterSpacing="2" fill={gold}>
        SKANDIC
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  HELPERS                                                            */
/* ------------------------------------------------------------------ */

/** Hex color lerp */
function lerpColor(a: string, b: string, t: number): string {
  const clamp = Math.max(0, Math.min(1, t));
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const r = Math.round(ar + (br - ar) * clamp);
  const g = Math.round(ag + (bg - ag) * clamp);
  const bv = Math.round(ab + (bb - ab) * clamp);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${bv.toString(16).padStart(2, "0")}`;
}

const BRAND_COLORS = [
  "#E30613", // IK Group
  "#00A4EF", // Microsoft
  "#00B140", // Spark Logistics
  "#0057B8", // Altronix
  "#FF6600", // Vanderlande
  "#D4AF37", // Absolut Skandic
];

const BRAND_NAMES = [
  "IK Group",
  "Microsoft",
  "Spark Logistics",
  "Altronix",
  "Vanderlande",
  "Absolut Skandic",
];

const LOGO_COMPONENTS = [
  IKGroupLogo,
  MicrosoftLogo,
  SparkLogisticsLogo,
  AltronixLogo,
  VanderlandeLogo,
  AbsolutSkandicLogo,
];

// Float animation phases (different per logo for organic feel)
const FLOAT_PHASES = [0, 1.2, 2.4, 3.6, 0.8, 2.0];

/* ------------------------------------------------------------------ */
/*  SINGLE LOGO ITEM                                                   */
/* ------------------------------------------------------------------ */

function LogoItem({
  index,
  isInView,
  colorProgress,
}: {
  index: number;
  isInView: boolean;
  colorProgress: number;
}) {
  const LogoSvg = LOGO_COMPONENTS[index];
  const brandColor = BRAND_COLORS[index];
  const brandName = BRAND_NAMES[index];
  const floatPhase = FLOAT_PHASES[index];

  return (
    <motion.div
      className="tb2-logo-wrap"
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.8 }
      }
      transition={{
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15,
      }}
      aria-label={brandName}
    >
      {/* Float animation wrapper */}
      <motion.div
        className="tb2-logo-inner"
        animate={
          isInView
            ? {
                y: [0, -4, 0, 4, 0],
              }
            : {}
        }
        transition={{
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatPhase,
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {/* Hover glow */}
        <div
          className="tb2-glow"
          style={{
            background: `radial-gradient(ellipse at center, ${brandColor}30 0%, transparent 70%)`,
          }}
        />

        {/* Brand-color shadow on hover (CSS) */}
        <div
          className="tb2-shadow"
          style={{
            background: `radial-gradient(ellipse at center, ${brandColor}40 0%, transparent 70%)`,
          }}
        />

        <LogoSvg colorProgress={colorProgress} />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: 40px shift
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Color fill progress: maps scroll 0.3→0.7 to 0→1
  const rawColorProgress = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const colorProgress = useSpring(rawColorProgress, { stiffness: 80, damping: 20 });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tb2-section {
          padding: 100px 0;
          border-bottom: 1px solid var(--color-border-default);
          overflow: hidden;
          position: relative;
        }

        .tb2-label {
          text-align: center;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-text-dim);
          margin-bottom: 48px;
        }

        .tb2-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .tb2-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 220px;
          height: 56px;
        }

        .tb2-logo-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }

        .tb2-svg {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;
          z-index: 1;
        }

        /* Glow on hover */
        .tb2-glow {
          position: absolute;
          inset: -24px;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }
        .tb2-logo-inner:hover .tb2-glow {
          opacity: 1;
        }

        /* Brand-colored shadow below on hover */
        .tb2-shadow {
          position: absolute;
          bottom: -16px;
          left: 10%;
          right: 10%;
          height: 16px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
          z-index: 0;
          transform: scaleX(0.6);
          filter: blur(6px);
        }
        .tb2-logo-inner:hover .tb2-shadow {
          opacity: 1;
          transform: scaleX(1);
        }

        /* Ambient line */
        .tb2-section::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252, 217, 64, 0.2), transparent);
          transition: opacity 1s ease;
          opacity: 0;
        }
        .tb2-section.tb2-visible::after {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .tb2-grid { gap: 48px; }
          .tb2-logo-wrap { width: 160px; height: 44px; }
        }

        @media (max-width: 768px) {
          .tb2-section { padding: 64px 0; }
          .tb2-grid { gap: 48px; }
          .tb2-logo-wrap { width: 160px; height: 44px; }
        }

        @media (max-width: 480px) {
          .tb2-grid { gap: 32px; }
          .tb2-logo-wrap { width: 130px; height: 36px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tb2-glow,
          .tb2-shadow {
            transition: none !important;
          }
        }
      `}} />

      <section
        ref={sectionRef}
        className={`tb2-section${isInView ? " tb2-visible" : ""}`}
      >
        <p className="tb2-label">Trusted by Industry Leaders</p>
        <motion.div className="tb2-grid" style={{ y }}>
          {LOGO_COMPONENTS.map((_, i) => (
            <LogoItemWithProgress
              key={i}
              index={i}
              isInView={isInView}
              colorMotionValue={colorProgress}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  BRIDGE: motion value → React state for color lerp                  */
/* ------------------------------------------------------------------ */

import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

function LogoItemWithProgress({
  index,
  isInView,
  colorMotionValue,
}: {
  index: number;
  isInView: boolean;
  colorMotionValue: ReturnType<typeof useSpring>;
}) {
  const [colorProgress, setColorProgress] = useState(0);

  useMotionValueEvent(colorMotionValue, "change", (v: number) => {
    // Throttle updates: only update if difference > 0.02
    setColorProgress((prev) => (Math.abs(prev - v) > 0.02 ? v : prev));
  });

  return (
    <LogoItem
      index={index}
      isInView={isInView}
      colorProgress={colorProgress}
    />
  );
}
