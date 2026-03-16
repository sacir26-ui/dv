import { NavLink } from "react-router-dom";

export default function TehnickiSEO() {
  return (
    <main className="seo-page">

     
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
          <h1 className="usluge-hero-title">
            Tehnička SEO <br/> optimizacija
          </h1>

          <p className="usluge-hero-subtitle">
            Stabilna tehnička osnova za vidljiv i učinkovit web.
          </p>

       
        </div>
      </section>


    
      <section className="seo-section">
        <div className="seo-container">

          <div className="seo-titleRow">
            <div className="seo-line"></div>

            <h2 className="seo-title">
              Stabilna tehnička osnova za vidljiv i učinkovit web
            </h2>

            <div className="seo-line"></div>
          </div>

          <p className="seo-lead">
            Tehnička SEO optimizacija osigurava da web stranica bude
            ispravna, brza i razumljiva tražilicama.
            Bez kvalitetne tehničke osnove ni najbolji sadržaj ne može
            ostvariti puni potencijal.
          </p>

        </div>
      </section>


    
      <section className="seo-section">
        <div className="seo-container">

          <div className="seo-titleRow">
            <div className="seo-line"></div>

            <h2 className="seo-title">
              Što podrazumijevamo pod tehničkim SEO-om
            </h2>

            <div className="seo-line"></div>
          </div>

          <p className="seo-lead">
            Tehnička SEO optimizacija obuhvaća sve elemente koji omogućuju
            tražilicama pravilno indeksiranje i razumijevanje web stranice.
          </p>


          <div className="seo-list">

            <div className="seo-item">
              <h3>Tehnička analiza web stranice</h3>
              <p>
                Pregled tehničkog stanja weba, strukture i potencijalnih problema.
              </p>
            </div>

            <div className="seo-item">
              <h3>Optimizacija brzine i performansi</h3>
              <p>
                Poboljšanje vremena učitavanja i ukupne učinkovitosti web stranice.
              </p>
            </div>

            <div className="seo-item">
              <h3>Struktura URL-ova i hijerarhija sadržaja</h3>
              <p>
                Postavljanje jasne i logične strukture stranica.
              </p>
            </div>

            <div className="seo-item">
              <h3>Indeksiranje i tehnička ispravnost</h3>
              <p>
                Rješavanje problema s indeksiranjem i tehničkim greškama.
              </p>
            </div>

            <div className="seo-item">
              <h3>Priprema za daljnju SEO optimizaciju</h3>
              <p>
                Stabilna tehnička osnova za daljnji SEO razvoj.
              </p>
            </div>

          </div>

        </div>
      </section>


      
      <section className="seo-section seo-process">
        <div className="seo-container">

          <div className="seo-process-grid">

            <div>

              <div className="seo-badge">
                KAKO <br/>
                PRISTUPAMO <br/>
                TEHNIČKOM SEO-U
              </div>

              <p className="seo-leftText">
                Tehničkom SEO-u pristupamo sustavno i bez improvizacije.
                Svaki zahvat ima jasno objašnjenje i svrhu.
              </p>

            </div>


            <div>

              <div className="seo-rightHead">
                PROCES NAJČEŠĆE UKLJUČUJE:
              </div>

              <ul className="seo-bullets">
                <li>Analizu postojećeg stanja</li>
                <li>Definiranje rješenja</li>
                <li>Implementaciju optimizacija</li>
                <li>Provjeru i stabilizaciju</li>
              </ul>

              <NavLink to="/kontakt" className="seo-cta">
                KONTAKTIRAJ NAS
              </NavLink>

            </div>

          </div>

        </div>
      </section>


      
      <section className="seo-section seo-quote">
        <div className="seo-container">

          <div className="seo-titleRow seo-titleRow--quote">
            <div className="seo-line"></div>

            <h2 className="seo-quoteText">
              Ako želite web koji je tehnički ispravan,
              stabilan i spreman za rast,
              rado ćemo razgovarati o vašem projektu.
            </h2>

            <div className="seo-line"></div>
          </div>

        </div>
      </section>

    </main>
  );
}