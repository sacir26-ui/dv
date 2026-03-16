import { Link } from "react-router-dom";

export default function KreativaSadrzaj() {
  return (
    <main className="kks-page">
    
     <section className="hero kks-hero">
  <video className="hero-video" src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`} autoPlay muted loop playsInline />
  <div className="hero-content">
    <h1 className="kks-hero-title">Kreativni koncepti i sadržaj</h1>
    <p className="kks-hero-subtitle">Sadržaj koji ima smisla, gradi povjerenje i dosljedno prenosi vrijednost brenda.</p>
    
  </div>
</section>

      
      <section className="kks-section kks-intro">
        <div className="kks-container">
          <div className="kks-center-block">
            <div className="kks-line-title">
              <span className="kks-line" />
              <h2 className="kks-line-heading">
                Ideje koje povezuju poruku, kanal i publiku.
              </h2>
              <span className="kks-line" />
            </div>

            <p className="kks-lead">
              Dobar sadržaj ne nastaje slučajno.
              <br />
              Iza njega stoji jasna ideja, razumijevanje brenda i promišljen
              koncept koji povezuje poruku s pravim kanalom i publikom.
              <br />
              Kroz kreativne koncepte i sadržaj pomažemo brendovima komunicirati
              dosljedno, smisleno i prepoznatljivo — bez improvizacije.
            </p>
          </div>
        </div>
      </section>

      
      <section className="kks-section kks-what">
        <div className="kks-container">
          <div className="kks-center-block">
            <h3 className="kks-title">
              Što podrazumijevamo pod <br />
              kreativnim konceptom
            </h3>
            <p className="kks-subtitle">
              Kreativni koncept je temelj svake kvalitetne komunikacije.
              <br />
              On definira kako brend govori, što govori i zašto to radi.
            </p>
          </div>

          <div className="kks-list">
            <div className="kks-list-item">
              <div className="kks-list-head">Razrada kreativnog koncepta</div>
              <div className="kks-list-text">
                Definiranje glavne ideje, poruke i smjera komunikacije koji se
                može dugoročno razvijati.
              </div>
            </div>

            <div className="kks-list-item">
              <div className="kks-list-head">Planiranje sadržaja</div>
              <div className="kks-list-text">
                Osmišljavanje sadržaja prilagođenog ciljevima, publici i kanalima
                — s jasnom strukturom i logikom.
              </div>
            </div>

            <div className="kks-list-item">
              <div className="kks-list-head">Izrada sadržaja</div>
              <div className="kks-list-text">
                Razrada konkretnih sadržaja — tekstualnih, vizualnih ili
                kombiniranih — u skladu s definiranim konceptom.
              </div>
            </div>

            <div className="kks-list-item">
              <div className="kks-list-head">Prilagodba sadržaja kanalima</div>
              <div className="kks-list-text">
                Prilagodba poruka i formata za web, društvene mreže, kampanje ili
                druge komunikacijske kanale.
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="kks-section kks-process">
        <div className="kks-container">
          <div className="kks-process-grid">
           
            <div className="kks-process-left">
              <div className="kks-badge">
                KAKO RADIMO <br />
                NA SADRŽAJU
              </div>

              <p className="kks-process-text">
                Sadržaju pristupamo strateški i promišljeno.
                <br />
                Ne stvaramo sadržaj “reda radi”, već s jasnom svrhom i ulogom u
                komunikaciji brenda.
              </p>
            </div>

            
            <div className="kks-process-right">
              <div className="kks-process-head">PROCES NAJČEŠĆE UKLJUČUJE:</div>

              <ul className="kks-bullets">
                <li>Razumijevanje brenda i ciljeva</li>
                <li>Definiranje kreativnog smjera</li>
                <li>Razrada i produkcija sadržaja</li>
                <li>Priprema za daljnju primjenu</li>
              </ul>

             
              <Link className="kks-cta" to="/kontakt">
                KONTAKTIRAJ NAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="kks-section kks-quote">
        <div className="kks-container">
          <div className="kks-line-title kks-line-title--quote">
            <span className="kks-line" />
            <h3 className="kks-quote-text">
              Jasan koncept olakšava sve daljnje <br />
              marketinške i digitalne aktivnosti.
            </h3>
            <span className="kks-line" />
          </div>
        </div>
      </section>

      
    </main>
  );
}