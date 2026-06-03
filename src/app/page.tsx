"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Terminal, Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Certifications", href: "certifications" },
    { label: "Journey", href: "journey" },
    { label: "Contact", href: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex-1 bg-background text-foreground transition-colors duration-300">
      {/* Premium Header / Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-background/80 backdrop-blur-md border-b border-border"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer font-mono text-sm font-bold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            <Shield className="w-4.5 h-4.5 text-accent animate-pulse" />
            <span>SPARSH.DEV //</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-card/40 border border-border/60 rounded-full px-1.5 py-1 backdrop-blur-xs">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-1.5 rounded-full text-xs font-mono text-muted hover:text-foreground hover:bg-border/20 transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Row (ThemeToggle + Mobile menu trigger) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-border bg-card text-foreground hover:bg-border/30 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-background border-b border-border shadow-lg p-6 flex flex-col gap-4 font-mono text-sm"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-2 text-muted hover:text-foreground border-b border-border/20 last:border-0 cursor-pointer"
              >
                &gt; {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pages Container */}
      <main className="w-full pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30 text-center text-xs md:text-sm font-mono text-muted">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 select-none">
            <Terminal className="w-4 h-4 text-accent" />
            <span>Built by Sparsh Agarwal © {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] md:text-xs">
            <span>SECURE SHELL PROTOCOL ACTIVE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  );
}
