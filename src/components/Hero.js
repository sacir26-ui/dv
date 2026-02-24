export default function Hero() {
  return (
    <section className="hero d-flex align-items-center text-white mb-5">
      <video autoPlay muted loop playsInline preload="auto" className="hero-video">
        <source src="/DV-materijali/video-za-hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <p className="h1-p">Za brendove koji razmnišljaju dugoročno</p>
        <h1>Gradimo digitalnu vrijednost kroz strategiju, kreativu i web</h1>
        <a href="#" className="hero-button">KONTAKTIRAJ NAS</a>
      </div>
    </section>
  );
}