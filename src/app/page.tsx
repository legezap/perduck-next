"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import Parallax from "@/components/Parallax";
import { asset } from "@/lib/basePath";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  "Exhibition Design",
  "Event Production",
  "Brand Experiences",
  "Double Deckers",
  "Immersive Spaces",
  "Global Delivery",
];

const trustLogos = [
  { src: "/assets/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/assets/logos/altronix.svg", alt: "Altronix" },
  { src: "/assets/logos/vanderlande.svg", alt: "Vanderlande" },
  { src: "/assets/logos/spark.svg", alt: "Spark" },
  { src: "/assets/logos/absolut-skandic.svg", alt: "Absolut Skandic" },
  { src: "/assets/logos/ik-group.svg", alt: "IK Group" },
];

const services = [
  {
    icon: "🏗️",
    title: "Exhibition Design & Build",
    desc: "Custom-built stands from concept to completion. We handle everything — design, engineering, fabrication, and on-site installation — so you can focus on your brand.",
    link: "/services#design-build",
  },
  {
    icon: "📋",
    title: "Project Management",
    desc: "Dedicated project managers coordinate every moving piece across countries, vendors, and timelines. No surprises, no delays — just seamless execution.",
    link: "/services#project-management",
  },
  {
    icon: "🎨",
    title: "Conceptual Event Design",
    desc: "Immersive spatial concepts that tell your brand story. From mood boards to 3D renders, we translate your vision into environments that captivate.",
    link: "/services#event-design",
  },
  {
    icon: "🎬",
    title: "Content & Media Production",
    desc: "Video walls, LED integrations, motion graphics, and interactive media — everything your booth needs to stop attendees in their tracks.",
    link: "/services#content-media",
  },
];

const featuredProjects = [
  {
    slug: "streit-group-idex",
    title: "Defence Pavilion at IDEX",
    client: "Defence Client",
    size: "500+ sqm",
    type: "Fortress Pavilion",
    image: "/assets/photos/streit-idex-aerial.jpg",
  },
  {
    slug: "vanderlande-airport",
    title: "Vanderlande at Airport Show Dubai",
    client: "Vanderlande",
    size: "60 sqm",
    type: "Double Decker",
    image: "/assets/photos/vanderlande-airport.jpg",
  },
  {
    slug: "altronix-intersec",
    title: "Altronix at Intersec Dubai",
    client: "Altronix",
    size: "25 sqm",
    type: "LED Integration",
    image: "/assets/photos/altronix-intersec.jpg",
  },
];

const voicevaultFeatures = [
  {
    icon: "🔊",
    title: "Directional Audio Zones",
    desc: "Precisely targeted sound fields that keep your message inside your booth — not bleeding into your neighbor's.",
  },
  {
    icon: "🔒",
    title: "Content Protection",
    desc: "Proprietary audio encryption ensures your presentations and demos stay confidential on the show floor.",
  },
  {
    icon: "🔌",
    title: "Plug-and-Play",
    desc: "Arrives pre-configured. Mount it, power it, and you're live — no AV technician required.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ========== 1. HERO ========== */}
      <section className="hero">
        <Parallax className="hero-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="hero-bg-img"
            poster={asset("/assets/photos/streit-idex-aerial.jpg")}
          >
            <source src={asset("/assets/idex-2023-hero-web.mp4")} type="video/mp4" />
          </video>
        </Parallax>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <RevealOnScroll delay={0.1}>
            <span className="hero-badge">Dubai-Based, Globally Deployed</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h1>
              We Build Experiences That{" "}
              <span className="accent">Command Attention</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <p className="hero-sub">
              Exhibition stands from <strong>18&nbsp;sqm</strong> to{" "}
              <strong>500+&nbsp;sqm</strong>. Trusted by{" "}
              <strong>Microsoft</strong>,{" "}
              <strong>Vanderlande</strong>, and brands across 6&nbsp;countries.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.45}>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your Project <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">
                View Our Work
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.55}>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={80} suffix="+" />
                </div>
                <div className="label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={6} />
                </div>
                <div className="label">Countries</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={700} suffix=" sqm" />
                </div>
                <div className="label">Largest Build</div>
              </div>
              <div className="hero-stat">
                <div className="num">
                  <CounterAnimation target={100} suffix="%" />
                </div>
                <div className="label">On-Time</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 2. SCROLLING MARQUEE ========== */}
      <div className="scroll-text">
        <div className="scroll-text-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={i % 2 === 0 ? undefined : "accent-word"}>
              {item} &#9670;
            </span>
          ))}
        </div>
      </div>

      {/* ========== 3. TRUST BAR ========== */}
      <section className="trust-bar">
        <div className="container">
          <p className="trust-label">Trusted by Industry Leaders</p>
          <div className="trust-logos">
            {trustLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={28}
                className="trust-logo"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4. SERVICES OVERVIEW ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">What We Do</span>
            <h2 style={{ marginBottom: 56 }}>
              End-to-End Exhibition <span className="accent">Solutions</span>
            </h2>
          </RevealOnScroll>

          <div className="services-grid">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={i * 0.12}>
                <div className="service-card">
                  <div className="service-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link href={svc.link} className="service-link">
                    Learn more <span>&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. CINEMATIC DIVIDER — DEFENCE PAVILION ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src="/assets/photos/streit-idex-exterior.jpg"
            alt="Defence Pavilion at IDEX — 500+ sqm fortress pavilion"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2>
                500+&nbsp;sqm. Full-Scale Fortress.{" "}
                <span className="accent">Defence Pavilion. IDEX.</span>
              </h2>
              <p>
                A fortress pavilion housing live armoured vehicles, LED
                installations, and drone technology — built across indoor and
                outdoor zones at ADNEC Abu Dhabi.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 6. FEATURED PROJECTS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">Selected Work</span>
            <h2 style={{ marginBottom: 56 }}>
              Featured <span className="accent">Projects</span>
            </h2>
          </RevealOnScroll>

          <div className="portfolio-grid">
            {featuredProjects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 0.15}>
                <Link
                  href={`/projects/${project.slug}`}
                  style={{ color: "inherit" }}
                >
                  <div className="project-card">
                    <div className="project-img">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={720}
                        height={450}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="project-body">
                      <div className="project-tags">
                        <span className="tag">{project.type}</span>
                        <span className="tag">{project.size}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-client">{project.client}</p>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. CINEMATIC DIVIDER — ALTRONIX ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src="/assets/photos/altronix-intersec.jpg"
            alt="Altronix booth at Intersec Dubai"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2>
                Every Square Meter{" "}
                <span className="accent">Engineered for Impact.</span>
              </h2>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 8. STATS SECTION ========== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">
                <CounterAnimation target={80} suffix="+" />
              </div>
              <div className="stat-text">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                <CounterAnimation target={6} />
              </div>
              <div className="stat-text">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                <CounterAnimation target={15} suffix="+" />
              </div>
              <div className="stat-text">Industries</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                <CounterAnimation target={100} suffix="%" />
              </div>
              <div className="stat-text">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 9. TESTIMONIALS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label">Client Feedback</span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              What Our Clients <span className="accent">Say</span>
            </h2>
          </RevealOnScroll>
          <div className="testimonials-grid">
            {[
              {
                quote: "The team delivered outstanding results at Light + Building ME. Their creative approach to our stand design seamlessly integrated our product demonstrations into an engaging visitor experience.",
                name: "Absolut Skandic",
                role: "Exhibition Stand",
                avatar: "/assets/logos/absolut-n.png",
              },
              {
                quote: "Working with this team at Intersec was exceptional. They understood our product range perfectly and created a stand layout that showcased each solution effectively.",
                name: "Altronix",
                role: "Intersec Dubai",
                avatar: "/assets/logos/altronix-client.png",
              },
              {
                quote: "They captured our year-end corporate event brilliantly. The video coverage was comprehensive yet unobtrusive, and the final edit perfectly conveyed the energy of our annual results presentation.",
                name: "SVN Capital",
                role: "Corporate Videography",
                avatar: "/assets/logos/svn-capital.png",
              },
              {
                quote: "Four years of collaboration, and they've never missed a beat. Their consistency in delivering high-quality podcast and video content has been invaluable to growing my platform.",
                name: "Simon Snelder",
                role: "Photo & Video Production",
                avatar: "/assets/logos/simon-snelder.png",
              },
            ].map((t, i) => (
              <RevealOnScroll key={t.name} delay={i * 0.1}>
                <div className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <Image src={t.avatar} alt={t.name} width={40} height={40} className="testimonial-avatar" />
                    <div>
                      <strong>{t.name}</strong>
                      <span className="text-muted" style={{ fontSize: "0.8rem", display: "block" }}>{t.role}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. VOICEVAULT SECTION ========== */}
      <section className="voicevault section-pad">
        <div className="container">
          <div className="vv-grid">
            {/* Text column */}
            <div>
              <RevealOnScroll>
                <span className="section-label">Proprietary Technology</span>
                <h2 style={{ marginBottom: 20 }}>
                  Voice<span className="accent">Vault</span>
                </h2>
                <p className="text-muted" style={{ marginBottom: 36, lineHeight: 1.8 }}>
                  Our proprietary directional audio system delivers crystal-clear
                  sound exactly where you need it — and nowhere else. Give every
                  visitor a private listening experience, right on the show floor.
                </p>
              </RevealOnScroll>

              <div className="vv-features">
                {voicevaultFeatures.map((feat, i) => (
                  <RevealOnScroll key={feat.title} delay={i * 0.12}>
                    <div className="vv-feat">
                      <div className="vv-feat-icon">{feat.icon}</div>
                      <div>
                        <h4 style={{ fontSize: "0.95rem", marginBottom: 4 }}>
                          {feat.title}
                        </h4>
                        <p
                          className="text-muted"
                          style={{ fontSize: "0.88rem", lineHeight: 1.7 }}
                        >
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll delay={0.4}>
                <Link href="/contact" className="btn btn-primary">
                  Request a Demo <span className="arrow">&rarr;</span>
                </Link>
              </RevealOnScroll>
            </div>

            {/* Visual column */}
            <RevealOnScroll direction="scale" delay={0.2}>
              <div className="vv-visual">
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      fontSize: "4rem",
                      marginBottom: 24,
                      lineHeight: 1,
                    }}
                  >
                    🔊
                  </div>
                  <h3>
                    Directional Audio<br />
                    <span className="accent">Redefined</span>
                  </h3>
                  <p
                    className="text-muted"
                    style={{ fontSize: "0.88rem", marginTop: 12 }}
                  >
                    Sound that stays where you put it.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========== 10. ABOUT SNAPSHOT ========== */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            {/* Text */}
            <div>
              <RevealOnScroll>
                <span className="section-label">Who We Are</span>
                <h2 style={{ marginBottom: 24 }}>
                  Built Different.{" "}
                  <span className="accent">Built to Deliver.</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.15}>
                <p
                  className="text-muted"
                  style={{ lineHeight: 1.8, marginBottom: 16, fontSize: "1.05rem" }}
                >
                  The Butter Duck is a Dubai-based exhibition and event production
                  company with global reach. We design and build custom stands for
                  the world&apos;s biggest trade shows — from concept sketches to
                  on-site installation, across six countries and counting.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.25}>
                <p
                  className="text-muted"
                  style={{ lineHeight: 1.8, marginBottom: 36, fontSize: "1.05rem" }}
                >
                  Our team of architects, engineers, and project managers obsesses
                  over every detail so your brand gets the spotlight it deserves.
                  No templates, no shortcuts — just standout experiences delivered
                  on time, every time.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.35}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/about" className="btn btn-outline">
                    Learn More
                  </Link>
                  <Link href="/contact" className="btn btn-primary">
                    Talk to Us <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Image */}
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="about-visual">
                <div className="about-img">
                  <Image
                    src="/assets/photos/duck-brand.jpg"
                    alt="The Butter Duck — the team behind your booth"
                    width={640}
                    height={480}
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="about-badge">Since 2019</div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ========== 11. CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>Ready to Build Something Remarkable?</h2>
            <p>
              Let&apos;s turn your next exhibition into an unforgettable brand
              experience.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn">
                Start Your Project <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/portfolio" className="btn btn-outline">
                See Our Work
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
