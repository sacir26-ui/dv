import {
  FaPalette,
  FaLightbulb,
  FaShareAlt,
  FaCamera,
  FaLaptopCode,
  FaSearch,
  FaLayerGroup,
  FaChartLine,
  FaPenNib
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Usluge.css";


export default function Usluge() {
  return (
    <div className="usluge-page">
      
      <section className="usluge-hero">
        <video autoPlay muted loop playsInline preload="auto" className="usluge-hero-video">
          <source src="DV-materijali/video-za-hero.mp4" type="video/mp4" />
        </video>

        <div className="usluge-hero-inner">
          <h1 className="usluge-hero-title">Usluge</h1>
          <p className="usluge-hero-subtitle">
            Strategija, kreativa i web — spojeno u sustav koji radi dugoročno.
          </p>
        </div>
      </section>

    
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
               <div className="usluge-icon">
                <FaPalette />
              </div>
                <h3>Branding i vizualni identitet</h3>
                <p>Identitet, smjernice, primjena i sustav vizualne komunikacije.</p>
            </div>
            </Link>

          <Link to="/usluge/kreativni-koncepti" className="usluge-card-link">
            <div className="usluge-card">
               <div className="usluge-icon">
                <FaLightbulb />
              </div>
              <h3>Kreativni koncepti i sadržaj</h3>
              <p>Ideje, storytelling i sadržaj koji je dosljedan brendu.</p>
            </div>
          </Link>

            <Link to="/usluge/drustvene-mreze-edukacija" className="usluge-card-link">
              <div className="usluge-card">
                <div className="usluge-icon">
                  <FaShareAlt />
                </div>
                <h3>Društvene mreže i edukacija</h3>
                <p>Strategija objava, struktura i edukacija tima.</p>
              </div>
            </Link> 

            <Link to="/usluge/fotografija-video" className="usluge-card-link">
              <div className="usluge-card">
                <div className="usluge-icon">
                  <FaCamera />
                </div>
                <h3>Fotografija & video</h3>
                <p>Snimanja, montaža i produkcija za kampanje i web.</p>
              </div>
            </Link>

           <Link to="/usluge/izrada-web-stranica" className="usluge-card-link">
            <div className="usluge-card">
              <div className="usluge-icon">
                <FaLaptopCode />
              </div>
              <h3>Izrada web stranica</h3>
              <p>funkcionalna i dugoročno održiva web rješenja</p>
            </div>
          </Link>

            <Link to="/usluge/tehnicki-seo" className="usluge-card-link">
            <div className="usluge-card">
              <div className="usluge-icon">
                <FaSearch />
              </div>
              <h3>Tehnički SEO & održivost</h3>
              <p>Struktura, brzina, SEO osnova i dugoročna održivost.</p>
            </div>
            </Link>

        <Link to="/usluge/ux-ui-dizajn" className="usluge-card-link">
              <div className="usluge-card">
                <div className="usluge-icon">
                  <FaLayerGroup />
                </div>
                <h3>UX/UI dizajn i struktura sadržaja</h3>
                <p>Dizajn korisničkog iskustva i jasna struktura sadržaja kako bi web bio jednostavan za korištenje i logičan za navigaciju.</p>
              </div>
      </Link>

    <Link to="/usluge/landing-stranice" className="usluge-card-link">
      <div className="usluge-card">
        <div className="usluge-icon">
          <FaChartLine />
        </div>
        <h3>Landing stranice i konverzije</h3>
        <p>Izrada landing stranica fokusiranih na cilj — kontakt, upit ili kupnju — uz optimizaciju sadržaja i elemenata za veću konverziju.</p>
      </div>
      </Link>

      <Link to="/usluge/copywriting-storytelling" className="usluge-card-link">
        <div className="usluge-card">
          <div className="usluge-icon">
            <FaPenNib />
          </div>
          <h3>Copywriting i storytelling</h3>
          <p>Tekstovi koji jasno komuniciraju vrijednost brenda, grade povjerenje i vode korisnika kroz sadržaj na prirodan način.</p>
        </div>
      </Link>
    </div>


          <div className="usluge-cta">
            <Link className="usluge-ctaBtn" to="/kontakt">
              KONTAKTIRAJ NAS
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}