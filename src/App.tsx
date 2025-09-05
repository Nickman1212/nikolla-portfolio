import React, { useState } from "react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderDetails = () => {
    switch (selectedProject) {
      case "suricata":
        return (
          <div className="mt-4 text-white">
            <h3 className="text-xl font-bold mb-2">Suricata IDS</h3>
            <ul className="list-disc list-inside">
              <li>Deployed Suricata in a home lab using Kali Linux.</li>
              <li>Configured rule sets to detect port scans, brute-force attacks, and malware.</li>
              <li>Captured and analyzed suspicious traffic with Wireshark and tcpdump.</li>
              <li>Created alerts for Nmap scans and SSH brute-force attempts.</li>
              <li>Demonstrated proactive threat detection with real-time logging.</li>
            </ul>
          </div>
        );
      case "phishing":
        return (
          <div className="mt-4 text-white">
            <h3 className="text-xl font-bold mb-2">Phishing Email Detector (Python + Flask)</h3>
            <ul className="list-disc list-inside">
              <li>Built a machine learning app to classify emails as phishing or safe.</li>
              <li>Used TF-IDF vectorization to extract features from email text.</li>
              <li>Trained logistic regression model using scikit-learn.</li>
              <li>Deployed with Flask to provide a web interface for predictions.</li>
              <li>Helps users identify malicious emails before opening them.</li>
            </ul>
          </div>
        );
      case "honeypot":
        return (
          <div className="mt-4 text-white">
            <h3 className="text-xl font-bold mb-2">Cowrie Honeypot</h3>
            <ul className="list-disc list-inside">
              <li>Deployed Cowrie honeypot in a Docker container on Kali Linux.</li>
              <li>Simulated SSH and Telnet services to detect unauthorized login attempts.</li>
              <li>Logged attacker behavior such as command inputs and probing actions.</li>
              <li>Captured and analyzed logs to observe attacker patterns.</li>
              <li>Used for threat intel gathering and proactive network defense.</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-1">Project Screenshot:</h4>
              <img 
                src="/mnt/data/Capture.JPG" 
                alt="Cowrie Honeypot Attack Simulation" 
                className="rounded-lg shadow-md max-w-full h-auto border border-gray-600"
              />
            </div>
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">README (Project Summary for Recruiters):</h4>
              <p>
                This screenshot shows a live instance of Cowrie honeypot running inside a Docker container on Kali Linux.
                The left terminal demonstrates a simulated attacker's attempt to SSH into the honeypot, while the right terminal shows the captured command logs.
                This project demonstrates attacker deception, behavior logging, and proactive analysis — a vital defensive tactic in cybersecurity.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold text-white mb-6">My Cybersecurity Projects</h1>
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSelectedProject("suricata")}
        >
          Suricata IDS
        </button>
        <button
          className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSelectedProject("phishing")}
        >
          Phishing Detector
        </button>
        <button
          className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSelectedProject("honeypot")}
        >
          Honeypot (Cowrie)
        </button>
      </div>
      <div className="max-w-3xl mx-auto">{renderDetails()}</div>
    </div>
  );
}
