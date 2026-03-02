

export default function KreativaSadrzaj() {
  return (
    <main className="kks-page">
    
     <section className="hero kks-hero">
  <video className="hero-video" src="/DV-materijali/video-za-hero.mp4" autoPlay muted loop playsInline />
  <div className="hero-content">
    <h1 className="kks-hero-title">Kreativni koncepti i sadržaj</h1>
    <p className="kks-hero-subtitle">Sadržaj koji ima smisla, gradi povjerenje i dosljedno prenosi vrijednost brenda.</p>
    <a className="hero-button" href="/kontakt">KONTAKTIRAJ NAS</a>
  </div>
</section>

      <section className="kks-section">
        <div className="kks-container">
          <div className="kks-titleRow">
            <span className="kks-line"></span>
            <h2 className="kks-title">Sadržaj koji povezuje strategiju i emociju.</h2>
            <span className="kks-line"></span>
          </div>

          <p className="kks-text">
            Kreativa nije “samo lijepo” — to je način na koji publika razumije brend.
            Kroz koncept, ton komunikacije i sadržajne formate stvaramo poruke koje su jasne,
            prepoznatljive i prilagođene kanalima.
          </p>
        </div>
      </section>

  
      <section className="kks-section kks-section-tight">
        <div className="kks-container">
          <div className="kks-items">
            <div className="kks-item">
              <h3>Kreativni smjer</h3>
              <p>Definiranje vizualnog i sadržajnog smjera, reference, moodboard i ton komunikacije.</p>
            </div>

            <div className="kks-item">
              <h3>Koncepti kampanja</h3>
              <p>Ideje i struktura kampanja, poruke, hookovi, serije objava i sadržajni plan.</p>
            </div>

            <div className="kks-item">
              <h3>Copywriting & storytelling</h3>
              <p>Tekstovi koji vode korisnika, grade povjerenje i jasno komuniciraju vrijednost.</p>
            </div>

            <div className="kks-item">
              <h3>Content formatiranje</h3>
              <p>Prilagodba formata za kanale (IG, web, newsletter), konzistentnost i ritam objava.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="kks-section">
        <div className="kks-container kks-processGrid">
          <div className="kks-processBadgeWrap">
            <div className="kks-processBadge">KAKO RADIMO NA SADRŽAJU</div>
          </div>

          <div className="kks-processContent">
            <h3 className="kks-processTitle">Proces najčešće uključuje:</h3>
            <ul className="kks-processList">
              <li>Upoznavanje brenda i ciljeva</li>
              <li>Definiranje poruka i tona komunikacije</li>
              <li>Koncept i struktura sadržaja</li>
              <li>Izrada tekstova i prijedloga objava</li>
              <li>Finalizacija i priprema za kanale</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}