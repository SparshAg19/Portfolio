// ============================================================
//  src/main.ts  –  Portfolio entry point
//  Imports data from data/data.ts and renders every section
// ============================================================

import './styles/main.css';
import { hero, about, skills, projects, certifications } from './data/data';

// ── Helpers ───────────────────────────────────────────────────
const qs  = <T extends HTMLElement>(sel: string): T =>
  document.querySelector(sel) as T;
const qsa = (sel: string): NodeListOf<HTMLElement> =>
  document.querySelectorAll(sel);

// ── Scroll-progress bar ───────────────────────────────────────
function initScrollProgress(): void {
  const bar = qs<HTMLDivElement>('#scroll-progress');
  window.addEventListener('scroll', () => {
    const pct =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = `${pct}%`;
  }, { passive: true });
}

// ── Custom cursor ─────────────────────────────────────────────
function initCursor(): void {
  const cursor = qs<HTMLDivElement>('#cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 7 + 'px';
    cursor.style.top  = e.clientY - 7 + 'px';
  });
  document.querySelectorAll('a, button, .project-card, .cert-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}

// ── Navbar scroll-shrink + active link ───────────────────────
function initNavbar(): void {
  const nav     = qs<HTMLElement>('#navbar');
  const toggle  = qs<HTMLElement>('#nav-toggle');
  const navMenu = qs<HTMLElement>('.nav-links');
  const links   = qsa('.nav-links a');
  const sections: HTMLElement[] = Array.from(qsa('section[id]'));

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    // active link
    let current = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  links.forEach((l) => l.addEventListener('click', () => navMenu.classList.remove('open')));
}

// ── Typing animation ──────────────────────────────────────────
function initTyping(titles: string[]): void {
  const el    = qs<HTMLSpanElement>('#typed-text');
  let ti = 0, ci = 0, deleting = false;

  function tick() {
    const current = titles[ti];
    if (!deleting) {
      el.textContent = current.slice(0, ++ci);
      if (ci === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ti = (ti + 1) % titles.length;
      }
    }
    setTimeout(tick, deleting ? 50 : 90);
  }
  tick();
}

// ── Particle canvas (hero background) ────────────────────────
function initParticles(): void {
  const canvas = qs<HTMLCanvasElement>('#hero-canvas');
  const ctx    = canvas.getContext('2d')!;
  let W = 0, H = 0;

  interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    r: number; alpha: number;
  }

  const PARTICLE_COUNT = 90;
  const particles: Particle[] = [];

  function resize() {
    W = canvas.width  = canvas.parentElement!.offsetWidth;
    H = canvas.height = canvas.parentElement!.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const LINK_DIST = 120;

    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,224,${p.alpha})`;
      ctx.fill();
    });

    // draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,255,224,${0.12 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ── Reveal on scroll ──────────────────────────────────────────
function initReveal(): void {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // animate skill bars if inside skills section
        const fills = (e.target as HTMLElement).querySelectorAll<HTMLElement>('.skill-fill');
        fills.forEach((f) => { f.style.width = f.dataset.level + '%'; });
      }
    }),
    { threshold: 0.12 }
  );
  qsa('.reveal').forEach((el) => io.observe(el));
}

// ── Render: Hero ──────────────────────────────────────────────
function renderHero(): void {
  qs<HTMLElement>('.hero-name').textContent = hero.name;
  qs<HTMLAnchorElement>('#github-link').href = hero.github;
  qs<HTMLAnchorElement>('#linkedin-link').href = hero.linkedin;
  qs<HTMLAnchorElement>('#email-link').href = `mailto:${hero.emailWork}`;
  qs<HTMLAnchorElement>('#resume-btn').href = hero.resumeLink;
  qs<HTMLElement>('.hero-tagline').textContent = hero.tagline;
}

// ── Render: About ─────────────────────────────────────────────
function renderAbout(): void {
  const textEl = qs<HTMLElement>('.about-text');
  textEl.innerHTML = about.paragraphs
    .map((p) => `<p>${p}</p>`)
    .join('');
}

// ── Render: Skills ────────────────────────────────────────────
function renderSkills(): void {
  const grid = qs<HTMLElement>('.skills-grid');
  grid.innerHTML = skills.map((s) => `
    <div class="skill-item">
      <div class="skill-meta">
        <span class="skill-name">${s.icon} ${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-level="${s.level}" style="width:0%"></div>
      </div>
    </div>
  `).join('');
}

// ── Render: Projects ──────────────────────────────────────────
function renderProjects(): void {
  const grid = qs<HTMLElement>('.projects-grid');
  grid.innerHTML = projects.map((p) => `
    <div class="project-card reveal">
      <div class="project-tag">${p.tag}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.description}</div>
      <div class="project-tech">
        ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <a href="${p.github}" class="project-link" target="_blank" rel="noopener">
        View on GitHub →
      </a>
    </div>
  `).join('');
}

// ── Render: Certifications ────────────────────────────────────
function renderCerts(): void {
  const icons = ['🏆', '🎯', '📡', '🔐'];
  const grid  = qs<HTMLElement>('.cert-grid');
  grid.innerHTML = certifications.map((c, i) => `
    <div class="cert-card reveal">
      <div class="cert-icon">${icons[i % icons.length]}</div>
      <div class="cert-info">
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer} · ${c.year}</div>
        <span class="cert-status ${c.status}">${c.status === 'in-progress' ? 'In Progress' : 'Completed'}</span>
      </div>
    </div>
  `).join('');
}

// ── Render: Contact items ─────────────────────────────────────
function renderContact(): void {
  qs<HTMLAnchorElement>('#contact-email-work').href  = `mailto:${hero.emailWork}`;
  qs<HTMLElement>('#contact-email-work-val').textContent  = hero.emailWork;
  qs<HTMLAnchorElement>('#contact-email-pers').href  = `mailto:${hero.emailPersonal}`;
  qs<HTMLElement>('#contact-email-pers-val').textContent  = hero.emailPersonal;
  qs<HTMLAnchorElement>('#contact-github').href      = hero.github;
  qs<HTMLAnchorElement>('#contact-linkedin').href    = hero.linkedin;
}

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderCerts();
  renderContact();

  initScrollProgress();
  initCursor();
  initNavbar();
  initTyping(hero.titles);
  initParticles();
  initReveal();
});
