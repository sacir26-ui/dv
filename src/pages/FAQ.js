 import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "Koliko traje izrada web stranice?",
    answer:
      "Vrijeme izrade ovisi o kompleksnosti projekta, ali prosječno traje od 2 do 6 tjedana.",
  },
  {
    question: "Radite li samo dizajn ili i razvoj?",
    answer:
      "Radimo kompletan proces — od strategije i dizajna do tehničke izvedbe.",
  },
  {
    question: "Mogu li kasnije sam uređivati sadržaj?",
    answer:
      "Da, web rješenja gradimo tako da ih klijent može jednostavno održavati.",
  },
  {
    question: "Koliko koštaju vaše usluge?",
    answer:
      "Cijena ovisi o opsegu projekta. Nakon kratkog razgovora šaljemo konkretnu ponudu.",
  },
  {
    question: "Radite li s malim i velikim klijentima?",
    answer:
      "Radimo s klijentima svih veličina — od malih brendova do većih tvrtki.",
  },
  {
    question: "Što sve uključuje digitalna strategija?",
    answer:
      "Uključuje analizu tržišta, ciljnu publiku i plan sadržaja.",
  },
  {
    question: "Koliko je važan SEO?",
    answer:
      "SEO je ključan za dugoročnu vidljivost i promet.",
  },
  {
    question: "Nudite li održavanje web stranica?",
    answer:
      "Da, nudimo održavanje i optimizaciju performansi.",
  },
  {
    question: "Radite li društvene mreže?",
    answer:
      "Da, strategiju, sadržaj i vizuale.",
  },
  {
    question: "Mogu li naručiti samo jednu uslugu?",
    answer:
      "Naravno, usluge su modularne.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      
      <section className="usluge-hero faq-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="usluge-hero-video"
        >
          <source
            src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
            type="video/mp4"
          />
        </video>
      </section>

      
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Često postavljena pitanja</h2>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggle(index)}
              >
                <div className="faq-question">
                  {item.question}
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}