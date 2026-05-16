import "./About.css";

export default function About() {
  return (
    <section id="about">
      <p className="section-label">// 01. about</p>
      <h2 className="section-title">
        Where Math<br />
        Meets <span className="highlight">Reality</span>
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a final-year Bsc(Hons) Industrial Mathematics undergraduate at the
            Rajarata University of Sri Lanka, passionate about applying rigorous mathematical
            theory to solve real engineering and industrial challenges.
          </p>
          <p>
            My work spans numerical simulation, optimization algorithms, and
            mathematical modelling — turning abstract equations into actionable,
            computational solutions.
          </p>

          <div className="about-tags">
            {["MATLAB", "R/Studio", "Operational Research", "LaTeX", "Graph Theory", "Network Optimization"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="about-sidebar">
          <div className="info-card">
            <div className="info-row">
              <span className="info-key">degree</span>
              <span className="info-val">BSc(Hons) Industrial Mathematics</span>
            </div>
            <div className="info-row">
              <span className="info-key">university</span>
              <span className="info-val">Rajarata University of Sri Lanka</span>
            </div>
            <div className="info-row">
              <span className="info-key">year</span>
              <span className="info-val">Final Year (2026)</span>
            </div>
            <div className="info-row">
              <span className="info-key">location</span>
              <span className="info-val">Malsiripura, Sri Lanka</span>
            </div>
            <div className="info-row">
              <span className="info-key">focus</span>
              <span className="info-val">Industrial Mathematics</span>
            </div>
          </div>

          <div className="equation-block">
            <span className="eq-label">Euler–Lagrange Equation</span>
            <p className="eq-text">∂L/∂q − d/dt(∂L/∂q̇) = 0</p>
          </div>
        </div>
      </div>
    </section>
  );
}
