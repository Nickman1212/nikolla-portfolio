import { useState } from "react";
import "./App.css";
import honeypotImage from "./assets/honeypot_proof.png";

function App() {
  const [selectedProject, setSelectedProject] = useState<
    "suricata" | "phishing" | "honeypot" | null
  >(null);

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case "suricata":
        return (
          <div>
            <h2>Suricata IDS Project</h2>
            <p>
              Designed and deployed a Suricata-based Intrusion Detection System in a home lab
              environment. Customized Suricata rules to detect malware, brute-force attempts, and port
              scans.
            </p>
            <ul>
              <li>🔍 Real-time packet analysis using Suricata logs</li>
              <li>📜 Custom rule scripting and signature creation</li>
              <li>📡 Monitored multiple interfaces using `af-packet`</li>
            </ul>
          </div>
        );
      case "phishing":
        return (
          <div>
            <h2>Phishing Email Detector (Python + Flask)</h2>
            <p>
              Engineered a machine learning web app to classify phishing emails. Integrated TF-IDF vectorization with a
              logistic regression model.
            </p>
            <ul>
              <li>📬 Live email classification using Flask backend</li>
              <li>📊 TF-IDF feature extraction with Scikit-learn</li>
              <li>🧪 Trained and tested on real-world phishing datasets</li>
            </ul>
          </div>
        );
      case "honeypot":
        return (
          <div>
            <h2>Honeypot-based Intrusion Detection System</h2>
            <p>
              Deployed Cowrie Honeypot on Docker to monitor SSH/Telnet brute force attempts. Captured
              attacker behavior, generated logs, and analyzed threat patterns.
            </p>
            <ul>
              <li>🐍 Cowrie running inside Docker container</li>
              <li>🪝 Simulated SSH service on port 2222</li>
              <li>📁 Logs reviewed via `cowrie.json` for threat intelligence</li>
            </ul>

            <h3>📸 Proof of Work:</h3>
            <img
              src={honeypotImage}
              alt="Cowrie Honeypot Proof Screenshot"
              style={{ maxWidth: "100%", border: "2px solid #ccc", borderRadius: "10px" }}
            />

            <h3>📘 README Section</h3>
            <p>
              This screenshot shows Cowrie Honeypot running on port 2222 inside a Docker container on
              Kali Linux. The logs are accessed through the command line, verifying that the
              honeypot is capturing interaction attempts from malicious users.
            </p>
            <p>
              I use this setup to collect behavioral data from attackers in a simulated environment,
              which helps improve my incident response and log analysis skills.
            </p>
          </div>
        );
      default:
        return <p>Select a project above to view its details.</p>;
    }
  };

  return (
    <div className="App">
      <h1>📁 Nikolla Nickolov – Cybersecurity Projects</h1>

      <div className="button-group">
        <button onClick={() => setSelectedProject("suricata")}>Suricata IDS</button>
        <button onClick={() => setSelectedProject("phishing")}>Phishing Detector</button>
        <button onClick={() => setSelectedProject("honeypot")}>Honeypot IDS</button>
      </div>

      <div className="project-details">{renderProjectDetails()}</div>
    </div>
  );
}

export default App;
