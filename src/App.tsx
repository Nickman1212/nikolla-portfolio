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
          Cybersecurity enthusiast focused on building resilient systems and practical automation to keep data and teams safe.
        </h1>
        <p className="lead">
          I combine hands-on cybersecurity labs, incident-style documentation,
          and applied Python to ship small tools that make teams faster and
          safer.
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

      {/* Projects (empty for now) */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="muted">Projects will be added here soon — stay tuned.</p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="panel">
          <ul>
            <li>🔐 Cybersecurity: Nmap, Wireshark, Snort, Suricata, Metasploit</li>
            <li>💻 Programming: Python, C, C#, JavaScript, SQL</li>
            <li>⚙️ Systems: Linux (Parrot, Kali), Windows Server, OPNsense</li>
            <li>☁️ Cloud & Virtualization: VMware, VirtualBox</li>
            <li>📊 Databases: Microsoft SQL, SQLite</li>
            <li>🛡️ Security Concepts: PKI, Certificates, Key Exchange</li>
            <li>📈 Trading/Finance Tools: Futures, Forex (personal projects)</li>
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
