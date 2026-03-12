
import { NavLink } from "react-router-dom";

export default function CopywritingStorytelling() {
  return (
    <main className="cws-page">
    
      <section className="hero cws-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/DV-materijali/video-za-hero.mp4"
        />
        <div className="hero-content">
          <h1>Copywriting &amp; storytelling</h1>
          
         
         
        </div>
      </section>
      <section className="cws-section cws-intro">
        <div className="cws-container">
          <div className="cws-center-block">
            <div className="cws-line-title">
              <span className="cws-line" />
              <h2 className="cws-line-heading">
                Riječi koje imaju jasnoću, smjer i težinu.
              </h2>
              <span className="cws-line" />
            </div>

            <p className="cws-lead">
              Dobar tekst ne služi samo tome da nešto kaže — on objašnjava,
              povezuje i gradi povjerenje.
              <br />
              Kroz copywriting i storytelling pomažemo brendovima jasno izraziti
              svoju poruku, oblikovati ton komunikacije i stvoriti sadržaj koji
              ima smisla i kontinuitet.
            </p>
          </div>
        </div>
      </section>

   
      <section className="cws-section cws-what">
        <div className="cws-container">
          <div className="cws-center-block">
            <h3 className="cws-title">
              Što podrazumijevamo pod <br />
              copywritingom i storytellingom
            </h3>
            <p className="cws-subtitle">
              Copywriting i storytelling zajedno čine temelj verbalne
              komunikacije brenda.
              <br />
              Oni definiraju kako brend govori, što želi prenijeti i kakav dojam
              ostavlja.
            </p>
          </div>

          <div className="cws-list">
            <div className="cws-list-item">
              <div className="cws-list-head">Definiranje tona i stila komunikacije</div>
              <div className="cws-list-text">
                Postavljanje jezika, stila i načina obraćanja koji odgovara
                identitetu brenda i publici.
              </div>
            </div>

            <div className="cws-list-item">
              <div className="cws-list-head">Pisanje tekstova za web</div>
              <div className="cws-list-text">
                Izrada jasnih, strukturiranih i smislenih tekstova za web stranice
                — od osnovnih informacija do složenijih poruka.
              </div>
            </div>

            <div className="cws-list-item">
              <div className="cws-list-head">Sadržaj za kampanje i komunikaciju</div>
              <div className="cws-list-text">
                Pisanje tekstova za kampanje, objave i druge komunikacijske
                materijale u skladu s definiranim smjerom.
              </div>
            </div>

            <div className="cws-list-item">
              <div className="cws-list-head">Storytelling i narativ brenda</div>
              <div className="cws-list-text">
                Razrada priče brenda koja povezuje vrijednosti, poruku i iskustvo
                korisnika.
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="cws-section cws-process">
        <div className="cws-container">
          <div className="cws-process-grid">
            <div className="cws-process-left">
              <div className="cws-badge">
                KAKO RADIMO <br />
                NA TEKSTOVIMA
              </div>

              <p className="cws-process-text">
                Tekstovima pristupamo promišljeno i u kontekstu cijele komunikacije.
                <br />
                Ne pišemo izolirane rečenice, već gradimo sustav koji se može dugoročno koristiti.
              </p>
            </div>

            <div className="cws-process-right">
              <div className="cws-process-head">PROCES NAJČEŠĆE UKLJUČUJE:</div>

              <ul className="cws-bullets">
                <li>Razumijevanje brenda i ciljeva</li>
                <li>Definiranje poruke i tona</li>
                <li>Pisanje i dorada tekstova</li>
                <li>Priprema za primjenu</li>
              </ul>

              <NavLink className="cws-cta" to="/kontakt">
                KONTAKTIRAJ NAS
              </NavLink>
            </div>
          </div>
        </div>
      </section>

     
      <section className="cws-section cws-quote">
        <div className="cws-container">
          <div className="cws-line-title cws-line-title--quote">
            <span className="cws-line" />
            <h3 className="cws-quote-text">
              Dobro oblikovan tekst pomaže brendu <br />
              govoriti jasno, uvjerljivo i autentično.
            </h3>
            <span className="cws-line" />
          </div>
        </div>
      </section>
    </main>
  );
}