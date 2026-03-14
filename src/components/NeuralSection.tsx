"use client";

import { motion, useInView } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NeuralSectionProps {
  label: string;
  title: string;
  text: string;
  variant?: "challenge" | "solution";
}

/* ------------------------------------------------------------------ */
/*  Deterministic pseudo-random (seeded)                              */
/* ------------------------------------------------------------------ */

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ------------------------------------------------------------------ */
/*  Generate network geometry                                         */
/* ------------------------------------------------------------------ */

interface Dot {
  id: number;
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

interface Line {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

function generateNetwork(
  count: number,
  width: number,
  height: number,
  seed: number
): { dots: Dot[]; lines: Line[] } {
  const rng = seededRandom(seed);
  const dots: Dot[] = [];

  for (let i = 0; i < count; i++) {
    dots.push({
      id: i,
      cx: rng() * width,
      cy: rng() * height,
      r: 1.5 + rng() * 2.5,
      delay: rng() * 6,
    });
  }

  const lines: Line[] = [];
  const maxDist = Math.min(width, height) * 0.25;

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].cx - dots[j].cx;
      const dy = dots[i].cy - dots[j].cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        lines.push({
          id: `${i}-${j}`,
          x1: dots[i].cx,
          y1: dots[i].cy,
          x2: dots[j].cx,
          y2: dots[j].cy,
          delay: (dots[i].delay + dots[j].delay) / 2,
        });
      }
    }
  }

  return { dots, lines };
}

/* ------------------------------------------------------------------ */
/*  Split text into sentences                                         */
/* ------------------------------------------------------------------ */

function splitSentences(text: string): string[] {
  // Split on sentence-ending punctuation followed by space or end of string
  const raw = text.match(/[^.!?]+[.!?]+[\s]?|[^.!?]+$/g);
  if (!raw) return [text];
  return raw.map((s) => s.trim()).filter(Boolean);
}

/* ------------------------------------------------------------------ */
/*  Highlight key terms (brands, numbers, specs)                      */
/* ------------------------------------------------------------------ */

const HIGHLIGHT_PATTERNS = [
  // Numbers with units: 700 sqm, 63A, 2.6mm, 350 kg/sqm, 68 sqm, 200+, 8,000, 3000K, etc.
  /\b\d[\d,]*\.?\d*\s*(?:sqm|sq\.?\s*m|mm|cm|m²|kg\/sqm|A|kW|dB|K|%|metres?|meters?|days?|hours?|minutes?)\b/gi,
  /\b\d[\d,]*\+?\b(?=\s+(?:visitor|guest|lead|meeting|deal|SKU|product|share|piece|project|edition|stand|photo|media|countries|people))/gi,
  // Standalone big numbers (4+ digits or with comma)
  /\b\d{1,3}(?:,\d{3})+\b/g,
  // Percentages
  /\b\d+\.?\d*\s*%/g,
  // Technical specs: IPE 240, 200x200mm, 60x60mm, RGBW, DMX, CNC, LED, AV, HVAC, RCD
  /\b(?:IPE\s*\d+|\d+x\d+\s*mm|RGBW|DMX|CNC|RCD|UV-cured)\b/gi,
  // Time expressions: 10-day, two-storey, 4-day
  /\b\d+-(?:day|storey|metre|meter|phase)\b/gi,
  // Exhibition/brand terms that appear in project text
  /\b(?:LED|AV|HVAC|USB|3D|AR\/VR)\b/g,
];

// Brands/proper nouns to highlight
const BRAND_PATTERNS = [
  /\b(?:Microsoft|Nespresso|Vanderlande|Spark\s*Logistics|HOOSH|Sipchem|Interfood|Altronix|Barco|CreatistaPlus|LEAP|ADIPEC|Intersec|Gulfood|Breakbulk|Airport\s*Show|Civil\s*Defence|Saudi|Riyadh|Dubai|Abu\s*Dhabi|Al\s*Serkal)\b/gi,
];

function highlightText(text: string): (string | { type: "hl"; value: string })[] {
  // Collect all match positions
  const allPatterns = [...HIGHLIGHT_PATTERNS, ...BRAND_PATTERNS];
  const matches: { start: number; end: number; value: string }[] = [];

  for (const pattern of allPatterns) {
    const regex = new RegExp(pattern.source, pattern.flags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({ start: match.index, end: match.index + match[0].length, value: match[0] });
    }
  }

  if (matches.length === 0) return [text];

  // Sort by position, remove overlaps
  matches.sort((a, b) => a.start - b.start);
  const merged: typeof matches = [];
  for (const m of matches) {
    const last = merged[merged.length - 1];
    if (last && m.start < last.end) {
      // Overlap: keep the longer one
      if (m.end > last.end) last.end = m.end;
      last.value = text.slice(last.start, last.end);
    } else {
      merged.push({ ...m });
    }
  }

  // Build segments
  const segments: (string | { type: "hl"; value: string })[] = [];
  let cursor = 0;
  for (const m of merged) {
    if (m.start > cursor) segments.push(text.slice(cursor, m.start));
    segments.push({ type: "hl", value: m.value });
    cursor = m.end;
  }
  if (cursor < text.length) segments.push(text.slice(cursor));
  return segments;
}

/* ------------------------------------------------------------------ */
/*  Styles (scoped via unique prefix)                                 */
/* ------------------------------------------------------------------ */

const SCOPE = "nrl";

const cssText = `
/* --- Neural Section scoped styles --- */

.${SCOPE}-wrap {
  position: relative;
  overflow: hidden;
  background: var(--color-bg-card, #0a0a0a);
  padding: 120px 0;
}
@media (max-width: 768px) {
  .${SCOPE}-wrap { padding: 64px 0; }
}

/* SVG background layer */
.${SCOPE}-svg-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  will-change: transform;
  z-index: 0;
}

/* Dot pulse */
@keyframes ${SCOPE}-pulse {
  0%, 100% { opacity: 0.18; transform: scale(1); }
  50%      { opacity: 0.45; transform: scale(1.6); }
}

.${SCOPE}-dot {
  fill: var(--color-accent, #fcd940);
  opacity: 0.18;
  animation: ${SCOPE}-pulse 5s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

/* Line shimmer */
@keyframes ${SCOPE}-shimmer {
  0%, 100% { stroke-opacity: 0.04; }
  50%      { stroke-opacity: 0.09; }
}

.${SCOPE}-line {
  stroke: rgba(255,255,255,0.04);
  stroke-width: 0.8;
  animation: ${SCOPE}-shimmer 6s ease-in-out infinite;
}

/* Content layer */
.${SCOPE}-content {
  position: relative;
  z-index: 1;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 32px;
}

.${SCOPE}-header {
  text-align: center;
  margin-bottom: 72px;
}

.${SCOPE}-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent, #fcd940);
  font-weight: 600;
  margin-bottom: 16px;
  display: block;
  font-family: var(--font-body, "DM Sans", sans-serif);
}

.${SCOPE}-title {
  font-family: var(--font-heading, "Plus Jakarta Sans", sans-serif);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--color-text-primary, #fff);
}

/* Node grid */
.${SCOPE}-nodes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}
.${SCOPE}-nodes--single {
  grid-template-columns: 1fr;
  max-width: 700px;
}
@media (max-width: 768px) {
  .${SCOPE}-nodes { grid-template-columns: 1fr; gap: 16px; }
}

/* Individual node card */
.${SCOPE}-node {
  position: relative;
  background: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--color-border-light, rgba(255,255,255,0.1));
  border-radius: var(--radius-default, 12px);
  padding: 28px 28px 28px 72px;
  min-height: 100px;
  display: flex;
  align-items: center;
  transition: border-color 0.4s ease, background 0.4s ease;
}

.${SCOPE}-node:hover {
  border-color: rgba(252, 217, 64, 0.2);
  background: rgba(255, 255, 255, 0.04);
}

/* Challenge variant: warm border tint on hover */
.${SCOPE}-wrap--challenge .${SCOPE}-node:hover {
  border-color: rgba(255, 160, 60, 0.25);
}

/* Step number */
.${SCOPE}-step {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-heading, "Plus Jakarta Sans", sans-serif);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-accent, #fcd940);
  opacity: 0.35;
  letter-spacing: -0.02em;
  line-height: 1;
}

/* Challenge variant step color */
.${SCOPE}-wrap--challenge .${SCOPE}-step {
  color: #ffa03c;
}

/* Node text */
.${SCOPE}-text {
  font-family: var(--font-body, "DM Sans", sans-serif);
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text-muted, #999);
}

/* Highlighted key terms */
@keyframes ${SCOPE}-glow {
  0%, 100% { text-shadow: 0 0 0 transparent; }
  50%      { text-shadow: 0 0 8px rgba(252, 217, 64, 0.15); }
}

.${SCOPE}-hl {
  color: var(--color-text-primary, #fff);
  font-weight: 600;
  position: relative;
  display: inline;
  background: linear-gradient(180deg, transparent 65%, rgba(252, 217, 64, 0.08) 65%);
  animation: ${SCOPE}-glow 4s ease-in-out infinite;
  transition: color 0.3s ease;
}

.${SCOPE}-hl:hover {
  color: var(--color-accent, #fcd940);
}

/* Challenge variant: orange-tinted highlights */
.${SCOPE}-wrap--challenge .${SCOPE}-hl {
  background: linear-gradient(180deg, transparent 65%, rgba(255, 160, 60, 0.08) 65%);
}
.${SCOPE}-wrap--challenge .${SCOPE}-hl:hover {
  color: #ffa03c;
}

/* Solution checkmark */
.${SCOPE}-check {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(80, 200, 120, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.${SCOPE}-check svg {
  width: 10px;
  height: 10px;
}

/* Connector dots between cards */
.${SCOPE}-connector {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
}
.${SCOPE}-connector-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-accent, #fcd940);
  opacity: 0.2;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .${SCOPE}-dot,
  .${SCOPE}-line {
    animation: none !important;
  }
  .${SCOPE}-dot { opacity: 0.2; }
  .${SCOPE}-line { stroke-opacity: 0.05; }
  .${SCOPE}-svg-layer { transform: none !important; }
  .${SCOPE}-hl { animation: none !important; }
}
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function NeuralSection({
  label,
  title,
  text,
  variant = "solution",
}: NeuralSectionProps) {
  const sentences = useMemo(() => splitSentences(text), [text]);

  /* -- Parallax state ------------------------------------------------ */
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const ticking = useRef(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const updateParallax = useCallback(() => {
    if (!sectionRef.current || reducedMotion.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const center = (rect.top + rect.height / 2 - vh / 2) / vh;
    setParallaxY(-center * 30);
    ticking.current = false;
  }, []);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(updateParallax);
    }
  }, [updateParallax]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll, updateParallax]);

  /* -- Network geometry (stable across renders) ---------------------- */
  const network = useMemo(() => {
    const seed = variant === "challenge" ? 42 : 137;
    return generateNetwork(28, 1400, 800, seed);
  }, [variant]);

  /* -- Render -------------------------------------------------------- */
  const isChallenge = variant === "challenge";

  return (
    <>
      {/* Injected scoped styles */}
      <style dangerouslySetInnerHTML={{ __html: cssText }} />

      <section
        ref={sectionRef}
        className={`${SCOPE}-wrap ${SCOPE}-wrap--${variant}`}
      >
        {/* SVG neural network background */}
        <svg
          className={`${SCOPE}-svg-layer`}
          viewBox="0 0 1400 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{
            transform: `translate3d(0, ${parallaxY}px, 0)`,
          }}
        >
          {/* Lines first (behind dots) */}
          {network.lines.map((l) => (
            <line
              key={l.id}
              className={`${SCOPE}-line`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              style={{ animationDelay: `${l.delay}s` }}
            />
          ))}
          {/* Dots */}
          {network.dots.map((d) => (
            <circle
              key={d.id}
              className={`${SCOPE}-dot`}
              cx={d.cx}
              cy={d.cy}
              r={d.r}
              style={{ animationDelay: `${d.delay}s` }}
            />
          ))}
        </svg>

        {/* Content */}
        <div className={`${SCOPE}-content`}>
          {/* Header */}
          <div className={`${SCOPE}-header`}>
            <span className={`${SCOPE}-label`}>{label}</span>
            <h2 className={`${SCOPE}-title`}>{title}</h2>
          </div>

          {/* Sentence nodes */}
          <div className={`${SCOPE}-nodes${sentences.length <= 2 ? ` ${SCOPE}-nodes--single` : ""}`}>
            {sentences.map((sentence, i) => (
              <NodeCard
                key={i}
                index={i}
                sentence={sentence}
                isChallenge={isChallenge}
                total={sentences.length}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual node card (handles its own in-view animation)          */
/* ------------------------------------------------------------------ */

function NodeCard({
  index,
  sentence,
  isChallenge,
  total,
}: {
  index: number;
  sentence: string;
  isChallenge: boolean;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const stepLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      className={`${SCOPE}-node`}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.97 }
      }
      transition={{
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
        delay: index * 0.12,
      }}
    >
      <span className={`${SCOPE}-step`}>{stepLabel}</span>
      <p className={`${SCOPE}-text`}>
        {highlightText(sentence).map((seg, j) =>
          typeof seg === "string" ? (
            seg
          ) : (
            <span key={j} className={`${SCOPE}-hl`}>{seg.value}</span>
          )
        )}
      </p>

      {/* Solution variant: green checkmark */}
      {!isChallenge && (
        <span className={`${SCOPE}-check`}>
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 6.5L5 9L9.5 3.5"
              stroke="rgba(80,200,120,0.7)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </motion.div>
  );
}
