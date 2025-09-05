import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import maliciousUrlScanImg from "./assets/malicious-url-scan.jpg";
import youtubeSafeUrlScanImg from "./assets/youtube-safe-url-scan.jpg";

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
          <a className="btn primary" href="#skills">View Skills</a>
          <a className="btn" href="#resume">Resume</a>
          <a className="btn" href={profile.linkedin} target="_blank">LinkedIn</a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        {/* Honeypot IDS */}
        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            Enterprise-grade honeypot solution simulating vulnerable environments to attract and log malicious traffic. Full-stack deployment leveraging MITRE ATT&CK for behavioral mapping.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("honeypot")}>View Details</button>
            {activeProject === "honeypot" && <button onClick={() => setActiveProject(null)}>Close</button>}
          </div>

          {activeProject === "honeypot" && (
            <div className="project-details">
              <img
                src={honeypotImg}
                alt="Proof of Honeypot Setup"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Architecture:</strong> Utilized T-Pot platform with Cowrie (SSH/telnet) and Dionaea (malware collection) honeypots hosted on Ubuntu Server. Configured Suricata IDS for deep packet inspection and integrated Kibana dashboards for real-time attack visibility.
              </p>
              <p className="muted">
                <strong>Key Features:</strong> Captured attacker IPs, brute-force login attempts, and malware payloads. Leveraged Elasticsearch and Logstash for log indexing and correlation.
              </p>
              <p className="muted">
                <strong>Outcomes:</strong> Gained insights into adversary TTPs (Tactics, Techniques, and Procedures), validated firewall efficacy, and visualized intrusion patterns. Mapped results to MITRE ATT&CK matrix.
              </p>
              <p className="muted">
                <strong>Security Concepts:</strong> Network Forensics • Threat Intelligence • SIEM • IDS/IPS • Behavioral Analysis
              </p>
            </div>
          )}
        </div>

        {/* Malicious URL Scanner */}
        <div className="panel">
          <h3>Malicious URL Detection Tool (VirusTotal API)</h3>
          <p>
            CLI-based Python utility to scan URLs in real-time against VirusTotal threat intelligence feeds. Designed for proactive URL screening and phishing site detection.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("malicious")}>View Details</button>
            {activeProject === "malicious" && <button onClick={() => setActiveProject(null)}>Close</button>}
          </div>

          {activeProject === "malicious" && (
            <div className="project-details">
              <img
                src={maliciousUrlScanImg}
                alt="Malicious URL Detection Tool Screenshot"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Tool Functionality:</strong> Accepts user-submitted URLs, queries VirusTotal API, parses JSON response, and flags results if known malicious activity is detected.
              </p>
              <p className="muted">
                <strong>Engineering Stack:</strong> Python, requests library, dotenv for API key management. Implemented error handling for HTTP response codes and malformed inputs.
              </p>
              <p className="muted">
                <strong>Cybersecurity Relevance:</strong> Demonstrates safe browsing initiatives, external threat validation, and automation of Open Threat Intelligence (OTI) integration. Supports principles of Zero Trust URL access.
              </p>
              <p className="muted">
                <strong>Security Concepts:</strong> Phishing Detection • Threat Feeds • API Security • Secure Coding • Python Scripting
              </p>
            </div>
          )}
        </div>

        {/* Safe YouTube Scanner */}
        <div className="panel">
          <h3>YouTube Safe URL Checker</h3>
          <p>
            Python script to assess safety and legitimacy of YouTube URLs, checking against known redirects and suspicious domains. Implements user input sanitation and response validation.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("youtube")}>View Details</button>
            {activeProject === "youtube" && <button onClick={() => setActiveProject(null)}>Close</button>}
          </div>

          {activeProject === "youtube" && (
            <div className="project-details">
              <img
                src={youtubeSafeUrlScanImg}
                alt="YouTube Safe URL Scanner Screenshot"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Functionality:</strong> Parses YouTube links, removes tracking parameters, and ensures redirection domains are valid. Designed for users consuming content in enterprise environments.
              </p>
              <p className="muted">
                <strong>Security Utility:</strong> Prevents shadow redirect abuse and misleading embedded content. Excellent candidate for browser automation or endpoint protection enhancement.
              </p>
              <p className="muted">
                <strong>Security Concepts:</strong> Content Filtering • URL Validation • Input Sanitization • Python • Privacy by Design
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
