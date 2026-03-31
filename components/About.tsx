"use client";

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 2rem", background: "var(--bg-subtle)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <div
              className="font-mono"
              style={{ fontSize: "0.78rem", color: "var(--vigil-1)", fontWeight: 500, marginBottom: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              About Me
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}
            >
              Passionate about AI
              <br />that makes a{" "}
              <span style={{ color: "var(--vigil-1)", fontStyle: "italic" }}>real difference.</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              I'm Anya Rajesh, an AI/ML engineer with a deep passion for building
              intelligent systems that solve real-world problems. My work sits at the
              crossroads of two critical domains: <strong>cybersecurity</strong> and
              <strong> healthcare</strong> — where AI can genuinely protect and empower people.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              I built <strong>Vigil AI</strong> to address the growing need for intelligent
              threat monitoring — a system that uses machine learning to detect anomalies,
              analyze behavioral patterns, and surface security threats before they escalate.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              <strong>MedInsight AI</strong> reflects my belief that AI can democratize
              healthcare by helping predict diseases early, analyze patient data intelligently,
              and assist clinicians with faster, more accurate diagnoses.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://github.com/anyarajesh1"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "var(--text-primary)",
                  color: "#fff",
                  padding: "0.6rem 1.4rem",
                  borderRadius: "100px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  transition: "transform 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                GitHub Profile →
              </a>
            </div>
          </div>

          {/* Right: profile card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "360px",
              }}
            >
              {/* Card */}
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "24px",
                  padding: "2.5rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #e63946, #f4a261)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "1.5rem",
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "DM Serif Display, serif",
                  }}
                >
                  AR
                </div>
                <h3 className="font-display" style={{ fontSize: "1.4rem", marginBottom: "0.3rem" }}>
                  Anya Rajesh
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  AI / ML Engineer · Security & Healthcare AI
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { icon: "🔴", label: "Vigil AI", sub: "Cybersecurity Intelligence" },
                    { icon: "🟢", label: "MedInsight AI", sub: "Medical Diagnostics AI" },
                    { icon: "💻", label: "Python, PyTorch, TensorFlow", sub: "Core Stack" },
                    { icon: "☁️", label: "AWS, GCP, Vercel", sub: "Cloud Deployment" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.6rem 0.75rem",
                        background: "var(--bg-subtle)",
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                      }}
                    >
                      <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.2 }}>{item.label}</div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative offset box */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(230,57,70,0.08), rgba(42,157,143,0.08))",
                  transform: "translate(12px, 12px)",
                  zIndex: 0,
                  border: "1px solid var(--border)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
