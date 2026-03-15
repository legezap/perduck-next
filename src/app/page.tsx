import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import Parallax from "@/components/Parallax";
import AutoPlayVideo from "@/components/AutoPlayVideo";
import TrustBar from "@/components/TrustBar";
import { asset } from "@/lib/basePath";
import { projects } from "@/data/projects";

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


const services = [
  {
    icon: "🏗️",
    title: "Exhibition Design & Build",
    desc: "Custom-built stands from concept to completion. We handle everything — design, engineering, fabrication, and on-site installation — so you can focus on your brand.",
    link: "/services#exhibition-design",
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
    desc: "Professional photography, videography, and post-production for your exhibition presence — from booth shoots to full event coverage and social media content.",
    link: "/services#content-media",
  },
];

const featuredProjects = projects
  .filter((p) => ["microsoft-leap", "nespresso-creatista", "spark-breakbulk"].includes(p.slug))
  .map((p) => ({
    slug: p.slug,
    title: `${p.client} at ${p.event}`,
    client: p.client,
    size: p.size,
    type: p.tags[0],
    image: p.image,
  }));

const processSteps = [
  { num: "01", title: "Brief", desc: "We listen, ask the right questions, and define exactly what success looks like for your brand." },
  { num: "02", title: "Design", desc: "3D concepts, material specs, and technical drawings — iterated until you're thrilled." },
  { num: "03", title: "Build", desc: "Precision fabrication in our local workshop, with quality checks at every stage." },
  { num: "04", title: "Deliver", desc: "On-site installation, show support, and dismantle — we're there until the last bolt is packed." },
];

const testimonials = [
  {
    quote: "The Butter Duck doesn't just build stands — they build experiences. Our LEAP stand was the most talked-about presence at the entire show.",
    role: "Regional Events Director",
    company: "Microsoft Middle East",
  },
  {
    quote: "The level of precision in the final build was remarkable — every detail matched the 3D renders. On time, on budget, zero surprises.",
    role: "Head of Global Exhibitions",
    company: "Vanderlande Industries",
  },
  {
    quote: "We've worked with exhibition companies across the region — nobody comes close to the build quality and design thinking these guys bring.",
    role: "Marketing Manager",
    company: "Spark Logistics",
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
          <AutoPlayVideo
            src={asset("/assets/hero-video-web.mp4")}
            poster={asset("/assets/photos/hero-microsoft-gitex.jpg")}
            className="hero-bg-img"
          />
        </Parallax>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <RevealOnScroll delay={0.1}>
            <span className="hero-badge">UAE-Based, Globally Deployed</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h1>
              We Build Experiences That{" "}
              <span className="accent">Command Attention</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <p className="hero-sub">
              Exhibition stands from <strong>25&nbsp;sqm</strong> to{" "}
              <strong>1000+&nbsp;sqm</strong>. Trusted by{" "}
              <strong>Microsoft</strong>, <strong>Vanderlande</strong>,{" "}
              <strong>Altronix</strong>, and brands across 10&nbsp;countries.
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
                  <CounterAnimation target={10} />
                </div>
                <div className="label">Countries</div>
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
      <TrustBar />

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
        <div className="cine-divider-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)" }} />
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

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/portfolio" className="btn btn-outline">
              View All Projects <span className="arrow">&rarr;</span>
            </Link>
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
        <div className="cine-divider-overlay" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="cine-divider-content container">
          <RevealOnScroll>
            <div>
              <h2>
                Not Just Stands.{" "}
                <span className="accent">Unforgettable Moments.</span>
              </h2>
              <p>
                From intimate product launches to 1000+ sqm builds — we create brand experiences that people talk about long after the event.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ========== 8. TESTIMONIALS ========== */}
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
                      <strong>{t.role}, {t.company}</strong>
                    </div>
                  </footer>
                </blockquote>
              </RevealOnScroll>
            ))}
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
                  The Butter Duck is a UAE-based exhibition and event production
                  company with global reach. We design and build custom stands for
                  the world&apos;s biggest trade shows — from concept sketches to
                  on-site installation, across ten countries and counting.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.25}>
                <p
                  className="text-muted"
                  style={{ lineHeight: 1.8, marginBottom: 36, fontSize: "1.05rem" }}
                >
                  Our team of architects, engineers, and project managers obsesses
                  over every detail so your brand gets the spotlight it deserves.
                  No templates, no shortcuts — just unforgettable experiences delivered
                  on time, every time.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.35}>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <Link href="/about" className="btn btn-outline">
                    About Our Exhibition Company
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
