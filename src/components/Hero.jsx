import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const TYPING_TEXTS = [
  "Numerical Analysis",
  "Mathematical Modelling",
  "Optimization Theory",
  "Fluid Dynamics",
  "Computational Methods",
];

// Floating math symbols for canvas
const SYMBOLS = ["∫", "∑", "∂", "∇", "π", "∞", "√", "λ", "μ", "σ", "Δ", "θ", "φ", "ψ", "Ω"];

export default function Hero() {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const particlesRef = useRef([]);

  // Typing animation
  useEffect(() => {
    const phrase = TYPING_TEXTS[phraseIdx];
    let timeout;

    if (!deleting && typedText.length < phrase.length) {
      timeout = setTimeout(() => setTypedText(phrase.slice(0, typedText.length + 1)), 80);
    } else if (!deleting && typedText.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typedText.length > 0) {
      timeout = setTimeout(() => setTypedText(typedText.slice(0, -1)), 40);
    } else if (deleting && typedText.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % TYPING_TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, deleting, phraseIdx]);

  // Canvas floating math symbols
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    particlesRef.current = Array.from({ length: 28 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      sym: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      size: Math.random() * 14 + 10,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.18 + 0.05,
      drift: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        ctx.font = `${p.size}px 'Space Mono', monospace`;
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
        ctx.fillText(p.sym, p.x, p.y);

        p.y -= p.speed;
        p.x += p.drift;

        if (p.y < -30) {
          p.y = canvas.height + 30;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -30 || p.x > canvas.width + 30) {
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="dot" />
          Industrial Mathematician
        </p>

        <h1 className="hero-name">
          Achin<br />
          <span className="hero-name-accent">Dulara</span>
        </h1>

        <div className="hero-typed">
          <span className="typed-prefix">f(x) = </span>
          <span className="typed-value">{typedText}</span>
          <span className="cursor">|</span>
        </div>

        <p className="hero-bio">
          Turning complex real-world problems into elegant<br />
          mathematical frameworks — where equations meet impact.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>

        <div className="hero-stats">
          {[
            { val: "1+", label: "Projects" },
            { val: "3.32", label: "GPA" },
          ].map(({ val, label }) => (
            <div key={label} className="stat">
              <span className="stat-val">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-formula-block">
        <pre className="formula-code">{`∂u/∂t + (u·∇)u = -∇p + ν∇²u
         ∇·u = 0`}</pre>
        <span className="formula-caption">Navier–Stokes Equations</span>
      </div>
    </section>
  );
}
