import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import urlScan1 from "./assets/malicious_url_scan.jpg";
import urlScan2 from "./assets/youtube_safe_url_scan.jpg";

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

  const closeProject = () => setActiveProject(null);

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
        <h1>Cybersecurity solutions with clarity, automation, and resilience.</h1>
        <p className="lead">
          Hands-on cybersecurity projects, clear technical documentation, and
          smart automation are at the core of how I deliver value.
        </p>
        <div className="cta">
          <a className="btn primary" href="#skills">View Skills</a>
          <a className="btn" href="#resume">Resume</a>
          <a className="btn" href={profile.linkedin} target="_blank">LinkedIn</a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            High-interaction honeypot deployment using Cowrie and Dionaea, with real-time analysis via ELK Stack.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("honeypot")}>View Details</button>
            {activeProject === "honeypot" && <button onClick={closeProject}>Close</button>}
          </div>

          {activeProject === "honeypot" && (
            <div className="project-details">
              <img src={honeypotImg} alt="Honeypot Screenshot" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <p className="muted">
                <strong>Project Summary:</strong> Designed a high-interaction honeypot lab using T-Pot (includes Cowrie, Dionaea) on a hardened Ubuntu server.
                Configured firewalls, logging pipelines, and monitored live attacker behavior with Kibana visualizations.
              </p>
              <p className="muted">
                <strong>Key Features:</strong> SSH brute-force logging, malware payload capture, real-time SIEM dashboarding.
              </p>
              <p className="muted">
                <strong>Keywords:</strong> Honeypot, ELK Stack, Cyber Threat Intelligence, MITRE ATT&CK, Syslog, SIEM, Logstash, SSH Logging, IDS.
              </p>
            </div>
          )}
        </div>

        <div className="panel">
          <h3>Malicious URL Scanner (VirusTotal API)</h3>
          <p>
            Python-based CLI tool that integrates with VirusTotal’s public API to scan URLs and classify threats based on 70+ antivirus engines.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("urlscanner")}>View Details</button>
            {activeProject === "urlscanner" && <button onClick={closeProject}>Close</button>}
          </div>

          {activeProject === "urlscanner" && (
            <div className="project-details">
              <img src={urlScan1} alt="Malicious URL Scan Screenshot" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <img src={urlScan2} alt="YouTube Scan Screenshot" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <p className="muted">
                <strong>Project Summary:</strong> Developed a Python CLI app that programmatically submits suspicious URLs to VirusTotal for analysis.
                Results are parsed and summarized locally, then saved to a secure JSON log for auditing and traceability.
              </p>
              <p className="muted">
                <strong>Tech Stack:</strong> Python, requests, VirusTotal API, JSON, CLI.
              </p>
              <p className="muted">
                <strong>Security Techniques:</strong> Threat Intelligence Automation, Public API Integration, Response Normalization, Logging & Artifact Handling.
              </p>
              <p className="muted">
                <strong>Keywords:</strong> VirusTotal, URL Scanner, Threat Intelligence, API Security, Malware Classification, SOC Automation, IOC Enrichment.
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
