"use client";

import { useState } from "react";
import {
  ArrowUpRight, BriefcaseBusiness, CheckCircle2, ChevronRight, Code2, Database,
  FileSearch, Layers3, Mail, MapPin, Menu, Network, ShieldCheck, Sparkles, UserRound, X,
} from "lucide-react";

const projects = [
  {
    id: "axiom", index: "01", name: "Axiom", label: "Evidence intelligence", status: "In active development",
    problem: "AI answers sound certain even when their claims are unsupported. Axiom turns a block of text into individually testable claims, then shows the evidence behind each verdict.",
    outcome: "A traceable verification workflow—not another opaque confidence score.",
    steps: [["01", "Extract", "Decompose text into atomic claims"], ["02", "Retrieve", "Search local + external evidence"], ["03", "Rank", "Cross-encode for relevance"], ["04", "Verify", "Score entailment + contradiction"], ["05", "Referee", "Return a sourced verdict"]],
    signals: ["LangGraph pipeline", "Hybrid retrieval", "Source-quality gates", "Typed API contracts"],
    stack: ["Next.js", "FastAPI", "LangGraph", "Qdrant", "PostgreSQL", "Hugging Face", "Groq"],
    repo: "https://github.com/anyarajesh1/Axiom", live: null, showLiveSlot: true, accent: "violet", icon: FileSearch,
  },
  {
    id: "vigil", index: "02", name: "Vigil AI", label: "Community safety data", status: "Live product",
    problem: "Local safety information is fragmented across crime, weather, and emergency systems. Vigil turns a single US ZIP code into one understandable, real-time neighborhood view.",
    outcome: "One location query becomes a map, risk level, official alerts, and plain-English context.",
    steps: [["01", "Locate", "Resolve ZIP code + coordinates"], ["02", "Aggregate", "Query FBI, NOAA + FEMA data"], ["03", "Normalize", "Unify mismatched public schemas"], ["04", "Explain", "Generate accessible safety context"], ["05", "Visualize", "Render a hyperlocal risk view"]],
    signals: ["5 public data sources", "No-signup access", "Interactive geospatial UI", "Deployed API + frontend"],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet", "Groq / Llama 3", "Vercel", "Render"],
    repo: "https://github.com/anyarajesh1/Vigil-AI", live: "https://vigil-ai-two.vercel.app", showLiveSlot: true, accent: "cyan", icon: MapPin,
  },
  {
    id: "medinsight", index: "03", name: "MedInsight AI", label: "Private medical RAG", status: "Open source",
    problem: "Lab reports are dense, personal, and difficult to interpret. MedInsight lets people question a medical PDF without treating sensitive data as ordinary model input.",
    outcome: "Grounded explanations with cited medical sources and a privacy boundary before retrieval.",
    steps: [["01", "Ingest", "Extract PDF text with OCR fallback"], ["02", "Protect", "Redact PII before processing"], ["03", "Embed", "Index redacted chunks locally"], ["04", "Retrieve", "Ground answers in medical context"], ["05", "Explain", "Return simple or technical views"]],
    signals: ["OCR fallback", "Pre-retrieval PII redaction", "Cited responses", "Local-inference option"],
    stack: ["React", "FastAPI", "LangChain", "ChromaDB", "Tesseract", "Presidio", "MiniLM"],
    repo: "https://github.com/anyarajesh1/MedInsight-AI", live: null, showLiveSlot: false, accent: "lime", icon: ShieldCheck,
  },
];

const capabilities = [
  { icon: Network, title: "AI systems", text: "RAG, orchestration graphs, reranking, embeddings, evaluation, and structured model outputs." },
  { icon: Database, title: "Data + backend", text: "Python, FastAPI, PostgreSQL, vector stores, REST APIs, and multi-source data pipelines." },
  { icon: Layers3, title: "Product engineering", text: "TypeScript, React, Next.js, accessible UI, API integration, testing, and deployment." },
];

const experiences = [
  {
    id: "viatris",
    company: "Viatris",
    role: "AI & Emerging Technology Intern",
    type: "Internship",
    period: "Jun 2026 — Present",
    location: "Canonsburg, Pennsylvania · Remote",
    bullets: [
      "Engineered AI agents and enterprise automation tools using Microsoft Copilot Studio, REST APIs, SharePoint, and Excel to execute multi-step workflows across internal systems",
      "Developed full-stack AI prototypes using JavaScript, Python, and SQL databases for conversation auditing, document comparison, governance analysis, and internal data tooling",
      "Built pseudonymization and synthetic data workflows to protect sensitive information while preserving referential consistency, generating reversible mappings, and validating outputs for enterprise use",
    ],
  },
  {
    id: "uci",
    company: "UC Irvine",
    role: "Machine Learning Research Assistant",
    type: "Research",
    period: "May 2026 — Present",
    location: "Irvine, California · On-site",
    bullets: [
      "Conducting machine learning and computer vision research on longitudinal mouse neuron imaging data, supporting the development of multi-session cell registration and tracking pipelines.",
      "Designing and optimizing neuron-matching algorithms and spatial tracking workflows to improve cross-session cell identification accuracy across large-scale imaging datasets.",
      "Evaluating model parameters and distance-based matching thresholds, analyzing performance tradeoffs to maximize neuron-matching accuracy while reducing false associations.",
    ],
  },
  {
    id: "langpal",
    company: "LangPal",
    role: "AI/ML Engineer Intern",
    type: "Internship",
    period: "Apr 2026 — Jun 2026",
    location: "Seattle, Washington · Remote",
    bullets: [
      "Designing end-to-end machine learning and NLP pipelines for an AI-powered language learning platform, while collaborating closely with the founding team on core product features",
      "Integrating conversational AI systems, speech recognition models, NLP-driven features, and computer vision components to support personalized and interactive learning experiences",
      "Managing data preprocessing, model training, evaluation, and optimization, while contributing to the deployment of scalable machine learning models in production environments",
    ],
  },
  {
    id: "mergeworks",
    company: "MergeWorks",
    role: "AI Agent Fellow",
    type: "Fellowship · Part-time",
    period: "Feb 2026 — May 2026",
    location: "Dallas, Texas · Remote",
    bullets: [
      "Designing structured Instagram DM conversation architecture to guide prospects from inquiry through qualification and booking",
      "Developing conditional logic and branching pathways to support treatment matching, objection handling, and personalized response generation",
      "Engineering human-in-the-loop (HITL) escalation triggers to safely route sensitive or medically complex cases to staff with full conversation context",
      "Implementing structured qualification frameworks and conversation guardrails to improve consistency, reduce response delays, and support scalable DM-to-booking automation",
    ],
  },
  {
    id: "alameda",
    company: "Alameda County ITD",
    role: "Summer Intern",
    type: "Internship",
    period: "Jun 2024 — Aug 2024",
    location: "United States · Hybrid",
    bullets: [
      "Developed Generative AI chatbots using Microsoft Azure and Copilot to provide users with accurate and detailed responses to inquiries regarding Alameda County’s public and internal services",
      "Implemented chatbot functionality by creating and integrating code to ensure accurate data retrieval from website endpoints, enhancing user experience and reducing manual intervention",
      "Created and managed datasets used to train models on county-specific data, improving response accuracy across both intranet and internet platforms",
      "Demonstrated leadership by monitoring development progress within a team of 16 professionals and presenting technical milestones and compliance reports to the CIO and CTO",
    ],
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState("axiom");
  const [activeExperienceId, setActiveExperienceId] = useState("viatris");
  const [menuOpen, setMenuOpen] = useState(false);
  const project = projects.find((item) => item.id === activeId) ?? projects[0];
  const experience = experiences.find((item) => item.id === activeExperienceId) ?? experiences[0];
  const ProjectIcon = project.icon;

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Anya Rajesh, home">Anya Rajesh<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="https://github.com/anyarajesh1" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> Available for software + AI roles</div>
          <h1>AI Systems <em>Built for the Real World.</em></h1>
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
          <div className="system-status"><CheckCircle2 size={18} /><div><small>CURRENT BUILD</small><b>Axiom / verification pipeline</b></div><span className="live-dot">ACTIVE</span></div>
        </div>
      </section>

      <div className="signal-strip" aria-label="Academic and mobility profile"><div className="shell strip-inner">
        <div className="profile-fact"><span>Class standing</span><b>Senior</b></div>
        <div className="profile-fact"><span>Degree</span><b>B.S. Computer Science</b></div>
        <div className="profile-fact"><span>Specialization</span><b>Artificial Intelligence</b></div>
        <div className="profile-fact"><span>Graduation</span><b>Expected Dec 2027</b></div>
        <div className="profile-fact"><span>Mobility</span><b>Open to relocation</b></div>
      </div></div>

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
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noreferrer"><Code2 size={17} /> View GitHub</a>
              {project.live ? (
                <a className="live-link" href={project.live} target="_blank" rel="noreferrer">Live product <ArrowUpRight size={17} /></a>
              ) : project.showLiveSlot ? (
                <span className="coming-soon" aria-label="Live product coming soon">Live product <small>Coming soon</small></span>
              ) : null}
            </div>
          </header>
          <div className="project-body">
            <div className="problem-column">
              <div className="content-label">THE PROBLEM</div><p className="problem-copy">{project.problem}</p>
              <div className="content-label top-gap">DESIGNED OUTCOME</div><p className="outcome-copy">{project.outcome}</p>
              <div className="signal-grid">{project.signals.map((signal) => <span key={signal}><CheckCircle2 size={14} />{signal}</span>)}</div>
            </div>
            <div className="project-preview">
              <div className="content-label">PRODUCT PREVIEW</div>
              <div className="preview-window">
                <div className="preview-bar"><span /><span /><span /><code>{project.id}.app</code></div>
                <div className="preview-canvas">
                  <ProjectIcon size={34} />
                  <span>INTERFACE PREVIEW</span>
                  <h4>{project.name}</h4>
                  <div className="preview-signals">{project.signals.slice(0, 3).map((signal) => <small key={signal}>{signal}</small>)}</div>
                </div>
              </div>
              <p className="preview-note">Reserved for a product screenshot · Recommended 16:10</p>
            </div>
          </div>
          <footer className="stack-row"><span>STACK</span><div>{project.stack.map((item) => <code key={item}>{item}</code>)}</div></footer>
        </article>
      </section>

      <section className="capabilities" id="systems"><div className="shell">
        <div className="section-heading compact"><div><span className="kicker">ENGINEERING RANGE</span><h2>Across the complete system.</h2></div></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }, index) => <div className="capability" key={title}><span>0{index + 1}</span><Icon size={22} /><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div></section>

      <section className="experience-section shell" id="experience">
        <div className="section-heading">
          <div><span className="kicker">EXPERIENCE / 05</span><h2>Building across research and industry.</h2></div>
          <p>Applied AI work spanning enterprise automation, machine learning research, conversational systems, and public-sector technology.</p>
        </div>

        <div className="experience-console">
          <div className="experience-list" role="tablist" aria-label="Professional experience">
            {experiences.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={item.id === activeExperienceId}
                className={item.id === activeExperienceId ? "active" : ""}
                onClick={() => setActiveExperienceId(item.id)}
              >
                <span>0{index + 1}</span>
                <div><b>{item.company}</b><small>{item.role}</small></div>
                <ChevronRight size={17} />
              </button>
            ))}
          </div>

          <article className="experience-detail" key={experience.id}>
            <div className="experience-meta">
              <div className="experience-mark"><BriefcaseBusiness size={22} /></div>
              <div><span>{experience.type}</span><h3>{experience.role}</h3><b>{experience.company}</b></div>
            </div>
            <div className="experience-dates"><span>{experience.period}</span><span>{experience.location}</span></div>
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-label"><span>06</span><i /><b>CONNECT</b></div>
        <div className="contact-content">
          <span className="kicker">OPEN TO SOFTWARE, AI/ML + APPLIED RESEARCH OPPORTUNITIES</span>
          <h2>Let’s build something <em>useful.</em></h2>
          <p>Interested in my work or have a technical problem worth solving? I’d love to connect.</p>
          <div className="contact-actions">
            <a className="contact-primary" href="https://www.linkedin.com/in/anya-raj/" target="_blank" rel="noreferrer"><UserRound size={20} /> Connect on LinkedIn <ArrowUpRight size={18} /></a>
            <a href="https://github.com/anyarajesh1" target="_blank" rel="noreferrer"><Code2 size={20} /> Explore GitHub <ArrowUpRight size={18} /></a>
            <a href="mailto:anya.rajesh@hotmail.com"><Mail size={20} /> Email me <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell"><div><Sparkles size={18} /><span>AI systems built for the real world.</span><b>Anya Rajesh · Full-Stack AI Engineer</b></div><a href="mailto:anya.rajesh@hotmail.com">anya.rajesh@hotmail.com <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}
