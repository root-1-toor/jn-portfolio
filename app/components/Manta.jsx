"use client";

import { useState, useEffect, useRef } from "react";
import "./manta.css";
import { NAV, PROJECTS, STACK, ABOUT_CARDS, BLOG, STATS } from "./data.js";

// ── HOOKS ────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

// ── COMPONENTS ───────────────────────────────────────────────

function Counter({ target, suffix = "", start = 0, duration = 1800 }) {
  const [val, setVal] = useState(start);
  const [ref, inView] = useInView(0.5);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView]);

  return <span ref={ref}>{val}{suffix}</span>;
}

function Tag({ label, color }) {
  return (
    <span className={`tag tag-${color}`}>
      {label.split(" · ")[0]}
    </span>
  );
}

function ProjectCard({ project, index, expanded, onToggle }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="card-title">{project.title}</h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener"
              className="card-live-link"
            >
              ↗ live
            </a>
          )}
        </div>
        <div className="card-meta">
          <span className="card-year">{project.year}</span>
          <Tag label={project.tag} color={project.tagColor} />
        </div>
      </div>

      <p className="card-desc">{project.desc}</p>

      <div className="metrics">
        {project.metrics.map((m) => (
          <span key={m} className="metric">{m}</span>
        ))}
      </div>

      <div className="pills">
        {project.stack.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>

      {project.curriculum && (
        <>
          <button
            className="curr-toggle"
            onClick={() => onToggle(project.id)}
          >
            {expanded ? "▲ hide curriculum" : "▼ view curriculum"}
          </button>

          {expanded && (
            <div className="curr-panel">
              <p className="curr-panel-label">// curriculum modules</p>
              {project.curriculum.map((item, i) => (
                <div key={i} className="curr-item">{item}</div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function WorkSection() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div>
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">ls -la ./projects</span>
      </div>
      <div className="cards-list">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            expanded={expanded === project.id}
            onToggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}

function StackSection() {
  return (
    <div>
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat ./stack.json</span>
      </div>
      <div className="stack-grid">
        {Object.entries(STACK).map(([category, items]) => (
          <div key={category} className="stack-card">
            <div className="stack-card-header">
              <span className="stack-card-comment">//</span>
              <span className="stack-card-title">{category}</span>
            </div>
            <div className="pills">
              {items.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="about-section">
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat ./about.md</span>
      </div>
      <div className="about-body">
        <p className="about-p-primary">
          Persistent software engineer with over a decade of tech experience. I build
          things that scale, harden things that need protecting, and teach what
          the industry doesn't.
        </p>
        <p className="about-p-secondary">
          At American Express I shipped MERN stack features touching 100,000+
          daily users and led the Angular → React migration. At edX I instructed
          350+ students across UPenn, GWU, and Rutgers — instructing full stack
          web dev and data analytics bootcamps with 250+ hours of live teaching.
        </p>
        <p className="about-p-secondary">
          Outside of product work I've built a 660K-domain network blocklist, exposed unauthorized device access on
          carrier systems, and rebuilt compromised websites from scratch to
          100/100 Lighthouse. I work across the full stack, across operating
          systems, and across disciplines.
        </p>
                <p className="about-p-secondary">
          In my free time I enjoy spending time with my dog Toby, snowboarding, building computers, figuring out how things work,
          going to the beach in the summer and attending art shows in New York City.
        </p>
      </div>
      <div className="about-grid">
        {ABOUT_CARDS.map((card) => (
          <div key={card.label} className="about-card">
            <p className="about-card-label">{card.label}</p>
            <p className="about-card-val">{card.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WritingSection() {
  return (
    <div>
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">ls ./writing --sort=date</span>
      </div>
      <div className="blog-list">
        {BLOG.map((post, i) => (
          <div key={i} className="blog-card">
            <div className="blog-card-header">
              <Tag label={post.tag} color={post.tagColor} />
              <span className="blog-date">{post.date}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-desc">{post.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ROOT COMPONENT ───────────────────────────────────────────

export default function Manta() {
  const [active, setActive] = useState("work");
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sections = {
    work:    <WorkSection />,
    stack:   <StackSection />,
    about:   <AboutSection />,
    writing: <WritingSection />,
  };

  return (
    <>
      <div className="scan" />

      <header className="header">
        <div className="header-logo">
          <div className="logo-dot" />
          <span
            className={`glitch ${glitch ? "on" : ""}`}
            data-text="manta"
          >
            <span className="logo-text">James Newman</span>
          </span>
          <span className="logo-path">~/portfolio</span>
        </div>

        <nav className="nav">
          {NAV.map((item) => (
            <button
              key={item}
              className={`nav-btn ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {active === item ? `> ${item}` : item}
            </button>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-prompt">
          <span className="hero-prompt-dollar">$</span>
          <span className="hero-prompt-cmd">James Newman</span>
        </div>

        <h1 className="hero-title">
          Software<br />
          <span className="hero-title-accent">Engineer.</span>
        </h1>

        <p className="hero-sub">
          Decade of tech experience. MERN at American Express.<br />
          350+ students instructed at UPenn, GWU &amp; Rutgers.<br />
          <span className="hero-sub-highlight">Patience is everything.</span>
        </p>

        <div className="hero-stats">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div className="stat-val">
                {stat.static
                  ? stat.val
                  : <Counter
                      target={stat.val}
                      suffix={stat.suffix}
                      start={stat.start}
                    />
                }
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="main">
        {sections[active]}
      </main>

      <footer className="footer">
        <span className="footer-copy">James Newman—</span>
        <div className="footer-links">
          <a
            href="https://github.com/root-1-toor"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            github ↗
          </a>
        </div>
      </footer>
    </>
  );
}
