import { useState } from "react";
import honeypotProof from "./assets/Honeypot.JPG";

export default function App() {
  const [selectedProject, setSelectedProject] = useState("honeypot");
  const [selectedSection, setSelectedSection] = useState("readme");

  const renderSection = () => {
    switch (selectedSection) {
      case "readme":
        return (
          <div className="space-y-2">
            <p>
              This Honeypot-Based IDS project leverages the T-Pot distribution to deploy high-interaction honeypots
              such as Cowrie and Dionaea across multiple containers.
            </p>
            <p>
              These honeypots emulate vulnerable services and are integrated with the ELK Stack to monitor and
              analyze attacker behavior in real time. Logs are enriched with GeoIP and threat intelligence sources.
            </p>
            <p>
              Ideal for practicing threat hunting, understanding attacker TTPs, and demonstrating detection engineering
              skills mapped to the MITRE ATT&CK Framework and cyber kill chain.
            </p>
          </div>
        );
      case "proof":
        return (
          <div className="mt-4">
            <img
              src={honeypotProof}
              alt="Screenshot showing honeypot project"
              className="rounded-lg shadow-md w-full"
            />
            <p className="text-sm mt-2 text-gray-400">Screenshot of the working honeypot system.</p>
          </div>
        );
      case "details":
        return (
          <div className="space-y-2 mt-4">
            <ul className="list-disc list-inside text-gray-300">
              <li>🏹 T-Pot 2304 with containers: Cowrie, Dionaea, Heralding, ELK stack, and more</li>
              <li>🪤 Cowrie SSH honeypot simulates full shell interaction & file downloads</li>
              <li>🧲 Dionaea emulates SMB, HTTP, FTP for malware capture</li>
              <li>📊 Real-time event visualization via Kibana dashboards</li>
              <li>🌍 Integrated GeoIP & abuse.ch threat intel enrichment</li>
              <li>🧠 ATT&CK mapping and lifecycle visibility for attacker behavior</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Nikolla Nickolov – Cybersecurity Portfolio</h1>

      <div className="max-w-4xl mx-auto bg-zinc-900 p-6 rounded-lg shadow-lg space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">📡 Honeypot-Based Intrusion Detection System</h2>
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded ${
                selectedSection === "readme" ? "bg-white text-black" : "bg-zinc-800"
              }`}
              onClick={() => setSelectedSection("readme")}
            >
              README
            </button>
            <button
              className={`px-4 py-2 rounded ${
                selectedSection === "proof" ? "bg-white text-black" : "bg-zinc-800"
              }`}
              onClick={() => setSelectedSection("proof")}
            >
              Screenshot
            </button>
            <button
              className={`px-4 py-2 rounded ${
                selectedSection === "details" ? "bg-white text-black" : "bg-zinc-800"
              }`}
              onClick={() => setSelectedSection("details")}
            >
              Technical Details
            </button>
          </div>

          {renderSection()}
        </div>
      </div>
    </div>
  );
}
