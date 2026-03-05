import { Link } from "react-router-dom";

export default function LandingStranice() {
  return (
    <main className="lp-page">

      <section className="usluge-hero">
        <video
          className="usluge-hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/DV-materijali/video-za-hero.mp4"
        />
        <div className="usluge-hero-inner">
          <h1 className="usluge-hero-title">
            Landing stranice i <br /> konverzijski tokovi
          </h1>

          <Link to="/kontakt" className="hero-button">
            KONTAKTIRAJ NAS
          </Link>
        </div>
      </section>

     
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-titleRow">
            <div className="lp-line" />
            <h2 className="lp-title">Jasna poruka, jasan put, jasna akcija</h2>
            <div className="lp-line" />
          </div>

          <p className="lp-lead">
            Landing stranice imaju jednu svrhu — voditi korisnika prema konkretnoj akciji.
            Kroz promišljen sadržaj, strukturu i dizajn stvaramo landing stranice koje su
            fokusirane, razumljive i usmjerene na rezultat.
            <br />
            Ne gradimo stranice s viškom informacija, već tokove koji imaju smisla i logiku.
          </p>
        </div>
      </section>

     
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-titleRow">
            <div className="lp-line" />
            <h2 className="lp-title">Kako pristupamo landing stranicama</h2>
            <div className="lp-line" />
          </div>

          <p className="lp-lead">
            Landing stranice promatramo kao dio šireg digitalnog sustava.
            One ne postoje same za sebe, već su povezane s kampanjama, webom i poslovnim ciljevima.
          </p>

          <div className="lp-list">
            <div className="lp-item">
              <h3>Struktura landing stranice</h3>
              <p>
                Planiranje rasporeda sadržaja i elemenata s jasnim fokusom na poruku i akciju.
              </p>
            </div>

            <div className="lp-item">
              <h3>Copywriting za konverziju</h3>
              <p>Pisanje tekstova koji su jasni, konkretni i usmjereni prema cilju stranice.</p>
            </div>

            <div className="lp-item">
              <h3>UX/UI dizajn landing stranica</h3>
              <p>Dizajn koji podržava sadržaj, čitljivost i jednostavnost korištenja.</p>
            </div>

            <div className="lp-item">
              <h3>Konverzijski tokovi</h3>
              <p>
                Povezivanje landing stranice s obrascima, kontaktima ili daljnjim koracima u
                korisničkom putu.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="lp-section lp-process">
        <div className="lp-container">
          <div className="lp-process-grid">
            <div>
              <div className="lp-badge">
                KAKO GRADIMO <br />
                KONVERZIJSKE <br />
                TOKOVE
              </div>

              <p className="lp-leftText">
                Konverzijski tok nije samo gumb ili forma, već niz logičnih koraka koje korisnik
                prolazi. Naš cilj je smanjiti prepreke i olakšati donošenje odluke.
              </p>
            </div>

            <div>
              <div className="lp-rightHead">PROCES NAJČEŠĆE UKLJUČUJE:</div>

              <ul className="lp-bullets">
                <li>Definiranje cilja konverzije</li>
                <li>Planiranje toka korisnika</li>
                <li>Izrada landing stranice</li>
                <li>Povezivanje s daljnjim koracima</li>
              </ul>

              <Link to="/kontakt" className="lp-cta">
                KONTAKTIRAJ NAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="lp-section lp-quote">
        <div className="lp-container">
          <div className="lp-titleRow lp-titleRow--quote">
            <div className="lp-line" />
            <h2 className="lp-quoteText">
              Dobro postavljena landing stranica povećava jasnoću i učinkovitost kampanja.
            </h2>
            <div className="lp-line" />
          </div>
        </div>
      </section>
    </main>
  );
}