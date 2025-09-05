import React, { useState } from "react";
import HoneypotImg from "./assets/Honeypot.JPG";

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Nikolla Nickolov - Cybersecurity Portfolio</h1>

      {/* Project Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setSelectedProject("suricata")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Suricata IDS</button>
        <button onClick={() => setSelectedProject("phishing")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Phishing Detector</button>
        <button onClick={() => setSelectedProject("honeypot")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cowrie Honeypot</button>
      </div>

      {/* Suricata IDS */}
      {selectedProject === "suricata" && (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Suricata-Based Intrusion Detection System</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Designed and deployed Suricata in a home lab to monitor live network traffic.</li>
            <li>Created custom rules to detect port scans, brute-force attempts, malware, and data exfiltration.</li>
            <li>Used tools like tcpdump and Wireshark to verify alerts and tune rulesets.</li>
            <li>Logged alerts to a dedicated directory and parsed them with Python scripts for automated response.</li>
          </ul>
        </div>
      )}

      {/* Phishing Detector */}
      {selectedProject === "phishing" && (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Phishing URL Detection with VirusTotal API</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Built a Python script that submits URLs to VirusTotal and evaluates risk based on returned results.</li>
            <li>Integrated reputation scoring from multiple vendors to identify malicious indicators.</li>
            <li>Logged results with timestamps and categorized URLs as phishing/safe/suspicious.</li>
            <li>Used in tandem with threat intel feeds to support incident response workflows.</li>
          </ul>
        </div>
      )}

      {/* Honeypot Project */}
      {selectedProject === "honeypot" && (
        <div className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Cowrie Honeypot Project</h2>

          {/* README Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">README</h3>
            <p>
              This project involved deploying a Cowrie honeypot on a Docker container inside a Parrot OS environment. The goal was to capture and log unauthorized SSH and Telnet access attempts for behavioral analysis. Logs are stored in JSON and text format, which provide visibility into attacker commands and IPs.
            </p>
          </div>

          {/* Screenshot Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Screenshot</h3>
            <img src={HoneypotImg} alt="Cowrie Honeypot Screenshot" className="rounded shadow-md w-full max-w-2xl mx-auto" />
          </div>

          {/* Technical Details Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Details</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Used the official Cowrie Docker image: <code>cowrie/cowrie:latest</code></li>
              <li>Exposed ports 2222 and 2223 for SSH and Telnet simulation.</li>
              <li>Logged and tailed JSON output from <code>/cowrie/cowrie-git/var/log/cowrie/cowrie.json</code>.</li>
              <li>Deployed and validated attack emulation within isolated test VM environment.</li>
              <li>Aligned project activity with MITRE ATT&CK techniques (e.g., T1021.001: Remote Services).</li>
              <li>Mapped honeypot response phases to the Cyber Kill Chain lifecycle.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
