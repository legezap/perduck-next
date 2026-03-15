"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { asset } from "@/lib/basePath";

/* ------------------------------------------------------------------ */
/*  LOGO DATA                                                          */
/* ------------------------------------------------------------------ */

const LOGOS = [
  { src: asset("/assets/logos/client-1.png"), alt: "IK Group" },
  { src: asset("/assets/logos/client-2.png"), alt: "Microsoft" },
  { src: asset("/assets/logos/client-3.png"), alt: "Spark Logistics" },
  { src: asset("/assets/logos/client-4.png"), alt: "Altronix" },
  { src: asset("/assets/logos/client-5.png"), alt: "Vanderlande" },
  { src: asset("/assets/logos/client-6.png"), alt: "Absolut Skandic" },
];

const FLOAT_PHASES = [0, 1.2, 2.4, 3.6, 0.8, 2.0];

/* ------------------------------------------------------------------ */
/*  SINGLE LOGO                                                        */
/* ------------------------------------------------------------------ */

function LogoItem({ index, isInView }: { index: number; isInView: boolean }) {
  const logo = LOGOS[index];
  const floatPhase = FLOAT_PHASES[index];

  return (
    <motion.div
      className="tb2-logo-wrap"
      initial={{ opacity: 0, y: 50, scale: 0.85 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.85 }
      }
      transition={{
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.15,
      }}
      aria-label={logo.alt}
    >
      <motion.div
        className="tb2-logo-inner"
        animate={
          isInView ? { y: [0, -4, 0, 4, 0] } : {}
        }
        transition={{
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatPhase,
        }}
        whileHover={{
          y: -10,
          scale: 1.08,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={240}
          height={64}
          className="tb2-img"
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */

export default function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

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
          letter-spacing: 0.25em;
          color: var(--color-text-dim);
          margin-bottom: 56px;
          font-family: var(--font-body);
        }

        .tb2-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 72px;
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
        }

        .tb2-logo-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: default;
        }

        .tb2-img {
          width: 200px;
          height: 56px;
          opacity: 0.65;
          transition: opacity 0.5s ease, filter 0.5s ease;
        }

        .tb2-logo-inner:hover .tb2-img {
          opacity: 0.95;
          filter: drop-shadow(0 0 16px rgba(255,255,255,0.1));
        }

        /* Ambient line */
        .tb2-section::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          transition: opacity 1s ease;
          opacity: 0;
        }
        .tb2-section.tb2-visible::after {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .tb2-grid { gap: 56px; }
          .tb2-img { width: 170px; height: 48px; }
        }

        @media (max-width: 768px) {
          .tb2-section { padding: 64px 0; }
          .tb2-grid { gap: 40px; }
          .tb2-img { width: 150px; height: 44px; }
        }

        @media (max-width: 480px) {
          .tb2-grid { gap: 28px; }
          .tb2-img { width: 120px; height: 36px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tb2-img { transition: none !important; }
        }
      `}} />

      <section
        ref={sectionRef}
        className={`tb2-section${isInView ? " tb2-visible" : ""}`}
      >
        <p className="tb2-label">Trusted by Industry Leaders</p>
        <motion.div className="tb2-grid" style={{ y }}>
          {LOGOS.map((_, i) => (
            <LogoItem key={i} index={i} isInView={isInView} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
