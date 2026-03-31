"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Vigil AI", href: "#vigil" },
    { label: "MedInsight", href: "#medinsight" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(250, 248, 245, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          className="font-display"
          style={{ fontSize: "1.25rem", color: "var(--text-primary)", textDecoration: "none", letterSpacing: "-0.02em" }}
        >
          AR<span style={{ color: "var(--vigil-1)" }}>.</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--vigil-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/anyarajesh1"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "var(--text-primary)",
              color: "#fff",
              padding: "0.45rem 1.1rem",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
              transition: "transform 0.15s, background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--vigil-1)"; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            GitHub →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", display: "none" }}
          className="show-mobile"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text-secondary)", textDecoration: "none", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}