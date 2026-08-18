export type CaseStudy = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  status: string;
  role: string;
  repository: string;
  live: string | null;
  image: { src: string; width: number; height: number; alt: string } | null;
  stack: string[];
  overview: string;
  problem: string;
  architecture: { title: string; detail: string }[];
  workflow: string[];
  decisions: string[];
  purpose: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "axiom",
    name: "Axiom",
    eyebrow: "Evidence verification · Hybrid retrieval · ML evaluation",
    summary: "A claim-analysis system that decomposes AI-generated text, retrieves relevant evidence, evaluates entailment and contradiction, and returns source-backed verdicts.",
    status: "In active development",
    role: "Full-stack and AI systems engineering",
    repository: "https://github.com/anyarajesh1/Axiom",
    live: "https://axiom-ten-alpha.vercel.app/",
    image: { src: "/project-case-studies/axiom-analysis.png", width: 2486, height: 1896, alt: "Axiom analysis results showing a supported claim, confidence score, and retrieved sources" },
    stack: ["Next.js", "FastAPI", "LangGraph", "Qdrant", "PostgreSQL", "Hugging Face", "Groq"],
    overview: "Axiom is an evidence-led verification platform for general-knowledge claims. Instead of assigning one opaque score to an entire response, it breaks text into atomic claims and exposes the evidence, model signals, and reasoning behind each result.",
    problem: "Generative AI can present unsupported claims with the same confidence as accurate ones. A useful verification system must separate those claims, retrieve relevant material, assess conflicting evidence, and make its reasoning inspectable.",
    architecture: [
      { title: "Claim extraction", detail: "A structured model call decomposes submitted text into atomic, independently verifiable claims." },
      { title: "Hybrid retrieval", detail: "The system searches a curated local corpus and external sources for evidence related to each claim." },
      { title: "Evidence reranking", detail: "A cross-encoder scores claim-evidence pairs so the verification layer receives the most relevant passages first." },
      { title: "Entailment analysis", detail: "Natural-language inference measures whether each passage supports, contradicts, or remains neutral toward the claim." },
      { title: "Evidence referee", detail: "A final structured decision combines evidence quality and model signals into a sourced, readable verdict." },
    ],
    workflow: [
      "A user submits a statement or AI-generated passage for analysis.",
      "The API validates the input and extracts a set of atomic claims.",
      "Each claim is matched against local and external evidence, then reranked for relevance.",
      "Entailment and contradiction models score the strongest evidence pairs.",
      "A referee layer returns an evidence-backed verdict with supporting sources.",
    ],
    decisions: [
      "Analyzes claims independently instead of treating a multi-claim paragraph as one verification target.",
      "Uses source-quality gates so low-value social, lyric, and unsupported sources do not enter the decision path.",
      "Validates model outputs with strict typed schemas before they move between pipeline stages.",
      "Persists submissions, claims, evidence, and verdicts so an analysis remains traceable after the request completes.",
    ],
    purpose: "Make AI claim verification transparent enough for a person to inspect the evidence and make the final call.",
  },
  {
    slug: "vigil",
    name: "Vigil AI",
    eyebrow: "Live public data · AI summaries · Geospatial interface",
    summary: "A real-time community-safety platform that turns one U.S. ZIP code into a unified view of crime, weather, emergencies, and understandable local context.",
    status: "Published",
    role: "Full-stack AI engineering",
    repository: "https://github.com/anyarajesh1/Vigil-AI",
    live: "https://vigil-ai-two.vercel.app",
    image: { src: "/project-case-studies/vigil-map.png", width: 3344, height: 1868, alt: "Vigil AI neighborhood safety dashboard with risk assessment, weather, AI summary, and incident map" },
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet", "Groq / Llama 3", "Vercel", "Render"],
    overview: "Vigil AI aggregates fragmented public-safety information into a single hyperlocal product. It combines an interactive incident map, current conditions, official emergency declarations, risk scoring, and plain-English AI summaries without requiring an account.",
    problem: "Crime statistics, severe-weather data, and federal emergency declarations live in separate systems with different schemas and levels of readability. Residents need one accessible view that connects those signals to a location they understand.",
    architecture: [
      { title: "Location resolution", detail: "The product resolves a ZIP code into the coordinates and geographic context needed by downstream services." },
      { title: "Multi-source ingestion", detail: "FastAPI routes query FBI, NOAA, FEMA, Open-Meteo, and OpenStreetMap services." },
      { title: "Data normalization", detail: "Responses from unrelated public APIs are transformed into one consistent local-safety model." },
      { title: "Context generation", detail: "Groq-hosted Llama 3 converts collected signals into a concise, plain-English safety summary." },
      { title: "Geospatial presentation", detail: "A Next.js and Leaflet interface renders incidents, conditions, alerts, and risk context together." },
    ],
    workflow: [
      "A visitor enters any supported U.S. ZIP code without creating an account.",
      "The backend resolves the location and requests current data from public services.",
      "The platform normalizes incidents, weather, and declarations into one response.",
      "The AI layer generates readable context from the aggregated safety signals.",
      "The frontend renders the result as an interactive map and neighborhood report.",
    ],
    decisions: [
      "Uses authoritative public sources instead of relying on a single proprietary safety feed.",
      "Keeps the product open and account-free so safety context is immediately accessible.",
      "Separates the Next.js frontend and FastAPI backend so data integration and presentation can scale independently.",
      "Presents AI-generated guidance beside its underlying live signals rather than as an isolated chatbot answer.",
    ],
    purpose: "Turn scattered public-safety data into a fast, understandable neighborhood view for everyday users.",
  },
  {
    slug: "medinsight",
    name: "MedInsight AI",
    eyebrow: "Privacy-first RAG · OCR · Cited medical context",
    summary: "A medical-document analysis platform that redacts sensitive information, retrieves grounded context, and explains uploaded lab reports with cited sources.",
    status: "Open source",
    role: "Full-stack and applied AI engineering",
    repository: "https://github.com/anyarajesh1/MedInsight-AI",
    live: null,
    image: { src: "/project-case-studies/medinsight-demo-cropped.png", width: 984, height: 1599, alt: "MedInsight AI question and cited medical answer interface" },
    stack: ["React", "FastAPI", "LangChain", "ChromaDB", "Tesseract", "Presidio", "MiniLM"],
    overview: "MedInsight AI helps users explore dense medical documents without treating personal information as ordinary model input. It extracts uploaded PDFs, removes identifiable details, retrieves relevant medical definitions, and returns both simplified and technical explanations.",
    problem: "Lab reports contain unfamiliar terminology alongside highly sensitive personal data. A useful analysis workflow needs to explain the document while protecting identity, grounding responses in medical material, and showing where its information came from.",
    architecture: [
      { title: "Document ingestion", detail: "The FastAPI backend extracts native PDF text and falls back to Tesseract OCR for scanned pages." },
      { title: "Privacy boundary", detail: "Presidio and targeted patterns redact names, phone numbers, and common identifiers before retrieval." },
      { title: "Vector indexing", detail: "Redacted chunks and medical-dictionary entries are embedded with MiniLM and stored in ChromaDB." },
      { title: "Grounded retrieval", detail: "LangChain retrieves medical context relevant to the user’s redacted question and document content." },
      { title: "Accessible response", detail: "The interface presents cited results in either simplified language or a more technical view." },
    ],
    workflow: [
      "A user uploads a native or scanned medical lab PDF.",
      "The backend extracts its text in memory and applies OCR when necessary.",
      "Identifiable information is redacted before text enters the retrieval pipeline.",
      "The vector store retrieves grounded medical definitions and supporting context.",
      "The frontend returns an explanation with citations and a selectable level of detail.",
    ],
    decisions: [
      "Does not store uploaded PDFs on disk; only redacted extracted text enters the retrieval workflow.",
      "Redacts both document content and user queries before retrieval rather than treating privacy as a presentation-layer concern.",
      "Supports local retrieval and local-model options so the core workflow does not require sending health data to a hosted LLM.",
      "Includes citations and separate simplified and technical views to make results more inspectable and accessible.",
    ],
    purpose: "Make medical documents easier to understand while preserving a clear privacy boundary and visible source grounding.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
