// ============================================================
//  data.ts  –  Edit ALL your portfolio content here.
//  Sections: hero, about, skills, projects, certifications, contact
// ============================================================

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  tag: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  status: 'completed' | 'in-progress';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;  // emoji icon
}

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  name: 'Sparsh Agarwal',
  titles: [
    'Cybersecurity Enthusiast',
    'Ethical Hacker in Training',
    'Network Security Explorer',
    'B.Tech @ VIT Vellore',
  ],
  tagline: 'Building secure systems, breaking insecure ones.',
  github: 'https://github.com/SparshAg19',
  linkedin: 'https://www.linkedin.com/in/sparsh-agarwal19',
  emailWork: 'sparsh.agarwal25@vitstudent.ac.in',
  emailPersonal: 'agrsparsh191107@gmail.com',
  resumeLink: '#', // swap with actual resume URL
};

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    `I'm a B.Tech Cybersecurity student at VIT Vellore with a deep interest in understanding how systems are built — and how they break. My focus lies in network security, ethical hacking, and developing tools that make the digital world safer.`,
    `When I'm not dissecting vulnerabilities, I'm writing Python scripts, exploring Linux internals, or building security-focused applications. I believe the best defenders think like attackers.`,
  ],
};

// ── Skills ────────────────────────────────────────────────────
export const skills: Skill[] = [
  { name: 'Networking',        level: 80, icon: '🌐' },
  { name: 'Ethical Hacking',   level: 72, icon: '🔓' },
  { name: 'Linux',             level: 85, icon: '🐧' },
  { name: 'Python',            level: 78, icon: '🐍' },
  { name: 'C Programming',     level: 70, icon: '⚙️' },
  { name: 'Web Security',      level: 75, icon: '🛡️' },
  { name: 'Cryptography',      level: 65, icon: '🔐' },
  { name: 'Wireshark / NMAP',  level: 73, icon: '📡' },
];

// ── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'Network Vulnerability Scanner',
    description:
      'A Python-based CLI tool that scans a target network for open ports, identifies running services, and flags known CVEs using the NVD API. Generates a structured HTML report.',
    tech: ['Python', 'Scapy', 'NMAP', 'NVD API'],
    github: 'https://github.com/SparshAg19',
    tag: 'Network Security',
  },
  {
    title: 'Password Strength Analyzer',
    description:
      'Analyses password entropy, checks against common breach databases (via HaveIBeenPwned API), and provides actionable improvement suggestions. Built as a web app with a live score meter.',
    tech: ['TypeScript', 'Vite', 'HIBP API', 'CSS3'],
    github: 'https://github.com/SparshAg19',
    tag: 'Cryptography',
  },
  {
    title: 'Phishing Detection Tool',
    description:
      'Browser extension + Flask backend that scores URLs and email content for phishing indicators using heuristic rules and a lightweight ML classifier trained on the PhishTank dataset.',
    tech: ['Python', 'Flask', 'scikit-learn', 'JS Extension'],
    github: 'https://github.com/SparshAg19',
    tag: 'ML + Security',
  },
  {
    title: 'Secure File Encryption App',
    description:
      'Desktop application for AES-256 file encryption/decryption with password-derived keys (PBKDF2). Supports drag-and-drop, secure key storage, and a clean dark GUI built with Tkinter.',
    tech: ['Python', 'PyCryptodome', 'Tkinter', 'PBKDF2'],
    github: 'https://github.com/SparshAg19',
    tag: 'Cryptography',
  },
  {
    title: 'Web App Firewall Prototype',
    description:
      'A lightweight reverse-proxy WAF written in Python that detects and blocks common OWASP Top-10 attacks — SQLi, XSS, CSRF — using rule-based pattern matching with real-time logging.',
    tech: ['Python', 'FastAPI', 'Regex', 'Docker'],
    github: 'https://github.com/SparshAg19',
    tag: 'Web Security',
  },
];

// ── Certifications ────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    year: '2024',
    status: 'completed',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2025',
    status: 'in-progress',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    year: '2023',
    status: 'completed',
  },
  {
    title: 'Introduction to Cryptography',
    issuer: 'Stanford Online',
    year: '2024',
    status: 'completed',
  },
];
