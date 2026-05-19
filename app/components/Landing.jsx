"use client";

import { useState, useEffect, useRef } from "react";
import "./landing.css";
import { PROJECTS, STACK, ABOUT_CARDS, BLOG, STATS } from "./data.js";

// ── TYPED TEXT ───────────────────────────────────────────────
const TYPED_TEXT = "Software Engineer.";

// ── HOOKS ────────────────────────────────────────────────────
function useTyped(text, speed = 52, startDelay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, []);

  return [displayed, done];
}

function useCount(target, duration = 1600) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * e));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started]);

  return [ref, val];
}

// ── SMALL COMPONENTS ─────────────────────────────────────────
function TypedTitle() {
  const [displayed, done] = useTyped(TYPED_TEXT, 52, 250);
  const words = displayed.split(" ");
  return (
    <span className="hero-line-typed">
      <span className="line-primary">{words[0]}</span>
      {words.length > 1 && (
        <span className="line-accent"> {words.slice(1).join(" ")}</span>
      )}
      <span className={`typed-cursor ${done ? "typed-cursor--blink" : ""}`}>|</span>
    </span>
  );
}

function StatItem({ val: target, suffix, label, delay, static: isStatic }) {
  const [ref, val] = useCount(isStatic ? 0 : target);
  return (
    <div ref={ref} className="stat-item" style={{ animationDelay: `${delay}ms` }}>
      <span className="stat-num">{isStatic ? target : `${val}${suffix}`}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Tag({ label, color }) {
  return <span className={`tag tag-${color}`}>{label.split(" · ")[0]}</span>;
}

// ── SECTIONS ─────────────────────────────────────────────────
function HomeSection() {
  return (
    <>
      <section className="l-hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          Available for contract &amp; full-time
        </div>

        <h1 className="hero-title">
          <TypedTitle />
        </h1>

        <p className="hero-desc">
          Decade of tech experience. MERN at American Express.
          350+ students instructed at UPenn, Columbia, GWU &amp; Rutgers.
          Patience is everything.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('nav', { detail: 'work' }))}>View Work</button>
          <button className="btn-ghost" onClick={() => window.dispatchEvent(new CustomEvent('nav', { detail: 'about' }))}>About Me</button>
        </div>
      </section>

      <section className="l-stats">
        {STATS.map((s, i) => (
          <StatItem key={i} {...s} delay={600 + i * 80} />
        ))}
      </section>
    </>
  );
}

function WorkSection() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div className="section-wrap">
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">ls -la ./projects</span>
      </div>
      <div className="cards-list">
        {PROJECTS.map((p, i) => (
          <div key={p.id} className="card">
            <div className="card-header">
              <div className="card-title-group">
                <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="card-title">{p.title}</h3>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener" className="card-live-link">↗ live</a>
                )}
              </div>
              <div className="card-meta">
                <span className="card-year">{p.year}</span>
                <Tag label={p.tag} color={p.tagColor} />
              </div>
            </div>
            <p className="card-desc">{p.desc}</p>
            <div className="metrics">
              {p.metrics.map((m) => <span key={m} className="metric">{m}</span>)}
            </div>
            <div className="pills">
              {p.stack.map((s) => <span key={s} className="pill">{s}</span>)}
            </div>
            {p.curriculum && (
              <>
                <button className="curr-toggle" onClick={() => toggle(p.id)}>
                  {expanded === p.id ? "▲ hide curriculum" : "▼ view curriculum"}
                </button>
                {expanded === p.id && (
                  <div className="curr-panel">
                    <p className="curr-panel-label">// curriculum modules</p>
                    {p.curriculum.map((item, ci) => (
                      <div key={ci} className="curr-item">{item}</div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StackSection() {
  return (
    <div className="section-wrap">
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat ./stack.json</span>
      </div>
      <div className="stack-grid">
        {Object.entries(STACK).map(([cat, items]) => (
          <div key={cat} className="stack-card">
            <div className="stack-card-header">
              <span className="stack-card-comment">//</span>
              <span className="stack-card-title">{cat}</span>
            </div>
            <div className="pills">
              {items.map((item) => <span key={item} className="pill">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="section-wrap about-section">
      <div className="section-prompt">
        <span className="prompt-dollar">$</span>
        <span className="prompt-cmd">cat ./about.md</span>
      </div>
      <div className="about-body">
        <p className="about-p-primary">
          Persistent software engineer with over a decade of tech grit. I build
          things that scale, harden things that need protecting, and teach what
          the industry doesn't.
        </p>
        <p className="about-p-secondary">
          At American Express I shipped MERN stack features touching 100,000+
          daily users and led the Angular → React migration. At edX I mentored
          350+ students across UPenn, GWU, and Rutgers — instructing full stack
          web dev and data analytics bootcamps with 250+ hours of live teaching.
        </p>
        <p className="about-p-secondary">
          Outside of product work i've built a 660K-domain network blocklist,
          and rebuilt compromised businesse's websites to 100/100 Lighthouse.
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
    <div className="section-wrap">
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

// ── ROOT ─────────────────────────────────────────────────────
const NAV_ITEMS = ["home", "work", "stack", "about", "writing"];

export default function Landing() {
  const [active, setActive] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handler = (e) => { setActive(e.detail); setMenuOpen(false); };
    window.addEventListener('nav', handler);
    return () => window.removeEventListener('nav', handler);
  }, []);

  const sections = {
    home:    <HomeSection />,
    work:    <WorkSection />,
    stack:   <StackSection />,
    about:   <AboutSection />,
    writing: <WritingSection />,
  };

  return (
    <div className={`landing ${loaded ? "loaded" : ""}`}>

      <div className="mesh" aria-hidden="true">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>

      <header className="l-header">
        <div className="l-header-inner">
          <button
            className={`l-logo ${glitch ? "glitch on" : "glitch"}`}
            data-text="James Newman"
            onClick={() => { setActive("home"); setMenuOpen(false); }}
          >
            James Newman
          </button>

          <nav className="l-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className={`nav-btn ${active === item ? "active" : ""}`}
                onClick={() => setActive(item)}
              >
                {active === item ? `> ${item}` : item}
              </button>
            ))}
            <a
              href="https://github.com/root-1-toor"
              target="_blank"
              rel="noopener"
              className="l-nav-cta"
            >
              GitHub ↗
            </a>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`mobile-nav-btn ${active === item ? "active" : ""}`}
              onClick={() => { setActive(item); setMenuOpen(false); }}
            >
              {active === item ? `> ${item}` : item}
            </button>
          ))}
          <a
            href="https://github.com/root-1-toor"
            target="_blank"
            rel="noopener"
            className="mobile-nav-cta"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <main className="l-main">
        {sections[active]}
      </main>

      <footer className="l-footer">
        <span className="l-footer-copy">James Newman © 2026</span>
      </footer>

    </div>
  );
}
