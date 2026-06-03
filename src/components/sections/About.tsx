"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Lightbulb, GraduationCap } from "lucide-react";

interface TerminalCommand {
  label: string;
  command: string;
  output: string | React.ReactNode;
}

export default function About() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const commands: TerminalCommand[] = [
    {
      label: "whoami",
      command: "whoami --roles",
      output: (
        <div className="space-y-2 text-xs md:text-sm font-mono">
          <p className="text-accent font-semibold">{"// SPARSH AGARWAL"}</p>
          <p>
            <span className="text-zinc-500">College:</span> VIT Vellore (Vellore Institute of Technology)
          </p>
          <p>
            <span className="text-zinc-500">Focus:</span> Computer Science, Artificial Intelligence, Cryptography, Security Engineering
          </p>
          <p>
            <span className="text-zinc-500">Mantra:</span> &quot;I build intelligent systems and security-focused applications that solve real-world problems.&quot;
          </p>
        </div>
      ),
    },
    {
      label: "interests.sh",
      command: "./list_interests.sh",
      output: (
        <div className="space-y-3 text-xs md:text-sm font-mono">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Cybersecurity</p>
              <p className="text-muted text-xs">Penetration testing, network security scanners, threat analysis, OWASP Top 10, security policy audit.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Cpu className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Artificial Intelligence</p>
              <p className="text-muted text-xs">Large Language Model integrations, Natural Language Processing, classification, predictive security intelligence.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Societal Problem Solving</p>
              <p className="text-muted text-xs">Developing digital systems that directly help farming, medical, educational, and safety challenges in underserved areas.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "education.cfg",
      command: "cat /etc/education.cfg",
      output: (
        <div className="space-y-2 text-xs md:text-sm font-mono">
          <p className="text-accent font-semibold">{"// VELLORE INSTITUTE OF TECHNOLOGY"}</p>
          <p className="text-zinc-400">Bachelor of Technology (B.Tech) in Computer Science & Engineering</p>
          <p className="text-zinc-500">Graduating: 2027 (Expected)</p>
          <div className="h-px bg-border my-2" />
          <p className="text-xs">
            <span className="text-zinc-500">Academic Pillars:</span> Data Structures, Computer Networks, Database Management Systems, Cryptography, Machine Learning & AI frameworks.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Story Column */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h3 className="text-xl md:text-2xl font-sans font-bold text-foreground leading-snug">
              Designing intelligence and security for large-scale impact.
            </h3>
            
            <p className="text-base text-foreground/80 leading-relaxed">
              I am a Computer Science student at <strong>VIT Vellore</strong>, building at the intersection of AI-driven intelligence and modern cybersecurity. My goal is to engineer useful, security-focused systems that tackle practical, societal challenges.
            </p>

            <p className="text-base text-foreground/80 leading-relaxed">
              For me, technology isn&apos;t just about writing code; it&apos;s about creating defensive layers and deployment environments that keep users safe while automating complex decisions. Whether it&apos;s auditing networks for potential risks or empowering farmers with agricultural AI, I focus on constructing reliable, real-world platforms.
            </p>

            <div className="flex gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-sans font-bold text-accent">2024</span>
                <span className="text-xs font-mono text-muted">First Port Scan</span>
              </div>
              <div className="w-px bg-border my-2" />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-sans font-bold text-accent">05+</span>
                <span className="text-xs font-mono text-muted">Security Projects</span>
              </div>
              <div className="w-px bg-border my-2" />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-sans font-bold text-accent">100%</span>
                <span className="text-xs font-mono text-muted">Builders Mindset</span>
              </div>
            </div>
          </div>

          {/* Interactive CLI Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 rounded-xl border border-border bg-card shadow-lg flex flex-col overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-border/25 border-b border-border/70 select-none">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-muted" />
                  <span className="font-mono text-xs text-muted">sparsh@v-terminal: ~</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Terminal tabs */}
              <div className="flex border-b border-border bg-border/10 font-mono text-xs divide-x divide-border">
                {commands.map((cmd, idx) => (
                  <button
                    key={cmd.label}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 hover:bg-card hover:text-foreground cursor-pointer transition-colors ${
                      activeTab === idx
                        ? "bg-card text-accent font-semibold border-t-2 border-t-accent"
                        : "text-muted"
                    }`}
                  >
                    {cmd.label}
                  </button>
                ))}
              </div>

              {/* Terminal content */}
              <div className="flex-1 p-5 font-mono text-sm bg-card min-h-[220px] flex flex-col justify-between">
                <div>
                  {/* Command input prompt */}
                  <div className="flex items-center gap-2 text-xs md:text-sm mb-4">
                    <span className="text-emerald-500 font-bold">sparsh@vit:~#</span>
                    <span className="text-foreground animate-pulse font-medium">
                      {commands[activeTab].command}
                    </span>
                  </div>
                  {/* Command Output */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-foreground/90 font-mono leading-relaxed"
                  >
                    {commands[activeTab].output}
                  </motion.div>
                </div>

                <div className="text-zinc-500 text-[10px] mt-6 text-right select-none font-mono">
                  Press tabs to execute different commands
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
