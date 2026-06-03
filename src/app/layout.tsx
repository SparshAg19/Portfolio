import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparsh Agarwal | AI & Cybersecurity Systems Engineer",
  description: "Sparsh Agarwal is a Computer Science student at VIT Vellore, specializing in Cybersecurity and AI. Discover projects, research, and technical insights.",
  keywords: ["Sparsh Agarwal", "VIT Vellore", "Cybersecurity Student", "AI Developer", "Threat Intelligence", "Agro AI", "Network Vulnerability Scanner", "Software Engineer"],
  authors: [{ name: "Sparsh Agarwal" }],
  openGraph: {
    title: "Sparsh Agarwal | AI & Cybersecurity Systems Engineer",
    description: "Sparsh Agarwal is a Computer Science student at VIT Vellore, specializing in Cybersecurity and AI.",
    type: "website",
    url: "https://sparshagarwal.dev", // Dummy domain for SEO, can be updated later
  },
};

const inlineThemeScript = `
  (function() {
    try {
      var storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: inlineThemeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-accent selection:text-white dark:selection:text-black">
        {children}
      </body>
    </html>
  );
}
