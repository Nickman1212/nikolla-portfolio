import { useState } from "react";
import suricataProof from "./assets/suricata_proof.png";
import phishingProof from "./assets/phishing_proof.png";
import honeypotProof from "./assets/honeypot.jpg"; // Corrected file path and extension

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>("suricata");

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case "suricata":
        return (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Suricata IDS Project</h2>
            <p className="mt-2">\              Designed and deployed a Suricata-based Intrusion Detection System (IDS) in a controlled home lab to monitor and analyze live network traffic. Configured custom Suricata rules to detect malware, port scans, brute-force attempts, and suspicious traffic patterns. Leveraged Wireshark and tcpdump for packet capture and forensic investigation.
            </p>
            <img src={suricataProof} alt="Suricata Proof Screenshot" className="mt-4 rounded shadow-md w-full max-w-2xl" />
          </div>
        );
      case "phishing":
        return (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Phishing Detection Project</h2>
            <p className="mt-2">
              Developed a Python Flask web application to detect phishing URLs using VirusTotal API. Integrated client-side URL input validation and back-end threat intelligence scoring. Automated URL submissions and rendered real-time response classifications (malicious, suspicious, harmless) for educational awareness.
            </p>
            <img src={phishingProof} alt="Phishing Detection Screenshot" className="mt-4 rounded shadow-md w-full max-w-2xl" />
          </div>
        );
      case "honeypot":
        return (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Honeypot-Based Intrusion Detection</h2>
            <p className="mt-2">
              Deployed a honeypot system using Cowrie and T-Pot to simulate vulnerable services and capture attacker behavior. Integrated the setup with an ELK stack to visualize logs, SSH brute-force attempts, and shell interaction events in real-time dashboards. Collected indicators of compromise and mapped adversarial techniques using the MITRE ATT&CK framework.
            </p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">README</h3>
              <p className="mt-1">\                This project replicates a real-world server to lure attackers, logs their actions, and allows defensive tuning through observed patterns. The ELK dashboard shows real-time hits, attacker IPs, login attempts, and commands used during interaction.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Screenshot Proof</h3>
              <img src={honeypotProof} alt="Honeypot Proof Screenshot" className="mt-2 rounded shadow-md w-full max-w-2xl" />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Technical Details</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Tools used: T-Pot, Cowrie, Dionaea, ELK Stack</li>
                <li>Monitoring SSH & Telnet interactions</li>
                <li>Log parsing and dashboard visualization with Kibana</li>
                <li>System hosted on Ubuntu VPS with port forwarding</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6">Nikolla Nickolov – Cybersecurity Portfolio</h1>

      <div className="space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md shadow-md ${
            selectedProject === "suricata" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
          }`}
          onClick={() => setSelectedProject("suricata")}
        >
          Suricata IDS
        </button>
        <button
          className={`px-4 py-2 rounded-md shadow-md ${
            selectedProject === "phishing" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
          }`}
          onClick={() => setSelectedProject("phishing")}
        >
          Phishing Detector
        </button>
        <button
          className={`px-4 py-2 rounded-md shadow-md ${
            selectedProject === "honeypot" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-600"
          }`}
          onClick={() => setSelectedProject("honeypot")}
        >
          Honeypot IDS
        </button>
      </div>

      {renderProjectDetails()}
    </div>
  );
}

export default App;
