import { NavLink } from "react-router-dom";

export default function Branding() {
  return (
    <main className="branding-page">
      
      <section className="hero branding-hero">
        <video autoPlay muted loop playsInline preload="auto" className="hero-video">
          <source src="DV-materijali/video-za-hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1 className="branding-hero-title">Branding & vizualni identitet</h1>

          <NavLink to="/kontakt" className="branding-hero-btn">
            KONTAKTIRAJ NAS
          </NavLink>
        </div>
      </section>

     
      <section className="branding-section">
        <div className="branding-container">
          <div className="branding-titleRow">
            <span className="branding-line" />
            <h2 className="branding-title">Jasan identitet kao temelj svake komunikacije.</h2>
            <span className="branding-line" />
          </div>

          <p className="branding-text">
            Branding nije samo logo ili boja. To je način na koji se brend predstavlja, komunicira i gradi povjerenje kroz sve
            dodirne točke — digitalne i fizičke.
            <br /><br />
            Kroz promišljen branding i vizualni identitet pomažemo brendovima jasno definirati tko su i kako žele biti percipirani.
          </p>
        </div>
      </section>

   
      <section className="branding-section branding-section-tight">
        <div className="branding-container">
          <div className="branding-titleRow">
            <span className="branding-line" />
            <h2 className="branding-title">Što podrazumijevamo pod brandingom</h2>
            <span className="branding-line" />
          </div>

          <p className="branding-text">
            Branding promatramo kao sustav, ne kao izolirani dizajnerski zadatak.
            On povezuje strategiju, vizualni izraz i komunikaciju u dosljednu cjelinu koja se može dugoročno razvijati.
          </p>

          <div className="branding-items">
            <div className="branding-item">
              <h3>Vizualni smjer i identitet</h3>
              <p>Razrada osnovnog vizualnog jezika brenda — boje, tipografija, stil i vizualni principi.</p>
            </div>

            <div className="branding-item">
              <h3>Logotip i osnovni elementi brenda</h3>
              <p>Izrada ili dorada logotipa te ključnih elemenata koji čine prepoznatljiv vizualni identitet.</p>
            </div>

            <div className="branding-item">
              <h3>Smjernice za korištenje identiteta</h3>
              <p>Postavljanje jasnih smjernica koje omogućuju pravilnu i dosljednu primjenu identiteta.</p>
            </div>

            <div className="branding-item">
              <h3>Primjena identiteta u praksi</h3>
              <p>Prilagodba vizualnog identiteta za osnovne materijale — digitalne i tiskane.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="branding-section branding-bottom">
        <div className="branding-container">
          <div className="branding-titleRow">
            <span className="branding-line" />
            <h2 className="branding-title">Jasan identitet kao temelj svake komunikacije.</h2>
            <span className="branding-line" />
          </div>
        <p className="branding-text">
      Branding nije samo logo ili boja.<br />
      To je način na koji se brend predstavlja, komunicira i gradi povjerenje kroz sve<br />
      dodirne točke — digitalne i fizičke.
      <br /><br />
      Kroz promišljen branding i vizualni identitet pomažemo brendovima jasno definirati
      tko su i kako žele biti percipirani.
    </p>
          

         
<section className="branding-process">
  <div className="branding-process-inner">

    <div className="branding-process-grid">
  
      <div className="branding-process-left">
        <div className="branding-process-box">
          <h2>
            KAKO RADIMO NA <br />
            BRANDING <br />
            PROJEKTIMA
          </h2>
        </div>

        <p className="branding-process-desc">
          Branding projekte započinjemo razumijevanjem konteksta u kojem brend djeluje.
          Ne donosimo vizualna rješenja bez jasne pozadine i svrhe.
        </p>
      </div>

    
      <div className="branding-process-right">
        <div className="branding-process-kicker">PROCES NAJČEŠĆE UKLJUČUJE:</div>
        <div className="branding-process-line" />

        <ul className="branding-process-list">
          <li>Upoznavanje brenda i ciljeva</li>
          <li>Definiranje pozicioniranja i smjera</li>
          <li>Dizajn ključnih elemenata i sustava</li>
          <li>Identitet se priprema za korištenje u digitalnim i tiskanim materijalima</li>
        </ul>

        <a className="branding-process-btn" href="/kontakt">
          KONTAKTIRAJ NAS
        </a>
      </div>
    </div>

   
    <div className="branding-process-bottom">
      <span className="branding-bottom-line"></span>
      <p>
        Ako razmišljate o razvoju ili unapređenju identiteta svog brenda, rado ćemo čuti više
        <br />
        o vašem projektu
      </p>
    </div>

  </div>
</section>
          
        </div>
      </section>
    </main>
  );
}