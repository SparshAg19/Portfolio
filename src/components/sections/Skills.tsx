"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, ShieldAlert, Globe2, Terminal } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0 to 10
  details: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("cybersecurity");

  const categories: SkillCategory[] = [
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      icon: <ShieldAlert className="w-4 h-4" />,
      skills: [
        { name: "Nmap", level: 9, details: "Subnet mapping, service signature scans, scripting engine (NSE) configurations." },
        { name: "Vulnerability Assessment", level: 8, details: "Evaluating security configurations, tracking CVEs, integrating NVD database updates." },
        { name: "Network Security", level: 8, details: "Packet analysis (Wireshark), firewall rule configuration, TCP/IP flow inspections." },
        { name: "OWASP Fundamentals", level: 8, details: "Auditing application code against XSS, injection, authentication bypass vectors." }
      ]
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      icon: <Cpu className="w-4 h-4" />,
      skills: [
        { name: "Gemini API", level: 9, details: "Constructing structured prompt interfaces, multi-turn conversations, multimodal content analysis." },
        { name: "Machine Learning", level: 7, details: "Supervised classification, regression, model evaluations using Scikit-Learn." },
        { name: "Prompt Engineering", level: 9, details: "System prompt instructions, chain-of-thought orchestration, variable parsing." },
        { name: "Data Analysis", level: 8, details: "Data wrangling, statistical charts, log filtering using Pandas and NumPy." }
      ]
    },
    {
      id: "programming",
      name: "Programming",
      icon: <Code2 className="w-4 h-4" />,
      skills: [
        { name: "Python", level: 9, details: "Core scripting, automation scanners, NLP pipelines, data processing." },
        { name: "TypeScript", level: 8, details: "Creating safe type systems, robust frontend APIs, application flows." },
        { name: "JavaScript", level: 8, details: "Dynamic DOM events, Canvas rendering loops, asynchronous fetch states." },
        { name: "C", level: 7, details: "Memory allocations, low-level pointers, socket programming primitives." }
      ]
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe2 className="w-4 h-4" />,
      skills: [
        { name: "Next.js", level: 8, details: "App Router design, Server Components, API routes, optimized static builds." },
        { name: "React", level: 8, details: "State management, React hooks lifecycle, client interactive models." },
        { name: "HTML", level: 9, details: "Semantic tags, search optimizations, high-accessibility DOM structures." },
        { name: "CSS", level: 8, details: "Tailwind configurations, grid layouts, custom transition structures." }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  const renderProgressBar = (level: number) => {
    const max = 10;
    const filled = "█".repeat(level);
    const empty = "░".repeat(max - level);
    return (
      <span className="font-mono text-accent text-sm select-none tracking-tighter">
        [{filled}
        <span className="text-muted-foreground/30">{empty}</span>] {level * 10}%
      </span>
    );
  };

  return (
    <section id="skills" className="py-24 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground">
            Technical Capabilities
          </h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Category Tabs Left */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-mono whitespace-nowrap cursor-pointer transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "border-accent bg-accent-light/10 text-accent font-semibold"
                    : "border-border bg-card text-muted hover:text-foreground hover:bg-border/20"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Capability Details Right */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 flex flex-col h-full justify-between">
              
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-border pb-4 mb-4 select-none">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">Skill Parameters</span>
                  <span className="text-xs font-mono text-accent">category://{currentCategory.id}</span>
                </div>

                <div className="space-y-6">
                  {currentCategory.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="group flex flex-col md:flex-row md:items-start justify-between gap-2 border-b border-border/40 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="max-w-md">
                        <h4 className="font-mono text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-foreground/80 mt-1 leading-relaxed">
                          {skill.details}
                        </p>
                      </div>
                      
                      <div className="flex items-center mt-1 md:mt-0">
                        {renderProgressBar(skill.level)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-[10px] font-mono text-zinc-500 select-none">
                <span>SYSTEM://STABLE</span>
                <span>TOTAL_MODULES: {currentCategory.skills.length}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
