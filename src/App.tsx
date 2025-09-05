import { useEffect, useState } from "react";

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
  const [selectedProject, setSelectedProject] = useState("none");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
        <div>
          <label>
            <input
              type="radio"
              name="project"
              value="none"
              checked={selectedProject === "none"}
              onChange={() => setSelectedProject("none")}
            />
            None
          </label>
          <label>
            <input
              type="radio"
              name="project"
              value="honeypot"
              checked={selectedProject === "honeypot"}
              onChange={() => setSelectedProject("honeypot")}
            />
            Honeypot IDS
          </label>
          <label>
            <input
              type="radio"
              name="project"
              value="future"
              checked={selectedProject === "future"}
              onChange={() => setSelectedProject("future")}
            />
            Other Project
          </label>
        </div>

        {selectedProject === "none" && (
          <p className="muted">Select a project to view more details.</p>
        )}

        {selectedProject === "honeypot" && (
          <div className="panel">
            <h3>Honeypot Intrusion Detection System (IDS)</h3>
            <p>
              Deployed a Dockerized <strong>Cowrie SSH honeypot</strong> on Kali Linux
              with real-time attacker monitoring and command logging.
            </p>
            <ul>
              <li>Mapped attacker behavior using the MITRE ATT&CK framework</li>
              <li>Documented techniques across the cyber kill chain lifecycle</li>
              <li>Captured and analyzed malicious commands via Cowrie logs</li>
              <li>Demonstrated fake SSH access with full session control</li>
            </ul>
            <p className="muted">Supporting files:</p>
            <ul>
              <li>
                <a href="/cowrie-honeypot-report.pdf" download>
                  📄 View PDF Report
                </a>
              </li>
              <li>
                <a href="/cowrie-config-example.vcfg" download>
                  ⚙️ View Sample Config File
                </a>
              </li>
            </ul>
          </div>
        )}

        {selectedProject === "future" && (
          <div className="panel">
            <h3>Placeholder Project</h3>
            <p>Future project content coming soon...</p>
          </div>
        )}
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
