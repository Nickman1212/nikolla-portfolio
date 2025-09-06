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
            Dionaea (malware collector), and ELK Stack (Elasticsearch, Logstash,
            Kibana) on an Ubuntu VM. Configured Suricata rules for advanced
            network-based detection and integrated firewall hardening for
            east-west and north-south traffic inspection.
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
                <strong>Screenshot explanation:</strong> Kibana dashboard showing Cowrie SSH brute-force attempts,
                Suricata alerts, and attacker IP geolocation.
              </p>

              <p className="muted">
                <strong>Step by Step:</strong>
              </p>
              <ul className="muted">
                <li>Isolated a DMZ in pfSense; forwarded honeypot ports only.</li>
                <li>Deployed T-Pot with Cowrie + Dionaea honeypots.</li>
                <li>Captured brute-force credentials, commands, and payload hashes.</li>
                <li>Ran Suricata with community + custom IDS rules.</li>
                <li>Shipped events into ELK and built Kibana dashboards.</li>
              </ul>

              <p className="muted">
                <strong>Technical Execution:</strong> Configured Docker-based honeypots inside a DMZ,
                set up port mirroring, captured SSH brute-force attempts, malware hashes, and payloads.
                Logged attacker TTPs aligned with MITRE ATT&CK.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Cowrie, Dionaea, Suricata, pfSense, Ubuntu, Logstash,
                Kibana, Docker, Elasticsearch.
              </p>
              <p className="muted">
                <strong>Objective:</strong> Real-time visibility into adversary behavior, centralized
                log correlation via ELK, actionable SIEM alerts, and detection of lateral movement.
              </p>
              <p className="muted">
                <strong>Career & Learning Impact:</strong> Strengthened my ability to design segmented
                network environments and analyze adversary behavior using SIEM platforms. Gained
                practical experience with deception technology and improved detection engineering
                skills directly applicable to SOC and threat hunting roles.
              </p>
            </div>
          )}
        </div>

        {/* Malicious URL + YouTube Scan Project */}
        <div className="panel">
          <h3>Unified Malicious URL & YouTube Safety Assessment Tool</h3>
          <p>
            Engineered a Python CLI application that integrates with the
            VirusTotal API and YouTube Data API v3 to validate URL legitimacy
            and classify URLs as safe, suspicious, or malicious.
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
              <p className="muted">
                <strong>Screenshot explanation:</strong> CLI scan of a suspicious URL flagged by VirusTotal
                with detections, risky TLD, and suspicious keywords.
              </p>

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
                <strong>Screenshot explanation:</strong> CLI scan of a benign YouTube link showing no detections,
                normal channel metadata, and safe classification.
              </p>

              <p className="muted">
                <strong>Step by Step:</strong>
              </p>
              <ul className="muted">
                <li>Validated and normalized URL inputs with regex.</li>
                <li>Queried VirusTotal for multi-engine detection results.</li>
                <li>Applied heuristics: homoglyphs, punycode, TLD risk scoring.</li>
                <li>Queried YouTube API for video/channel metadata.</li>
                <li>Generated output in both human-readable and JSON formats.</li>
              </ul>

              <p className="muted">
                <strong>Technical Execution:</strong> Integrated VirusTotal and YouTube APIs, applied regex
                validation and heuristics, and provided SOC analysts with automated link triage.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Python, VirusTotal API, YouTube API, Regex, Requests, JSON.
              </p>
              <p className="muted">
                <strong>Objective:</strong> Provide SOC analysts a quick tool to vet URLs and YouTube links
                for malicious indicators before escalation.
              </p>
              <p className="muted">
                <strong>Career & Learning Impact:</strong> Improved my Python automation and API integration
                skills while learning how OSINT and reputation analysis support threat intelligence workflows.
                Prepared me to build practical triage tools and sharpened my ability to spot phishing and
                malicious link campaigns.
              </p>
            </div>
          )}
        </div>

        {/* Phishing Email Detector */}
        <div className="panel">
          <h3>Phishing Email Detector with ML & SIEM Integration</h3>
          <p>
            Built a phishing detection pipeline in Kali Linux: parsed raw email
            files, engineered security features, trained a machine learning
            model, exposed a Flask API for classification, and integrated JSON
            logs with SIEM platforms for real-time monitoring.
          </p>
          <div className="project-buttons">
            <button onClick={() => toggleProject("phishing")}>View Details</button>
            {activeProject === "phishing" && (
              <button onClick={() => setActiveProject(null)}>Close</button>
            )}
          </div>
          {activeProject === "phishing" && (
            <div className="project-details">
              <img
                src={phishImg1}
                alt="Phishing Detector API in Action"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              />
              <p className="muted">
                <strong>Screenshot explanation:</strong> API tested with cURL: spam and ham emails classified,
                JSON shows prediction with signals like DMARC fail, homoglyph flag, and URL count.
              </p>

              <img
                src={phishImg2}
                alt="Phishing Logs ready for SIEM ingestion"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  marginTop: "1rem",
                }}
              />
              <p className="muted">
                <strong>Screenshot explanation:</strong> Structured JSON logs (NDJSON) with request_id, IP,
                subject, prediction, and all signals — SIEM-ready for ingestion.
              </p>

              <p className="muted">
                <strong>Step by Step:</strong>
              </p>
              <ul className="muted">
                <li>Parsed raw <code>.eml</code> files with mailparser.</li>
                <li>Extracted signals: SPF/DKIM/DMARC, homoglyphs, punycode, risky attachments.</li>
                <li>Vectorized subject/body with TF-IDF and combined features.</li>
                <li>Trained LinearSVC model and saved with joblib.</li>
                <li>Served predictions via Flask API endpoint.</li>
                <li>Logged structured JSON (NDJSON) for SIEM pipelines.</li>
              </ul>

              <p className="muted">
                <strong>Technical Execution:</strong> Created end-to-end ML pipeline from parsing to serving,
                combining security headers with text features, exposed via Flask, and integrated into SIEM workflows.
              </p>
              <p className="muted">
                <strong>Tools Used:</strong> Python, Flask, scikit-learn, Pandas, Regex, ELK Stack.
              </p>
              <p className="muted">
                <strong>Objective:</strong> Automate phishing detection with an explainable ML pipeline,
                deliver SOC-ready API endpoints, and provide SIEM-friendly logs.
              </p>
              <p className="muted">
                <strong>Career & Learning Impact:</strong> Reinforced my understanding of SPF/DKIM/DMARC and how
                they factor into phishing detection. Building/serving the model taught me to bridge cybersecurity
                and data science, while the SIEM logging improved my operational security skills for enterprise
                environments.
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
