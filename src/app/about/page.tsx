import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatsBlock from "./StatsBlock";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "About The Butter Duck | Exhibition Stand Builder in Dubai, UAE",
  description:
    "UAE-based exhibition design and event production company. 80+ projects across 10 countries. Custom booth builds from 18 sqm to 700 sqm. Founded 2019, trusted by Microsoft and Vanderlande.",
};

const values = [
  {
    icon: "\u23F0",
    title: "Deadlines Are Sacred",
    desc: "We don\u2019t do \u201Calmost on time.\u201D Every project ships on schedule, no excuses.",
  },
  {
    icon: "\uD83D\uDC41",
    title: "Senior Eyes Only",
    desc: "No hand-offs to juniors. Your project is managed by the people who were involved from A to Z.",
  },
  {
    icon: "\uD83D\uDCCB",
    title: "Transparent Pricing",
    desc: "Line-item quotes. No hidden fees. You know exactly where every dirham goes.",
  },
  {
    icon: "\uD83C\uDFAF",
    title: "Design with Purpose",
    desc: "Every element earns its place. We design for engagement, not decoration.",
  },
  {
    icon: "\uD83D\uDD27",
    title: "Build Quality",
    desc: "Premium materials, precision engineering, and finishes that hold up under show floor pressure.",
  },
  {
    icon: "\uD83C\uDF0D",
    title: "Global Reach Local Knowledge",
    desc: "UAE HQ, deployed across 10 countries. We know the venues, the vendors, and the rules.",
  },
];

const capabilities = [
  { icon: "\uD83D\uDDA5", name: "3D Design" },
  { icon: "\uD83C\uDFD7", name: "Structural Engineering" },
  { icon: "\u2699\uFE0F", name: "Fabrication Management" },
  { icon: "\uD83C\uDF99", name: "AV Integration" },
  { icon: "\uD83D\uDE9A", name: "Logistics & Freight" },
  { icon: "\uD83D\uDD28", name: "On-Site Installation" },
  { icon: "\uD83C\uDFA8", name: "Graphic Production" },
  { icon: "\uD83C\uDFAC", name: "Content Production" },
  { icon: "\uD83D\uDCBC", name: "Branding" },
  { icon: "\uD83D\uDCCA", name: "Financial Evaluation" },
  { icon: "\uD83D\uDCAC", name: "Communication" },
];

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    desc: "Started in Dubai with a clear vision: exhibition builds that actually deliver on the render.",
  },
  {
    year: "2020",
    title: "First Major Build",
    desc: "Completed our first large-scale exhibition stand despite global lockdown challenges.",
  },
  {
    year: "2021",
    title: "International Expansion",
    desc: "Expanded operations beyond the UAE into Saudi Arabia, Europe, and Southeast Asia.",
  },
  {
    year: "2022",
    title: "Microsoft Partnership",
    desc: "Selected as exhibition partner for Microsoft\u2019s regional event activations.",
  },
  {
    year: "2024",
    title: "80+ Projects Milestone",
    desc: "Crossed 80 completed projects with a 100% on-time delivery record.",
  },
  {
    year: "2025",
    title: "10 Countries Reached",
    desc: "Expanded operations to 10 countries with capabilities spanning project management, branding, financial evaluation, and full A-to-Z communication.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">About Us</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              Built Different.
              <br />
              <span className="accent">Built to Deliver.</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>
              We&apos;re a UAE-based exhibition design and event production
              studio obsessed with quality, deadlines, and making brands
              impossible to ignore on the show floor.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Story */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll className="sd-text">
              <span className="section-label">Our Story</span>
              <h2>
                From Renders to Reality,{" "}
                <span className="accent">Without&nbsp;Compromise</span>
              </h2>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                The Butter Duck was founded on a simple frustration: too many
                exhibition companies over-promise on the render and
                under-deliver on the floor. We decided to build a studio where
                the final product matches — or exceeds — the 3D visual. Every
                time.
              </p>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                Today, we operate from the UAE and deploy globally. Our team
                combines architectural design, structural engineering, AV
                expertise, and project management into a single integrated
                pipeline. No middlemen. No surprises.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="right" className="about-visual">
              <div className="about-img">
                <Image
                  src={asset("/assets/photos/duck-brand.jpg")}
                  alt="The Butter Duck UAE HQ"
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
              <span className="about-badge">UAE HQ</span>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              Our Values
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>
              What We <span className="accent">Stand For</span>
            </h2>
          </RevealOnScroll>
          <div className="values-grid">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.08}>
                <div className="value-card">
                  <div
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: 16,
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3>{v.title}</h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--color-bg-card)",
          borderTop: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              Capabilities
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              Everything <span className="accent">In-House</span>
            </h2>
          </RevealOnScroll>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
            }}
          >
            {capabilities.map((c, i) => (
              <RevealOnScroll key={c.name} delay={i * 0.06} direction="scale" style={{ height: "100%" }}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "36px 16px",
                    border: "1px solid var(--color-border-default)",
                    borderRadius: "var(--radius-default)",
                    transition: "all 0.6s var(--ease-out)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{c.icon}</div>
                  <h3 style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}>{c.name}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              Our Journey
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>
              Key <span className="accent">Milestones</span>
            </h2>
          </RevealOnScroll>
          <div className="timeline">
            {timeline.map((t, i) => (
              <RevealOnScroll key={t.year} delay={i * 0.1}>
                <div className="tl-item">
                  <h3>{t.year} — {t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBlock />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>Ready to Work With Us?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>
              Tell us about your next exhibition or event — we&apos;ll show you
              what&apos;s possible.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link href="/contact" className="btn btn-lg">
              Get in Touch <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
