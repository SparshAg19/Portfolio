"use client";

import { Award, ShieldCheck, Cpu, Database, Award as CertIcon, Clock } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  id: string;
  status: "verified" | "in-progress";
  icon: React.ReactNode;
  url: string;
}

export default function Certifications() {
  const certs: Certification[] = [
    {
      name: "TryHackMe Security Training",
      issuer: "TryHackMe",
      id: "THM-LEARNER-ACTIVE",
      status: "in-progress",
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      url: "https://tryhackme.com"
    },
    {
      name: "Google AI Fundamentals",
      issuer: "Google",
      id: "G-AI-FUND-9201",
      status: "verified",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      url: "https://grow.google/ai-fundamentals"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      id: "CISCO-SEC-3904A",
      status: "verified",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      url: "https://www.netacad.com"
    },
    {
      name: "Python Programming Essentials",
      issuer: "Cisco Networking Academy",
      id: "CISCO-PY-Essentials",
      status: "verified",
      icon: <Database className="w-5 h-5 text-teal-500" />,
      url: "https://www.netacad.com"
    },
    {
      name: "Machine Learning Foundations",
      issuer: "DeepLearning.AI / Coursera",
      id: "DLAI-ML-FOUND-09",
      status: "verified",
      icon: <Award className="w-5 h-5 text-accent" />,
      url: "https://deeplearning.ai"
    }
  ];

  return (
    <section id="certifications" className="py-24 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <CertIcon className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground">
            Certifications & Credentials
          </h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
            >
              <div>
                {/* Header Icon + Verification Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-border/20 border border-border transition-colors">
                    {cert.icon}
                  </div>
                  
                  {cert.status === "verified" ? (
                    <span className="flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded-full select-none">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      VERIFIED
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[9px] font-mono font-bold tracking-wider text-amber-500 border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 rounded-full select-none">
                      <Clock className="w-2.5 h-2.5" />
                      IN PROGRESS
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-sm font-sans font-bold text-foreground mb-1 group-hover:text-accent transition-colors leading-snug">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-muted font-sans mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Footer: Id & Link */}
              <div className="pt-4 border-t border-border/70 flex items-center justify-between select-none">
                <span className="text-[10px] font-mono text-zinc-500">
                  ID: {cert.id}
                </span>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-accent hover:underline"
                >
                  Verify Key
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
