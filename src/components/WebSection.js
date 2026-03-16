import { NavLink } from "react-router-dom";
export default function WebSection() {
  return (
    <section className="web-section" id="web">
      <div className="container">

       
        <div className="web-quote">
          <span className="web-quote-line"></span>
          <p>
            Kada su strategija, sadržaj i vizualni smjer jasno definirani,<br />
            web postaje logičan sljedeći korak — alat koji sve to povezuje<br />
            u funkcionalnu i održivu cjelinu.
          </p>
          <span className="web-quote-line"></span>
        </div>

       
        <div className="web-grid">

        
          <div className="web-left">
            <p className="web-paragraph">
              Web nije samo vizitka. To je sustav koji povezuje strategiju,
              sadržaj i korisničko iskustvo u alat koji radi dugoročno.
              Zato web projekte gradimo kao nastavak strateškog i kreativnog rada —
              kada postoji jasan smjer, sadržaj i cilj.
            </p>

            <div className="web-divider"></div>

            <ul className="web-list">
              <li className="web-item">
              <NavLink to="/usluge/ux-ui-dizajn" className="service-row-link">
                <span className="service-text">UX/UI DIZAJN I STRUKTURA SADRŽAJA</span>
                <span className="service-plus">+</span>
              </NavLink>
            </li>

              <NavLink to="/usluge/izrada-web-stranica" className="service-row-link">
              <span className="service-text">IZRADA WEB STRANICA</span>
              <span className="service-plus">+</span>
            </NavLink>

              <NavLink to="/usluge/landing-stranice" className="service-row-link">
              <span className="service-text">LANDING STRANICE I KONVERZIJSKI TOKOVI</span>
              <span className="service-plus">+</span>
            </NavLink>

              <NavLink to="/usluge/tehnicki-seo" className="service-row-link">
                <span className="service-text">TEHNIČKA SEO OPTIMIZACIJA</span>
                <span className="service-plus">+</span>
              </NavLink>
            </ul>

            <NavLink className="web-btn" to="/kontakt">
              JE LI TVOJ PROJEKT SPREMAN ZA WEB?
            </NavLink>
          </div>

          
          <div className="web-right">
            <div className="web-title-box">
              <h2>WEB I DIGITALNI<br />SUSTAVI</h2>
            </div>

            <div className="web-mockup">
              <img className="web-laptop" src={`${process.env.PUBLIC_URL}/DV-materijali/slika-lap-top.png`} alt="Laptop mockup" />

              
              
            </div>
            </div>
          </div>

        </div>

       
        <div className="web-bottom">
          <div className="web-bottom-line"></div>
          <p>
            Web projekte radimo selektivno i najčešće u sklopu dugoročnih<br />
            suradnji ili kao nastavak strateškog i kreativnog procesa.<br />
            Na taj način osiguravamo kvalitetu, fokus i rješenja koja imaju<br />
            stvarnu vrijednost.
          </p>
        </div>

      
    </section>
  );
}