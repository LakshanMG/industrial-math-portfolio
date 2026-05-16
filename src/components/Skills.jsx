import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skillGroups = [
  {
    category: "Mathematical Core",
    color: "cyan",
    skills: [
      { name: "Operational Reasearch", level: 95 },
      { name: "Numerical Analysis", level: 80 },
      { name: "Differential Equations", level: 90 },
      { name: "Network Optimization", level: 90 },
      { name: "Graph Theory", level: 88 },
      { name: "Mathematical Modelling", level: 92 },
    ],
  },
  {
    category: "Computation",
    color: "amber",
    skills: [
      { name: "MATLAB ", level: 90 },
      { name: "R / Statistics", level: 80 },
    ],
  },
  {
    category: "Physics",
    color: "green",
    skills: [
      { name: "Electronics", level: 80 },
      { name: "Solid State", level: 90 },
      { name: "Energy Resources", level: 80 },
      { name: "Electromagnetism", level: 70 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className={`skill-pct ${color}`}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className={`skill-fill skill-fill--${color}`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <p className="section-label">// 02. skills</p>
      <h2 className="section-title">
        Capabilities &<br />
        <span className="highlight">Toolset</span>
      </h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className={`group-title group-title--${group.color}`}>
              {group.category}
            </h3>
            <div className="skill-list">
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} color={group.color} animate={animate} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
