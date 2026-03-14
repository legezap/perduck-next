import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";
import CounterAnimation from "@/components/CounterAnimation";
import Parallax from "@/components/Parallax";
import ImageGallery from "@/components/ImageGallery";
import RenderReality from "@/components/RenderReality";
import { projects } from "@/data/projects";

/* ---------- Static Params ---------- */

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ---------- Dynamic Metadata ---------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} ${project.event} | Case Study | The Butter Duck`,
    description: project.overview.slice(0, 160),
    openGraph: {
      images: [{ url: project.image }],
    },
  };
}

/* ---------- Page ---------- */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Separate renders from photos
  const renders = project.gallery.filter((img) => img.includes("-render-"));
  const photos = project.gallery.filter((img) => !img.includes("-render-"));

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span className="sep">/</span>
            <span className="current">
              {project.client} {project.event}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <Parallax className="hero-bg">
          <Image
            src={project.image}
            alt={`${project.client} ${project.event}`}
            fill
            priority
            className="hero-bg-img"
            style={{ objectFit: "cover" }}
          />
        </Parallax>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <RevealOnScroll>
              <span className="hero-badge">{project.tags.join(" / ")}</span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1>
                {project.client}
                <br />
                <span className="accent">{project.event}</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="hero-sub">
                {project.size} &bull; {project.location}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <RevealOnScroll className="sd-text">
              <span className="section-label">Overview</span>
              <h2>The Project</h2>
              <p>{project.overview}</p>
            </RevealOnScroll>
            <RevealOnScroll direction="right" delay={0.15}>
              <div
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-default)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px",
                }}
              >
                <h3 style={{ marginBottom: 24 }}>
                  Project <span className="accent">Specs</span>
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      Client
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      Event
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.event}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      Location
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      Size
                    </span>
                    <p style={{ fontWeight: 600, marginTop: 4 }}>
                      {project.size}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      Type
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginTop: 8,
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--color-bg-card)",
          borderTop: "1px solid var(--color-border-default)",
          borderBottom: "1px solid var(--color-border-default)",
        }}
      >
        <div className="container" style={{ maxWidth: 800 }}>
          <RevealOnScroll>
            <span className="section-label">The Challenge</span>
            <h2 style={{ marginBottom: 24 }}>
              What We Were <span className="accent">Up Against</span>
            </h2>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              {project.challenge}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Solution */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 800 }}>
          <RevealOnScroll>
            <span className="section-label">The Solution</span>
            <h2 style={{ marginBottom: 24 }}>
              How We <span className="accent">Made It Happen</span>
            </h2>
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              {project.solution}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Render vs Reality */}
      {renders.length > 0 && (
        <RenderReality renders={renders} photos={photos} />
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <ImageGallery
          images={project.gallery}
          alt={`${project.client} ${project.event}`}
        />
      )}

      {/* Key Features */}
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
              Key Features
            </span>
            <h2 style={{ textAlign: "center", marginBottom: 56 }}>
              Engineering <span className="accent">Highlights</span>
            </h2>
          </RevealOnScroll>
          <div className="services-grid">
            {project.features.map((feature, i) => (
              <RevealOnScroll key={feature.title} delay={i * 0.1}>
                <div className="service-card">
                  <div
                    className="service-icon"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {i === 0
                      ? "\u2692"
                      : i === 1
                        ? "\u26A1"
                        : i === 2
                          ? "\u2B50"
                          : "\u2699"}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 800 }}>
          <RevealOnScroll>
            <span className="section-label">Results</span>
            <h2 style={{ marginBottom: 32 }}>
              The <span className="accent">Outcome</span>
            </h2>
          </RevealOnScroll>
          <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {project.results.map((result, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <li
                  style={{
                    padding: "20px 24px 20px 52px",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-default)",
                    borderRadius: "var(--radius-default)",
                    position: "relative",
                    color: "var(--color-text-muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 20,
                      top: 20,
                      color: "var(--color-accent)",
                      fontWeight: 700,
                    }}
                  >
                    &#10003;
                  </span>
                  {result}
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {project.stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 0.1}>
                <div>
                  <div className="stat-num">
                    <CounterAnimation
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="stat-text">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <RevealOnScroll>
            <h2>Ready to Build Something Like This?</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p>
              Tell us about your next exhibition and we&apos;ll show you
              what&apos;s possible.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link href="/contact" className="btn btn-lg">
              Start Your Project <span className="arrow">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section
        style={{
          padding: "56px 0",
          borderTop: "1px solid var(--color-border-default)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="btn btn-ghost"
            >
              <span className="arrow" style={{ transform: "rotate(180deg)" }}>
                &rarr;
              </span>{" "}
              {prev.client} {prev.event}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="btn btn-ghost"
              style={{ marginLeft: "auto" }}
            >
              {next.client} {next.event}{" "}
              <span className="arrow">&rarr;</span>
            </Link>
          ) : (
            <Link
              href="/portfolio"
              className="btn btn-ghost"
              style={{ marginLeft: "auto" }}
            >
              All Projects <span className="arrow">&rarr;</span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
