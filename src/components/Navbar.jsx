import { useState } from "react";
import "./Navbar.css";

const links = ["home", "about", "skills", "projects", "contact"];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text">ACHIN.STD</span>
        <span className="logo-bracket">]</span>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={activeSection === link ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <span className="link-num">{String(links.indexOf(link) + 1).padStart(2, "0")}.</span>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
