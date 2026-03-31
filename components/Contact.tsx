"use client";

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: "8rem 2rem", background: "var(--bg-subtle)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="font-mono"
            style={{
              fontSize: "0.78rem",
              color: "var(--vigil-1)",
              fontWeight: 500,
              marginBottom: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Let's Connect
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Got an{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e63946, #f4a261)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              interesting
            </span>{" "}
            project?
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "3rem", fontSize: "1.05rem" }}>
            I'm always open to discussing new opportunities, collaborations, and ideas in AI,
            cybersecurity, and healthcare technology. Whether you want to talk about Vigil AI,
            MedInsight, or something entirely new — let's chat.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a
              href="mailto:anya@example.com"
              style={{
                background: "linear-gradient(135deg, #e63946, #f4a261)",
                color: "#fff",
                padding: "0.9rem 2rem",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "0 4px 20px rgba(230,57,70,0.25)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              📧 Send an Email
            </a>
            <a
              href="https://github.com/anyarajesh1"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                padding: "0.9rem 2rem",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "1px solid var(--border)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              GitHub Profile
            </a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/anyarajesh1", icon: "🐱" },
              { label: "LinkedIn", href: "#", icon: "💼" },
              { label: "Twitter / X", href: "#", icon: "🐦" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--vigil-1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "var(--text-primary)",
          color: "rgba(255,255,255,0.5)",
          padding: "2.5rem 2rem",
          textAlign: "center",
          fontSize: "0.85rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span className="font-display" style={{ color: "#fff", fontSize: "1.1rem" }}>
            AR<span style={{ color: "#e63946" }}>.</span>
          </span>
          <span>Built with Next.js · Designed by Anya Rajesh · {new Date().getFullYear()}</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#vigil" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
              Vigil AI
            </a>
            <a href="#medinsight" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
              MedInsight
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
