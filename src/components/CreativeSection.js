import { NavLink } from "react-router-dom";
export default function CreativeSection() {
  return (
    <section className="creative-section" id="kako-radimo">
      <div className="container">
        <div className="row align-items-center">

          
          <div className="col-lg-6 position-relative">
            <div className="purple-box">
              <h2>KREATIVA I<br />STRATEGIJA</h2>
            </div>

            <div className="video-box">
              <video autoPlay muted loop playsInline>
                <source
              src={`${process.env.PUBLIC_URL}/DV-materijali/Real-estate-reel.mp4`}
              type="video/mp4"
/>
              </video>
            </div>
          </div>

         
          <div className="col-lg-6 content-right">
            <p className="lead-text">
              Svaki kvalitetan digitalni projekt započinje jasnom strategijom i snažnim kreativnim smjerom. Kroz branding, sadržaj i vizualnu komunikaciju pomažemo brendovima da se pozicioniraju jasno,dosljedno i dugoročno održivo.
            </p>

            <div className="line"></div>

            <ul className="service-list">
              
              <li>
                <NavLink to="/usluge/branding" className="service-row-link">
                  <span className="service-text">BRANDING I VIZUALNI IDENTITET</span>
                  <span className="service-plus">+</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/usluge/kreativni-koncepti" className="service-row-link">
                  <span className="service-text">KREATIVNI KONCEPTI I SADRŽAJ</span>
                  <span className="service-plus">+</span>
                </NavLink>
              </li>
              <NavLink to="/usluge/drustvene-mreze-edukacija" className="service-row-link">
                <span className="service-text">DRUŠTVENE MREŽE I EDUKACIJA</span>
                <span className="service-plus">+</span>
              </NavLink>

              <NavLink to="/usluge/fotografija-video" className="service-row-link">
                  <span className="service-text">FOTOGRAFIJA & VIDEO</span>
                  <span className="service-plus">+</span>
                </NavLink>

              <NavLink to="/usluge/copywriting-storytelling" className="service-row-link">
                  <span className="service-text">COPYWRITING I STORYTELLING</span>
                  <span className="service-plus">+</span>
                </NavLink>
            </ul>

           <NavLink className="cta-btn" to="/kontakt">
            KONTAKTIRAJ NAS
          </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
}