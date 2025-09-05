import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import urlScanImg1 from "./assets/malicious-url-scan.jpg";
import urlScanImg2 from "./assets/youtube-safe-url-scan.jpg";

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
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeProject, setActiveProject] = useState<null | string>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleProject = (project: string) => {
    setActiveProject((prev) => (prev === project ? null : project));
  };

  return (
    <div className="wrap">
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
        <button
          className="btn ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <section className="hero">
        <div className="badges">
          <span className="badge">Based in {profile.location}</span>
          <span className="badge">{profile.availability}</span>
        </div>
        <h1>
          Cybersecurity solutions with clarity, automation, and resilience.
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

      <section id="projects" className="section">
        <h2>Projects</h2>

        {/* Honeypot IDS */}
        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            Deployed T-Pot platform integrating Cowrie (SSH/Telnet honeypot), Dionaea (malware collector), and ELK Stack (Elasticsearch, Logstash, Kibana) on an Ubuntu VM.
            Configured Suricata rules for advanced network-based detection and integrated firewall hardening for east-west and north-south traffic inspection.
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
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Technical Execution:</strong> Configured Docker-based honeypots inside a DMZ, set up port mirroring, captured SSH brute-force attempts, malware hashes, and payloads. Logged attacker TTPs (Tactics, Techniques, Procedures) aligned with MITRE ATT&CK.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Cowrie, Dionaea, Suricata, pfSense, Ubuntu, Logstash, Kibana, Docker, Elasticsearch.
              </p>
              <p className="muted">
                <strong>Objective:</strong> Real-time visibility into adversary behavior, centralized log correlation via ELK, actionable SIEM alerts, and detection of lateral movement or privilege escalation patterns.
              </p>
            </div>
          )}
        </div>

        {/* Malicious URL + YouTube Scan Project */}
        <div className="panel">
          <h3>Advanced Threat Intelligence URL Scanne</h3>
          <p>
            Engineered a Python CLI application that integrates with the VirusTotal API and YouTube Data API v3 to validate URL legitimacy and classify URLs as safe, suspicious, or malicious.
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
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <img
                src={urlScanImg2}
                alt="YouTube Safe URL Scan"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Key Features:</strong> Parses user-provided URLs, cross-references them with VirusTotal’s multi-engine antivirus scans, applies regex validation, and utilizes YouTube’s API to flag suspicious descriptions, keywords, or metadata abuse.
              </p>
              <p className="muted">
                <strong>Security Techniques:</strong> Implements secure API token storage, rate-limiting, error handling, and API key rotation logic. Emphasizes threat intelligence enrichment and real-time phishing detection capabilities.
              </p>
              <p className="muted">
                <strong>Technologies Used:</strong> Python, VirusTotal API, YouTube API, JSON, Requests, Regex, OSINT methodologies.
              </p>
              <p className="muted">
                <strong>Purpose:</strong> Enables blue teams and SOC analysts to proactively scan inbound URLs for malicious indicators before incident escalation.
              </p>
            </div>
          )}
        </div>
      </section>

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

      <section id="resume" className="section">
        <h2>Resume</h2>
        <iframe
          src={profile.resumeUrl}
          style={{ width: "100%", height: "1000px", border: "none" }}
        />
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="panel">
          <p className="muted">
            Email: {profile.email} <br />
            Phone: {profile.phone} <br />
            LinkedIn: <a href={profile.linkedin} target="_blank">{profile.linkedin}</a>
          </p>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </footer>
    </div>
  );
}
