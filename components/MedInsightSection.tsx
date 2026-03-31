"use client";

const features = [
  {
    icon: "🩺",
    title: "Symptom-Based Disease Prediction",
    desc: "Select symptoms from a comprehensive library and receive AI-powered differential diagnoses ranked by probability, with supporting clinical context.",
  },
  {
    icon: "📈",
    title: "Patient Data Analytics",
    desc: "Upload patient vitals, lab results, or historical records and receive trend analysis, outlier detection, and risk stratification powered by ML models.",
  },
  {
    icon: "🔬",
    title: "Medical Literature Synthesis",
    desc: "Integrates with PubMed and Semantic Scholar to surface relevant research papers, clinical trials, and treatment guidelines for any queried condition.",
  },
  {
    icon: "💊",
    title: "Drug Interaction Checker",
    desc: "Cross-references prescribed medications against a drug interaction database, flagging contraindications and adverse combination risks automatically.",
  },
  {
    icon: "📋",
    title: "Clinical Report Generation",
    desc: "Automatically generates structured clinical summaries, SOAP notes, and patient-friendly plain-language explanations from raw diagnostic data.",
  },
  {
    icon: "🛡️",
    title: "Privacy-First Architecture",
    desc: "HIPAA-aligned design with local inference options, data anonymization pipelines, and audit logging to protect sensitive patient information.",
  },
];

const techStack = ["Python", "Streamlit", "TensorFlow", "scikit-learn", "NLP (BERT)", "PubMed API", "Pandas", "NumPy", "FastAPI", "OpenAI GPT-4"];

const conditions = [
  { name: "Hypertension", confidence: 87, color: "#e63946" },
  { name: "Type 2 Diabetes", confidence: 74, color: "#f4a261" },
  { name: "Anemia", confidence: 61, color: "#457b9d" },
];

export default function MedInsightSection() {
  return (
    <section
      id="medinsight"
      style={{
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-subtle)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #2a9d8f, #457b9d, #2a9d8f)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,157,143,0.07) 0%, transparent 70%)",
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
              color: "var(--med-1)",
              fontWeight: 500,
              marginBottom: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ width: "28px", height: "2px", background: "var(--med-1)", display: "inline-block" }} />
            Project 02
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "0.5rem" }}
              >
                MedInsight{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #2a9d8f, #457b9d)",
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
                Intelligent Medical Diagnostics & Health Analytics Platform
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
                background: "var(--med-3)",
                color: "var(--med-1)",
                border: "1px solid rgba(42,157,143,0.2)",
                padding: "0.7rem 1.5rem",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.88rem",
                transition: "transform 0.15s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--med-1)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--med-3)"; e.currentTarget.style.color = "var(--med-1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* Hero description */}
        <div
          style={{
            background: "linear-gradient(135deg, #f0fdfb, #f0f7ff)",
            border: "1px solid rgba(42,157,143,0.15)",
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
              What is MedInsight AI?
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
              MedInsight AI is an intelligent medical analytics platform that bridges the gap
              between raw patient data and actionable clinical insight. Designed for healthcare
              professionals, students, and researchers, it uses advanced NLP and machine learning
              models to assist with disease identification, health risk assessment, and medical
              literature discovery.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              The platform's symptom-driven diagnostic engine processes hundreds of clinical
              indicators simultaneously, providing ranked differentials with confidence scores
              and relevant medical context — reducing diagnostic guesswork and supporting
              faster, better-informed clinical decisions.
            </p>
          </div>

          {/* Visual demo card */}
          <div
            style={{
              background: "var(--bg-card)",
              borderRadius: "16px",
              padding: "1.5rem",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1rem", fontFamily: "DM Mono, monospace" }}>
              # Differential Diagnosis Output
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Symptoms: fatigue, frequent urination, blurred vision, elevated BP
            </div>
            {conditions.map((c) => (
              <div key={c.name} style={{ marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", fontSize: "0.85rem" }}>
                  <span style={{ fontWeight: 600 }}>{c.name}</span>
                  <span style={{ color: c.color, fontWeight: 700 }}>{c.confidence}%</span>
                </div>
                <div style={{ height: "6px", background: "var(--bg-subtle)", borderRadius: "100px", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${c.confidence}%`,
                      background: c.color,
                      borderRadius: "100px",
                      transition: "width 0.8s ease",
                    }}
                  />
                </div>
              </div>
            ))}
            <div style={{ marginTop: "1rem", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "DM Mono, monospace" }}>
              → Recommend: HbA1c, CBC, BMP panel
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
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(42,157,143,0.1)";
                e.currentTarget.style.borderColor = "rgba(42,157,143,0.25)";
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

        {/* Impact callout */}
        <div
          style={{
            background: "linear-gradient(135deg, #2a9d8f, #457b9d)",
            borderRadius: "24px",
            padding: "2.5rem 3rem",
            color: "#fff",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
          className="impact-grid"
        >
          {[
            { value: "200+", label: "Symptoms Indexed", sub: "Comprehensive symptom library" },
            { value: "50+", label: "Conditions Diagnosed", sub: "Across major disease categories" },
            { value: "94%", label: "Model Accuracy", sub: "On validation dataset" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div className="font-display" style={{ fontSize: "2.5rem", lineHeight: 1, marginBottom: "0.25rem" }}>{stat.value}</div>
              <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{stat.label}</div>
              <div style={{ opacity: 0.75, fontSize: "0.82rem" }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ background: "var(--bg-card)", borderRadius: "20px", padding: "2rem 2.5rem", border: "1px solid var(--border)" }}>
          <h4 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Tech Stack
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {techStack.map((t) => (
              <span
                key={t}
                style={{
                  background: "var(--med-3)",
                  border: "1px solid rgba(42,157,143,0.2)",
                  color: "var(--med-1)",
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
          .impact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
