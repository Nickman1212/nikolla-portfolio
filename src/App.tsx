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
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
        <p className="muted">
          Select a project below to view detailed documentation directly.
        </p>
        <div className="panel">
          <label>
            <input
              type="radio"
              name="project"
              onChange={() => setActiveProject("honeypot")}
              checked={activeProject === "honeypot"}
            />
            Honeypot-Based IDS (Cowrie + Docker + MITRE ATT&CK)
          </label>
        </div>

        {activeProject === "honeypot" && (
          <div className="project-details">
            <h3>🛡️ Honeypot-Based Intrusion Detection System</h3>
            <p>
              This project demonstrates the deployment of a high-interaction SSH honeypot using <strong>Cowrie</strong> inside a Docker container on Kali Linux.
              Logs were collected to analyze attacker behavior and mapped to MITRE ATT&CK tactics such as <em>Initial Access</em>, <em>Execution</em>, and <em>Persistence</em>.
            </p>
            <h4>Key Features:</h4>
            <ul>
              <li>Dockerized Cowrie honeypot exposed on ports 2222/2223</li>
              <li>Captured attacker sessions with simulated filesystem interaction</li>
              <li>Mapped adversary techniques to MITRE ATT&CK Matrix</li>
              <li>Integrated with Cyber Kill Chain lifecycle for strategic defense insights</li>
            </ul>
            <h4>MITRE ATT&CK Tactics Observed:</h4>
            <ul>
              <li><strong>Initial Access</strong> - T1190: Exploit Public-Facing Application</li>
              <li><strong>Execution</strong> - T1059: Command and Scripting Interpreter</li>
              <li><strong>Persistence</strong> - T1547: Boot or Logon Autostart Execution</li>
            </ul>
            <h4>Kill Chain Mapping:</h4>
            <ol>
              <li>Reconnaissance: Nmap/Masscan scan detected</li>
              <li>Weaponization & Delivery: SSH brute force login attempts</li>
              <li>Exploitation: Commands executed in fake shell</li>
              <li>Installation: Simulated malware upload blocked</li>
              <li>Command & Control: Attempts at remote connection logged</li>
            </ol>
            <h4>Read Me (For Recruiters):</h4>
            <p className="muted">
              This honeypot project was deployed and verified locally in a secure home-lab setup. All attacker interactions are fake and isolated within a sandboxed environment. It demonstrates my practical skills with Docker, Linux, IDS systems, and threat intelligence mapping frameworks such as MITRE ATT&CK and Cyber Kill Chain.
              If you’d like to see the full code, deployment steps, or sample logs, please reach out by email or LinkedIn!
            </p>
          </div>
        )}
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
