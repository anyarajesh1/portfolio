"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Background decorative blobs */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,57,70,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-float-delay"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,157,143,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,162,97,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          paddingTop: "6rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "100px",
            padding: "0.4rem 1rem",
            marginBottom: "2.5rem",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            fontWeight: 500,
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#2a9d8f",
              boxShadow: "0 0 0 3px rgba(42,157,143,0.2)",
              animation: "pulse-soft 2s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          Open to opportunities · Software & AI Engineering
        </div>

        {/* Main heading */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            maxWidth: "900px",
          }}
        >
          Anya Rajesh{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #e63946 0%, #f4a261 60%, #2a9d8f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
          </span>{" "}
          {" "}
          <span
            style={{
              background: "linear-gradient(135deg, #2a9d8f 0%, #457b9d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "3rem",
            fontWeight: 400,
          }}
        >
          Building and deploying 
          full-stack AI solutions that integrate real-time data pipelines, retrieval-augmented
          generation, and privacy-first architectures. Focused on creating impactful,
          accessible applications that solve real problems.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="#vigil"
            style={{
              background: "linear-gradient(135deg, #e63946, #f4a261)",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: "100px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              boxShadow: "0 4px 20px rgba(230,57,70,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(230,57,70,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(230,57,70,0.3)"; }}
          >
            View Projects
          </a>
        </div>

        {/* Floating stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            gap: "1rem",
            marginTop: "5rem",
            width: "fit-content",
          }}
        >
          {[
            { label: "Projects Built", value: "2+", color: "var(--vigil-1)" },
            { label: "AI Models Trained", value: "10+", color: "var(--med-1)" },
            { label: "GitHub Stars", value: "⭐", color: "var(--accent-orange)" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1rem 1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div className="font-display" style={{ fontSize: "1.8rem", color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
