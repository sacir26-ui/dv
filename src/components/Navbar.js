import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-overlay py-5 text-white">
      <div className="container position-relative d-flex justify-content-between align-items-center">
        {/* LIJEVA STRANA */}
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
       <NavLink className="nav-link" to="/usluge">USLUGE</NavLink>
        </li>
        </ul>

        {/* LOGO */}
        <a className="navbar-brand position-absolute top-50 start-50 translate-middle" href="#">
          <img src={`${process.env.PUBLIC_URL}/DV-materijali/digital_normalnno-01.png`} alt="Logo" height="160" />
        </a>

        {/* DESNA STRANA */}
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
            <NavLink className="nav-link" to="/blog">
              BLOG
            </NavLink>
          </li>
        </ul>


        {/* HAMBURGER ZA MOB */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse d-lg-none bg-dark w-100" id="mobileMenu">
        <ul className="navbar-nav d-flex ms-auto flex-column text-center p-3 gap-3">
          <li className="nav-item">

            <NavLink className="nav-link text-white" to="/naslovna">
              NASLOVNA
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/o-nama">
              O NAMA
            </NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link text-white" to="/usluge">
            USLUGE
          </NavLink>
        </li>

          <li className="nav-item"><a className="nav-link text-white" href="#">PROJEKTI</a></li>

          <li className="nav-item">
          <NavLink className="nav-link text-white" to="/kontakt">
            KONTAKT
          </NavLink>
        </li>

        
          <li className="nav-item"><a className="nav-link text-white" href="#">BLOG</a></li>
        </ul>
      </div>
    </nav>
  );
}