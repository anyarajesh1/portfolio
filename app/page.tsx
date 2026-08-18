"use client";

import { useState } from "react";
import {
  ArrowUpRight, CheckCircle2, ChevronRight, Code2, Database, FileSearch,
  Layers3, MapPin, Menu, Network, ShieldCheck, Sparkles, X,
} from "lucide-react";

const projects = [
  {
    id: "axiom", index: "01", name: "Axiom", label: "Evidence intelligence", status: "In active development",
    problem: "AI answers sound certain even when their claims are unsupported. Axiom turns a block of text into individually testable claims, then shows the evidence behind each verdict.",
    outcome: "A traceable verification workflow—not another opaque confidence score.",
    steps: [["01", "Extract", "Decompose text into atomic claims"], ["02", "Retrieve", "Search local + external evidence"], ["03", "Rank", "Cross-encode for relevance"], ["04", "Verify", "Score entailment + contradiction"], ["05", "Referee", "Return a sourced verdict"]],
    signals: ["LangGraph pipeline", "Hybrid retrieval", "Source-quality gates", "Typed API contracts"],
    stack: ["Next.js", "FastAPI", "LangGraph", "Qdrant", "PostgreSQL", "Hugging Face", "Groq"],
    repo: "https://github.com/anyarajesh1/Axiom", live: null, accent: "violet", icon: FileSearch,
  },
  {
    id: "vigil", index: "02", name: "Vigil AI", label: "Community safety data", status: "Live product",
    problem: "Local safety information is fragmented across crime, weather, and emergency systems. Vigil turns a single US ZIP code into one understandable, real-time neighborhood view.",
    outcome: "One location query becomes a map, risk level, official alerts, and plain-English context.",
    steps: [["01", "Locate", "Resolve ZIP code + coordinates"], ["02", "Aggregate", "Query FBI, NOAA + FEMA data"], ["03", "Normalize", "Unify mismatched public schemas"], ["04", "Explain", "Generate accessible safety context"], ["05", "Visualize", "Render a hyperlocal risk view"]],
    signals: ["5 public data sources", "No-signup access", "Interactive geospatial UI", "Deployed API + frontend"],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet", "Groq / Llama 3", "Vercel", "Render"],
    repo: "https://github.com/anyarajesh1/Vigil-AI", live: "https://vigil-ai-two.vercel.app", accent: "cyan", icon: MapPin,
  },
  {
    id: "medinsight", index: "03", name: "MedInsight AI", label: "Private medical RAG", status: "Open source",
    problem: "Lab reports are dense, personal, and difficult to interpret. MedInsight lets people question a medical PDF without treating sensitive data as ordinary model input.",
    outcome: "Grounded explanations with cited medical sources and a privacy boundary before retrieval.",
    steps: [["01", "Ingest", "Extract PDF text with OCR fallback"], ["02", "Protect", "Redact PII before processing"], ["03", "Embed", "Index redacted chunks locally"], ["04", "Retrieve", "Ground answers in medical context"], ["05", "Explain", "Return simple or technical views"]],
    signals: ["OCR fallback", "Pre-retrieval PII redaction", "Cited responses", "Local-inference option"],
    stack: ["React", "FastAPI", "LangChain", "ChromaDB", "Tesseract", "Presidio", "MiniLM"],
    repo: "https://github.com/anyarajesh1/MedInsight-AI", live: null, accent: "lime", icon: ShieldCheck,
  },
];

const capabilities = [
  { icon: Network, title: "AI systems", text: "RAG, orchestration graphs, reranking, embeddings, evaluation, and structured model outputs." },
  { icon: Database, title: "Data + backend", text: "Python, FastAPI, PostgreSQL, vector stores, REST APIs, and multi-source data pipelines." },
  { icon: Layers3, title: "Product engineering", text: "TypeScript, React, Next.js, accessible UI, API integration, testing, and deployment." },
];

export default function Home() {
  const [activeId, setActiveId] = useState("axiom");
  const [menuOpen, setMenuOpen] = useState(false);
  const project = projects.find((item) => item.id === activeId) ?? projects[0];
  const ProjectIcon = project.icon;

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Anya Rajesh, home">AR<span>/</span>01</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#systems" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="https://github.com/anyarajesh1" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Available for software + AI roles</div>
          <h1>I build AI systems that make complex information <em>usable.</em></h1>
          <p className="hero-lede">I’m Anya Rajesh, a full-stack engineer working across retrieval, data pipelines, model orchestration, and product interfaces—especially where trust and clarity matter.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore the systems <ChevronRight size={16} /></a>
            <a className="button ghost" href="https://github.com/anyarajesh1" target="_blank" rel="noreferrer"><Code2 size={16} /> View code</a>
          </div>
        </div>
        <div className="system-card" aria-label="Engineering profile summary">
          <div className="window-bar"><span /><span /><span /><code>profile.system</code></div>
          <div className="terminal-line"><span>focus</span><strong>applied AI engineering</strong></div>
          <div className="terminal-line"><span>layer</span><strong>frontend → models → data</strong></div>
          <div className="terminal-line"><span>principle</span><strong>evidence over theater</strong></div>
          <div className="system-divider" />
          <div className="system-status"><CheckCircle2 size={18} /><div><small>CURRENT BUILD</small><b>Axiom / verification pipeline</b></div><span className="live-dot">LIVE</span></div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Core engineering domains"><div className="shell strip-inner"><span>FULL-STACK AI</span><i /><span>RAG + RETRIEVAL</span><i /><span>REAL-TIME DATA</span><i /><span>PRIVACY-FIRST SYSTEMS</span></div></div>

      <section className="work shell" id="work">
        <div className="section-heading"><div><span className="kicker">SELECTED SYSTEMS / 03</span><h2>Built around a real constraint.</h2></div><p>Each project starts with an information problem, then uses AI only where it improves the system.</p></div>
        <div className="project-tabs" role="tablist" aria-label="Projects">
          {projects.map((item) => { const Icon = item.icon; return (
            <button key={item.id} role="tab" aria-selected={item.id === activeId} className={item.id === activeId ? "active" : ""} onClick={() => setActiveId(item.id)}>
              <span>{item.index}</span><Icon size={18} /><b>{item.name}</b><small>{item.label}</small>
            </button>
          ); })}
        </div>

        <article className={`project-panel ${project.accent}`} key={project.id}>
          <header className="project-header">
            <div className="project-title"><div className="project-icon"><ProjectIcon size={24} /></div><div><span>{project.status}</span><h3>{project.name}</h3></div></div>
            <div className="project-links"><a href={project.repo} target="_blank" rel="noreferrer"><Code2 size={15} /> Repository</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live product <ArrowUpRight size={15} /></a>}</div>
          </header>
          <div className="project-body">
            <div className="problem-column">
              <div className="content-label">THE PROBLEM</div><p className="problem-copy">{project.problem}</p>
              <div className="content-label top-gap">DESIGNED OUTCOME</div><p className="outcome-copy">{project.outcome}</p>
              <div className="signal-grid">{project.signals.map((signal) => <span key={signal}><CheckCircle2 size={14} />{signal}</span>)}</div>
            </div>
            <div className="architecture">
              <div className="content-label">SYSTEM PIPELINE</div>
              <div className="pipeline">{project.steps.map(([number, title, detail], index) => (
                <div className="pipeline-row" key={title}><span className="node-number">{number}</span><div><b>{title}</b><small>{detail}</small></div>{index < project.steps.length - 1 && <span className="connector" />}</div>
              ))}</div>
            </div>
          </div>
          <footer className="stack-row"><span>STACK</span><div>{project.stack.map((item) => <code key={item}>{item}</code>)}</div></footer>
        </article>
      </section>

      <section className="capabilities" id="systems"><div className="shell">
        <div className="section-heading compact"><div><span className="kicker">ENGINEERING RANGE</span><h2>Across the complete system.</h2></div></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }, index) => <div className="capability" key={title}><span>0{index + 1}</span><Icon size={22} /><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div></section>

      <footer className="footer shell"><div><Sparkles size={18} /><span>Have a hard information problem?</span><b>Let’s build the system around it.</b></div><a href="https://github.com/anyarajesh1" target="_blank" rel="noreferrer">github.com/anyarajesh1 <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}
