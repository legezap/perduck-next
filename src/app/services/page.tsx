import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Exhibition Stand Design & Build Services | The Butter Duck Dubai",
  description:
    "Custom exhibition stand design, build, project management, and event production services in the UAE. From 18 sqm booths to 700 sqm double-decker stands. Get a free quote.",
};

const services = [
  {
    id: "exhibition-design",
    label: "Exhibition Design",
    title: "Exhibition Design & Build",
    image: asset("/assets/photos/microsoft-leap.jpg"),
    reverse: false,
    bullets: [
      "Custom exhibition stands from 18 sqm to 700+ sqm, designed for impact and flow",
      "Integrated LED walls, lightboxes, and dynamic AV installations",
      "Modular & reusable booth systems for multi-show ROI",
      "Full 3D visualization and walkthrough renders before build",
      "Material sourcing and sustainable build options",
      "On-site installation, supervision, and post-show dismantling",
    ],
  },
  {
    id: "project-management",
    label: "Project Management",
    title: "Project Management",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
    reverse: true,
    bullets: [
      "Dedicated project manager from brief to breakdown",
      "Venue liaison, permitting, and regulatory compliance",
      "Logistics coordination including freight, customs, and storage",
      "Timeline and milestone tracking with weekly reporting",
      "Vendor management and on-site contractor supervision",
      "Budget control with transparent cost breakdowns at every stage",
    ],
  },
  {
    id: "event-design",
    label: "Conceptual Event Design",
    title: "Conceptual Event Design",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
    reverse: false,
    bullets: [
      "Immersive brand experiences and themed environments",
      "Launch events, gala dinners, and corporate activations",
      "Spatial design, guest flow mapping, and capacity planning",
      "Interactive installations, AR/VR integrations, and live demos",
      "Stage design, lighting plots, and scenic fabrication",
      "Full creative direction from concept through execution",
    ],
  },
  {
    id: "content-media",
    label: "Content & Media",
    title: "Content & Media Production",
    image: asset("/assets/photos/hero-microsoft-gitex.jpg"),
    reverse: true,
    bullets: [
      "Video production for booth loops, teasers, and social content",
      "LED content creation optimized for large-format displays",
      "Motion graphics, 3D product animations, and infographics",
      "Event photography and same-day social media assets",
      "Branded collateral design: brochures, banners, and giveaways",
      "Post-event highlight reels and case study documentation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Services</span>
          </div>
        </div>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">What We Do</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h1>
              End-to-End Exhibition
              <br />
              <span className="accent">& Event Services</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>
              From first sketch to final breakdown, we handle every detail so
              you can focus on what matters — your brand, your audience, your
              goals.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Sticky Anchor Nav */}
      <nav className="anchor-nav" aria-label="Service navigation">
        <div className="anchor-nav-inner">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="anchor-link">
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Service Detail Sections */}
      <section>
        <div className="container">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`service-detail${s.reverse ? " reverse" : ""}`}
            >
              <RevealOnScroll className="sd-text" delay={0.1}>
                <span className="section-label">{s.label}</span>
                <h2>{s.title}</h2>
                <ul>
                  {s.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 32 }}>
                  <Link href="/contact" className="btn btn-primary">
                    Get a Quote <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll
                className="sd-visual"
                direction={s.reverse ? "left" : "right"}
                delay={0.2}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  width={720}
                  height={540}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>Let&apos;s Talk About Your Next Project</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>
              Whether it&apos;s a 20 sqm stand or a 500 sqm build, we bring
              the same obsessive attention to detail.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link href="/contact" className="btn btn-lg">
              Start a Conversation <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
