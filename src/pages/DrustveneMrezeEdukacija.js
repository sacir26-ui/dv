
import { Link } from "react-router-dom";

export default function DrustveneMrezeEdukacija() {
  return (
    <main className="sme-page">
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
    <h1 className="usluge-hero-title">Društvene mreže i edukacija</h1>
    <p className="usluge-hero-subtitle">
      Smislena prisutnost, jasna komunikacija i podrška timu za dugoročno kvalitetan nastup.
    </p>
  </div>
</section>

      
      <section className="sme-section sme-intro">
        <div className="sme-container">
          <div className="sme-center">
            <div className="sme-titleRow">
              <span className="sme-line" />
              <h2 className="sme-title">
                Jasna komunikacija i održiv pristup <br />
                društvenim mrežama.
              </h2>
              <span className="sme-line" />
            </div>

            <p className="sme-lead">
              Društvene mreže nisu samo kanal za objave, već dio šire komunikacijske strategije.
              <br />
              Kroz promišljeno vođenje i edukaciju pomažemo brendovima razumjeti kako koristiti
              društvene mreže smisleno, dosljedno i dugoročno održivo.
              <br />
              Naš cilj nije samo prisutnost, već jasna i kvalitetna komunikacija.
            </p>
          </div>
        </div>
      </section>

     
      <section className="sme-section sme-what">
        <div className="sme-container">
          <div className="sme-center">
            <div className="sme-titleRow sme-titleRow--small">
              <span className="sme-line" />
              <h3 className="sme-subTitle">Kako gledamo na društvene mreže</h3>
              <span className="sme-line" />
            </div>

            <p className="sme-subLead">
              Društvene mreže promatramo kao produžetak identiteta brenda.
              <br />
              One trebaju imati jasan smjer, prepoznatljiv ton i sadržaj koji ima svrhu.
            </p>
          </div>

          <div className="sme-list">
            <div className="sme-list-item">
              <div className="sme-list-head">Strategija za društvene mreže</div>
              <div className="sme-list-text">
                Definiranje ciljeva, publike, kanala i smjera komunikacije na društvenim mrežama.
              </div>
            </div>

            <div className="sme-list-item">
              <div className="sme-list-head">Planiranje i organizacija sadržaja</div>
              <div className="sme-list-text">
                Izrada sadržajnog plana koji je usklađen s brendom i njegovim ciljevima.
              </div>
            </div>

            <div className="sme-list-item">
              <div className="sme-list-head">Vođenje društvenih mreža</div>
              <div className="sme-list-text">
                Kreiranje, objavljivanje i prilagodba sadržaja uz fokus na jasnoću i dosljednost.
              </div>
            </div>

            <div className="sme-list-item">
              <div className="sme-list-head">Edukacija i savjetovanje</div>
              <div className="sme-list-text">
                Edukacija timova i pojedinaca za samostalno i kvalitetno vođenje društvenih mreža.
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="sme-section sme-process">
        <div className="sme-container">
          <div className="sme-process-grid">
            <div className="sme-left">
              <div className="sme-badge">
                KAKO RADIMO <br />
                NA DRUŠTVENIM <br />
                MREŽAMA
              </div>

              <p className="sme-leftText">
                Društvenim mrežama pristupamo promišljeno i bez improvizacije.
                <br />
                Ne radimo sadržaj “za algoritam”, već za ljude i brendove.
              </p>
            </div>

            <div className="sme-right">
              <div className="sme-rightHead">PROCES NAJČEŠĆE UKLJUČUJE:</div>

              <ul className="sme-bullets">
                <li>Razumijevanje brenda i publike</li>
                <li>Definiranje strategije i smjera</li>
                <li>Izrada i prilagodba sadržaja</li>
                <li>Edukacija i podrška</li>
              </ul>

              <Link className="sme-cta" to="/kontakt">
                KONTAKTIRAJ NAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="sme-section sme-quote">
        <div className="sme-container">
          <div className="sme-titleRow sme-titleRow--quote">
            <span className="sme-line" />
            <h3 className="sme-quoteText">
              Ako želite društvene mreže koje imaju <br />
              smisla i jasnu strategiju iza sebe, rado <br />
              ćemo razgovarati o vašem projektu.
            </h3>
            <span className="sme-line" />
          </div>
        </div>
      </section>
    </main>
  );
}