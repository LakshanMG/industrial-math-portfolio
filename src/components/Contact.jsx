import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-label">// 04. contact</p>
      <h2 className="section-title">
        Let's<br />
        <span className="highlight">Connect</span>
      </h2>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-intro">
            Open to research collaborations, internship opportunities,
            and interesting mathematical problems. Let's build something together.
          </p>

          <div className="contact-links">
            {[
              { label: "Email", value: "achindulara@icloud.com" },
              { label: "GitHub", value: "github.com/achindulara", href: "#" },
              { label: "LinkedIn", value: "linkedin.com/in/achindulara", href: "https://www.linkedin.com/in/achin-dulara-3541383b1" },
            ].map(({ label, value, href }) => (
              <a key={label} href={href} className="contact-link-row" target="_blank" rel="noreferrer">
                <span className="contact-link-label">{label}</span>
                <span className="contact-link-val">{value}</span>
              </a>
            ))}
          </div>

          <div className="availability">
            <span className="avail-dot" />
            Available for opportunities
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <span className="footer-eq">∫₋∞^∞ e^(−x²) dx = √π</span>
        <span className="footer-copy">© 2026 Achin Dulara · Built with React · Deployed on GitHub Pages</span>
      </footer>
    </section>
  );
}