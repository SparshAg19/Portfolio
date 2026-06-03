"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Determine initial theme
    const isDark = document.documentElement.classList.contains("dark");
    const frame = requestAnimationFrame(() => {
      setTheme(isDark ? "dark" : "light");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-border/30 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-accent"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <span
          className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ${
            theme === "dark" ? "translate-y-0 rotate-0 scale-100" : "translate-y-10 rotate-45 scale-50"
          }`}
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ${
            theme === "light" ? "translate-y-0 rotate-0 scale-100" : "-translate-y-10 -rotate-45 scale-50"
          }`}
        >
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        </span>
      </div>
    </button>
  );
}
