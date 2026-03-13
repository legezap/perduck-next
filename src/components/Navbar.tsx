"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleAccordion = (key: string) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesItems = [
    { icon: "◆", label: t("mega.exhibition"), desc: t("mega.exhibition.desc"), href: "/services#exhibition" },
    { icon: "⚙", label: t("mega.project"), desc: t("mega.project.desc"), href: "/services#project-mgmt" },
    { icon: "✨", label: t("mega.concept"), desc: t("mega.concept.desc"), href: "/services#concept" },
    { icon: "▶", label: t("mega.media"), desc: t("mega.media.desc"), href: "/services#media" },
  ];

  const portfolioItems = [
    { label: "Microsoft @ LEAP", href: "/projects/microsoft-leap" },
    { label: "Altronix @ Intersec", href: "/projects/altronix-intersec" },
    { label: "Absolut Skandic @ L+B", href: "/projects/absolut-skandic" },
    { label: "Spark @ Breakbulk", href: "/projects/spark-breakbulk" },
    { label: "Vanderlande @ Airport Show", href: "/projects/vanderlande-airport" },
    { label: "IK Group @ ADIPEC", href: "/projects/ikgroup-adipec" },
    { label: "Streit Group @ IDEX", href: "/projects/streit-group-idex" },
  ];

  let megaTimeout: ReturnType<typeof setTimeout>;
  const showMega = (id: string) => { clearTimeout(megaTimeout); setMegaOpen(id); };
  const hideMega = () => { megaTimeout = setTimeout(() => setMegaOpen(null), 200); };
  const keepMega = () => { clearTimeout(megaTimeout); };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar" aria-label="Main navigation">
        <div className="container nav-container">
          <Link href="/" className="logo" aria-label="PerDuck Home">
            <span className="logo-paren">(</span>
            <span className="logo-per">Per</span>
            <span className="logo-paren">)</span>
            <span className="logo-duck">Duck</span>
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                {t("nav.home")}
              </Link>
            </li>

            <li
              onMouseEnter={() => showMega("services")}
              onMouseLeave={hideMega}
            >
              <Link
                href="/services"
                className={isActive("/services") ? "active" : ""}
                aria-expanded={megaOpen === "services"}
                aria-haspopup="true"
              >
                {t("nav.services")} <span className="dd-arrow" aria-hidden="true">▾</span>
              </Link>
              <div
                className={`mega-menu${megaOpen === "services" ? " show" : ""}`}
                onMouseEnter={keepMega}
                onMouseLeave={hideMega}
                role="menu"
              >
                {servicesItems.map((item) => (
                  <Link href={item.href} className="mega-item" role="menuitem" key={item.href}>
                    <span className="mega-icon">{item.icon}</span>
                    <div className="mega-text">
                      <h4>{item.label}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li
              onMouseEnter={() => showMega("portfolio")}
              onMouseLeave={hideMega}
            >
              <Link
                href="/portfolio"
                className={isActive("/portfolio") || pathname.startsWith("/projects") ? "active" : ""}
                aria-expanded={megaOpen === "portfolio"}
                aria-haspopup="true"
              >
                {t("nav.portfolio")} <span className="dd-arrow" aria-hidden="true">▾</span>
              </Link>
              <div
                className={`mega-menu portfolio-mm${megaOpen === "portfolio" ? " show" : ""}`}
                onMouseEnter={keepMega}
                onMouseLeave={hideMega}
                role="menu"
                style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
              >
                {portfolioItems.map((item) => (
                  <Link href={item.href} className="mega-item" role="menuitem" key={item.href}>
                    <div className="mega-text">
                      <h4>{item.label}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/about" className={isActive("/about") ? "active" : ""}>
                {t("nav.about")}
              </Link>
            </li>

            <li>
              <Link href="/contact" className="btn btn-nav btn-primary">
                {t("nav.quote")}
              </Link>
            </li>
          </ul>

          <LanguageSwitcher />

          <button
            className={`burger${mobileOpen ? " open" : ""}`}
            id="burger"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mob-backdrop${mobileOpen ? " open" : ""}`}
        id="mobBackdrop"
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} id="mobileMenu">
        <nav>
          <Link href="/">{t("nav.home")}</Link>

          <div className="mob-accordion">
            <button
              className="mob-accordion-btn"
              aria-expanded={mobileAccordion === "services"}
              onClick={() => toggleAccordion("services")}
            >
              {t("nav.services")} <span className="dd-arrow" aria-hidden="true">▾</span>
            </button>
            <div className={`mob-accordion-panel${mobileAccordion === "services" ? " open" : ""}`}>
              {servicesItems.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>

          <div className="mob-accordion">
            <button
              className="mob-accordion-btn"
              aria-expanded={mobileAccordion === "portfolio"}
              onClick={() => toggleAccordion("portfolio")}
            >
              {t("nav.portfolio")} <span className="dd-arrow" aria-hidden="true">▾</span>
            </button>
            <div className={`mob-accordion-panel${mobileAccordion === "portfolio" ? " open" : ""}`}>
              {portfolioItems.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/about">{t("nav.about")}</Link>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: 16, justifyContent: "center" }}>
            {t("nav.quote")}
          </Link>
        </nav>
      </div>
    </>
  );
}
