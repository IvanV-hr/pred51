import { useState } from "react";
import Button from "./Button";

export function Header({ naslov }) {
  const [otvoren, setOtvoren] = useState(false);

  return (
    <>
      <a className="skip-veza" href="#glavni-sadrzaj">
        Preskoci na sadrzaj
      </a>
      <header>
        <div className="header-wrapper">
          <a className="header-logo" href="#glavni-sadrzaj">
            React
          </a>
          <Button
            className="hamburger"
            aria-label="Otvori izbornik"
            aria-controls="header-nav"
            aria-expanded={otvoren}
            onClick={() => setOtvoren(!otvoren)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Button>
          <nav
            id="header-nav"
            className={`nav-izbornik ${otvoren ? "otvoren" : ""}`}
            aria-label="Glavna navigacija"
          >
            <ul className="header-linkovi">
              <li>
                <a href="#sadrzaj" onClick={() => setOtvoren(false)}>
                  {naslov}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
