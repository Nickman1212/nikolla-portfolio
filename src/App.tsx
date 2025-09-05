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
        <button className="btn ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> {theme === "dark" ? "☀️ Light" : "🌙 Dark"} </button>
      </header>

      <section className="hero">
        <div className="badges">
          <span className="badge">Based in {profile.location}</span>
          <span className="badge">{profile.availability}</span>
        </div>
        <h1>Cybersecurity solutions with clarity, automation, and resilience.</h1>
        <p className="lead">
          Hands-on cybersecurity projects, clear technical documentation, and smart automation are at the core of how I deliver value.
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
          <p>Deployed high-interaction honeypots using T-Pot to simulate vulnerable systems, capture attacker TTPs, and log real-time telemetry data.</p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("honeypot")}>View Details</button>
          </div>

          {activeProject === "honeypot" && (
            <div className="project-details">
              <img src={honeypotImg} alt="Proof of Honeypot Setup" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <p className="muted">
                <strong>Project Overview:</strong> Built a high-fidelity detection system using <strong>T-Pot</strong> with <strong>Cowrie</strong> and <strong>Dionaea</strong> honeypots to simulate SSH and SMB services. The system was deployed on a virtualized Ubuntu Server and exposed to the internet to observe live threat actor behavior.
              </p>
              <p className="muted">
                <strong>Technical Stack:</strong> T-Pot Framework, Cowrie (SSH Honeypot), Dionaea (Malware Collector), Suricata (Network IDS), Filebeat, Logstash, Elasticsearch, Kibana.
              </p>
              <p className="muted">
                <strong>Steps Taken:</strong>
                <ul>
                  <li>Provisioned Ubuntu VM with dual interfaces for honeypot and SIEM stack isolation.</li>
                  <li>Installed T-Pot ISO, configured Cowrie and Dionaea sensors for high-interaction trapping.</li>
                  <li>Captured SSH brute-force attempts, malware payload drops, and attack signatures.</li>
                  <li>Ingested logs through Filebeat → Logstash → Elasticsearch for full indexing.</li>
                  <li>Visualized dashboards in Kibana: attacker geolocation, port hit frequency, malware hashes.</li>
                </ul>
              </p>
              <p className="muted">
                <strong>Cybersecurity Relevance:</strong> This project aligns with <strong>MITRE ATT&CK tactics: Initial Access (T1078), Execution (T1059), and Collection (T1113)</strong>. Demonstrates log centralization, behavioral threat detection, and early warning telemetry.
              </p>
            </div>
          )}
        </div>

        <div className="panel">
          <h3>Malicious URL Detector using VirusTotal API</h3>
          <p>Developed an automated URL scanning tool in Python that leverages the VirusTotal API to analyze suspicious web links for malware, phishing, and threat indicators.</p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("urlscan")}>View Details</button>
          </div>

          {activeProject === "urlscan" && (
            <div className="project-details">
              <img src={maliciousUrlScan} alt="Malicious URL Scan" style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
              <img src={youtubeSafeUrlScan} alt="YouTube Safe URL Scan" style={{ maxWidth: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
              <p className="muted">
                <strong>Project Overview:</strong> Built a command-line tool that accepts a user-supplied URL and submits it to VirusTotal's API for behavioral and signature-based analysis. Parses JSON responses to extract results from over 70+ threat intelligence vendors.
              </p>
              <p className="muted">
                <strong>Technical Stack:</strong> Python, VirusTotal API v3, JSON, datetime, Requests, OS module, CLI I/O.
              </p>
              <p className="muted">
                <strong>Steps Taken:</strong>
                <ul>
                  <li>Created a Python virtual environment and installed dependencies (`requests`).</li>
                  <li>Registered and obtained a private API key from VirusTotal platform.</li>
                  <li>Built logic to submit a URL, retrieve scan_id, poll analysis status, and extract verdicts.</li>
                  <li>Displayed results for <strong>malicious, suspicious, undetected</strong> categories per vendor.</li>
                  <li>Logged outputs with UTC timestamps into a structured JSON file (scan_log.json).</li>
                </ul>
              </p>
              <p className="muted">
                <strong>Cybersecurity Relevance:</strong> Demonstrates URL-based threat hunting, secure API integration, and log retention practices. This utility can be embedded into SIEM pipelines or email security gateways. It supports <strong>Threat Intelligence Enrichment, Malware Detection (T1204), and Phishing Analysis (T1566)</strong>.
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
        <iframe src={profile.resumeUrl} style={{ width: "100%", height: "1000px", border: "none" }} />
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
