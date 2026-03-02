import { Link } from "react-router-dom";
import "./Usluge.css";


export default function Usluge() {
  return (
    <div className="usluge-page">
      
      <section className="usluge-hero">
        <video autoPlay muted loop playsInline preload="auto" className="usluge-hero-video">
          <source src="/DV-materijali/video-za-hero.mp4" type="video/mp4" />
        </video>

        <div className="usluge-hero-inner">
          <h1 className="usluge-hero-title">USLUGE</h1>
          <p className="usluge-hero-subtitle">
            Strategija, kreativa i web — spojeno u sustav koji radi dugoročno.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="usluge-section">
        <div className="usluge-container">

          <div className="usluge-titleRow">
            <span className="usluge-line" />
            <h2 className="usluge-title">Što radimo</h2>
            <span className="usluge-line" />
          </div>

          <p className="usluge-intro">
            Usluge gradimo modularno — biramo ono što vašem brendu stvarno treba
            i slažemo proces koji ima smisla.
          </p>

          <div className="usluge-grid">
           <Link to="/usluge/branding" className="usluge-card-link">
            <div className="usluge-card">
                <h3>Branding i vizualni identitet</h3>
                <p>Identitet, smjernice, primjena i sustav vizualne komunikacije.</p>
            </div>
            </Link>

            <div className="usluge-card">
              <h3>Kreativni koncepti i sadržaj</h3>
              <p>Ideje, storytelling i sadržaj koji je dosljedan brendu.</p>
            </div>

            <div className="usluge-card">
              <h3>Društvene mreže i edukacija</h3>
              <p>Strategija objava, struktura i edukacija tima.</p>
            </div>

            <div className="usluge-card">
              <h3>Fotografija & video</h3>
              <p>Snimanja, montaža i produkcija za kampanje i web.</p>
            </div>

            <div className="usluge-card">
              <h3>Izrada web stranica</h3>
              <p>UX, UI i izrada stranice kao sustava (ne samo vizitke).</p>
            </div>

            <div className="usluge-card">
              <h3>Tehnički SEO & održivost</h3>
              <p>Struktura, brzina, SEO osnova i dugoročna održivost.</p>
            </div>
          </div>

          <div className="usluge-cta">
            <a className="usluge-ctaBtn" href="#kontakt">
              KONTAKTIRAJ NAS
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}