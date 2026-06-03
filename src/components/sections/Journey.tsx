"use client";

import { motion } from "framer-motion";
import { Milestone, GitCommit, Search, ShieldAlert, Cpu, Heart } from "lucide-react";

interface MilestoneEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  logs: string[];
  icon: React.ReactNode;
}

export default function Journey() {
  const events: MilestoneEvent[] = [
    {
      year: "2024",
      title: "Started exploring Cybersecurity",
      subtitle: "Foundational Security Research",
      description: "Began deep-diving into defensive computing, networking architectures, and threat vectors. Explored ethical hacking tools and set up target environments.",
      logs: [
        "SYS://init --modules=networking,cryptography",
        "LEARNING://nmap, wireshark, owasp-top-10",
        "STATUS://Curiosity sparked, joined security study circles"
      ],
      icon: <Search className="w-4 h-4 text-accent" />
    },
    {
      year: "2025",
      title: "Built Network Vulnerability Scanner",
      subtitle: "First Major Defensive Tool",
      description: "Designed a lightweight security scanner that audits devices inside a local network segment, parses open service signatures, and aggregates warning reports via NVD API integration.",
      logs: [
        "BUILD://python-nmap, nvd-api-scraper",
        "OUTPUT://HTML interactive risk matrices",
        "METRIC://Discovered 14 open-port CVE vulnerabilities on home server"
      ],
      icon: <ShieldAlert className="w-4 h-4 text-emerald-500" />
    },
    {
      year: "2025",
      title: "Built Agro AI Platform",
      subtitle: "Societal AI Engineering",
      description: "Co-engineered a comprehensive web app tailored for farmers. Integrated Gemini LLM logic to classify crop leaves, suggest governmental support schemes, and streamline buyer channels.",
      logs: [
        "BUILD://nextjs, gemini-api-vision, ml-classifiers",
        "IMPACT://Simulated crop pathogen diagnostic success at 94.7%",
        "STATUS://Completed beta demonstration"
      ],
      icon: <Cpu className="w-4 h-4 text-cyan-500" />
    },
    {
      year: "2026",
      title: "Expanding into AI + Security Research",
      subtitle: "Graduate Horizon & Thesis Projections",
      description: "Researching the integration of AI models to predict network breaches before they happen, focusing on securing AI API gateway prompts from remote injections.",
      logs: [
        "RESEARCH://prompt-injection-defense, llm-firewalls",
        "TARGET://Securing AI agent loops from remote compromises",
        "STATUS://Actively prototyping security filters"
      ],
      icon: <Heart className="w-4 h-4 text-red-500" />
    }
  ];

  return (
    <section id="journey" className="py-24 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <Milestone className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground">
            Journey & Route Map
          </h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
          
          {/* Vertical Center Line (on desktop) */}
          <div className="absolute left-[17px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx}
                  className="relative flex flex-col md:flex-row items-stretch md:justify-between group"
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-[-35px] md:left-1/2 top-1.5 z-10 w-9 h-9 rounded-full border-2 border-border bg-card flex items-center justify-center -translate-x-1/2 group-hover:border-accent transition-colors duration-200 shadow-sm">
                    {event.icon}
                  </div>

                  {/* Left Side (Empty on even, card on odd for desktop) */}
                  <div className={`w-full md:w-[45%] flex ${isEven ? "md:justify-end" : "hidden md:flex md:pointer-events-none md:opacity-0"}`}>
                    {isEven && (
                      <TimelineCard event={event} align="right" />
                    )}
                  </div>

                  {/* Middle Column Year tag */}
                  <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-12 md:top-2 select-none">
                    <span className="font-mono text-xs font-bold bg-border/40 border border-border/80 text-muted px-2 py-0.5 rounded-full">
                      {event.year}
                    </span>
                  </div>

                  {/* Right Side (Card on even, empty on odd for desktop) */}
                  <div className={`w-full md:w-[45%] flex ${!isEven ? "md:justify-start" : "md:hidden"}`}>
                    <TimelineCard event={event} align="left" />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineCard({ event, align }: { event: MilestoneEvent; align: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full rounded-xl border border-border bg-card p-6 shadow-xs select-text hover:border-accent/30 transition-all duration-200 ${
        align === "right" ? "md:text-right" : "md:text-left"
      }`}
    >
      <span className="text-[10px] font-mono text-accent font-semibold uppercase tracking-wider">
        {event.subtitle}
      </span>
      
      <h3 className="text-lg font-sans font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">
        {event.title}
      </h3>
      
      <p className="text-sm text-foreground/80 leading-relaxed mb-4">
        {event.description}
      </p>

      {/* Terminal log dump inside milestone */}
      <div className={`p-3.5 rounded bg-black border border-border/80 font-mono text-[10px] text-zinc-400 space-y-1 overflow-x-auto scrollbar-none ${
        align === "right" ? "md:text-left" : "md:text-left"
      }`}>
        <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
          <GitCommit className="w-3.5 h-3.5" />
          <span>ROUTE_HOP://log_records</span>
        </div>
        {event.logs.map((log, i) => (
          <p key={i}>
            <span className="text-emerald-500 font-bold">&gt;</span> {log}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
