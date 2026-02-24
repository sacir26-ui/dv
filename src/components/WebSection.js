export default function WebSection() {
  return (
    <section className="web-section" id="web">
      <div className="container">

        {/* Gornji citat */}
        <div className="web-quote">
          <span className="web-quote-line"></span>
          <p>
            Kada su strategija, sadržaj i vizualni smjer jasno definirani,<br />
            web postaje logičan sljedeći korak — alat koji sve to povezuje<br />
            u funkcionalnu i održivu cjelinu.
          </p>
          <span className="web-quote-line"></span>
        </div>

        {/* Glavni sadržaj */}
        <div className="web-grid">

          {/* Lijevo */}
          <div className="web-left">
            <p className="web-paragraph">
              Web nije samo vizitka. To je sustav koji povezuje strategiju,
              sadržaj i korisničko iskustvo u alat koji radi dugoročno.
              Zato web projekte gradimo kao nastavak strateškog i kreativnog rada —
              kada postoji jasan smjer, sadržaj i cilj.
            </p>

            <div className="web-divider"></div>

            <ul className="web-list">
              <li><span>UX/UI DIZAJN I STRUKTURA SADRŽAJA</span><strong>+</strong></li>
              <li><span>IZRADA WEB STRANICA</span><strong>+</strong></li>
              <li><span>LANDING STRANICE I KONVERZIJE</span><strong>+</strong></li>
              <li><span>TEHNIČKI SEO & ODRŽIVOST</span><strong>+</strong></li>
            </ul>

            <a className="web-btn" href="#kontakt">
              JE LI TVOJ PROJEKT SPREMAN ZA WEB?
            </a>
          </div>

          {/* DESNO */}
          <div className="web-right">
            <div className="web-title-box">
              <h2>WEB I DIGITALNI<br />SUSTAVI</h2>
            </div>

            <div className="web-mockup">
              <img className="web-laptop" src="/DV-materijali/slika-lap-top.png" alt="Laptop mockup" />

              <div className="web-phone">
                <video className="web-phone-video" autoPlay muted loop playsInline preload="auto">
                  <source src="/DV-materijali/mobitel-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

        </div>

        {/* Donji citat */}
        <div className="web-bottom">
          <div className="web-bottom-line"></div>
          <p>
            Web projekte radimo selektivno i najčešće u sklopu dugoročnih<br />
            suradnji ili kao nastavak strateškog i kreativnog procesa.<br />
            Na taj način osiguravamo kvalitetu, fokus i rješenja koja imaju<br />
            stvarnu vrijednost.
          </p>
        </div>

      </div>
    </section>
  );
}