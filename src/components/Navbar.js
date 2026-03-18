import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const closeMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu && mobileMenu.classList.contains("show")) {
      mobileMenu.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-overlay py-5 text-white">
      <div className="container position-relative d-flex justify-content-between align-items-center">
        <ul className="navbar-nav d-lg-flex d-none align-items-center nav-left custom-gap">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              NASLOVNA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/o-nama" className="nav-link text-white">
              O NAMA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/usluge">
              USLUGE
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/"
          className="navbar-brand position-absolute top-50 start-50 translate-middle"
        >
          <img
            src={`${process.env.PUBLIC_URL}/DV-materijali/digital_normalnno-01.png`}
            alt="Digital Value logo"
            height="160"
          />
        </NavLink>

        <ul className="navbar-nav d-lg-flex d-none align-items-center nav-right custom-gap">
          <li className="nav-item">
            <NavLink className="nav-link" to="/projekti">
              PROJEKTI
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/kontakt">
              KONTAKT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/FAQ">
              FAQ
            </NavLink>
          </li>
        </ul>

        {/* HAMBURGER ZA MOB/TABLET */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse d-lg-none bg-dark w-100" id="mobileMenu">
        <ul className="navbar-nav d-flex ms-auto flex-column text-center p-3 gap-3">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/" onClick={closeMobileMenu}>
              NASLOVNA
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/o-nama" onClick={closeMobileMenu}>
              O NAMA
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/usluge" onClick={closeMobileMenu}>
              USLUGE
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/projekti" onClick={closeMobileMenu}>
              PROJEKTI
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/kontakt" onClick={closeMobileMenu}>
              KONTAKT
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/FAQ" onClick={closeMobileMenu}>
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}