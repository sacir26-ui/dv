import { NavLink } from "react-router-dom";
import "./Onama.css";


export default function Onama() {
  return (
    <main className="onama-page">
      {/* HERO */}
      <section className="onama-hero hero">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="hero-video"
  >
    <source src="/DV-materijali/video-za-hero.mp4" type="video/mp4" />
  </video>

  <div className="hero-content">
    <h1 className="onama-hero-title">O NAMA</h1>
    <p className="onama-hero-subtitle">
      Digital Value gradimo kao partnerstvo, ne kao klasičnu agenciju.
    </p>
  </div>
</section>

      {/* UVOD */}
      <section className="onama-section">
        <div className="onama-container">
          <p className="onama-intro">
            Digital Value nastao je iz potrebe za smislenim, dugoročnim digitalnim rješenjima.
            Ne vjerujemo u brzinu bez strategije ni u kreativnost bez strukture — već u sustave
            koji imaju jasnoću, svrhu i vrijednost kroz vrijeme.
            <br /><br />
            Radimo s brendovima koji žele razumjeti što rade, zašto to rade i kako se žele predstaviti.
          </p>
        </div>
      </section>

      {/* KAKO JE NASTAO */}
      <section className="onama-section">
        <div className="onama-container">
          <div className="onama-titleRow">
            <span className="onama-line" />
            <h2 className="onama-title">Kako je nastao Digital Value</h2>
            <span className="onama-line" />
          </div>

          <p className="onama-text">
            Digital Value proizašao je iz spoja dva svijeta — kreativnog i tehničkog.
            Ideja je bila stvoriti prostor u kojem strategija, dizajn i web ne funkcioniraju
            odvojeno, već kao povezani dijelovi jedne cjeline.
            <br /><br />
            Kroz rad na različitim projektima postalo je jasno da brendovima ne treba samo još jedna usluga,
            već partner koji razumije širu sliku i razmišlja dugoročno. Tako je nastao Digital Value —
            digitalni tim fokusiran na stvaranje dugoročne digitalne vrijednosti, a ne kratkoročnih rješenja.
          </p>
        </div>
      </section>

      {/* NAŠ PRISTUP */}
<section className="onama-section">
  <div className="onama-container onama-approachGrid">
    
    {/* lijevo: badge + video box */}
    <div className="onama-approachMedia">
      <div className="onama-approachBadge">NAŠ PRISTUP</div>

      <div className="onama-videoBox">
        <video
          className="onama-videoMedia"
          src="/DV-materijali/onama-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>

    {/* desno: tekst */}
    <div className="onama-approachText">
      <p className="onama-approachLead">
        Digital Value pristup temelji se na tri povezana elementa:
      </p>

      <ul className="onama-approachList">
        <li><strong>Strategija</strong> – razumijevanje ciljeva, pozicioniranja i smjera</li>
        <li><strong>Kreativa</strong> – vizualni i sadržajni izraz koji ima smisla</li>
        <li><strong>Web</strong> – tehnička izvedba koja sve povezuje u funkcionalan sustav</li>
      </ul>

      <p className="onama-approachFoot">
        Ovi elementi ne funkcioniraju odvojeno, već zajedno čine osnovu svakog projekta.
      </p>
    </div>

  </div>
</section>

      {/* ZAŠTO DIGITAL VALUE */}
      <section className="onama-section onama-why">
        <div className="onama-container">
          <div className="onama-titleRow">
            <span className="onama-line" />
            <h2 className="onama-title">Zašto Digital Value</h2>
            <span className="onama-line" />
          </div>

          <p className="onama-text onama-text-center">
            Naziv Digital Value odražava ono što želimo stvarati — stvarnu, mjerljivu i dugoročnu
            vrijednost u digitalnom prostoru.
            <br />
            Ne nudimo gotove formule ni brza rješenja. Umjesto toga, gradimo sustave koji rastu zajedno s brendom
            i prilagođavaju se njegovim potrebama.
          </p>

          <div className="onama-cta">
            <NavLink to="/kontakt" className="onama-ctaBtn">
              ZAPOČNIMO RAZGOVOR
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}