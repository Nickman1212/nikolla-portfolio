import { useEffect, useState } from "react";
import honeypotImg from "./assets/honeypot.jpg";
import maliciousImg from "./assets/malicious-url-scan.jpg";
import youtubeImg from "./assets/youtube-safe-url-scan.jpg";

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

  const openProject = (project: string) => {
    setActiveProject(project);
  };

  const closeProject = () => {
    setActiveProject(null);
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
        <button className="btn ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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

        {/* Honeypot IDS Project */}
        <div className="panel">
          <h3>Honeypot-Based Intrusion Detection System (IDS)</h3>
          <p>
            Full-stack deployment of deceptive high-interaction honeypots (Cowrie, Dionaea) with centralized SIEM analytics via the ELK Stack.
          </p>
          <div className="project-buttons">
            {activeProject !== "honeypot" ? (
              <button onClick={() => openProject("honeypot")}>View Details</button>
            ) : (
              <button onClick={closeProject}>Close</button>
            )}
          </div>

          {activeProject === "honeypot" && (
            <div className="project-details">
              <img src={honeypotImg} alt="Honeypot Screenshot" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <p className="muted">
                <strong>Project Overview:</strong> This high-interaction Honeypot IDS emulates vulnerable services using Cowrie (SSH) and Dionaea (SMB/HTTP) to lure real-world attackers. Attacker telemetry is captured, normalized, and ingested into a centralized ELK stack (Elasticsearch, Logstash, Kibana) for real-time forensic analysis and visualization.
              </p>
              <p className="muted">
                <strong>Deployment Workflow:</strong> 
                1. Configured Ubuntu Server with Docker Compose and T-Pot Framework. 
                2. Deployed Cowrie & Dionaea containers on isolated network bridge. 
                3. Set up centralized ELK logging (Logstash parsers, Kibana dashboards).
                4. Captured attacker TTPs (IP, username/password combos, malware payloads).
                5. Enriched threat intelligence via custom Suricata rules and GeoIP tagging.
              </p>
              <p className="muted">
                <strong>Skills Demonstrated:</strong> Blue Team defense, Network Threat Monitoring, Log Analysis, Security Automation, Docker Networking, MITRE ATT&CK Alignment.
              </p>
            </div>
          )}
        </div>

        {/* Secure URL Scanner (Combined Project) */}
        <div className="panel">
          <h3>Secure URL Scanner (Malicious + YouTube Safe URL Tool)</h3>
          <p>
            Command-line and Flask-based tools to analyze and classify URLs for malicious indicators using the VirusTotal API and YouTube Data API.
          </p>
          <div className="project-buttons">
            {activeProject !== "urlscanner" ? (
              <button onClick={() => openProject("urlscanner")}>View Details</button>
            ) : (
              <button onClick={closeProject}>Close</button>
            )}
          </div>

          {activeProject === "urlscanner" && (
            <div className="project-details">
              <img src={maliciousImg} alt="Malicious URL Scan" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <img src={youtubeImg} alt="YouTube Safe URL Scan" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: "1rem" }} />
              <p className="muted">
                <strong>Project Overview:</strong> This toolset detects malicious or deceptive URLs in real-time by integrating VirusTotal threat intelligence and YouTube content validation. It includes a CLI and Flask web interface for broader accessibility.
              </p>
              <p className="muted">
                <strong>Implementation Details:</strong> 
                1. Developed Python scripts to call VirusTotal API and analyze threat scores across multiple AV engines. 
                2. Integrated YouTube Data API to validate channel authenticity, keyword usage, and spammy patterns. 
                3. Constructed Flask front-end with dynamic URL scanning capability and threat score outputs. 
                4. Added error handling, input sanitization, and response caching.
              </p>
              <p className="muted">
                <strong>Skills Demonstrated:</strong> Secure API integration, Threat Intelligence Automation, Flask development, JSON parsing, URL sanitization, Cyber Threat Intelligence (CTI), Security Tooling.
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
