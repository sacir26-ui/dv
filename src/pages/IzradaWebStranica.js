import { NavLink } from "react-router-dom";

export default function IzradaWebStranica() {
  return (
    <main className="webiz-page">
      
      <section className="usluge-hero">
        <video
          className="usluge-hero-video"
          autoPlay
          muted
          loop
          playsInline
          src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
        />

        <div className="usluge-hero-inner">
          <h1 className="usluge-hero-title">Izrada web stranica</h1>

          <p className="usluge-hero-subtitle">
            Funkcionalna, jasna i dugoročno održiva web rješenja.
          </p>

          
        </div>
      </section>

     
      <section className="webiz-section">
        <div className="webiz-container">
          <div className="webiz-titleRow">
            <div className="webiz-line"></div>
            <h2 className="webiz-title">
              Web rješenja koja imaju svrhu, strukturu i dugoročnu vrijednost
            </h2>
            <div className="webiz-line"></div>
          </div>

          <p className="webiz-lead">
            Izrada web stranica nije samo tehnička izvedba, već proces u kojem
            se strategija, sadržaj i dizajn povezuju u funkcionalnu cjelinu.
            Web koji radimo osmišljen je tako da podržava ciljeve brenda, bude
            jasan korisnicima i dugoročno održiv. Naš fokus nije na količini
            projekata, već na kvaliteti i smislu svakog web rješenja.
          </p>
        </div>
      </section>

     
      <section className="webiz-section">
        <div className="webiz-container">
          <div className="webiz-titleRow">
            <div className="webiz-line"></div>
            <h2 className="webiz-title">Što uključuje izrada web stranica</h2>
            <div className="webiz-line"></div>
          </div>

          <p className="webiz-lead">
            Web projekte započinjemo tek kada postoji jasno definirana osnova —
            smjer, poruka i struktura sadržaja.
          </p>

          <div className="webiz-list">
            <div className="webiz-item">
              <h3>Planiranje i struktura weba</h3>
              <p>
                Definiranje strukture stranice, hijerarhije sadržaja i logičnih
                korisničkih tokova.
              </p>
            </div>

            <div className="webiz-item">
              <h3>Tehnička izrada web stranice</h3>
              <p>
                Razvoj stabilne i funkcionalne web stranice prilagođene
                potrebama brenda i korisnika.
              </p>
            </div>

            <div className="webiz-item">
              <h3>Responzivnost i prilagodba uređajima</h3>
              <p>
                Osiguravanje ispravnog prikaza i funkcionalnosti na svim
                uređajima.
              </p>
            </div>

            <div className="webiz-item">
              <h3>Osnovna tehnička optimizacija</h3>
              <p>
                Brzina, tehnička ispravnost i priprema weba za daljnju
                optimizaciju.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="webiz-section webiz-process">
        <div className="webiz-container">
          <div className="webiz-process-grid">
            <div>
              <div className="webiz-badge">
                KAKO IZGLEDA <br />
                PROCES IZRADE <br />
                WEBA
              </div>

              <p className="webiz-leftText">
                Izradu web stranica vodimo kroz jasno definirane korake kako bi
                cijeli proces bio transparentan i razumljiv.
              </p>
            </div>

            <div>
              <div className="webiz-rightHead">PROCES NAJČEŠĆE UKLJUČUJE:</div>

              <ul className="webiz-bullets">
                <li>Usklađivanje ciljeva i sadržaja</li>
                <li>UX/UI priprema i dizajn</li>
                <li>Tehnička izvedba</li>
                <li>Testiranje i objava</li>
              </ul>

              <NavLink to="/kontakt" className="webiz-cta">
                KONTAKTIRAJ NAS
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="webiz-section webiz-quote">
        <div className="webiz-container">
          <div className="webiz-titleRow webiz-titleRow--quote">
            <div className="webiz-line"></div>
            <h2 className="webiz-quoteText">
              Kvalitetan web pruža dugoročnu vrijednost, a ne samo vizualni dojam.
            </h2>
            <div className="webiz-line"></div>
          </div>
        </div>
      </section>
    </main>
  );
}