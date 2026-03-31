"use client";

const skillGroups = [
  {
    category: "Languages",
    color: "#e63946",
    bg: "#fff5f5",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Bash", "R"],
  },
  {
    category: "ML / AI Frameworks",
    color: "#2a9d8f",
    bg: "#edfaf8",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Keras", "Hugging Face", "LangChain"],
  },
  {
    category: "Data & Analytics",
    color: "#457b9d",
    bg: "#eff5fa",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
  },
  {
    category: "Backend & APIs",
    color: "#f4a261",
    bg: "#fff8f0",
    skills: ["FastAPI", "Node.js", "REST APIs", "GraphQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Frontend",
    color: "#7c5cbf",
    bg: "#f5f0ff",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    category: "DevOps & Cloud",
    color: "#52796f",
    bg: "#eef4f2",
    skills: ["Docker", "AWS", "GCP", "Vercel", "GitHub Actions", "Elasticsearch"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <div
            className="font-mono"
            style={{
              fontSize: "0.78rem",
              color: "var(--accent-purple)",
              fontWeight: 500,
              marginBottom: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ width: "28px", height: "2px", background: "var(--accent-purple)", display: "inline-block" }} />
            Toolkit
          </div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Skills & Technologies
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: group.bg,
                border: `1px solid ${group.color}22`,
                borderRadius: "20px",
                padding: "1.75rem",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                style={{
                  display: "inline-block",
                  background: group.color,
                  color: "#fff",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                  letterSpacing: "0.03em",
                }}
              >
                {group.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: `1px solid ${group.color}33`,
                      color: "var(--text-primary)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "8px",
                      fontSize: "0.83rem",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
