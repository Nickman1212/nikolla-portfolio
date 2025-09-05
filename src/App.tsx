// src/App.tsx
import React from "react";
import honeypotProof from "./assets/Honeypot.JPG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nikolla's Honeypot Detection Project</h1>
        <p>
          This project involved setting up a honeypot using <strong>Cowrie</strong> and
          monitoring unauthorized access attempts in a virtual lab environment.
        </p>
        <img
          src={honeypotProof}
          alt="Cowrie honeypot detection proof screenshot"
          className="honeypot-image"
        />
      </header>
    </div>
  );
}

export default App;


/* src/App.css */
.App {
  text-align: center;
  font-family: sans-serif;
  padding: 2rem;
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
}

.App-header {
  margin-top: 1rem;
}

.honeypot-image {
  margin-top: 2rem;
  max-width: 90%;
  height: auto;
  border: 2px solid #4caf50;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 255, 100, 0.5);
}


// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


/* src/index.css */
/* Basic reset and styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121212;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}


// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});


// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}


// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
