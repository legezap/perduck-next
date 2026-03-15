"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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

  // Parallax: logos shift slightly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tb-section {
          padding: 80px 0;
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
          margin-bottom: 40px;
        }

        .tb-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .tb-logo-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tb-logo {
          height: 44px;
          width: 160px;
          object-fit: contain;
          transition: all 0.8s cubic-bezier(0, 0, 0.2, 1);
          filter: grayscale(100%) brightness(0.7);
          opacity: 0.4;
        }

        /* On scroll into view: colorize + brighten */
        .tb-logo.tb-active {
          filter: grayscale(0%) brightness(1);
          opacity: 0.85;
        }

        .tb-logo:hover {
          filter: grayscale(0%) brightness(1.1);
          opacity: 1;
          transform: scale(1.08);
        }

        /* Subtle glow behind logo on hover */
        .tb-logo-wrap::after {
          content: '';
          position: absolute;
          inset: -12px;
          border-radius: 16px;
          background: radial-gradient(ellipse at center, rgba(252, 217, 64, 0.06) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .tb-logo-wrap:hover::after {
          opacity: 1;
        }

        /* Ambient line under the section */
        .tb-section::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(252, 217, 64, 0.15), transparent);
          transition: opacity 0.8s ease;
          opacity: 0;
        }

        .tb-section.tb-visible::after {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .tb-section { padding: 48px 0; }
          .tb-grid { gap: 32px; }
          .tb-logo { height: 36px; width: 130px; }
        }

        @media (max-width: 480px) {
          .tb-grid { gap: 24px; }
          .tb-logo { height: 30px; width: 110px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tb-logo { transition: none !important; }
        }
      `}} />

      <section
        ref={sectionRef}
        className={`tb-section${isInView ? " tb-visible" : ""}`}
      >
        <p className="tb-label">Trusted by Industry Leaders</p>
        <motion.div className="tb-grid" style={{ y }}>
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="tb-logo-wrap"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.1,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={44}
                className={`tb-logo${isInView ? " tb-active" : ""}`}
                style={{
                  transitionDelay: `${i * 0.12}s`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
