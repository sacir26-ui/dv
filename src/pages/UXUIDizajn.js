import { Link } from "react-router-dom";

function UXUIDizajn() {
  return (
    <div className="ux-page">

     
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
            UX/UI dizajn i struktura sadržaja
          </h1>

          <p className="usluge-hero-subtitle">
            Dizajn koji osigurava jasnoću, logičnu strukturu i jednostavno
            korisničko iskustvo.
          </p>

          <Link to="/kontakt" className="hero-button">
            KONTAKTIRAJ NAS
          </Link>
        </div>
      </section>

      
      <section className="ux-section">
        <div className="ux-container">

          <div className="ux-titleRow">
            <div className="ux-line"></div>
            <h2 className="ux-title">
              Web koji je jasan, smislen i jednostavan za korištenje
            </h2>
            <div className="ux-line"></div>
          </div>

          <p className="ux-lead">
            Dobar web ne ovisi samo o vizualu, već o tome koliko je razumljiv
            i logično strukturiran. UX/UI dizajn osigurava da korisnici lako
            pronalaze informacije i intuitivno se kreću kroz web.
          </p>

        </div>
      </section>

   
      <section className="ux-section">
        <div className="ux-container">
          <div className="ux-titleRow">
            <div className="ux-line"></div>
            <h2 className="ux-title">
              Što podrazumijevamo pod UX/UI dizajnom
            </h2>
            <div className="ux-line"></div>
          </div>

          <p className="ux-lead">
            UX (user experience) i UI (user interface) zajedno oblikuju način
            na koji korisnici doživljavaju web stranicu.
          </p>

          <div className="ux-list">

            <div className="ux-item">
              <h3>Informacijska arhitektura</h3>
              <p>
                Planiranje strukture weba, navigacije i odnosa između stranica.
              </p>
            </div>

            <div className="ux-item">
              <h3>UX planiranje i korisnički tokovi</h3>
              <p>
                Razrada načina na koji se korisnici kreću kroz web i dolaze
                do željenih informacija.
              </p>
            </div>

            <div className="ux-item">
              <h3>UI dizajn i vizualna hijerarhija</h3>
              <p>
                Dizajn sučelja koji podržava sadržaj i osigurava čitljivost
                i jasnoću.
              </p>
            </div>

            <div className="ux-item">
              <h3>Priprema za daljnju tehničku izvedbu</h3>
              <p>
                UX/UI dizajn služi kao temelj za izradu web stranice
                i daljnju optimizaciju.
              </p>
            </div>

          </div>

        </div>
      </section>

    
      <section className="ux-section ux-process">
        <div className="ux-container">

          <div className="ux-process-grid">

            <div>

              <div className="ux-badge">
                STRUKTURA SADRŽAJA KAO TEMELJ WEBA
              </div>

              <p className="ux-leftText">
                Struktura sadržaja određuje kako su informacije raspoređene
                i kako se međusobno povezuju. Bez jasne strukture, ni najbolji
                dizajn ne može funkcionirati.
              </p>

            </div>

            <div>

              <div className="ux-rightHead">
                PROCES NAJČEŠĆE UKLJUČUJE:
              </div>

              <ul className="ux-bullets">
                <li>Razumijevanje ciljeva i publike</li>
                <li>Planiranje strukture sadržaja</li>
                <li>UX/UI dizajn</li>
                <li>Pripremu za izradu weba</li>
              </ul>

              <Link to="/kontakt" className="ux-cta">
                KONTAKTIRAJ NAS
              </Link>

            </div>

          </div>

        </div>
      </section>

      
      <section className="ux-section ux-quote">
        <div className="ux-container">

          <div className="ux-titleRow">
            <div className="ux-line"></div>

            <h2 className="ux-quoteText">
              Ako želite web koji je jasan, funkcionalan i prilagođen
              korisnicima, rado ćemo razgovarati o vašem projektu.
            </h2>

            <div className="ux-line"></div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default UXUIDizajn;