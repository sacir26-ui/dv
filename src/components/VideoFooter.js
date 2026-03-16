import { NavLink } from "react-router-dom";
import "./VideoFooter.css";
export default function VideoFooter() {
  return (
    <section className="video-footer">
      <video className="footer-video" autoPlay loop muted playsInline>
        <source
          src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
          type="video/mp4"
/>
      </video>

      <div className="footer-overlay">
        <footer className="footer-content">
          <div className="footer-inner">
            <div className="footer-grid">

              
              <div className="footer-col">
                <div className="footer-title">MENU</div>
                <ul className="footer-links">
                <li>
                  <NavLink to="/o-nama">O NAMA</NavLink>
                </li>

                <li>
                  <NavLink to="/usluge">USLUGE</NavLink>
                </li>

                <li>
                  <NavLink to="/projekti">PROJEKTI</NavLink>
                </li>

                <li>
                  <NavLink to="/blog">BLOG</NavLink>
                </li>

                <li>
                  <NavLink to="/kontakt">KONTAKT</NavLink>
                </li>
              </ul>
              </div>

             
                <div className="footer-text footer-contact">
                <div className="footer-title">KONTAKT</div>
                <div className="footer-contact-row">
                <i className="bi bi-geo-alt"></i>

                <a
                  className="footer-link"
                  href="https://www.google.com/maps/search/?api=1&query=Lukoranska+Ulica+17+Zagreb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lukoranska Ulica 17<br />
                  10000 Zagreb
                </a>

              </div>
                <div className="footer-contact-row">
                  <i className="bi bi-telephone"></i>
                  <a className="footer-link" href="tel:+385955135790">
                    +385 955135790
                  </a>
                </div>

                <div className="footer-contact-row">
                  <i className="bi bi-envelope"></i>
                  <a className="footer-link" href="mailto:s.asimovic21@gmail.com">
                    s.asimovic21@gmail.com
                  </a>
                </div>

              </div>

              
              <div className="footer-col footer-cta">
                <div className="footer-title">IZABERITE NAS ZA</div>
                <ul className="footer-bullets">
                  <li>Vođenje društvenih mreža</li>
                  <li>Izradu web stranice</li>
                  <li>Branding i kreativne strategije</li>
                  <li>Dugoročnu suradnju</li>
                </ul>

               <NavLink className="footer-btn" to="/kontakt">
                  KONTAKTIRAJ NAS
                </NavLink>
              </div>

            </div>

            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Digital Value</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}