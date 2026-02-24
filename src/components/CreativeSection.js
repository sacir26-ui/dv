export default function CreativeSection() {
  return (
    <section className="creative-section" id="kako-radimo">
      <div className="container">
        <div className="row align-items-center">

          {/* LIJEVA STRANA */}
          <div className="col-lg-6 position-relative">
            <div className="purple-box">
              <h2>KREATIVA I<br />STRATEGIJA</h2>
            </div>

            <div className="video-box">
              <video autoPlay muted loop playsInline>
                <source src="/DV-materijali/Real-Estate-Reel.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* DESNA STRANA */}
          <div className="col-lg-6 content-right">
            <p className="lead-text">
              Svaki kvalitetan digitalni projekt započinje jasnom strategijom i snažnim kreativnim smjerom. Kroz branding, sadržaj i vizualnu komunikaciju pomažemo brendovima da se pozicioniraju jasno,dosljedno i dugoročno održivo.
            </p>

            <div className="line"></div>

            <ul className="service-list">
              <li>BRANDING I VIZUALNI IDENTITET <span>+</span></li>
              <li>KREATIVNI KONCEPTI I SADRŽAJ <span>+</span></li>
              <li>DRUŠTVENE MREŽE I EDUKACIJA <span>+</span></li>
              <li>FOTOGRAFIJA & VIDEO <span>+</span></li>
              <li>COPYWRITING I STORYTELLING <span>+</span></li>
            </ul>

            <a href="#" className="cta-btn">KONTAKTIRAJ NAS</a>
          </div>

        </div>
      </div>
    </section>
  );
}