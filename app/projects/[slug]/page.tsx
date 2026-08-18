import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { caseStudies, getCaseStudy } from "../../../lib/projectCaseStudies";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getCaseStudy((await params).slug);
  return project ? { title: `${project.name} Case Study — Anya Rajesh`, description: project.summary } : {};
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();

  return (
    <main className="case-study">
      <nav className="case-nav shell">
        <Link href="/#work"><ArrowLeft size={18} /> Back to selected work</Link>
        <Link className="case-name" href="/">Anya Rajesh<span>.</span></Link>
      </nav>

      <header className="case-hero shell">
        <span className="kicker">{project.eyebrow}</span>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="case-actions">
          {project.live && <a className="case-primary" href={project.live} target="_blank" rel="noreferrer">Open live product <ArrowUpRight size={18} /></a>}
          <a href={project.repository} target="_blank" rel="noreferrer"><Code2 size={19} /> View source <ArrowUpRight size={17} /></a>
        </div>
      </header>

      <section className="case-meta shell">
        <div><span>Status</span><b>{project.status}</b></div>
        <div><span>Role</span><b>{project.role}</b></div>
        <div><span>Stack</span><div>{project.stack.map((item) => <code key={item}>{item}</code>)}</div></div>
      </section>

      <section className="case-preview shell">
        <div className="preview-bar"><span /><span /><span /><code>{project.slug}.app</code></div>
        <div><span>PROJECT IMAGE</span><h2>{project.name}</h2><p>Dedicated 16:10 space for the final product screenshot.</p></div>
      </section>

      <section className="case-overview shell">
        <article><span className="case-number">01 / OVERVIEW</span><h2>What it is</h2><p>{project.overview}</p></article>
        <article><span className="case-number">02 / PROBLEM</span><h2>Why it matters</h2><p>{project.problem}</p></article>
      </section>

      <section className="case-block shell">
        <div className="case-section-heading"><span className="case-number">03 / SYSTEM</span><h2>System architecture</h2></div>
        <div className="architecture-grid">{project.architecture.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}</div>
      </section>

      <section className="case-lists shell">
        <article><span className="case-number">04 / WORKFLOW</span><h2>How it works</h2><ol>{project.workflow.map((item) => <li key={item}>{item}</li>)}</ol></article>
        <article><span className="case-number">05 / DECISIONS</span><h2>Engineering decisions</h2><ul>{project.decisions.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul></article>
      </section>

      <section className="case-purpose shell"><span className="case-number">06 / OUTCOME</span><h2>What it delivers</h2><p>{project.purpose}</p><Link href="/#work">Explore the other systems <ArrowUpRight size={18} /></Link></section>
    </main>
  );
}
