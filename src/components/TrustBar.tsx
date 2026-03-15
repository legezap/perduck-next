"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/**
 * Brand colors for each logo (index-matched to trustLogos array)
 * Order: IK Group, Microsoft, Spark Logistics, Altronix, Vanderlande, Absolut Skandic
 */
const BRAND_COLORS = [
  "#E30613",  // IK Group — red
  "#00A4EF",  // Microsoft — blue
  "#00B140",  // Spark Logistics — green
  "#0057B8",  // Altronix — blue
  "#FF6600",  // Vanderlande — orange
  "#1A1A1A",  // Absolut Skandic — dark (gold accent)
];

const BRAND_NAMES = [
  "IK Group",
  "Microsoft",
  "Spark Logistics",
  "Altronix",
  "Vanderlande",
  "Absolut Skandic",
];

interface Logo {
  src: string;
  alt: string;
}

interface TrustBarProps {
  logos: Logo[];
}

export default function TrustBar({ logos }: TrustBarProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tb-section {
          padding: 100px 0;
          border-bottom: 1px solid var(--color-border-default);
          overflow: hidden;
          position: relative;
        }

        .tb-label {
          text-align: center;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-text-dim);
          margin-bottom: 48px;
        }

        .tb-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 72px;
          flex-wrap: wrap;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .tb-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 60px;
        }

        /* White logo (base layer) */
        .tb-logo-white {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.3;
          transition: opacity 1s ease;
        }

        /* Color overlay: same logo tinted with brand color via CSS */
        .tb-logo-color {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0;
          transition: opacity 1.2s ease;
        }

        /* When in view: white fades, color appears */
        .tb-logo-wrap.tb-in-view .tb-logo-white {
          opacity: 0.15;
        }
        .tb-logo-wrap.tb-in-view .tb-logo-color {
          opacity: 0.9;
        }

        /* Hover: full brightness */
        .tb-logo-wrap:hover .tb-logo-white {
          opacity: 0;
        }
        .tb-logo-wrap:hover .tb-logo-color {
          opacity: 1;
          transform: scale(1.06);
        }

        .tb-logo-color {
          transition: opacity 1.2s ease, transform 0.4s ease;
        }

        /* Glow behind on hover — uses brand color */
        .tb-glow {
          position: absolute;
          inset: -20px;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          z-index: 0;
        }
        .tb-logo-wrap:hover .tb-glow {
          opacity: 1;
        }

        /* Ambient line */
        .tb-section::after {
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
        .tb-section.tb-visible::after {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .tb-section { padding: 64px 0; }
          .tb-grid { gap: 40px; }
          .tb-logo-wrap { width: 150px; height: 48px; }
        }

        @media (max-width: 480px) {
          .tb-grid { gap: 28px; }
          .tb-logo-wrap { width: 120px; height: 40px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tb-logo-white, .tb-logo-color, .tb-glow { transition: none !important; }
        }
      `}} />

      <section
        ref={sectionRef}
        className={`tb-section${isInView ? " tb-visible" : ""}`}
      >
        <p className="tb-label">Trusted by Industry Leaders</p>
        <motion.div className="tb-grid" style={{ y }}>
          {logos.map((logo, i) => {
            const brandColor = BRAND_COLORS[i] || "#fcd940";
            const brandName = BRAND_NAMES[i] || logo.alt;

            return (
              <motion.div
                key={i}
                className={`tb-logo-wrap${isInView ? " tb-in-view" : ""}`}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 32, scale: 0.95 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                  delay: i * 0.12,
                }}
              >
                {/* Glow background */}
                <div
                  className="tb-glow"
                  style={{
                    background: `radial-gradient(ellipse at center, ${brandColor}15 0%, transparent 70%)`,
                  }}
                />

                {/* White base logo */}
                <Image
                  src={logo.src}
                  alt={brandName}
                  fill
                  sizes="200px"
                  className="tb-logo-white"
                  style={{ objectFit: "contain" }}
                />

                {/* SVG filter for color tinting */}
                <svg width="0" height="0" style={{ position: "absolute" }}>
                  <filter id={`tint-${i}`}>
                    <feFlood floodColor={brandColor} result="color" />
                    <feComposite in="color" in2="SourceAlpha" operator="in" />
                  </filter>
                </svg>

                {/* Properly tinted version using SVG filter */}
                <Image
                  src={logo.src}
                  alt=""
                  fill
                  sizes="200px"
                  className="tb-logo-color"
                  aria-hidden="true"
                  style={{
                    objectFit: "contain",
                    filter: `url(#tint-${i})`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
