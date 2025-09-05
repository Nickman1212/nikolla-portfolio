import React, { useState } from "react";
import "./App.css";
import honeypotImg from "./assets/Honeypot.JPG";

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case "suricata":
        return (
          <div className="project-details">
            <h2>Suricata IDS Deployment</h2>
            <p>
              Deployed and configured Suricata IDS in a controlled home lab
environment to actively monitor and analyze live network traffic. Developed
custom Suricata rules to detect malware, port scans, brute-force attacks,
and suspicious activity. Utilized tcpdump and Suricata logs for threat
detection and forensic investigation.
            </p>
          </div>
        );
      case "phishing":
        return (
          <div className="project-details">
            <h2>Phishing Email Detector</h2>
            <p>
              Built a Python-Flask web app that detects phishing emails using
TF-IDF and logistic regression. Integrated scikit-learn for training
phishing vs. legitimate email classifiers. Designed a web interface for
real-time classification and analysis.
            </p>
          </div>
        );
      case "honeypot":
        return (
          <div className="project-details">
            <h2>Honeypot-based Intrusion Detection System</h2>
            <p>
              Developed a honeypot environment using T-Pot (Dionaea, Cowrie) to
analyze attacker behavior. Captured attack vectors and C2 communication
using high-interaction honeypots. Visualized real-time log data using the
ELK Stack (Elasticsearch, Logstash, Kibana). Simulated brute-force SSH
attacks and malware dropper activity for analysis.
            </p>
            <img src={honeypotImg} alt="Honeypot Screenshot" className="project-img" />
            <h3>README for Recruiters:</h3>
            <p>
              This project was created in a virtualized lab environment using
VirtualBox and Ubuntu. It demonstrates my understanding of honeypot
architectures, attacker engagement, and real-time logging with the ELK
stack. If you’d like access to the raw log data or VM configuration
instructions, feel free to reach out via LinkedIn or email.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Nikolla Nickolov's Cybersecurity Projects</h1>
      <div className="button-group">
        <button onClick={() => setSelectedProject("suricata")}>Suricata IDS</button>
        <button onClick={() => setSelectedProject("phishing")}>Phishing Detector</button>
        <button onClick={() => setSelectedProject("honeypot")}>Honeypot IDS</button>
      </div>
      <div className="project-container">{renderProjectDetails()}</div>
    </div>
  );
}

export default App;
