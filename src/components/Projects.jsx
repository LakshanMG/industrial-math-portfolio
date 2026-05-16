import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Modeling & Evaluating Synthetic Bridge Nodes",
    category: "Industrial Mathematics",
    tags: ["Graph Theory", "Network Optimization", "Matlab", "R/Studio"],
    desc: "The research demonstrates that a minimal number of synthetic nodes can substantially mitigate the effects of network fragmentation, offering a theoretical framework for maintaining communication efficiency during disruptions.",
    equation: "∇·u = 0, ρ(∂u/∂t + u·∇u) = −∇p + μ∇²u",
    featured: true,
  },
];

const categories = ["All", "Industrial Mathematics"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects">
      <p className="section-label">// 03. projects</p>
      <h2 className="section-title">
        Selected<br />
        <span className="highlight">Work</span>
      </h2>

      <div className="filter-tabs">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${active === c ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p) => (
          <div key={p.id} className={`project-card ${p.featured ? "featured" : ""}`}>
            {p.featured && <span className="featured-badge">⋆ Featured</span>}
            <div className="project-meta">
              <span className="project-category">{p.category}</span>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="project-equation">
              <code>{p.equation}</code>
            </div>

            <div className="project-footer">
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
