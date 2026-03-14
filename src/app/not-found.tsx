import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 16 }}>
          4<span className="accent">0</span>4
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", marginBottom: 40 }}>
          This page doesn't exist. Maybe it was dismantled after the show.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            Back to Home <span className="arrow">&rarr;</span>
          </Link>
          <Link href="/portfolio" className="btn btn-outline">
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
