import { useEffect, useMemo, useState } from "react";

type LinkSet = {
  repo?: string;
  demo?: string;
  writeup?: string;
  slides?: string;
};

type Project = {
  id: string;
  title: string;
  year: number | string;
  blurb: string;
  impact: string[];
  tags: string[];
  links?: LinkSet;
  thumbnail: string;
};

const profile = {
  name: "Nikolla Nickolov",
  tagline: "Cybersecurity • Systems • Applied Data",
  location: "Tampa Bay, FL",
  email: "nikolla@example.com",
  linkedin: "https://www.linkedin.com/in/nikolla-nickolov-1a46a2290/",
  github: "https://github.com/your-github",
  resumeUrl: "/Nikolla_Nickolov_Resume.pdf",
  headshot: "https://avatars.githubusercontent.com/u/9919?s=200",
  availability: "Open to Cybersecurity / SecOps / IT Ops roles (onsite/hybrid).",
};

const projects: Project[] = [
  {
    id: "suricata-ids",
    title: "Suricata IDS Home Lab",
    year: 2024,
    blurb:
      "Designed and deployed a Suricata-based IDS; authored custom rules to detect port scans, brute force, and malware C2.",
    impact: [
      "Built rules for SYN scan + SSH brute detection",
      "Parsed PCAPs with tcpdump and Suricata logs",
      "Playbooks for triage + incident notes",
    ],
    tags: ["Cybersecurity", "Detection", "Networking", "Linux"],
    links: { repo: "#" },
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "malicious-url-detector",
    title: "Malicious URL Detector (Python + VirusTotal)",
    year: 2024,
    blurb:
      "CLI scanner that scores URLs via VirusTotal + heuristics; flags phishing and malware patterns.",
    impact: [
      "Batch analysis with rate-limit aware queue",
      "Caching to cut API calls by ~70%",
      "Export to CSV + JSON for SIEM enrichment",
    ],
    tags: ["Python", "Automation", "Threat Intel"],
    links: { repo: "#", writeup: "#" },
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "phishing-detector",
    title: "Phishing Email Detector (Flask + ML)",
    year: 2024,
    blurb:
      "TF-IDF + logistic regression to classify emails; exposes REST endpoint + small web UI.",
    impact: ["ROC-AUC 0.96 on validation", "Feature explainability", "Dockerized for quick deploy"],
    tags: ["Machine Learning", "Python", "Flask"],
    links: { repo: "#", demo: "#" },
    thumbnail:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "Cybersecurity", label: "Cybersecurity" },
  { key: "Python", label: "Python" },
  { key: "Machine Learning", label: "Machine Learning" },
] as const;

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeCat, setActiveCat] = useState<(typeof categories)[number]["key"]>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCat = activeCat === "all" || p.tags.includes(activeCat);
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [activeCat, query]);

  return (
    <div className="wrap">
      {/* Top Bar */}
      <header className="topbar">
        <div className="brand">
          <img className="avatar" src={profile.headshot} alt="Headshot" />
          <div>
            <div className="brand-name">{profile.name}</div>
            <div className="brand-sub">{profile.tagline}</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={profile.resumeUrl}>Resume</a>
        </nav>
        <button className="btn ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="badges">
          <span className="badge">Based in {profile.location}</span>
          <span className="badge">{profile.availability}</span>
        </div>
        <h1>Building secure systems and pragmatic automation — then telling the story clearly.</h1>
        <p className="lead">
          I combine hands-on cybersecurity labs, incident-style documentation, and applied Python to ship small tools
          that make teams faster and safer.
        </p>
        <div className="cta">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href={profile.linkedin} target="_blank">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank">GitHub</a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-head">
          <h2>Selected Projects</h2>
          <input
            className="search"
            placeholder="Search projects…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="pills">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`pill ${activeCat === c.key ? "active" : ""}`}
              onClick={() => setActiveCat(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="muted">No projects match your filters.</div>
        ) : (
          <ul className="grid">
            {filtered.map((p) => (
              <li key={p.id} className="card">
                <div className="thumb"><img src={p.thumbnail} alt={p.title} /></div>
                <div className="card-body">
                  <div className="card-title">
                    <h3>{p.title}</h3>
                    <span className="year">{p.year}</span>
                  </div>
                  <p className="muted">{p.blurb}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                  <div className="links">
                    {p.links?.repo && <a href={p.links.repo} target="_blank">Code</a>}
                    {p.links?.demo && <a href={p.links.demo} target="_blank">Demo</a>}
                    {p.links?.writeup && <a href={p.links.writeup} target="_blank">Write-up</a>}
                    {p.links?.slides && <a href={p.links.slides} target="_blank">Slides</a>}
                    <button className="btn small" onClick={() => setOpen(p)}>Details</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="cols">
          <div className="panel">
            <div className="panel-head">
              <h3>Valet Driver — Various Locations</h3>
              <span className="year">Customer Service • 2022–2024</span>
            </div>
            <ul>
              <li>Handled high-volume client interactions with secure payment handling and PII awareness.</li>
              <li>Built quick issue-resolution habits (radio comms, incident notes, escalation paths).</li>
              <li>Introduced simple SOPs for credit card process checks and device hardening basics.</li>
            </ul>
          </div>
          <div className="panel">
            <div className="panel-head">
              <h3>Lifeguard — Aquatics Facilities</h3>
              <span className="year">Safety • 2020–2022</span>
            </div>
            <ul>
              <li>Maintained vigilant situational awareness; logged incidents with clear, time-boxed reporting.</li>
              <li>Led shift drills; enforced safety policy with calm, clear communication.</li>
              <li>Demonstrated reliability and rapid decision-making under pressure.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="cols">
          <div className="panel">
            <h4>Security & Networking</h4>
            <p className="muted">Suricata, Wireshark, Nmap, Snort, Burp (basics), OPNsense, Graylog, SIEM pipelines, TLS/PKI, VPNs.</p>
          </div>
          <div className="panel">
            <h4>Software & Data</h4>
            <p className="muted">Python, Flask, SQL (T-SQL, SQLite), Pandas, scripting/automation, Docker, Linux.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="panel">
          <p className="muted">
            The fastest way to reach me is via email or LinkedIn. I’m happy to share code, walkthroughs, or a quick demo
            recording for any project.
          </p>
          <div className="cta">
            <a className="btn" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn" href={profile.linkedin} target="_blank">LinkedIn</a>
            <a className="btn" href={profile.github} target="_blank">GitHub</a>
            <a className="btn" href={profile.resumeUrl}>Download Resume (PDF)</a>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}. Built with React + Vite.</footer>

      {/* Modal */}
      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="thumb"><img src={open.thumbnail} alt={open.title} /></div>
            <div className="modal-body">
              <div className="modal-head">
                <div>
                  <h3>{open.title}</h3>
                  <div className="year">{open.year}</div>
                </div>
                <button className="btn" onClick={() => setOpen(null)}>Close</button>
              </div>
              <p className="muted">{open.blurb}</p>
              <ul>
                {open.impact.map((i, idx) => (<li key={idx}>{i}</li>))}
              </ul>
              <div className="tags">{open.tags.map((t) => (<span key={t} className="badge">{t}</span>))}</div>
              <div className="links">
                {open.links?.repo && <a href={open.links.repo} target="_blank">Code</a>}
                {open.links?.demo && <a href={open.links.demo} target="_blank">Demo</a>}
                {open.links?.writeup && <a href={open.links.writeup} target="_blank">Write-up</a>}
                {open.links?.slides && <a href={open.links.slides} target="_blank">Slides</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
