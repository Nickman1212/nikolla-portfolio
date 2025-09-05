import { useState } from "react";
import suricataImage from "./assets/suricata_proof.png";
import phishingImage from "./assets/phishing_proof.png";
import honeypotImage from "./assets/Honepot.JPG";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>("suricata");

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case "suricata":
        return (
          <div className="project-details">
            <h2>Suricata IDS Deployment</h2>
            <p>
              Designed and deployed a Suricata-based Intrusion Detection System (IDS) in a home lab to monitor and analyze live network traffic.
              Configured custom rules for threat detection including malware signatures, port scans, and brute-force attempts.
              Analyzed logs using <code>eve.json</code> and <code>tcpdump</code> to detect security incidents.
            </p>
            <img src={suricataImage} alt="Suricata Screenshot" />
          </div>
        );
      case "phishing":
        return (
          <div className="project-details">
            <h2>Phishing Email Detector</h2>
            <p>
              Built a Flask web app using Python and Scikit-learn to detect phishing emails.
              Implemented TF-IDF vectorization and trained a logistic regression classifier.
              The app accepts email body input and outputs prediction scores for phishing likelihood.
            </p>
            <img src={phishingImage} alt="Phishing Detector Screenshot" />
          </div>
        );
      case "honeypot":
        return (
          <div className="project-details">
            <h2>Cowrie Honeypot Deployment</h2>
            <p>
              Deployed a Cowrie SSH honeypot using Docker to monitor attacker behavior.
              Mapped ports 2222 and 2223 to simulate realistic services, allowing attacker interaction logging.
              Parsed and analyzed logs to observe attack patterns, brute-force attempts, and command execution.
              Mapped observed techniques to MITRE ATT&CK and Cyber Kill Chain phases for threat intelligence reporting.
            </p>
            <img src={honeypotImage} alt="Cowrie Honeypot Screenshot" />
            <div className="readme">
              <h3>README</h3>
              <p>
                This project demonstrates my ability to deploy and analyze high-interaction honeypots using Cowrie. 
                It showcases real-world attacker engagement and integrates findings with cybersecurity frameworks. 
                Logs were captured from attacker interactions over SSH and analyzed for security intelligence.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Nikolla's Cybersecurity Portfolio</h1>
      <div className="button-group">
        <button onClick={() => setSelectedProject("suricata")}>Suricata IDS</button>
        <button onClick={() => setSelectedProject("phishing")}>Phishing Detector</button>
        <button onClick={() => setSelectedProject("honeypot")}>Honeypot Project</button>
      </div>
      {renderProjectDetails()}
    </div>
  );
}

export default App;
