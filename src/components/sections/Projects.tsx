"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, 
  Terminal as TermIcon, 
  Sprout, 
  Activity, 
  ShieldAlert, 
  KeyRound, 
  FileSearch, 
  Play, 
  ExternalLink,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Lock
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  icon: React.ReactNode;
  category: "security" | "ai" | "engineering";
  simulationType: "scanner" | "agro" | "threat" | "password" | "resume";
}

export default function Projects() {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<React.ReactNode | null>(null);

  const projects: Project[] = [
    {
      id: "vuln-scanner",
      title: "Network Vulnerability Scanner",
      description: "A professional security auditing tool that scans subnet assets, probes open ports, queries the NVD API for CVE details, and generates interactive risk assessment reports.",
      features: [
        "Vulnerability Detection",
        "NVD API Integration",
        "Automated Reporting",
        "Risk Assessment",
        "HTML Dashboard"
      ],
      tech: ["Python", "Nmap", "NVD API", "HTML", "CSS"],
      icon: <ShieldAlert className="w-5 h-5 text-accent" />,
      category: "security",
      simulationType: "scanner"
    },
    {
      id: "agro-ai",
      title: "Agro AI Platform",
      description: "An AI-powered agricultural tool designed to empower farmers with Gemini-enabled crop disease diagnostics, government scheme recommendations, and direct crop marketplaces.",
      features: [
        "Plant Disease Detection",
        "Gemini AI Integration",
        "Scheme Discovery",
        "Marketplace Gateway",
        "Crop Price Insights"
      ],
      tech: ["Next.js", "Gemini API", "AI/ML", "Agriculture Data"],
      icon: <Sprout className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      category: "ai",
      simulationType: "agro"
    },
    {
      id: "threat-intel",
      title: "AI Threat Intelligence Dashboard",
      description: "A centralized security dashboard aggregating global cyber threat feeds, classifying attack patterns with AI, and issuing actionable vulnerability alerts.",
      features: [
        "Feed Aggregation",
        "Attack Vector Analysis",
        "AI Pattern Classification",
        "Active Vulnerability Feed"
      ],
      tech: ["Python", "AI Models", "Cybersecurity APIs"],
      icon: <Activity className="w-5 h-5 text-emerald-500" />,
      category: "security",
      simulationType: "threat"
    },
    {
      id: "password-intel",
      title: "Secure Password Intelligence Analyzer",
      description: "A cryptographic tool analyzing passwords for structural complexity, cross-referencing breach databases, and outputting specific cryptographic strengthening advice.",
      features: [
        "Entropy Calculation",
        "Breach Database Lookup",
        "MFA Recommender",
        "Security Metric Charts"
      ],
      tech: ["Python", "Security Analysis", "Crypto Libs"],
      icon: <KeyRound className="w-5 h-5 text-amber-500" />,
      category: "security",
      simulationType: "password"
    },
    {
      id: "resume-screener",
      title: "AI Resume Screening System",
      description: "An NLP pipeline designed to parse applicant resumes, calculate vector similarities against jobs, and match candidates objectively.",
      features: [
        "Resume Parsing",
        "NLP Semantic Analysis",
        "Candidate-Job Matching",
        "Candidate Analytics"
      ],
      tech: ["Python", "NLP", "Machine Learning", "Scikit-Learn"],
      icon: <FileSearch className="w-5 h-5 text-blue-500" />,
      category: "ai",
      simulationType: "resume"
    }
  ];

  // Simulations logic
  const runSimulation = (type: string) => {
    if (simulating) return;
    setSimulating(true);
    setActiveSimulation(type);
    setSimulationLogs([]);
    setSimResult(null);

    if (type === "scanner") {
      const logs = [
        "Initializing Nmap scanner daemon...",
        "Scanning target subnet: 192.168.1.0/24...",
        "Discovered active host at 192.168.1.42 [MAC: 00:1A:2B:3C:4D:5E]",
        "Probing host 192.168.1.42 for open ports...",
        "Found Port 22/TCP (SSH) open: OpenSSH 8.2p1 detected.",
        "Found Port 80/TCP (HTTP) open: Apache httpd 2.4.41 detected.",
        "Querying National Vulnerability Database (NVD) API for OpenSSH 8.2p1...",
        "Querying NVD API for Apache httpd 2.4.41...",
        "Match found: CVE-2020-15778 (CVSS: 7.8 HIGH severity)",
        "Compiling vulnerability matrix and risk vectors...",
        "Rendering HTML threat report... Done!"
      ];
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setSimulationLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
          setSimulating(false);
          setSimResult(
            <div className="mt-4 p-4 rounded-lg bg-red-950/20 border border-red-500/20 text-xs font-mono">
              <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>THREAT REPORT GENERATED</span>
              </div>
              <p className="text-zinc-300">Target Host: 192.168.1.42</p>
              <p className="text-zinc-300">Vulnerabilities Detected: 1 High, 2 Medium</p>
              <p className="text-red-400 font-semibold mt-1">Critical CVE-2020-15778 - Command Injection vulnerability in OpenSSH scp file copy</p>
              <p className="text-zinc-400 mt-2 text-[10px]">Action Plan: Upgrade OpenSSH version or use sftp-server.</p>
            </div>
          );
        }
      }, 500);
    } 
    
    else if (type === "agro") {
      const logs = [
        "Connecting to Gemini Pro Vision endpoint...",
        "Uploading leaf sample: tomato_leaf_rust.jpg...",
        "Performing semantic model analysis on leaf contours...",
        "Detecting color anomalies and spore patterns...",
        "Cross-referencing global crop pathology database...",
        "Compiling agricultural recovery plan..."
      ];
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setSimulationLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
          setSimulating(false);
          setSimResult(
            <div className="mt-4 p-4 rounded-lg bg-teal-950/20 border border-teal-500/20 text-xs font-mono">
              <div className="flex items-center gap-2 text-teal-500 font-bold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>CROP DIAGNOSIS SUCCESSFUL</span>
              </div>
              <p className="text-zinc-300"><span className="text-zinc-500">Plant:</span> Solanum lycopersicum (Tomato)</p>
              <p className="text-zinc-300"><span className="text-zinc-500">Pathogen:</span> Passalora fulva (Leaf Mold)</p>
              <p className="text-teal-400 font-semibold mt-1">Confidence Score: 94.7%</p>
              <p className="text-zinc-400 mt-2 text-[10px]">Treatment: Lower humidity below 85%, apply potassium bicarbonate, and prune lower stems.</p>
            </div>
          );
        }
      }, 600);
    }

    else if (type === "threat") {
      const logs = [
        "Initializing global cyber threat aggregate listener...",
        "Polling feeds: AlienVault OTX, CISA alerts, MISP database...",
        "Received live packet feed from honeypot-3...",
        "Analyzing packet headers for active botnets...",
        "AI classification tag: Mirai variants detected targeting IoT devices.",
        "Updating threat dashboard parameters..."
      ];

      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setSimulationLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
          setSimulating(false);
          setSimResult(
            <div className="mt-4 p-4 rounded-lg bg-zinc-900 border border-border text-xs font-mono">
              <div className="flex items-center justify-between text-yellow-500 font-bold mb-2">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>THREAT INTELLIGENCE SUMMARY</span>
                </span>
                <span className="bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded text-[10px]">ACTIVE ALERT</span>
              </div>
              <p className="text-zinc-300 font-semibold mt-1">Attack Pattern Identified: Brute-force SSH attack swarm.</p>
              <p className="text-zinc-400 mt-1">Origin Coordinates: IP Range 185.220.101.0/24 (Tor Exit Nodes)</p>
              <p className="text-zinc-500 text-[10px] mt-2">Feeds synchronized and blocked IP blocklist pushed to firewall gateway.</p>
            </div>
          );
        }
      }, 500);
    }

    else if (type === "password") {
      const logs = [
        "Securing session channel...",
        "Hashing input string via SHA-256...",
        "Checking HaveIBeenPwned API for password leaks...",
        "Calculating Shannon entropy value...",
        "Synthesizing strengthening suggestions..."
      ];

      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setSimulationLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
          setSimulating(false);
          setSimResult(
            <div className="mt-4 p-4 rounded-lg bg-amber-950/20 border border-amber-500/20 text-xs font-mono">
              <div className="flex items-center gap-2 text-amber-500 font-bold mb-2">
                <Lock className="w-4 h-4" />
                <span>CRYPTOGRAPHIC ANALYSIS</span>
              </div>
              <p className="text-zinc-300"><span className="text-zinc-500">Leaked Status:</span> Safe (0 instances in database)</p>
              <p className="text-zinc-300"><span className="text-zinc-500">Entropy Score:</span> 74.2 bits (Strong)</p>
              <p className="text-amber-400 font-semibold mt-1">Cracking estimate: ~14.2 Years via standard GPU cluster</p>
            </div>
          );
        }
      }, 500);
    }

    else if (type === "resume") {
      const logs = [
        "Reading dummy PDF candidate resume structure...",
        "Applying NLP Regex Tokenizer to extract keywords...",
        "Calculating TF-IDF vectors for matching job description...",
        "Calculating cosine similarity index...",
        "Generating score matrix..."
      ];

      let i = 0;
      const interval = setInterval(() => {
        if (i < logs.length) {
          setSimulationLogs(prev => [...prev, logs[i]]);
          i++;
        } else {
          clearInterval(interval);
          setSimulating(false);
          setSimResult(
            <div className="mt-4 p-4 rounded-lg bg-zinc-900 border border-border text-xs font-mono">
              <div className="flex items-center gap-2 text-emerald-500 font-bold mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>SCREENING PROCESS COMPLETION</span>
              </div>
              <p className="text-zinc-300"><span className="text-zinc-500">Extracted Skills:</span> Python, Machine Learning, TensorFlow, NLP</p>
              <p className="text-zinc-300"><span className="text-zinc-500">Match score:</span> 88% Match with &quot;Junior AI Developer&quot;</p>
              <p className="text-zinc-400 mt-2 text-[10px]">Insight: Resume contains strong neural network projects, but lacks cloud architecture experience tags.</p>
            </div>
          );
        }
      }, 500);
    }
  };

  return (
    <section id="projects" className="py-24 border-b border-border bg-background relative">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between hover:border-accent/40 hover:shadow-md transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div>
                {/* Top Row: Icon + Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-border/20 border border-border group-hover:border-accent/30 group-hover:bg-accent-light/10 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-muted uppercase border border-border/80 px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-sans font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features Badges */}
                <div className="mb-6">
                  <p className="text-[11px] font-mono text-muted mb-2 uppercase tracking-wider">Key Features</p>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-foreground/75 font-sans">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded bg-border/30 border border-border text-[10px] md:text-xs font-mono text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Interaction */}
              <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                <button
                  onClick={() => runSimulation(project.simulationType)}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-accent hover:opacity-80 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-accent" />
                  <span>Simulate Engine</span>
                </button>
                
                <a
                  href="https://github.com/SparshAg19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground"
                >
                  <span>Codebase</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simulation Modal overlay */}
        <AnimatePresence>
          {activeSimulation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 pointer-events-auto"
              onClick={() => {
                if (!simulating) setActiveSimulation(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-xl rounded-xl border border-border bg-card p-6 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <TermIcon className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm text-foreground">Interactive Simulation Sandbox</span>
                  </div>
                  <button
                    onClick={() => {
                      if (!simulating) setActiveSimulation(null);
                    }}
                    className="p-1 rounded hover:bg-border/40 text-muted hover:text-foreground text-xs font-mono cursor-pointer"
                    disabled={simulating}
                  >
                    [Close]
                  </button>
                </div>

                {/* Simulated Monitor */}
                <div className="bg-black text-zinc-300 p-5 rounded-lg font-mono text-xs md:text-sm min-h-[220px] flex flex-col justify-between overflow-y-auto max-h-[300px] border border-border">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold mb-2">
                      <span>$</span>
                      <span>run_module --sim={activeSimulation}</span>
                    </div>

                    {simulationLogs.map((log, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-zinc-300"
                      >
                        {log}
                      </motion.p>
                    ))}
                  </div>

                  {simulating && (
                    <div className="flex items-center gap-2 text-accent mt-4 animate-pulse">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Computing vectors...</span>
                    </div>
                  )}

                  {simResult}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-muted font-mono">
                    {simulating ? "Simulation in progress..." : "Simulation finished."}
                  </span>
                  <button
                    onClick={() => runSimulation(activeSimulation)}
                    className="px-4 py-2 rounded bg-accent text-white font-mono text-xs hover:opacity-95 disabled:opacity-50 cursor-pointer"
                    disabled={simulating}
                  >
                    Restart Engine
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
