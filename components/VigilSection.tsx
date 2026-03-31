"use client";

const features = [
  {
    icon: "🛡️",
    title: "Real-Time Threat Detection",
    desc: "Continuously monitors system logs, network traffic, and user behavior using ML anomaly detection algorithms to identify threats the moment they emerge.",
  },
  {
    icon: "🧠",
    title: "AI-Powered Behavioral Analysis",
    desc: "Trained on thousands of attack patterns, Vigil AI understands the difference between normal activity and subtle indicators of compromise (IoCs).",
  },
  {
    icon: "📊",
    title: "Intelligent Dashboard",
    desc: "Visual threat maps, risk scoring, incident timelines, and alert prioritization — all in a clean, operator-friendly interface built for speed.",
  },
  {
    icon: "⚡",
    title: "Automated Incident Response",
    desc: "When a threat crosses confidence thresholds, Vigil can automatically trigger response playbooks: isolating hosts, revoking credentials, and generating reports.",
  },
  {
    icon: "🔍",
    title: "MITRE ATT&CK Mapping",
    desc: "Every detected event is mapped to the MITRE ATT&CK framework, giving security teams immediate context on attacker tactics, techniques, and procedures.",
  },
  {
    icon: "📁",
    title: "Multi-Source Log Ingestion",
    desc: "Ingests from web servers, firewalls, SIEM systems, cloud providers, and custom endpoints via a unified Elasticsearch-backed pipeline.",
  },
];

const techStack = ["Python", "FastAPI", "React", "Elasticsearch", "PyTorch", "OpenAI API", "SQLite/PostgreSQL", "Docker", "Grok Parsing", "MITRE ATT&CK"];

export default function VigilSection() {
  return (
    <section
      id="vigil"
      style={{
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #e63946, #f4a261, #e63946)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div
            className="font-mono"
            style={{
              fontSize: "0.78rem",
              color: "var(--vigil-1)",
              fontWeight: 500,
              marginBottom: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "2px",
                background: "var(--vigil-1)",
                display: "inline-block",
              }}
            />
            Project 01
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.5rem",
                }}
              >
                Vigil{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #e63946, #f4a261)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontStyle: "italic",
                  }}
                >
                  AI
                </span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", fontWeight: 500 }}>
                Intelligent Cybersecurity Monitoring System
              </p>
            </div>

            <a
              href="https://github.com/anyarajesh1"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--vigil-3)",
                color: "var(--vigil-1)",
                border: "1px solid rgba(230,57,70,0.2)",
                padding: "0.7rem 1.5rem",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.88rem",
                transition: "transform 0.15s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--vigil-1)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--vigil-3)"; e.currentTarget.style.color = "var(--vigil-1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* Hero description */}
        <div
          style={{
            background: "linear-gradient(135deg, #fff5f5, #fff8f3)",
            border: "1px solid rgba(230,57,70,0.15)",
            borderRadius: "24px",
            padding: "3rem",
            marginBottom: "4rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="project-hero-grid"
        >
          <div>
            <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: "1rem", lineHeight: 1.2 }}>
              What is Vigil AI?
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Vigil AI is an open-source, AI-native cybersecurity monitoring platform designed to
              help organizations detect threats <em>before</em> they become incidents. It combines
              machine learning anomaly detection, real-time log analysis, and intelligent alerting
              into a unified security operations toolkit.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Built on a FastAPI backend with React frontend, Vigil processes raw log streams
              from any source — web servers, firewalls, cloud platforms — and applies trained
              models to surface anomalies, suspicious patterns, and potential intrusions in real-time.
            </p>
          </div>
          <div>
            {/* Visual representation */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "16px",
                padding: "1.5rem",
                border: "1px solid var(--border)",
                fontFamily: "DM Mono, monospace",
                fontSize: "0.78rem",
                lineHeight: 1.7,
              }}
            >
              <div style={{ color: "var(--text-muted)", marginBottom: "0.5rem" }}># vigil threat log</div>
              <div style={{ color: "#2a9d8f" }}>{"[✓] 192.168.1.1  → SAFE  (conf: 0.98)"}</div>
              <div style={{ color: "#2a9d8f" }}>{"[✓] 10.0.0.5     → SAFE  (conf: 0.95)"}</div>
              <div style={{ color: "#f4a261" }}>{"[!] 203.0.113.42 → WARN  (conf: 0.71)"}</div>
              <div style={{ color: "#e63946", fontWeight: 700 }}>{"[⚠] 198.51.100.2 → THREAT(conf: 0.94)"}</div>
              <div style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>{"→ MITRE: T1078 Valid Accounts"}</div>
              <div style={{ color: "var(--text-muted)" }}>{"→ Action: Alert triggered"}</div>
              <div style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>{"Processed: 14,821 events/sec"}</div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
          Core Capabilities
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
          className="features-grid"
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.75rem",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(230,57,70,0.1)";
                e.currentTarget.style.borderColor = "rgba(230,57,70,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{f.icon}</div>
              <h4 style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{f.title}</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div
          style={{
            background: "var(--bg-subtle)",
            borderRadius: "20px",
            padding: "2rem 2.5rem",
            border: "1px solid var(--border)",
          }}
        >
          <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Tech Stack
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {techStack.map((t) => (
              <span
                key={t}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(230,57,70,0.15)",
                  color: "var(--vigil-1)",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "100px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .project-hero-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}