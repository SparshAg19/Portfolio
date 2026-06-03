"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import NetworkGraph from "../NetworkGraph";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-20 overflow-hidden border-b border-border bg-background">
      {/* Interactive Network Graph Background */}
      <div className="absolute inset-0 z-0">
        <NetworkGraph />
        {/* Soft Radial Gradients for premium blending and masking */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,var(--background)_90%)] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Status Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent-light text-accent-foreground text-xs md:text-sm font-mono tracking-tight mb-8"
          >
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse text-accent" />
            <span>Securing Systems • Deploying Intelligence</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-foreground"
          >
            SPARSH AGARWAL
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-base md:text-xl font-mono text-muted max-w-2xl"
          >
            Computer Science Student @ VIT Vellore • Cybersecurity Enthusiast • AI Developer
          </motion.h2>

          {/* Headline Statement */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-foreground font-sans max-w-2xl leading-relaxed"
          >
            I build intelligent systems and security-focused applications that solve real-world problems.
          </motion.p>

          {/* Main Action Callouts */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4 items-center justify-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 active:scale-98 transition-all duration-200 cursor-pointer shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-border/30 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Core Navigation Icons / Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-5"
          >
            <a
              href="https://github.com/SparshAg19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-accent hover:border-accent/40 active:scale-95 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/sparsh-agarwal19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-accent hover:border-accent/40 active:scale-95 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              href="mailto:sparsh.agarwal2025@vitstudent.ac.in"
              className="p-2.5 rounded-full border border-border bg-card text-foreground hover:text-accent hover:border-accent/40 active:scale-95 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Down Arrow Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-muted" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
