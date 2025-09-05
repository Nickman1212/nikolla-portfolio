import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import maliciousUrlScan from "./assets/malicious-url-scan.jpg";
import youtubeSafeUrlScan from "./assets/youtube-safe-url-scan.jpg";

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

        {/* Honeypot Project */}
        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            Interactive demonstration of deploying Cowrie, Dionaea, and ELK stack to monitor and analyze attacks.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("honeypot")}>View Details</button>
          </div>

          {activeProject === "honeypot" && (
            <div className="project-details">
              <img
                src={honeypotImg}
                alt="Proof of Honeypot Setup"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Project Summary:</strong> Deployed a honeypot system using T-Pot
                (Cowrie, Dionaea), monitored attacker interactions, and visualized logs in
                real-time using the ELK stack. Captured attacker IPs, SSH brute force attempts,
                and malware payloads.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Cowrie, Dionaea, Suricata, Elasticsearch, Kibana,
                Logstash, Ubuntu Server.
              </p>
              <p className="muted">
                <strong>Purpose:</strong> Demonstrate incident detection, threat intelligence, and
                log analysis using high-interaction honeypots aligned with the MITRE ATT&CK
                framework.
              </p>
              <p className="muted">
                <strong>Steps Taken:</strong> Installed T-Pot ISO on a VM, configured networking for
                port exposure, customized Cowrie for SSH honeypot interactions, verified attacker
                payloads, and used Kibana to visualize live logs. Ensured ELK stack was linked to
                honeypot sensors and observed real-world exploit attempts in a controlled lab.
              </p>
            </div>
          )}
        </div>

        {/* Malicious URL Detector */}
        <div className="panel">
          <h3>Malicious URL Detector with VirusTotal API</h3>
          <p>
            Python-based tool that checks if a URL is malicious using VirusTotal's threat intel platform.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("urlscanner")}>View Details</button>
          </div>

          {activeProject === "urlscanner" && (
            <div className="project-details">
              <img
                src={maliciousUrlScan}
                alt="Malicious URL Scan Screenshot"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <img
                src={youtubeSafeUrlScan}
                alt="YouTube Safe URL Scan Screenshot"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Project Summary:</strong> Developed a command-line Python scanner that submits URLs to VirusTotal’s API, retrieves scan results, and classifies URLs based on threat categories.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Python 3, VirusTotal Public API, JSON parsing, Terminal UX.
              </p>
              <p className="muted">
                <strong>Purpose:</strong> Evaluate unknown URLs for phishing or malware using community and vendor-sourced threat intelligence.
              </p>
              <p className="muted">
                <strong>How It Works:</strong> The tool prompts the user to input a URL. It submits the URL to VirusTotal and waits for analysis to complete. Once complete, it fetches categorized results including number of malicious, suspicious, and harmless reports. The tool also logs results in a JSON file for tracking.
              </p>
              <p className="muted">
                <strong>Steps Taken:</strong> Registered for a VirusTotal API key → Wrote Python script to send POST/GET requests → Parsed responses using the `requests` and `json` libraries → Implemented error handling for 400/404 issues → Created test cases using real phishing and safe links → Captured screenshots from terminal for visual proof.
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
