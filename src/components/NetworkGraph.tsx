"use client";

import { useEffect, useRef } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  threatLevel: 0 | 1 | 2; // 0 = Secure (Teal), 1 = Scanning (Amber), 2 = Alert (Red)
  pulse: number;
  pulseSpeed: number;
}

interface Packet {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
}

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    const packets: Packet[] = [];
    const maxNodes = 60;
    const connectionDist = 120;
    const mouseConnectionDist = 180;

    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initNodes();
    };

    const initNodes = () => {
      if (!canvas) return;
      nodes = [];
      const width = canvas.width;
      const height = canvas.height;

      // Make fewer nodes on mobile
      const nodeCount = width < 768 ? 25 : maxNodes;

      for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 2.5 + 1.5;
        nodes.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: radius,
          baseRadius: radius,
          threatLevel: Math.random() > 0.95 ? 2 : 0, // A few start as warning
          pulse: 0,
          pulseSpeed: 0.05 + Math.random() * 0.05,
        });
      }
    };

    // Set up mouse events
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Trigger periodic security scan packets
    const triggerScan = () => {
      if (nodes.length === 0) return;
      const isDark = document.documentElement.classList.contains("dark");
      
      // Select a node to simulate scanning
      const sourceIdx = Math.floor(Math.random() * nodes.length);
      const targetIdx = Math.floor(Math.random() * nodes.length);

      if (sourceIdx === targetIdx) return;

      const source = nodes[sourceIdx];
      const target = nodes[targetIdx];

      // Create a line packet
      const dist = Math.hypot(target.x - source.x, target.y - source.y);
      if (dist < connectionDist * 1.5) {
        packets.push({
          fromX: source.x,
          fromY: source.y,
          toX: target.x,
          toY: target.y,
          progress: 0,
          speed: 0.01 + Math.random() * 0.02,
          color: isDark ? "#2dd4bf" : "#0d9488",
        });

        // Trigger a node status shift
        if (target.threatLevel === 2) {
          target.threatLevel = 1; // scanning
          setTimeout(() => {
            target.threatLevel = 0; // safe!
          }, 1500);
        } else if (Math.random() > 0.85) {
          target.threatLevel = 2; // alert
        }
      }
    };

    const scanInterval = setInterval(triggerScan, 2000);

    // Animation Loop
    const draw = () => {
      if (!canvas || !ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      const isDark = document.documentElement.classList.contains("dark");

      ctx.clearRect(0, 0, width, height);

      // Colors configuration
      const lineColor = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(9, 9, 11, 0.03)";
      const hoverLineColor = isDark ? "rgba(20, 184, 166, 0.15)" : "rgba(13, 148, 136, 0.12)";
      const mouseNodeColor = isDark ? "rgba(20, 184, 166, 0.3)" : "rgba(13, 148, 136, 0.2)";

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dist = Math.hypot(nodeB.x - nodeA.x, nodeB.y - nodeA.y);

          if (dist < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            
            // Highlight links near mouse
            let nearMouse = false;
            if (mouseRef.current.active) {
              const distMouseA = Math.hypot(mouseRef.current.x - nodeA.x, mouseRef.current.y - nodeA.y);
              const distMouseB = Math.hypot(mouseRef.current.x - nodeB.x, mouseRef.current.y - nodeB.y);
              if (distMouseA < mouseConnectionDist && distMouseB < mouseConnectionDist) {
                nearMouse = true;
              }
            }

            ctx.strokeStyle = nearMouse ? hoverLineColor : lineColor;
            ctx.lineWidth = nearMouse ? 0.75 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections (web effect)
      if (mouseRef.current.active) {
        ctx.beginPath();
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const dist = Math.hypot(mouseRef.current.x - node.x, mouseRef.current.y - node.y);
          if (dist < mouseConnectionDist) {
            ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
            ctx.lineTo(node.x, node.y);
          }
        }
        ctx.strokeStyle = hoverLineColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Update and Draw Packets
      packets.forEach((packet, idx) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packets.splice(idx, 1);
          return;
        }

        const x = packet.fromX + (packet.toX - packet.fromX) * packet.progress;
        const y = packet.fromY + (packet.toY - packet.fromY) * packet.progress;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.fill();
      });

      // Update and Draw Nodes
      nodes.forEach((node) => {
        // Handle boundary bounce
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        // Mouse force field: push nodes away gently
        if (mouseRef.current.active) {
          const dist = Math.hypot(mouseRef.current.x - node.x, mouseRef.current.y - node.y);
          if (dist < mouseConnectionDist) {
            const force = (mouseConnectionDist - dist) / mouseConnectionDist;
            const angle = Math.atan2(node.y - mouseRef.current.y, node.x - mouseRef.current.x);
            node.vx += Math.cos(angle) * force * 0.05;
            node.vy += Math.sin(angle) * force * 0.05;
          }
        }

        // Apply friction and speed cap
        const speed = Math.hypot(node.vx, node.vy);
        const maxSpeed = 1.0;
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed;
          node.vy = (node.vy / speed) * maxSpeed;
        }

        // Apply speed decay to return to normal
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Keep them moving
        if (Math.abs(node.vx) < 0.1) node.vx += (Math.random() - 0.5) * 0.05;
        if (Math.abs(node.vy) < 0.1) node.vy += (Math.random() - 0.5) * 0.05;

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        // Compute colors depending on security threat levels
        let baseColor = "";
        let glowColor = "";

        if (node.threatLevel === 0) {
          // Secure: Teal/Cyan
          baseColor = isDark ? "#14b8a6" : "#0d9488";
          glowColor = isDark ? "rgba(20, 184, 166, 0.2)" : "rgba(13, 148, 136, 0.15)";
        } else if (node.threatLevel === 1) {
          // Scanning: Amber/Orange
          baseColor = "#f59e0b";
          glowColor = "rgba(245, 158, 11, 0.3)";
          node.pulse += node.pulseSpeed;
          node.radius = node.baseRadius * (1 + Math.sin(node.pulse) * 0.3);
        } else {
          // Alert: Red
          baseColor = "#ef4444";
          glowColor = "rgba(239, 68, 68, 0.4)";
          node.pulse += node.pulseSpeed;
          node.radius = node.baseRadius * (1.2 + Math.sin(node.pulse) * 0.4);
        }

        ctx.fillStyle = baseColor;
        ctx.fill();

        // Node aura/glow on threat levels or hover
        let showGlow = node.threatLevel > 0;
        if (mouseRef.current.active) {
          const dist = Math.hypot(mouseRef.current.x - node.x, mouseRef.current.y - node.y);
          if (dist < 100) {
            showGlow = true;
            if (node.threatLevel === 0) {
              glowColor = mouseNodeColor;
            }
          }
        }

        if (showGlow) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = glowColor;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(scanInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-65 dark:opacity-40" />
    </div>
  );
}
