import { NavLink } from "react-router-dom";

export default function KakoRadimo() {
  return (
    <main className="kr-page">
      <section className="usluge-hero">
        <video
          className="usluge-hero-video"
          autoPlay
          muted
          loop
          playsInline
          src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
        />
        <div className="usluge-hero-inner">
          <h1 className="usluge-hero-title">Kako radimo</h1>
        </div>
      </section>

      <section className="kr-section">
        <div className="kr-container">
          <div className="kr-titleRow">
            <div className="kr-line"></div>
            <h2 className="kr-title">
              Jasan proces, promišljen pristup i
              <br />
              dugoročna suradnja.
            </h2>
            <div className="kr-line"></div>
          </div>

          <p className="kr-lead">
            Način na koji radimo jednako je važan kao i krajnji rezultat. Zato projekte
            gradimo kroz jasan proces, otvorenu komunikaciju i međusobno povjerenje —
            bez improvizacije i nepotrebnih koraka.
            <br />
            <br />
            Naš cilj nije samo isporuka, već suradnja koja ima smisla i vrijednost kroz
            vrijeme.
          </p>
        </div>
      </section>

      <section className="kr-section">
        <div className="kr-container kr-grid kr-grid-top">
          <div className="kr-left">
            <div className="kr-box">NAŠ NAČIN RADA</div>

            <img
              src={`${process.env.PUBLIC_URL}/DV-materijali/kakoradimo1.jpeg`}
              className="kr-img"
              alt="Naš način rada"
            />
          </div>

          <div className="kr-right">
            <div className="kr-small-line"></div>

            <p className="kr-paragraph">
              Svaki projekt započinjemo razumijevanjem šire slike. Ne nudimo rješenja
              prije nego jasno razumijemo ciljeve, kontekst i potrebe brenda.
            </p>

            <p className="kr-paragraph">
              Radimo promišljeno, strukturirano i u fazama — kako bi svaka odluka imala
              svoju svrhu.
            </p>
          </div>
        </div>
      </section>

      <section className="kr-section">
        <div className="kr-container kr-grid kr-grid-bottom">
          <div className="kr-left-text">
            <p className="kr-paragraph">
              Svaka suradnja započinje razgovorom. Upoznajemo vaš brend, ciljeve,
              publiku i izazove te zajedno definiramo smjer i očekivanja.
            </p>

            <p className="kr-paragraph">
              Na temelju prikupljenih informacija postavljamo jasnu strategiju i plan
              rada.
            </p>

            <p className="kr-paragraph">
              Razrađujemo rješenja kroz dizajn, sadržaj i tehničku izvedbu — ovisno o
              vrsti projekta.
            </p>

            <p className="kr-paragraph">
              Po potrebi, suradnja se nastavlja kroz daljnji razvoj, optimizaciju i
              prilagodbe.
            </p>

            <div className="kr-small-line"></div>

            <ul className="kr-list">
              <li>UPOZNAVANJE I RAZUMIJEVANJE</li>
              <li>STRATEGIJA I PLANIRANJE</li>
              <li>KREATIVNA I TEHNIČKA RAZRADA</li>
              <li>DUGOROČNA PODRŠKA I RAZVOJ</li>
            </ul>
          </div>

          <div className="kr-right">
            <div className="kr-box">PROCES SURADNJE</div>

            <img
              src={`${process.env.PUBLIC_URL}/DV-materijali/kakoradimo2.jpeg`}
              className="kr-img"
              alt="Proces suradnje"
            />
          </div>
        </div>
      </section>

      <section className="kr-section">
        <div className="kr-container">
          <div className="kr-titleRow">
            <div className="kr-line"></div>
            <h2 className="kr-title">Što možete očekivati od suradnje</h2>
            <div className="kr-line"></div>
          </div>

          <div className="kr-center">
            <p className="kr-paragraph">
              Suradnju temeljimo na jasnoj komunikaciji i međusobnom povjerenju. Ne
              radimo “u tišini”, već uključujemo klijente u proces tamo gdje to ima
              smisla.
            </p>

            <p className="kr-bold">
              <strong>Rad s Digital Valueom znači:</strong>
              <br />
              promišljen i strukturiran proces
              <br />
              rješenja prilagođena stvarnim potrebama
              <br />
              fokus na dugoročnu vrijednost
              <br />
              kvalitetu ispred kvantitete
            </p>

            <p className="kr-paragraph">
              Ne nudimo univerzalna rješenja, već pristup koji se prilagođava svakom
              projektu.
            </p>
          </div>
        </div>
      </section>

      <section className="kr-section">
        <div className="kr-container kr-cta">
          <div className="kr-titleRow">
            <div className="kr-line"></div>
            <h2 className="kr-title">Započnimo razgovor</h2>
            <div className="kr-line"></div>
          </div>

          <p className="kr-paragraph">
            Ako vam ovakav način rada odgovara, rado ćemo razgovarati o vašem projektu.
          </p>

          <p className="kr-paragraph">
            Razgovor je prvi korak prema kvalitetnoj i smislenoj suradnji.
          </p>

          <NavLink to="/kontakt" className="cta-btn">
            KONTAKTIRAJ NAS
          </NavLink>
        </div>
      </section>
    </main>
  );
}
