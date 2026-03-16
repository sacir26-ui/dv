import { NavLink } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero d-flex align-items-center text-white mb-5">
      <video autoPlay muted loop playsInline preload="auto" className="hero-video">
        <source
          src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
          type="video/mp4"
/>
      </video>

      <div className="hero-content">
        <p className="h1-p">Za brendove koji razmišljaju dugoročno</p>
        <h1>Gradimo digitalnu vrijednost kroz strategiju, kreativu i web</h1>
         <NavLink className="hero-button" to="/kontakt">
          KONTAKTIRAJ NAS
        </NavLink>
      </div>
    </section>
  );
}