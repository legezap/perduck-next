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
  { src: asset("/assets/logos/microsoft.svg"), alt: "Microsoft" },
  { src: asset("/assets/logos/altronix.svg"), alt: "Altronix" },
  { src: asset("/assets/logos/vanderlande.svg"), alt: "Vanderlande" },
  { src: asset("/assets/logos/spark.svg"), alt: "Spark" },
  { src: asset("/assets/logos/absolut-skandic.svg"), alt: "Absolut Skandic" },
  { src: asset("/assets/logos/ik-group.svg"), alt: "IK Group" },
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
    slug: "microsoft-leap",
    title: "Microsoft at LEAP",
    client: "Microsoft",
    size: "700 sqm",
    type: "Double Decker",
    image: asset("/assets/photos/microsoft-leap.jpg"),
  },
  {
    slug: "nespresso-creatista",
    title: "Nespresso CreatistaPlus Launch",
    client: "Nespresso",
    size: "180 sqm",
    type: "Event Production",
    image: asset("/assets/photos/gallery/nespresso-NES-1239.jpg"),
  },
  {
    slug: "spark-breakbulk",
    title: "Spark at Breakbulk ME",
    client: "Spark",
    size: "60 sqm",
    type: "Custom Build",
    image: asset("/assets/photos/spark-breakbulk.jpg"),
  },
];

const processSteps = [
  { num: "01", title: "Brief", desc: "We listen, ask the right questions, and define exactly what success looks like for your brand." },
  { num: "02", title: "Design", desc: "3D concepts, material specs, and technical drawings — iterated until you're thrilled." },
  { num: "03", title: "Build", desc: "Precision fabrication in our Dubai workshop, with quality checks at every stage." },
  { num: "04", title: "Deliver", desc: "On-site installation, show support, and dismantle — we're there until the last bolt is packed." },
];

const testimonials = [
  {
    quote: "The Butter Duck doesn't just build stands — they build experiences. Our LEAP pavilion was the most talked-about presence at the entire show.",
    name: "Sarah Al-Rashid",
    role: "Regional Events Director",
    company: "Microsoft Middle East",
  },
  {
    quote: "From concept to completion, the attention to detail was exceptional. They delivered exactly what they promised, on time and on budget.",
    name: "Marc van den Berg",
    role: "Head of Global Exhibitions",
    company: "Vanderlande Industries",
  },
  {
    quote: "We've worked with exhibition companies across the region — nobody comes close to the build quality and design thinking these guys bring.",
    name: "Ahmed Khalil",
    role: "Marketing Manager",
    company: "Spark Logistics",
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
            preload="auto"
            className="hero-bg-img"
            poster={asset("/assets/photos/hero-microsoft-gitex.jpg")}
          >
            <source src={asset("/assets/hero-video-web.mp4")} type="video/mp4" />
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
              <strong>700&nbsp;sqm</strong>. Trusted by{" "}
              <strong>Microsoft</strong>, <strong>Vanderlande</strong>,{" "}
              <strong>Altronix</strong>, and brands across 6&nbsp;countries.
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

      {/* ========== 5. CINEMATIC DIVIDER — MICROSOFT ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src={asset("/assets/photos/microsoft-leap.jpg")}
            alt="Microsoft booth at LEAP — 700 sqm double decker"
            fill
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2>
                700&nbsp;sqm. Double Decker.{" "}
                <span className="accent">Microsoft at LEAP.</span>
              </h2>
              <p>
                Our largest build to date — a fully immersive, two-storey brand
                experience designed to command the show floor.
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

      {/* ========== 7. OUR PROCESS ========== */}
      <section
        style={{
          padding: "120px 0",
          background: "var(--color-bg-card)",
          borderTop: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              How We Work
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 64 }}>
              From Brief to <span className="accent">Show Floor</span>
            </h2>
          </RevealOnScroll>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.12}>
                <div className="process-card">
                  <div className="process-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7b. CINEMATIC DIVIDER — NESPRESSO ========== */}
      <section className="cine-divider">
        <Parallax className="cine-divider-bg">
          <Image
            src={asset("/assets/photos/gallery/nespresso-NES-1239.jpg")}
            alt="Nespresso CreatistaPlus launch event — birds eye view"
            fill
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="cine-divider-overlay" />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2>
                Not Just Stands.{" "}
                <span className="accent">Unforgettable Moments.</span>
              </h2>
              <p>
                From intimate product launches to 700 sqm pavilions — we create
                brand experiences that people talk about long after the event.
              </p>
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

      {/* ========== 8b. TESTIMONIALS ========== */}
      <section className="section-pad">
        <div className="container">
          <RevealOnScroll>
            <span className="section-label" style={{ textAlign: "center", display: "block" }}>
              Client Feedback
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 64 }}>
              What Our Clients <span className="accent">Say</span>
            </h2>
          </RevealOnScroll>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 0.15}>
                <blockquote className="testimonial-card">
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="testimonial-footer">
                    <div>
                      <strong>{t.name}</strong>
                      <span className="text-muted" style={{ display: "block", fontSize: "0.82rem", marginTop: 2 }}>
                        {t.role}, {t.company}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 9. VOICEVAULT SECTION ========== */}
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
                    src={asset("/assets/photos/duck-brand.jpg")}
                    alt="The Butter Duck — the team behind your booth"
                    width={640}
                    height={480}
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
              <Link href="/portfolio" className="btn" style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.3)", color: "var(--color-bg-dark)" }}>
                See Our Work
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
