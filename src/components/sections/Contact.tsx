"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Terminal, Send, CheckCircle2, ShieldCheck, KeyRound } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [transmitting, setTransmitting] = useState(false);
  const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);
  const [transmitted, setTransmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setTransmitting(true);
    setTransmissionLogs([]);

    const logs = [
      "Establishing connection to secure socket...",
      "Configuring TLS v1.3 handshake session key...",
      "Resolving routing hop: vitstudent.ac.in...",
      "Encrypting message payload using SHA-256...",
      "Verifying integrity checksums... OK.",
      "Pushing payload over SMTP transmission tunnel...",
      "Transmission finalized successfully."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setTransmissionLogs(prev => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTransmitting(false);
        setTransmitted(true);
        // Reset form
        setEmail("");
        setMessage("");
      }
    }, 450);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Mail className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
          <div className="h-px flex-1 bg-border ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-foreground">
                Let&apos;s build something secure and intelligent together.
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Whether you want to discuss a vulnerability scanner integration, an AI platform prototype, or check opportunities for research collaborations, feel free to transmit a packet or reach out on any channel.
              </p>
            </div>

            {/* Social contact list */}
            <div className="space-y-4 font-mono text-xs">
              <a
                href="mailto:sparsh.agarwal2025@vitstudent.ac.in"
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/40 hover:bg-accent-light/5 transition-all duration-200"
              >
                <div className="p-2 rounded bg-accent-light/10 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-zinc-500 uppercase tracking-wider text-[9px]">Email Protocol</p>
                  <p className="text-foreground text-sm font-semibold mt-0.5 truncate break-all">
                    sparsh.agarwal2025@vitstudent.ac.in
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sparsh-agarwal19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/40 hover:bg-accent-light/5 transition-all duration-200"
              >
                <div className="p-2 rounded bg-blue-500/10 text-blue-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase tracking-wider text-[9px]">LinkedIn Channel</p>
                  <p className="text-foreground text-sm font-semibold mt-0.5">
                    linkedin.com/in/sparsh-agarwal19
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/SparshAg19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent/40 hover:bg-accent-light/5 transition-all duration-200"
              >
                <div className="p-2 rounded bg-zinc-800/10 text-foreground">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase tracking-wider text-[9px]">GitHub Repositories</p>
                  <p className="text-foreground text-sm font-semibold mt-0.5">
                    github.com/SparshAg19
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Secure SMTP Terminal */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 rounded-xl border border-border bg-card shadow-lg flex flex-col overflow-hidden">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-border/25 border-b border-border/70 select-none">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-muted" />
                  <span className="font-mono text-xs text-muted">SMTP_TUNNEL://transmission-node</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[9px] text-accent tracking-tight">SECURE SESSION</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 p-6 bg-card flex flex-col justify-between">
                
                <AnimatePresence mode="wait">
                  {!transmitting && !transmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                          Sender Identity (Email)
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@netgate.com"
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground font-mono text-xs md:text-sm focus:outline-hidden focus:ring-1 focus:ring-accent focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1.5">
                          Message Payload
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write your transmission contents here..."
                          className="w-full px-3 py-2 rounded border border-border bg-background text-foreground font-mono text-xs md:text-sm focus:outline-hidden focus:ring-1 focus:ring-accent focus:border-accent resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-accent text-white font-mono text-xs hover:opacity-95 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Encrypted Payload</span>
                      </button>
                    </motion.form>
                  ) : transmitting ? (
                    <motion.div
                      key="transmission-logs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-1.5 font-mono text-xs md:text-sm bg-black text-zinc-300 p-4 rounded-lg border border-border/80 flex-1 min-h-[220px]"
                    >
                      <div className="flex items-center gap-2 text-accent font-bold mb-3 select-none">
                        <KeyRound className="w-4 h-4 animate-pulse" />
                        <span>SECURE PORT ENCRYPTION RUNNING</span>
                      </div>
                      
                      {transmissionLogs.map((log, index) => (
                        <p key={index} className="text-zinc-300">
                          <span className="text-emerald-500 font-bold">&gt;</span> {log}
                        </p>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="transmission-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-8 text-center flex-1 space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 animate-bounce">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-sans font-bold text-foreground text-lg">
                          Packet Transmitted Successfully
                        </h4>
                        <p className="text-xs text-muted font-sans max-w-xs leading-relaxed">
                          Your secure query has been logged and routed to Sparsh Agarwal&apos;s primary mailbox. Expect a handshake callback soon!
                        </p>
                      </div>

                      <button
                        onClick={() => setTransmitted(false)}
                        className="px-4 py-2 rounded border border-border bg-card text-foreground font-mono text-xs hover:bg-border/30 cursor-pointer"
                      >
                        Reset Tunnel
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
