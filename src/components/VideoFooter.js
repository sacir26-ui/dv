import "./VideoFooter.css";

export default function VideoFooter() {
  return (
    <section className="video-footer">
      <video className="footer-video" autoPlay loop muted playsInline>
        <source src="/DV-materijali/video-za-hero.mp4" type="video/mp4" />
      </video>

      <div className="footer-overlay">
        <footer className="footer-content">
          <div className="footer-inner">
            <div className="footer-grid">

              {/* MENU */}
              <div className="footer-col">
                <div className="footer-title">MENU</div>
                <ul className="footer-links">
                  <li><a href="#">O NAMA</a></li>
                  <li><a href="#">USLUGE</a></li>
                  <li><a href="#">PROJEKTI</a></li>
                  <li><a href="#">BLOG</a></li>
                  <li><a href="#">KONTAKT</a></li>
                </ul>
              </div>

              {/* KONTAKT */}
              <div className="footer-col">
                <div className="footer-title">KONTAKT</div>
                <div className="footer-text">
                  Ulica Vladimira Filakovca 7<br />
                  10000 Zagreb<br /><br />
                  <a className="footer-link" href="tel:+3857287271">+385 728 7271</a><br />
                  <a className="footer-link" href="mailto:dvivkov.mcc@gmail.com">dvivkov.mcc@gmail.com</a>
                </div>
              </div>

              {/* CTA */}
              <div className="footer-col footer-cta">
                <div className="footer-title">IZABERITE NAS ZA</div>
                <ul className="footer-bullets">
                  <li>Vođenje društvenih mreža</li>
                  <li>Izradu web stranice</li>
                  <li>Branding i kreativne strategije</li>
                  <li>Dugoročnu suradnju</li>
                </ul>

                <a className="footer-btn" href="#">
                  KONTAKTIRAJ NAS
                </a>
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