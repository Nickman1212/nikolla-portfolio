import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import urlScanImg from "./assets/Malicious URL Scan.JPG";
import ytSafeImg from "./assets/YouTube Safe URL Scan.JPG";

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
        <button
          className="btn ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* Hero */}
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

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            Deployed a high-interaction honeypot using T-Pot with Cowrie and Dionaea to simulate production-level attack surfaces.
            The setup captured real-world adversary behavior such as SSH brute-force attempts, malware drops, and unauthorized shell interactions.
            ELK stack (Elasticsearch, Logstash, Kibana) integration allowed for live log ingestion, correlation, and threat visualization.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("honeypot")}>View Details</button>
            {activeProject === "honeypot" && (
              <button onClick={() => toggleProject("honeypot")} className="btn ghost">Close</button>
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
                <strong>Key Implementation Steps:</strong>
                Installed T-Pot on a hardened Ubuntu VM; configured Suricata rules for inline detection;
                deployed Cowrie SSH honeypot to emulate shell environments and logged attacker commands;
                set up Dionaea to attract and log malicious binaries targeting SMB, HTTP, and FTP.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Cowrie, Dionaea, Suricata, Elasticsearch, Kibana,
                Logstash, Ubuntu Server, MITRE ATT&CK Framework
              </p>
              <p className="muted">
                <strong>Security Outcomes:</strong>
                Demonstrated incident response readiness, improved detection engineering using real-world attacker TTPs,
                and enhanced visibility through actionable threat intelligence dashboards.
              </p>
            </div>
          )}
        </div>

        <div className="panel">
          <h3>Malicious URL Threat Detection Tool</h3>
          <p>
            Built a Python-based CLI tool that integrates with the VirusTotal API to detect phishing and malware URLs in real-time.
            The application performs URL submission, polling, and structured output analysis using RESTful queries.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("url")}>View Details</button>
            {activeProject === "url" && (
              <button onClick={() => toggleProject("url")} className="btn ghost">Close</button>
            )}
          </div>

          {activeProject === "url" && (
            <div className="project-details">
              <img
                src={urlScanImg}
                alt="Malicious URL Scan Screenshot"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <img
                src={ytSafeImg}
                alt="YouTube Safe URL Scan Screenshot"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Key Implementation Steps:</strong>
                Registered and generated an API key from VirusTotal. Created a virtual environment and installed dependencies (e.g., `requests`).
                Built out Python logic to POST user-provided URLs for scanning and poll until analysis is complete.
                Extracted malicious/suspicious vendor verdicts and formatted the output into a readable security report.
              </p>
              <p className="muted">
                <strong>Tools & Skills:</strong> Python, REST API integration, VirusTotal API, JSON parsing, CLI app development,
                real-time URL reputation scanning, output logging (scan_log.json), secure coding practices.
              </p>
              <p className="muted">
                <strong>Security Relevance:</strong>
                Demonstrates ability to automate threat intelligence ingestion, interact with external APIs, perform IOC validation,
                and operationalize detection workflows for phishing and malware infrastructure.
              </p>
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
