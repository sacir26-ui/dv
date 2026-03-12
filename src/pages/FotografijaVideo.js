import { NavLink } from "react-router-dom";

function FotografijaVideo() {
  return (
    <div className="fv-page">

    
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
          <h1 className="usluge-hero-title">Fotografija i video</h1>

          <p className="usluge-hero-subtitle">
            Vizualni sadržaj koji prenosi poruku i jača identitet brenda.
          </p>

          
        </div>
      </section>

      
      <section className="fv-section">
        <div className="fv-container">

          <div className="fv-titleRow">
            <div className="fv-line"></div>
            <h2 className="fv-title">
              Vizualni sadržaj koji podržava priču brenda.
            </h2>
            <div className="fv-line"></div>
          </div>

          <p className="fv-lead">
            Fotografija i video imaju snažnu ulogu u načinu na koji se brend
            percipira. Kroz promišljenu produkciju stvaramo vizualni sadržaj
            koji nadopunjuje identitet brenda, pojačava poruku i koristi se
            dugoročno — na webu, društvenim mrežama i u kampanjama.
          </p>

        </div>
      </section>

     
      <section className="fv-section">
        <div className="fv-container">

          <div className="fv-titleRow">
            <div className="fv-line"></div>
            <h2 className="fv-title">
              Kako gledamo na fotografiju i video
            </h2>
            <div className="fv-line"></div>
          </div>

          <p className="fv-lead">
            Fotografiju i video ne promatramo kao izolirani sadržaj,
            već kao produžetak strategije i vizualnog identiteta brenda.
          </p>

          <div className="fv-list">

            <div className="fv-list-item">
              <h3>Brend fotografija</h3>
              <p>
                Fotografije prilagođene identitetu brenda — za web,
                društvene mreže i promotivne materijale.
              </p>
            </div>

            <div className="fv-list-item">
              <h3>Produktna i ambijentalna fotografija</h3>
              <p>
                Vizualni prikaz proizvoda, prostora ili usluge u skladu
                s komunikacijskim ciljevima.
              </p>
            </div>

            <div className="fv-list-item">
              <h3>Video sadržaj</h3>
              <p>
                Kraći i duži video formati za digitalne kanale,
                kampanje i web stranice.
              </p>
            </div>

            <div className="fv-list-item">
              <h3>Priprema vizuala za različite kanale</h3>
              <p>
                Prilagodba fotografija i videa za web,
                društvene mreže i druge platforme.
              </p>
            </div>

          </div>

        </div>
      </section>

      
      <section className="fv-section fv-process">
        <div className="fv-container">

          <div className="fv-process-grid">

            <div className="fv-left">

              <div className="fv-badge">
                KAKO RADIMO <br /> NA VIZUALNOM SADRŽAJU
              </div>

              <p className="fv-leftText">
                Vizualnom sadržaju pristupamo planski i u suradnji s klijentom.
                Cilj je stvoriti materijale koji se mogu dugoročno koristiti
                i nadograđivati.
              </p>

            </div>

            <div>

              <div className="fv-rightHead">
                PROCES NAJČEŠĆE UKLJUČUJE:
              </div>

              <ul className="fv-bullets">
                <li>Razumijevanje brenda i ciljeva</li>
                <li>Planiranje snimanja</li>
                <li>Produkciju fotografije i videa</li>
                <li>Pripremu za korištenje</li>
              </ul>

              <NavLink to="/kontakt" className="fv-cta">
                KONTAKTIRAJ NAS
              </NavLink>

            </div>

          </div>

        </div>
      </section>

      
      <section className="fv-section fv-quote">
        <div className="fv-container">

          <div className="fv-titleRow fv-titleRow--quote">
            <div className="fv-line"></div>

            <h2 className="fv-quoteText">
              Kvalitetan vizualni sadržaj daje brendu dodatnu vjerodostojnost.
            </h2>

            <div className="fv-line"></div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default FotografijaVideo;