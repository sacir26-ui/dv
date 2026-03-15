import { NavLink } from "react-router-dom";
import "./Projekti.css";

export default function Projekti() {

  const projekti = [
    {
      image: "/DV-materijali/wd40.png"
    },
    {
      image: "/DV-materijali/ebike.png"
    },
    {
      image: "/DV-materijali/lice-srece.png"
    },
    {
      image: "/DV-materijali/pali-colors.png"
    },
    {
      image: "/DV-materijali/walls-wit-souls.png"
    }
  ];

  return (
    <div className="projekti-page">

    

      <section className="projekti-hero">

        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/DV-materijali/video-za-hero.mp4" type="video/mp4" />
        </video>

        <div className="projekti-hero-inner">

          <h1 className="projekti-hero-title">
            Projekti
          </h1>

          <p className="projekti-hero-subtitle">
            Odabrani projekti koji pokazuju naš pristup, ne samo rezultat.
          </p>

        </div>

      </section>




      <section className="projekti-section">

        <div className="projekti-container">

          <div className="projekti-titleRow">

            <div className="projekti-line"></div>

            <h2 className="projekti-title">
              Kroz različite projekte radili smo s brendovima u različitim fazama
              razvoja — od postavljanja temelja i strategije do dugoročnog
              kreativnog i digitalnog rasta.
            </h2>

            <div className="projekti-line"></div>

          </div>


    

          <div className="projekti-grid">

            {projekti.map((projekt, index) => (
              <article
                className={`projekti-card ${index === 4 ? "projekti-card-last" : ""}`}
                key={index}
              >

                <img
                  src={projekt.image}
                  alt="Projekt"
                  className="projekti-card-image"
                />

              </article>
            ))}

          </div>

        </div>

      </section>


    

      <section className="projekti-section projekti-closing-section">

        <div className="projekti-container">

          <div className="projekti-titleRow projekti-titleRow-bottom">

            <div className="projekti-line"></div>
            <div className="projekti-line"></div>

          </div>

          <div className="projekti-closing-text">

            <p>
              Prikazani radovi dio su profesionalnog iskustva i suradnji koje
              odražavaju način na koji Digital Value pristupa kreativnim i
              digitalnim rješenjima.
            </p>

            <p>
              Ako želite vidjeti kako ovakav pristup može izgledati na vašem
              projektu, rado ćemo razgovarati.
              <br />
              Svaka suradnja započinje razgovorom.
            </p>

          </div>


          <div className="projekti-cta">

            <NavLink to="/kontakt" className="projekti-btn">
              KONTAKTIRAJ NAS
            </NavLink>

          </div>

        </div>

      </section>

    </div>
  );
}