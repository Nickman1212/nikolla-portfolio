import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import urlScanImg1 from "./assets/malicious-url-scan.jpg";
import urlScanImg2 from "./assets/youtube-safe-url-scan.jpg";
import phishImg1 from "./assets/phish.jpg";
import phishImg2 from "./assets/phish2.jpg";

const profile = {
  name: "Nikolla Nickolov",
  tagline: "Cybersecurity • Systems • Applied Data",
  location: "Tampa Bay, FL",
  email: "Nickman477@gmail.com",
  phone: "727-307-8538",
  linkedin: "https://www.linkedin.com/in/nikolla-nickolov-1a46a2290/",
  resumeUrl: "/NIKOLLA_NICKOLOV.pdf",
  headshot: "https://avatars.githubusercontent.com/u/9919?s=200",
  availability: "Open to Cybersecurity / SecOps / IT Ops roles (onsite/hybrid).",
};

export default function App() {
  const [activeProject, setActiveProject] = useState<null | string>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

  const toggleProject = (project: string) => {
    setActiveProject((prev) => (prev === project ? null : project));
  };

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
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="badges">
          <span className="badge">Based in {profile.location}</span>
          <span className="badge">{profile.availability}</span>
        </div>
        <h1>
          Applied Cybersecurity and IT: Threat Detection, Automation, and
          Incident Response
        </h1>
        <p className="lead">
          Hands-on cybersecurity projects, clear technical documentation, and
          smart automation are at the core of how I deliver value.
        </p>
        <div className="cta">
          <a className="btn primary" href="#skills">
            View Skills
          </a>
          <a className="btn" href="#resume">
            Resume
          </a>
          <a className="btn" href={profile.linkedin} target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        {/* Honeypot IDS */}
        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            Deployed T-Pot platform integrating Cowrie (SSH/Telnet honeypot),
            Dionaea (malware collector), and ELK Stack on Ubuntu. Configured
            Suricata rules and firewall hardening for east-west and north-south
            inspection.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("honeypot")}>View Details</button>
            {activeProject === "honeypot" && (
              <button onClick={() => setActiveProject(null)}>Close</button>
            )}
          </div>
          {activeProject === "honeypot" && (
            <div className="project-details">
              <img
                src={honeypotImg}
                alt="Proof of Honeypot Setup"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              />
              <p className="muted">
                <strong>Technical Execution:</strong> Dockerized honeypots in a DMZ, port
                mirroring, captured SSH brute-force attempts & malware payloads.
                Logged attacker TTPs aligned to MITRE ATT&CK.
              </p>
              <p className="muted">
                <strong>Tools:</strong> Cowrie, Dionaea, Suricata, pfSense, Ubuntu,
                Logstash, Kibana, Docker, Elasticsearch.
              </p>
            </div>
          )}
        </div>

        {/* Malicious URL + YouTube Scan Project */}
        <div className="panel">
          <h3>Unified Malicious URL & YouTube Safety Assessment Tool</h3>
          <p>
            Python CLI integrating VirusTotal and YouTube Data API v3 to validate URL
            legitimacy and classify URLs as safe, suspicious, or malicious.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("urlscanner")}>View Details</button>
            {activeProject === "urlscanner" && (
              <button onClick={() => setActiveProject(null)}>Close</button>
            )}
          </div>
          {activeProject === "urlscanner" && (
            <div className="project-details">
              <img
                src={urlScanImg1}
                alt="Malicious URL Detection"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              />
              <img
                src={urlScanImg2}
                alt="YouTube Safe URL Scan"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              />
              <p className="muted">
                <strong>Features:</strong> Regex validation, VirusTotal
                multi-engine enrichment, YouTube metadata checks, rate limiting,
                and secure token handling.
              </p>
              <p className="muted">
                <strong>Tech:</strong> Python, VirusTotal API, YouTube API, JSON, Requests,
                Regex, OSINT.
              </p>
            </div>
          )}
        </div>

        {/* Phishing Email Detector */}
        <div className="panel">
          <h3>Phishing Email Detector (Parser → Features → ML → API → SIEM)</h3>
          <p>
            End-to-end phishing detection in Kali Linux: parsed raw <code>.eml</code>{" "}
            files, engineered security features (SPF/DKIM/DMARC, homoglyph/punycode,
            suspicious TLD ratios, risky attachments), trained a scikit-learn SVM,
            exposed a Flask API for verdicts, and generated SIEM-ready NDJSON logs for
            ELK/Graylog.
          </p>

          <div className="badges" style={{ marginTop: 8 }}>
            <span className="badge">MITRE ATT&amp;CK: T1566.*</span>
            <span className="badge">SPF/DKIM/DMARC</span>
            <span className="badge">Homoglyph/Punycode</span>
            <span className="badge">ELK / Graylog</span>
            <span className="badge">Flask API</span>
            <span className="badge">scikit-learn (SVM)</span>
          </div>

          <div className="project-buttons">
            <button onClick={() => toggleProject("phishing")}>View Details</button>
            {activeProject === "phishing" && (
              <button onClick={() => setActiveProject(null)}>Close</button>
            )}
          </div>

          {activeProject === "phishing" && (
            <div className="project-details">
              <div className="grid-2">
                <img
                  src={phishImg1}
                  alt="API classifying spam and ham from .eml via curl"
                />
                <img
                  src={phishImg2}
                  alt="SIEM-ready JSON logs (NDJSON) with signals and metadata"
                />
              </div>

              <p className="muted">
                <strong>Pipeline:</strong> <em>parse_eml.py</em> → <em>featurize.py</em> →{" "}
                <em>train.py</em> (LinearSVC) → <em>api.py</em> (Flask) →{" "}
                <em>logging_setup.py</em> (NDJSON logs).
              </p>
              <p className="muted">
                <strong>Signals:</strong> DMARC/SPF/DKIM, from/reply mismatch, homoglyphs,
                punycode, URL count & TLD risk, risky attachment extensions.
              </p>
              <p className="muted">
                <strong>Ops/SIEM:</strong> Each prediction logs request_id, client_ip,
                user_agent, subject/from, prediction, and signals—ingest-ready for
                ELK/Graylog/Splunk.
              </p>

              <div className="panel" style={{ marginTop: 12 }}>
                <h4 style={{ marginTop: 0 }}>API usage (demo)</h4>
                <pre className="code">{`# Spam example
curl -F "file=@samples/spam/test2.eml" http://127.0.0.1:5000/predict

# Ham example
curl -F "file=@samples/ham/test1.eml" http://127.0.0.1:5000/predict`}</pre>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="panel">
          <h4>Cybersecurity & Networking</h4>
          <ul>
            <li>Nmap, Masscan (network scanning)</li>
            <li>Wireshark, tcpdump (packet analysis)</li>
            <li>Suricata, Snort (IDS/IPS)</li>
            <li>OPNsense, pfSense, iptables (firewalls)</li>
            <li>Nessus, OpenVAS (vulnerability scanning)</li>
            <li>Metasploit, Hydra, SQLMap (exploitation)</li>
            <li>Burp Suite, OWASP ZAP, DVWA (web app security)</li>
          </ul>

          <h4>Programming & Automation</h4>
          <ul>
            <li>Python, Flask (automation & web apps)</li>
            <li>C, C#, JavaScript / Node.js</li>
            <li>Bash, PowerShell scripting</li>
            <li>SQL: Microsoft SQL Server, SQLite, MySQL</li>
          </ul>

          <h4>Systems & Platforms</h4>
          <ul>
            <li>Linux: Kali, Parrot OS, Ubuntu</li>
            <li>Windows Server: AD, DHCP, DNS, Group Policy</li>
            <li>Virtualization: VMware, VirtualBox, Hyper-V</li>
            <li>AWS (IAM, EC2, S3), Azure Fundamentals</li>
          </ul>

          <h4>Security Concepts</h4>
          <ul>
            <li>PKI, TLS/SSL, Key Exchange</li>
            <li>Kerberos, LDAP, MFA</li>
            <li>Graylog, ELK Stack (SIEM & logging)</li>
            <li>Incident Response workflows</li>
            <li>Encryption: AES, RSA, MD5/SHA hashing</li>
          </ul>
        </div>
      </section>

      {/* Resume Embedded */}
      <section id="resume" className="section">
        <h2>Resume</h2>
        <iframe
          src={profile.resumeUrl}
          style={{ width: "100%", height: "1000px", border: "none" }}
        />
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="panel">
          <p className="muted">
            Email: {profile.email} <br />
            Phone: {profile.phone} <br />
            LinkedIn:{" "}
            <a href={profile.linkedin} target="_blank">
              {profile.linkedin}
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </footer>
    </div>
  );
}

/* ========== CSS Reset + Base ========== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --bg-1: #0b1020;
  --bg-2: #0f172a;
  --panel: rgba(255, 255, 255, 0.05);
  --panel-stroke: rgba(255, 255, 255, 0.08);
  --text: #e5e7eb;
  --muted: #9ca3af;
  --brand: #60a5fa;
  --brand-2: #22d3ee;
  --accent: #a78bfa;
  --success: #34d399;
  --danger: #f87171;

  --radius: 16px;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

html,
body,
#root {
  height: 100%;
}

html[data-theme="dark"],
body {
  background:
    radial-gradient(1200px 800px at 80% -10%, #172554 0%, transparent 60%),
    radial-gradient(1000px 600px at -10% 20%, #0ea5e9 0%, transparent 55%),
    linear-gradient(135deg, var(--bg-1), var(--bg-2));
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
    "Segoe UI Emoji";
  line-height: 1.5;
  margin: 0;
}

/* Subtle grid overlay */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(transparent 95%, rgba(255, 255, 255, 0.06) 96%),
    linear-gradient(90deg, transparent 95%, rgba(255, 255, 255, 0.06) 96%);
  background-size: 24px 24px, 24px 24px;
  pointer-events: none;
  opacity: 0.25;
}

/* ========== Layout Wrappers ========== */
.wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

/* ========== Topbar ========== */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid var(--panel-stroke);
  border-radius: var(--radius);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--panel-stroke);
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.2px;
}

.brand-sub {
  color: var(--muted);
  font-size: 13px;
}

.nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.nav a {
  color: var(--text);
  text-decoration: none;
  opacity: 0.9;
}

.nav a:hover {
  opacity: 1;
  color: var(--brand-2);
}

/* ========== Hero ========== */
.hero {
  margin-top: 28px;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  padding: 60px 24px;

  background:
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(15, 23, 42, 0.6)
    ),
    url("./assets/hero-bg.jpg") center/cover no-repeat;

  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: var(--shadow);
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    1000px 600px at 70% -20%,
    rgba(255, 255, 255, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.hero .badges {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.badge {
  background: linear-gradient(
    180deg,
    rgba(96, 165, 250, 0.25),
    rgba(34, 211, 238, 0.25)
  );
  color: #e2e8f0;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 12px;
  letter-spacing: 0.2px;
}

.hero h1 {
  margin: 6px 0 10px;
  font-size: clamp(32px, 6vw, 48px);
  line-height: 1.2;
}

.lead {
  color: #d1d5db;
  max-width: 70ch;
}

.cta {
  display: flex;
  gap: 12px;
  margin-top: 18px;
  flex-wrap: wrap;
}

/* ========== Buttons ========== */
.btn {
  appearance: none;
  border: 1px solid var(--panel-stroke);
  border-radius: 10px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  cursor: pointer;
  transition: transform 0.08s ease, background 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn.primary {
  border-color: rgba(96, 165, 250, 0.45);
  background: linear-gradient(
    180deg,
    rgba(96, 165, 250, 0.18),
    rgba(34, 211, 238, 0.18)
  );
}

.btn.ghost {
  background: transparent;
}

/* ========== Sections & Panels ========== */
.section {
  margin-top: 36px;
  position: relative;
}

#projects::after {
  content: "";
  position: absolute;
  top: -12px;
  right: 12px;
  width: 86px;
  height: 86px;
  background: url("./assets/decor-laptop.png") center/contain no-repeat;
  opacity: 0.25;
  pointer-events: none;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
}

.section h2 {
  font-size: 22px;
  letter-spacing: 0.4px;
  margin: 0 0 12px 2px;
  color: #e2e8f0;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--panel-stroke);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: var(--shadow);
  margin-bottom: 16px;
}

.project-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
}

.project-details {
  margin-top: 12px;
  color: #cbd5e1;
}

.project-details .muted {
  color: var(--muted);
}

.project-details img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}

/* simple grid for two images */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
@media (max-width: 720px) {
  .grid-2 { grid-template-columns: 1fr; }
}

/* code block */
.code {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid var(--panel-stroke);
  border-radius: 10px;
  padding: 12px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #e5e7eb;
}

/* ========== Resume iframe ========== */
#resume iframe {
  background: rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  border: 1px solid var(--panel-stroke);
}

/* ========== Footer ========== */
.footer {
  margin: 28px 0 12px;
  color: var(--muted);
  text-align: center;
}

/* ========== Responsive tweaks ========== */
@media (max-width: 720px) {
  .topbar {
    flex-wrap: wrap;
    gap: 10px;
  }
  .hero {
    padding: 42px 18px;
  }
  #projects::after {
    display: none;
  }
}
