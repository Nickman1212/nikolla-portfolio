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
  const [activeProject, setActiveProject] = useState<null | string>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
  }, []);

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
            Built a comprehensive high-interaction honeypot lab leveraging the T-Pot platform which includes multiple preconfigured honeypots such as Cowrie (SSH/Telnet), Dionaea (malware collection), and Elastic Stack (for log correlation and visualization). The system was deployed on an Ubuntu virtual machine and hardened with customized Suricata rules for deep packet inspection. Network segmentation and port mirroring allowed for simulated east-west and north-south traffic monitoring.
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
                <strong>Screenshot Explanation:</strong> This image showcases the T-Pot web interface and live attacker session logs, demonstrating real-time SSH brute-force attempts being captured and logged. It confirms full operational deployment of all honeypot services.
              </p>
              <p className="muted">
                <strong>Technical Execution:</strong> Used Docker containers for honeypots inside a segmented DMZ. Integrated pfSense firewall and mirrored inbound traffic for Suricata-based IDS inspection. Captured real-world attacker payloads and behavior aligned with MITRE ATT&CK tactics.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Cowrie, Dionaea, Suricata, pfSense, Ubuntu, Logstash, Kibana, Docker, Elasticsearch.
              </p>
              <p className="muted">
                <strong>Objective:</strong> To gather adversary tactics, techniques, and procedures (TTPs), collect malware samples, and improve threat intelligence through central log correlation and actionable SIEM alerts.
              </p>
            </div>
          )}
        </div>

        {/* URL Scanner */}
        <div className="panel">
          <h3>Unified Malicious URL & YouTube Safety Assessment Tool</h3>
          <p>
            Designed and implemented an advanced threat intelligence tool in Python that performs security validation on any given URL, including shortened links and embedded YouTube URLs. The CLI tool queries VirusTotal's multi-engine scanning results for known malicious signatures and further integrates with YouTube's Data API to assess content metadata for suspicious or abusive indicators.
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
              <p className="muted">
                <strong>Screenshot Explanation (1):</strong> This screenshot captures the terminal-based interface scanning a potentially harmful URL. It shows how the tool flags suspicious URLs using VirusTotal results, including detected engines and threat labels (e.g., phishing, trojan).
              </p>
              <img
                src={urlScanImg2}
                alt="YouTube Safe URL Scan"
                style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }}
              />
              <p className="muted">
                <strong>Screenshot Explanation (2):</strong> This demonstrates the YouTube URL validation process where the video metadata, title, and description are parsed to detect social engineering attempts or links to malicious download sites.
              </p>
              <p className="muted">
                <strong>Key Features:</strong> URL format validation, multi-AV engine consensus from VirusTotal, YouTube video metadata analysis, alert severity categorization, and safe/unsafe verdict display. Also logs results for later auditing.
              </p>
              <p className="muted">
                <strong>Security Techniques:</strong> Secure API token storage via environment variables, dynamic rate limiting based on usage quota, API key rotation module, and robust exception/error handling.
              </p>
              <p className="muted">
                <strong>Technologies Used:</strong> Python, VirusTotal API, YouTube Data API v3, OSINT, Requests, Regex, JSON, CLI UX design.
              </p>
              <p className="muted">
                <strong>Purpose:</strong> To empower blue teams and SOC analysts with a reliable tool for automated threat assessment of incoming URLs—detecting phishing lures and malicious redirectors before an incident response is required.
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
