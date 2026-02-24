function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-md navbar-dark navbar-overlay py-5 text-white">
        <div className="container position-relative d-flex justify-content-between align-items-center">

          {/* LIJEVA STRANA */}
          <ul className="navbar-nav d-lg-flex d-none align-items-center nav-left custom-gap">
            <li className="nav-item">
              <a className="nav-link" href="#">NASLOVNA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">O NAMA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">USLUGE</a>
            </li>
          </ul>

          {/* LOGO */}
          <a className="navbar-brand position-absolute top-50 start-50 translate-middle" href="#">
            <img src="/DV-materijali/digital_normalnno-01.png" alt="Logo" height="160" />
          </a>

          {/* DESNA STRANA */}
          <ul className="navbar-nav d-lg-flex d-none align-items-center nav-right custom-gap">
            <li className="nav-item">
              <a className="nav-link" href="#">PROJEKTI</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">KONTAKT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">BLOG</a>
            </li>
          </ul>

          {/* HAMBURGER ZA MOB */}
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse d-lg-none bg-dark w-100" id="mobileMenu">
          <ul className="navbar-nav d-flex ms-auto flex-column text-center p-3 gap-3">
            <li className="nav-item"><a className="nav-link text-white" href="#">NASLOVNA</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">O NAMA</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">USLUGE</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">PROJEKTI</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">KONTAKT</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">BLOG</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero d-flex align-items-center text-white mb-5">
        <video autoPlay muted loop playsInline preload="auto" className="hero-video">
          <source src="/DV-materijali/video-za-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <p className="h1-p">Za brendove koji razmnišljaju dugoročno</p>
          <h1>Gradimo digitalnu vrijednost kroz strategiju, kreativu i web</h1>
          <a href="#" className="hero-button">KONTAKTIRAJ NAS</a>
        </div>
      </section>

      {/* NASLOVNA SECTION */}
      <section className="naslovna pb-5">
        <div className="container">
          <h2>Vrijednost je uvijek u načinu na koji radimo.</h2>
          <p className="podnaslov">
            Digital Value je kreativno-tehnički tim za brendove koji žele promišljena i održiva<br />
            rješenja - od kreativnog smjera do tehničke izvedbe.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="slicice">
                <img src="/DV-materijali/1.png" alt="pp" />
                <p>PROMIŠLJEN<br />PRISTUP</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="slicice">
                <img src="/DV-materijali/2.png" alt="SNN" />
                <p>SURADNJA, NE<br />NARUDŽBA</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="slicice">
                <img src="/DV-materijali/3.png" alt="KIK" />
                <p>KVALITETA<br />ISPRED KOLIČINE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <div className="container">
  <a href="#kako-radimo" className="kako-radimo">Kako radimo</a>
</div>

      {/* CREATIVE SECTION */}
      <section className="creative-section" id="kako-radimo">
        <div className="container">
          <div className="row align-items-center">

            {/* LIJEVA STRANA */}
            <div className="col-lg-6 position-relative">
              <div className="purple-box">
                <h2>KREATIVA I<br />STRATEGIJA</h2>
              </div>

              <div className="video-box">
                <video autoPlay muted loop playsInline>
                  <source src="/DV-materijali/Real-Estate-Reel.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* DESNA STRANA */}
            <div className="col-lg-6 content-right">
              <p className="lead-text">
                Svaki kvalitetan digitalni projekt započinje jasnom strategijom i snažnim kreativnim smjerom. Kroz branding, sadržaj i vizualnu komunikaciju pomažemo brendovima da se pozicioniraju jasno,dosljedno i dugoročno održivo.
              </p>

              <div className="line"></div>

              <ul className="service-list">
                <li>BRANDING I VIZUALNI IDENTITET <span>+</span></li>
                <li>KREATIVNI KONCEPTI I SADRŽAJ <span>+</span></li>
                <li>DRUŠTVENE MREŽE I EDUKACIJA <span>+</span></li>
                <li>FOTOGRAFIJA & VIDEO <span>+</span></li>
                <li>COPYWRITING I STORYTELLING <span>+</span></li>
              </ul>

              <a href="#" className="cta-btn">KONTAKTIRAJ NAS</a>
            </div>

          </div>
        </div>
      </section>

{/* WEB I DIGITALNI SUSTAVI SECTION */}
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
          <li>
            <span>UX/UI DIZAJN I STRUKTURA SADRŽAJA</span>
            <strong>+</strong>
          </li>
          <li>
            <span>IZRADA WEB STRANICA</span>
            <strong>+</strong>
          </li>
          <li>
            <span>LANDING STRANICE I KONVERZIJE</span>
            <strong>+</strong>
          </li>
          <li>
            <span>TEHNIČKI SEO & ODRŽIVOST</span>
            <strong>+</strong>
          </li>
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


      {/* NEW FOOTER (video + glass overlay) */}
      <section className="video-footer">
        <video className="footer-video" autoPlay loop muted playsInline>
          {/* promijeni putanju ako želiš koristiti drugi video */}
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
    </>
  );
}

export default App;
