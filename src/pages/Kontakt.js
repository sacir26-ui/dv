
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <div className="kontakt-page">
      <section className="kontakt-hero">
        <video className="kontakt-hero-video" autoPlay loop muted playsInline>
          <source
          src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
          type="video/mp4"
/>
        </video>

        <div className="kontakt-hero-inner">
          <h1 className="kontakt-hero-title">Kontakt</h1>
          <p className="kontakt-hero-subtitle">
            Javite nam se i zajedno ćemo vidjeti kako vaš projekt pretvoriti u
            jasnu digitalnu vrijednost.
          </p>
        </div>
      </section>

      <section className="kontakt-section">
        <div className="kontakt-container">
          <div className="kontakt-grid">
            <div className="kontakt-info">
              <h2 className="kontakt-info-title">Kontakt informacije</h2>

              <div className="kontakt-item">
                <i className="bi bi-geo-alt"></i>
                <a
                    className="kontakt-link"
                    href="https://www.google.com/maps/search/?api=1&query=Lukoranska+Ulica+17+Zagreb"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lukoranska Ulica 17<br />
                    10000 Zagreb
                </a>
                </div>

                <div className="kontakt-item">
                <i className="bi bi-telephone"></i>
                <a className="kontakt-link" href="tel:+385955135790">
                    +385 955135790
                </a>
                </div>

                <div className="kontakt-item">
                <i className="bi bi-envelope"></i>
                <a className="kontakt-link" href="mailto:s.asimovic21@gmail.com">
                    s.asimovic21@gmail.com
                </a>
                </div>
            </div>

            <form className="kontakt-form">
              <input type="text" placeholder="Ime i prezime" />
              <input type="email" placeholder="Email adresa" />
              <input type="text" placeholder="Naziv brenda / tvrtke" />
              <textarea rows="6" placeholder="Opišite svoj projekt"></textarea>

             
             <button type="submit" className="kontakt-btn">
                POŠALJI UPIT
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
}